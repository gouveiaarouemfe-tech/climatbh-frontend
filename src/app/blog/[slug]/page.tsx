import { notFound } from 'next/navigation';
import type { Metadata, ResolvingMetadata } from 'next';

import { getPostBySlug, getPosts, getImageUrl, Post } from '@/lib/strapi';
import PostClientPage from './PostClientPage';

export const dynamic = "force-dynamic";
export const revalidate = 60; // Revalidar a cada 60 segundos

export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = params;
  const post = await getPostBySlug(slug);

  if (!post || !post.attributes) {
    return {
      title: 'Post não encontrado',
      description: 'O post solicitado não foi encontrado.',
    };
  }

  const featuredImage = post.attributes.featured_image?.data?.[0];
  const finalImageUrlForMetadata = getImageUrl(featuredImage);

  return {
    title: post.attributes.seo_title || post.attributes.title,
    description: post.attributes.seo_description || post.attributes.content.substring(0, 160).replace(/[#*]/g, '') + '...',
    keywords: [post.attributes.title, 'blog climatização', 'VRF', 'Chiller', 'PMOC'],
    openGraph: {
      title: post.attributes.seo_title || post.attributes.title,
      description: post.attributes.seo_description || post.attributes.content.substring(0, 160).replace(/[#*]/g, '') + '...',
      images: [
        {
          url: finalImageUrlForMetadata,
          alt: featuredImage?.attributes?.alternativeText || post.attributes.image_alt || post.attributes.title,
        },
      ],
      type: 'article',
      publishedTime: post.attributes.publishedAt,
      modifiedTime: post.attributes.updatedAt,
      url: `https://climatbh.com.br/blog/${post.attributes.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.attributes.seo_title || post.attributes.title,
      description: post.attributes.seo_description || post.attributes.content.substring(0, 160  ).replace(/[#*]/g, '') + '...',
      images: [
        {
          url: finalImageUrlForMetadata,
          alt: featuredImage?.attributes?.alternativeText || post.attributes.image_alt || post.attributes.title,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  const posts = await getPosts();
  console.log("generateStaticParams - Posts recebidos:", JSON.stringify(posts, null, 2));

  // Filtra posts que não possuem slug válido para evitar erros de build
  const validPosts = posts.filter(post => post.attributes && post.attributes.slug);

  return validPosts.map((post: Post) => ({
    slug: post.attributes.slug,
  }));
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = await getPostBySlug(slug);

  if (!post || !post.attributes) {
    notFound();
  }

  const allPosts = await getPosts();

  return (
    <PostClientPage post={post} allPosts={allPosts} slug={slug} />
  );
}


