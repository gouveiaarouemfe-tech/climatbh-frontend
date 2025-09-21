import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import type { Metadata, ResolvingMetadata } from 'next';

import { getPostBySlug, getPosts, getImageUrl, Post } from '@/lib/strapi';
import FormattedDate from '@/components/common/FormattedDate';
import Breadcrumb from '@/components/blog/Breadcrumb';
import ClientSocialShare from '@/components/blog/ClientSocialShare';
import RelatedPosts from '@/components/blog/RelatedPosts';
import PostNavigation from '@/components/blog/PostNavigation';
import ArticleStructuredData from '@/components/seo/ArticleStructuredData';
import MarkdownRenderer from '@/components/common/MarkdownRenderer';

export async function generateMetadata(
  { params }: { params: { slug: string } }, // Tipagem direta aqui
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

    const featuredImage = post.featured_image?.[0];
  const imageUrl = getImageUrl(featuredImage) || 'https://via.placeholder.com/800x600.png?text=Imagem+Nao+Disponivel';

  return {
    title: post.seo_title || post.title,
    description: post.seo_description || post.content.substring(0, 160).replace(/[#*]/g, '') + '...', // Limita a descrição para SEO
    keywords: [post.title, 'blog climatização', 'VRF', 'Chiller', 'PMOC'], // Adicione palavras-chave relevantes
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

export default async function PostPage({ params }: { params: { slug: string } }) { // Tipagem direta aqui
  const { slug } = params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = await getPosts();

  const { title, content, publishedAt, image_alt, featured_image, seo_description = '' } = post;

    const featuredImage = featured_image?.[0];
  const imageUrl = getImageUrl(featuredImage) || 'https://via.placeholder.com/800x600.png?text=Imagem+Nao+Disponivel';

  // URL completa para compartilhamento social
  const postUrl = `https://climatbh.com.br/blog/${slug}`;

  // Encontrar posts anterior e próximo para navegação
  const currentIndex = allPosts.findIndex(p => p.id === post.id);
  const previousPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  return (
    <>
      <ArticleStructuredData post={post} />
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb title={title} />

          <article className="bg-white rounded-lg shadow-md p-6 lg:p-8 mb-12">
            <h1 className="text-4xl font-bold text-blue-800 mb-4">{title}</h1>
            <div className="text-gray-600 text-sm mb-6">
              <svg className="inline-block w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Publicado em: <FormattedDate dateString={publishedAt} options={{ year: 'numeric', month: 'long', day: 'numeric' }} />
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
              <ClientSocialShare title={title} slug={slug} url={postUrl} description={seo_description} />
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

