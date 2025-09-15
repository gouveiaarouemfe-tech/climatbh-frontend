
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Markdown from 'react-markdown';

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
  };
}

async function getPostBySlug(slug: string): Promise<{ data: Post[] }> {
  const url = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/posts?filters[slug][$eq]=${slug}`;
  const token = process.env.NEXT_PUBLIC_API_TOKEN;

  if (!token) {
    console.error('Strapi API token não configurado.');
    return { data: [] };
  }

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      next: { revalidate: 60 }, // Revalidar a cada 60 segundos
    });

    if (!res.ok) {
      console.error(`Erro ao buscar post: ${res.status} ${res.statusText}`);
      return { data: [] };
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar post:', error);
    return { data: [] };
  }
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const { data: posts } = await getPostBySlug(slug);

  if (!posts || posts.length === 0) {
    notFound();
  }

  const post = posts[0];

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-4xl font-bold text-center mb-6">{post.attributes.title}</h1>
      <p className="text-gray-600 text-center mb-8">
        Publicado em: {new Date(post.attributes.publishedAt).toLocaleDateString('pt-BR')}
      </p>

      <div className="relative w-full h-64 mb-8 rounded-lg overflow-hidden shadow-md bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
        <h2 className="text-white text-2xl font-bold text-center px-4">{post.attributes.title}</h2>
      </div>

      <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
        <Markdown>{post.attributes.content}</Markdown>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const url = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/posts`;
  const token = process.env.NEXT_PUBLIC_API_TOKEN;

  if (!token || !process.env.NEXT_PUBLIC_STRAPI_API_URL) {
    console.warn('Strapi API token ou URL não configurado para generateStaticParams.');
    return [];
  }

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    
    if (!res.ok) {
      console.warn(`Erro ao buscar posts para generateStaticParams: ${res.status}`);
      return [];
    }
    
    const { data: posts } = await res.json();

    if (!posts || !Array.isArray(posts)) {
      console.warn('Posts não encontrados ou formato inválido');
      return [];
    }

    return posts.map((post: Post) => ({
      slug: post.attributes?.slug || '',
    })).filter(param => param.slug);
  } catch (error) {
    console.warn('Erro ao gerar static params para posts:', error);
    return [];
  }
}


