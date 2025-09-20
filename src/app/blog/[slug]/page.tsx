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
      description: 'O post que você está procurando não foi encontrado.',
    };
  }

  const { title, seo_title, content, image_alt, featured_image, publishedAt, updatedAt, seo_description = '' } = post.attributes;
  const featuredImage = featured_image?.data;
  const imageUrl = getImageUrl(featuredImage);

  return {
    title: seo_title || title,
    description: seo_description || content.substring(0, 160).replace(/[#*]/g, '') + '...',
    keywords: [title, 'blog climatização', 'VRF', 'Chiller', 'PMOC'],
    openGraph: {
      title: seo_title || title,
      description: seo_description || content.substring(0, 160).replace(/[#*]/g, '') + '...',
      url: `https://climatbh-site-frontend.onrender.com/blog/${slug}`,
      siteName: 'ClimatBH',
      images: [
        {
          url: imageUrl,
          width: featuredImage?.attributes?.width || 800,
          height: featuredImage?.attributes?.height || 600,
          alt: featuredImage?.attributes?.alternativeText || image_alt || title,
        },
      ],
      locale: 'pt_BR',
      type: 'article',
      publishedTime: publishedAt,
      modifiedTime: updatedAt,
    },
    twitter: {
      card: 'summary_large_image',
      title: seo_title || title,
      description: seo_description || content.substring(0, 160).replace(/[#*]/g, '') + '...',
      images: [imageUrl],
    },
  };
}

export async function generateStaticParams() {
  try {
    const posts = await getPosts();
    return posts.map((post: Post) => ({
      slug: post.attributes.slug,
    }));
  } catch (error) {
    console.error('Erro ao gerar static params para posts:', error);
    return [];
  }
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { title, content, publishedAt, image_alt, featured_image, seo_description = '' } = post.attributes;

  // Buscar todos os posts para posts relacionados e navegação
  const allPosts = await getPosts();
  const currentIndex = allPosts.findIndex(p => p.id === post.id);
  const previousPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  const featuredImage = featured_image?.data;
  const postImageUrl = getImageUrl(featuredImage);
  const postUrl = `https://climatbh.com.br/blog/${slug}`;

  return (
    <>
      <ArticleStructuredData
        post={post}
        imageUrl={postImageUrl}
      />
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumb
          items={[
            { label: 'Blog', href: '/blog' },
            { label: title }
          ]}
        />

        <article>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {featuredImage && (
            <div className="relative w-full h-80 md:h-96">
              <Image
                src={postImageUrl}
                alt={featuredImage.attributes?.alternativeText || image_alt || title}
                fill
                className="object-cover rounded-t-lg"
                sizes="(max-width: 768px) 100vw, 800px"
                priority
              />
            </div>
          )}

          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {title}
            </h1>

            <div className="flex items-center text-gray-600 text-sm mb-8 pb-4 border-b border-gray-200">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Publicado em: <FormattedDate dateString={post.attributes.publishedAt} options={{ year: 'numeric', month: 'long', day: 'numeric' }} />
            </div>

            <MarkdownRenderer content={content} />
          </div>

          <ClientSocialShare // Usando o novo componente wrapper
            title={title}
            url={postUrl}
            description={seo_description}
          />
        </div>
        </article>

        <PostNavigation
          previousPost={previousPost}
          nextPost={nextPost}
        />

        <RelatedPosts
          posts={allPosts}
          currentPostId={post.id}
          maxPosts={3}
        />

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
        </div>
      </div>
    </>
  );
}

