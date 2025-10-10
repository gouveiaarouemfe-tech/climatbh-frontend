import { notFound } from 'next/navigation';
import type { Metadata, ResolvingMetadata } from 'next';

import { getPostBySlug, getPosts, getImageUrl, Post, StrapiImage } from '@/lib/strapi';
import PostClientPage from './PostClientPage';

// Usar ISR para melhor performance e SEO
export const revalidate = 300; // Revalidar a cada 5 minutos

export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post não encontrado',
      description: 'O post solicitado não foi encontrado.',
    };
  }

  // Correção: featured_image já é um array de StrapiImage, não precisa de .data
  const featuredImage: StrapiImage | undefined = post.featured_image?.[0];
  const finalImageUrlForMetadata = getImageUrl(featuredImage);

  return {
    title: post.seo_title || post.title,
    description: post.seo_description || post.content.substring(0, 160).replace(/[#*]/g, '') + '...',
    keywords: [post.title, 'blog climatização', 'VRF', 'Chiller', 'PMOC'],
    openGraph: {
      title: post.seo_title || post.title,
      description: post.seo_description || post.content.substring(0, 160).replace(/[#*]/g, '') + '...',
      images: [
        {
          url: finalImageUrlForMetadata,
          alt: featuredImage?.attributes?.alternativeText || post.image_alt || post.title,
        },
      ],
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      url: `https://climatbh.com.br/blog/${post.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seo_title || post.title,
      description: post.seo_description || post.content.substring(0, 160  ).replace(/[#*]/g, '') + '...',
      images: [
        {
          url: finalImageUrlForMetadata,
          alt: featuredImage?.attributes?.alternativeText || post.image_alt || post.title,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  // Durante o build, não fazemos chamadas de API para evitar erros de conexão
  // As páginas serão geradas dinamicamente quando acessadas
  return [];
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  
  try {
    // Buscar post e todos os posts em paralelo para otimizar performance
    const [post, allPosts] = await Promise.all([
      getPostBySlug(slug),
      getPosts()
    ]);

    if (!post) {
      notFound();
    }

    return (
      <PostClientPage post={post} allPosts={allPosts} slug={slug} />
    );
  } catch (error) {
    console.error('Erro ao carregar post:', error);
    notFound();
  }
}
