
import { notFound } from 'next/navigation';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { Metadata } from 'next';

interface Post {
  id: number;
  attributes: {
    title: string;
    slug: string;
    content: string;
    seo_description?: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    featured_image?: {
      data: Array<{
        id: number;
        attributes: {
          url: string;
          alternativeText?: string;
          width: number;
          height: number;
        };
      }>;
    };
  };
}

async function getPost(slug: string) {
  const strapiApiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;
  const strapiApiToken = process.env.NEXT_PUBLIC_API_TOKEN;

  const url = `${strapiApiUrl}/api/posts?filters[slug][$eq]=${slug}&populate=featured_image`;

  if (!strapiApiToken || !strapiApiUrl) {
    console.error('Configuração do Strapi não encontrada (URL ou Token)');
    return { data: [] };
  }

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${strapiApiToken}`,
        'Content-Type': 'application/json',
      },
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error(`Erro ao buscar post: ${res.status} ${res.statusText}`);
      const errorText = await res.text();
      console.error('Detalhes do erro:', errorText);
      return { data: [] };
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar post:', error);
    return { data: [] };
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { data: posts } = await getPost(params.slug);
  const post = posts?.[0];

  if (!post) {
    return {
      title: 'Post não encontrado',
      description: 'O post que você está procurando não foi encontrado.',
    };
  }

  const featuredImage = post.attributes.featured_image?.data?.[0];
  const imageUrl = featuredImage ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${featuredImage.attributes.url}` : 'https://climatbh-site-frontend.onrender.com/images/logo-climatbh.png';

  return {
    title: post.attributes.title,
    description: post.attributes.seo_description || post.attributes.content.substring(0, 160).replace(/[#*]/g, '') + '...', // Limita a descrição para SEO
    keywords: [post.attributes.title, 'blog climatização', 'VRF', 'Chiller', 'PMOC'], // Adicione mais palavras-chave relevantes
    openGraph: {
      title: post.attributes.title,
      description: post.attributes.seo_description || post.attributes.content.substring(0, 160).replace(/[#*]/g, '') + '...', 
      url: `https://climatbh-site-frontend.onrender.com/blog/${post.attributes.slug}`,
      siteName: 'ClimatBH',
      images: [
        {
          url: imageUrl,
          width: featuredImage?.attributes?.width || 800,
          height: featuredImage?.attributes?.height || 600,
          alt: featuredImage?.attributes?.alternativeText || post.attributes.title,
        },
      ],
      locale: 'pt_BR',
      type: 'article',
      publishedTime: post.attributes.publishedAt,
      modifiedTime: post.attributes.updatedAt,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.attributes.title,
      description: post.attributes.seo_description || post.attributes.content.substring(0, 160).replace(/[#*]/g, '') + '...', 
      images: [imageUrl],
    },
  };
}

export async function generateStaticParams() {
  const strapiApiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;
  const strapiApiToken = process.env.NEXT_PUBLIC_API_TOKEN;

  if (!strapiApiToken || !strapiApiUrl) {
    console.error('Configuração do Strapi não encontrada para generateStaticParams');
    return [];
  }

  try {
    const res = await fetch(`${strapiApiUrl}/api/posts`, {
      headers: {
        Authorization: `Bearer ${strapiApiToken}`,
      },
      next: { revalidate: 60 },
    });
    const posts = await res.json();

    if (!posts || !Array.isArray(posts.data)) {
      console.warn('Nenhum dado de post retornado para generateStaticParams');
      return [];
    }

    return posts.data.map((post: Post) => ({
      slug: post.attributes.slug,
    }));
  } catch (error) {
    console.error('Erro ao gerar static params para posts:', error);
    return [];
  }
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const { data: posts } = await getPost(params.slug);
  const post = posts?.[0];

  if (!post) {
    notFound();
  }

  const featuredImage = post.attributes.featured_image?.data?.[0];

  return (
    <article className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.attributes.title}</h1>
      <p className="text-gray-600 text-sm mb-6">
        Publicado em: {new Date(post.attributes.publishedAt).toLocaleDateString('pt-BR')}
      </p>

      {featuredImage?.attributes?.url && (
        <div className="relative w-full h-80 mb-8 rounded-lg overflow-hidden shadow-md">
          <Image
            src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${featuredImage.attributes.url}`}
            alt={featuredImage.attributes.alternativeText || post.attributes.title}
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-lg"
          />
        </div>
      )}

      <div className="prose prose-blue max-w-none text-gray-800 leading-relaxed">
        <ReactMarkdown>{post.attributes.content}</ReactMarkdown>
      </div>
    </article>
  );
}


