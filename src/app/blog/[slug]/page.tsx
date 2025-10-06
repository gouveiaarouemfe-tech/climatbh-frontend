import { notFound } from 'next/navigation';
import type { Metadata, ResolvingMetadata } from 'next';

import { getPostBySlug, getPosts, getImageUrl, Post, StrapiImage } from '@/lib/strapi';
import { mockPosts } from '@/lib/mock-posts';
import PostClientPage from './PostClientPage';

export const dynamic = "force-dynamic";
export const revalidate = 60; // Revalidar a cada 60 segundos

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
  // Gerar parâmetros estáticos para os posts mocados
  return mockPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  
  // Primeiro, tentar encontrar o post nos posts mocados
  let post: Post | null = mockPosts.find(p => p.slug === slug) || null;
  
  // Se não encontrar nos mocados, tentar no Strapi
  if (!post) {
    post = await getPostBySlug(slug);
  }

  if (!post) {
    notFound();
  }

  // Combinar posts mocados com posts do Strapi
  const strapiPosts = await getPosts();
  const allPosts = [...mockPosts, ...strapiPosts.filter(strapiPost => 
    !mockPosts.some(mockPost => mockPost.slug === strapiPost.slug)
  )];

  return (
    <PostClientPage post={post} allPosts={allPosts} slug={slug} />
  );
}
