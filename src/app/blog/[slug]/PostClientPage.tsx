'use client';

import Link from 'next/link';
import Image from 'next/image';

import { getImageUrl, Post, StrapiImage } from '@/lib/strapi';
import FormattedDate from '@/components/common/FormattedDate';
import Breadcrumb from '@/components/blog/Breadcrumb';
import ClientSocialShare from '@/components/blog/ClientSocialShare';
import RelatedPosts from '@/components/blog/RelatedPosts';
import PostNavigation from '@/components/blog/PostNavigation';
import ArticleStructuredData from '@/components/seo/ArticleStructuredData';
import MarkdownRenderer from '@/components/common/MarkdownRenderer';
import CommentSystem from '@/components/blog/CommentSystem';
import BlogCTA from '@/components/blog/BlogCTA';
import ContactSection from '@/components/blog/ContactSection';
import EnhancedRelatedPosts from '@/components/blog/EnhancedRelatedPosts';
import EnhancedSocialShare from '@/components/blog/EnhancedSocialShare';
import InternalNavigation from '@/components/blog/InternalNavigation';
import PopularPosts from '@/components/blog/PopularPosts';

interface PostClientPageProps {
  post: Post;
  allPosts: Post[];
  slug: string;
}

export default function PostClientPage({ post, allPosts, slug }: PostClientPageProps) {
  const { title, content, publishedAt, image_alt, featured_image, seo_description = '' } = post;

  // Correção: featured_image já é um array de StrapiImage, não precisa de .data
  const featuredImage: StrapiImage | undefined = featured_image?.[0];
  console.log("NEXT_PUBLIC_STRAPI_API_URL:", process.env.NEXT_PUBLIC_STRAPI_API_URL);
  console.log("post:", JSON.stringify(post, null, 2));
  console.log("featured_image?.[0]:", featuredImage);
  console.log("featured_image?.[0]?.attributes?.url:", featuredImage?.attributes?.url);
  const finalImageUrl = getImageUrl(featuredImage);

  const postUrl = `https://climatbh.com.br/blog/${slug}`;

  const currentIndex = allPosts.findIndex(p => p.id === post.id );
  const previousPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  return (
    <>
      <ArticleStructuredData post={post} />
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <div className="container mx-auto px-4 pt-8">
          <InternalNavigation 
            showBreadcrumbs={true} 
            showSiteLinks={false}
            currentPost={{
              title: title,
              slug: slug,
              category: post.category
            }}
          />
        </div>

        <div className="container mx-auto px-4 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8 order-2 lg:order-1">
              {/* Popular Posts */}
              <PopularPosts variant="sidebar" limit={5} />
              
              {/* Floating Social Share */}
              <EnhancedSocialShare
                url={postUrl}
                title={title}
                description={seo_description}
                variant="vertical"
                showEngagement={true}
              />
              
              {/* Contact CTA */}
              <ContactSection compact={true} />
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              <article className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
                {/* Featured Image */}
                {featuredImage && finalImageUrl && finalImageUrl !== 'https://via.placeholder.com/800x600.png?text=Imagem+Nao+Disponivel' && finalImageUrl !== 'https://via.placeholder.com/800x600.png?text=API_URL_INDEFINIDA' && (
                  <div className="relative w-full h-96 overflow-hidden">
                    <img
                      src={finalImageUrl}
                      alt={featuredImage?.attributes?.alternativeText || image_alt || title}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                )}

                {/* Article Header */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      {post.category && (
                        <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                      )}
                      <div className="flex items-center text-sm text-gray-500 space-x-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <FormattedDate dateString={publishedAt} options={{ year: 'numeric', month: 'long', day: 'numeric' }} />
                      </div>
                      <div className="flex items-center text-sm text-gray-500 space-x-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{Math.ceil(content.split(' ').length / 200)} min de leitura</span>
                      </div>
                    </div>
                  </div>

                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    {title}
                  </h1>

                  {seo_description && (
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                      {seo_description}
                    </p>
                  )}

                  {/* Article Content */}
                  <div className="prose prose-lg max-w-none">
                    <MarkdownRenderer content={content} />
                  </div>

                  {/* Article Footer */}
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <EnhancedSocialShare
                      url={postUrl}
                      title={title}
                      description={seo_description}
                      variant="horizontal"
                      showEngagement={true}
                    />
                  </div>
                </div>
              </article>

              {/* CTA Section */}
              <BlogCTA variant="consultation" />

              {/* Comments Section */}
              <CommentSystem postId={post.id.toString()} postTitle={title} />

              {/* Post Navigation */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <PostNavigation
                  previousPost={previousPost}
                  nextPost={nextPost}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sections */}
        <div className="container mx-auto px-4 pb-8 space-y-12">
          {/* Enhanced Related Posts */}
          <EnhancedRelatedPosts
            posts={allPosts}
            currentPostId={post.id}
            currentCategory={post.category}
            maxPosts={6}
            showPopular={true}
          />

          {/* Contact Section */}
          <ContactSection showScheduling={true} />

          {/* Internal Navigation */}
          <InternalNavigation 
            showBreadcrumbs={false} 
            showSiteLinks={true}
            prevPost={previousPost ? { title: previousPost.title, slug: previousPost.slug } : undefined}
            nextPost={nextPost ? { title: nextPost.title, slug: nextPost.slug } : undefined}
          />

          {/* Back to Blog */}
          <div className="text-center bg-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Continue Explorando
            </h3>
            <p className="text-gray-600 mb-6">
              Descubra mais conteúdos sobre climatização e refrigeração
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Voltar ao Blog
            </Link>
          </div>
        </div>

        {/* Floating Social Share */}
        <EnhancedSocialShare
          url={postUrl}
          title={title}
          description={seo_description}
          variant="sticky"
          showEngagement={true}
        />
      </div>
    </>
  );
}
