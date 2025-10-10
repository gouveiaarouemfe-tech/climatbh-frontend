'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';

import { getPosts, Post, getImageUrl, StrapiImage, StrapiImageAttributes } from '@/lib/strapi';
import FormattedDate from '@/components/common/FormattedDate';
import BlogStructuredData from '@/components/seo/BlogStructuredData';
import CategoryFilterWrapper from '@/components/blog/CategoryFilterWrapper';
import PopularPosts from '@/components/blog/PopularPosts';
import BlogCTA from '@/components/blog/BlogCTA';
import ContactSection from '@/components/blog/ContactSection';
import InternalNavigation from '@/components/blog/InternalNavigation';

const DynamicBlogFilter = dynamic(() => import('@/components/blog/BlogFilter'), { ssr: false });

interface BlogClientPageProps {
  initialPosts: Post[];
  initialCategories?: any[];
}

export default function BlogClientPage({ initialPosts, initialCategories = [] }: BlogClientPageProps) {
  console.log("BlogClientPage - initialPosts recebidos:", initialPosts);
  console.log("BlogClientPage - Número de initialPosts:", initialPosts.length);
  console.log("BlogClientPage - Primeiro initialPost (se existir):", initialPosts[0] ? JSON.stringify(initialPosts[0], null, 2) : "Nenhum post encontrado");

  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(initialPosts);
  const [loading, setLoading] = useState(false); // Já carregado com initialPosts

  console.log("BlogClientPage - posts state:", posts);
  console.log("BlogClientPage - filteredPosts state:", filteredPosts);
  console.log("BlogClientPage - filteredPosts.length:", filteredPosts.length);

  // Se a página for revalidada ou navegar, os initialPosts podem mudar.
  // Atualiza o estado se initialPosts mudar.
  useEffect(() => {
    console.log("BlogClientPage - useEffect executado com initialPosts:", initialPosts);
    setPosts(initialPosts);
    setFilteredPosts(initialPosts);
  }, [initialPosts]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando posts...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <BlogStructuredData posts={posts} />
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <div className="container mx-auto px-4 pt-8">
          <InternalNavigation showBreadcrumbs={true} showSiteLinks={false} />
        </div>

        {/* Header */}
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-800">
              Blog ClimatBH
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Notícias, dicas e guias especializados sobre climatização, refrigeração e qualidade do ar
            </p>
          </div>

          {/* Category Filter Header */}
          <CategoryFilterWrapper 
            variant="header" 
            showSearch={true} 
            showViewToggle={true}
            initialCategories={initialCategories}
          />
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Categories */}
              <CategoryFilterWrapper variant="sidebar" initialCategories={initialCategories} />
              
              {/* Popular Posts */}
              <PopularPosts variant="sidebar" limit={5} initialPosts={initialPosts} />
              
              {/* Contact CTA */}
              <ContactSection compact={true} />
            </div>

            {/* Posts Grid */}
            <div className="lg:col-span-3">
              {filteredPosts.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-lg shadow-lg">
                  <div className="max-w-md mx-auto">
                    <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Nenhum post encontrado
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Não encontramos posts com os filtros selecionados. Tente ajustar sua busca ou explore outras categorias.
                    </p>
                    <Link
                      href="/blog"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      Ver todos os posts
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="space-y-8">
                  {/* Posts Grid */}
                  <div className="grid md:grid-cols-2 gap-8">
                    {filteredPosts.filter(post => post.slug).map((post: Post) => {
                      if (!post || !post.title || !post.content) {
                        return null;
                      }

                      const featuredImage: StrapiImage | undefined = post.featured_image?.[0];
                      const finalImageUrl = getImageUrl(featuredImage);

                      return (
                        <article
                          key={post.id}
                          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group"
                        >
                          <div className="relative h-48 w-full overflow-hidden">
                            <img
                              src={finalImageUrl}
                              alt={featuredImage?.attributes?.alternativeText || post.image_alt || post.title}
                              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                          </div>
                          
                          <div className="p-6">
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                                {post.category || 'Geral'}
                              </span>
                              <span className="text-sm text-gray-500">
                                <FormattedDate dateString={post.publishedAt} />
                              </span>
                            </div>
                            
                            <h2 className="text-xl font-semibold mb-3 text-gray-800 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                              {post.title}
                            </h2>
                            
                            <p className="text-gray-600 mb-4 line-clamp-3">
                              {post.seo_description || 
                               post.content.replace(/[#*]/g, "").substring(0, 150) + "..."}
                            </p>
                            
                            <div className="flex justify-between items-center">
                              <Link
                                href={`/blog/${post.slug}`}
                                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 group"
                              >
                                Ler mais
                                <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </Link>
                              
                              <div className="flex items-center text-sm text-gray-500 space-x-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>{Math.ceil(post.content.split(' ').length / 200)} min de leitura</span>
                              </div>
                            </div>
                          </div>
                        </article>
                      );
                    })}
                  </div>

                  {/* Popular Posts Grid */}
                  <PopularPosts variant="grid" limit={6} title="Posts em Destaque" initialPosts={initialPosts} />

                  {/* CTA Section */}
                  <BlogCTA variant="contact" />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Sections */}
        <div className="container mx-auto px-4 pb-8 space-y-12">
          {/* Categories Grid */}
          <CategoryFilterWrapper variant="grid" initialCategories={initialCategories} />
          
          {/* Contact Section */}
          <ContactSection showScheduling={true} />
          
          {/* Internal Navigation */}
          <InternalNavigation showBreadcrumbs={false} showSiteLinks={true} />
        </div>
      </div>
    </>
  );
}
