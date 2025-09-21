import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Metadata } from 'next';

import { getPostBySlug, getPosts, getImageUrl, Post } from '@/lib/strapi';
import FormattedDate from '@/components/common/FormattedDate';
import Breadcrumb from '@/components/blog/Breadcrumb';
import ClientSocialShare from '@/components/blog/ClientSocialShare';
import RelatedPosts from '@/components/blog/RelatedPosts';
import PostNavigation from '@/components/blog/PostNavigation';
import ArticleStructuredData from '@/components/seo/ArticleStructuredData';
import MarkdownRenderer from '@/components/common/MarkdownRenderer';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post não encontrado',
      description: 'O post solicitado não foi encontrado.',
    };
  }

  const featuredImage = post.featured_image?.[0];
  const imageUrl = getImageUrl(featuredImage);

  return {
    title: post.seo_title || post.title,
    description: post.seo_description || post.content.substring(0, 160).replace(/[#*]/g, '') + '...', // Limita a descrição para SEO
    openGraph: {
      title: post.seo_title || post.title,
      description: post.seo_description || post.content.substring(0, 160).replace(/[#*]/g, '') + '...', // Limita a descrição para SEO
      images: [
        {
          url: imageUrl,
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
      description: post.seo_description || post.content.substring(0, 160 ).replace(/[#*]/g, '') + '...', // Limita a descrição para SEO
      images: [
        {
          url: imageUrl,
          alt: featuredImage?.attributes?.alternativeText || post.image_alt || post.title,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post: Post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = await getPosts();

  const { title, content, publishedAt, image_alt, featured_image, seo_description = '' } = post;

  const featuredImage = featured_image?.[0];
  const imageUrl = getImageUrl(featuredImage);

  return (
    <>
      <ArticleStructuredData post={post} />
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb title={title} />

          <article className="bg-white rounded-lg shadow-md p-6 lg:p-8 mb-12">
            <h1 className="text-4xl font-bold text-blue-800 mb-4">{title}</h1>
            <div className="text-gray-600 text-sm mb-6">
              Publicado em: <FormattedDate dateString={publishedAt} />
            </div>

            {imageUrl && (
              <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={imageUrl}
                  alt={featuredImage?.attributes?.alternativeText || image_alt || title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            <MarkdownRenderer content={content} />

            <div className="mt-8 pt-8 border-t border-gray-200 flex justify-between items-center">
              <ClientSocialShare title={title} slug={slug} url={`https://climatbh.com.br/blog/${slug}`} />
            </div>
          </article>

          <PostNavigation
            previousPost={allPosts.find(p => p.id < post.id) || null}
            nextPost={allPosts.find(p => p.id > post.id) || null}
          />

          <RelatedPosts posts={allPosts} currentPostId={post.id} />
        </div>
      </div>
    </>
  );
}
