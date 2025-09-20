import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { Metadata } from 'next';

// Interface atualizada baseada na estrutura real dos dados
interface Post {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  content: string;
  seo_title?: string;
  seo_description?: string;
  image_alt?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  featured_image?: Array<{
    id: number;
    documentId: string;
    name: string;
    alternativeText?: string;
    url: string;
    width: number;
    height: number;
  }>;
}

async function getPost(slug: string) {
  const strapiApiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;
  const strapiApiToken = process.env.NEXT_PUBLIC_API_TOKEN;

  const url = `${strapiApiUrl}/api/posts?filters[slug][$eq]=${slug}&populate=*`;

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

  const featuredImage = post.featured_image && post.featured_image.length > 0 ? post.featured_image[0] : null;
  const imageUrl = featuredImage ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${featuredImage.url}` : 'https://climatbh-site-frontend.onrender.com/images/logo-climatbh.png';

  return {
    title: post.seo_title || post.title,
    description: post.seo_description || post.content.substring(0, 160).replace(/[#*]/g, '') + '...',
    keywords: [post.title, 'blog climatização', 'VRF', 'Chiller', 'PMOC'],
    openGraph: {
      title: post.seo_title || post.title,
      description: post.seo_description || post.content.substring(0, 160).replace(/[#*]/g, '') + '...', 
      url: `https://climatbh-site-frontend.onrender.com/blog/${post.slug}`,
      siteName: 'ClimatBH',
      images: [
        {
          url: imageUrl,
          width: featuredImage?.width || 800,
          height: featuredImage?.height || 600,
          alt: featuredImage?.alternativeText || post.image_alt || post.title,
        },
      ],
      locale: 'pt_BR',
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seo_title || post.title,
      description: post.seo_description || post.content.substring(0, 160).replace(/[#*]/g, '') + '...', 
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
      slug: post.slug,
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

  const featuredImage = post.featured_image && post.featured_image.length > 0 ? post.featured_image[0] : null;

  return (
    <div className="min-h-screen bg-gray-50">
      <article className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {featuredImage?.url && (
            <div className="relative w-full h-80 md:h-96">
              <Image
                src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${featuredImage.url}`}
                alt={featuredImage.alternativeText || post.image_alt || post.title}
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-t-lg"
              />
            </div>
          )}
          
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center text-gray-600 text-sm mb-8 pb-4 border-b border-gray-200">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Publicado em: {new Date(post.publishedAt).toLocaleDateString('pt-BR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>

            <div className="prose prose-lg prose-blue max-w-none text-gray-800 leading-relaxed">
              <ReactMarkdown
                components={{
                  h1: ({ children }) => <h1 className="text-2xl font-bold mt-8 mb-4 text-blue-800">{children}</h1>,
                  h2: ({ children }) => <h2 className="text-xl font-semibold mt-6 mb-3 text-blue-700">{children}</h2>,
                  h3: ({ children }) => <h3 className="text-lg font-medium mt-4 mb-2 text-blue-600">{children}</h3>,
                  p: ({ children }) => <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>,
                  ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>,
                  ol: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>,
                  li: ({ children }) => <li className="text-gray-700">{children}</li>,
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-blue-500 pl-4 py-2 my-4 bg-blue-50 italic text-gray-700">
                      {children}
                    </blockquote>
                  ),
                  strong: ({ children }) => <strong className="font-semibold text-gray-900">{children}</strong>,
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Voltar ao Blog
          </Link>
        </div>
      </article>
    </div>
  );
}
