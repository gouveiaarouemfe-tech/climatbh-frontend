'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TrendingUp, Eye, Calendar, ArrowRight, Flame } from 'lucide-react';
import { getPosts, Post, getImageUrl } from '@/lib/strapi';
import FormattedDate from '@/components/common/FormattedDate';

interface PopularPostsProps {
  limit?: number;
  showImages?: boolean;
  variant?: 'sidebar' | 'grid' | 'list';
  title?: string;
  initialPosts?: Post[];
}

export default function PopularPosts({ 
  limit = 5, 
  showImages = true, 
  variant = 'sidebar',
  title = "Posts Mais Populares",
  initialPosts = []
}: PopularPostsProps) {
  const [popularPosts, setPopularPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const processPopularPosts = async () => {
      try {
        setLoading(true);
        
        let allPosts = initialPosts;
        
        // Se não temos posts iniciais, buscar da API
        if (allPosts.length === 0) {
          allPosts = await getPosts();
        }
        
        // Ordena os posts por data de publicação (mais recentes primeiro) como proxy para popularidade
        const sortedPosts = allPosts
          .filter(post => post.slug && post.title && post.content) // Filtra posts válidos
          .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
          .slice(0, limit);
        
        setPopularPosts(sortedPosts);
      } catch (error) {
        console.error('Erro ao processar posts populares:', error);
        setPopularPosts([]);
      } finally {
        setLoading(false);
      }
    };

    processPopularPosts();
  }, [limit, initialPosts]);

  const getReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(' ').length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  const getExcerpt = (content: string, maxLength: number = 150) => {
    const cleanContent = content.replace(/[#*]/g, "");
    return cleanContent.length > maxLength 
      ? cleanContent.substring(0, maxLength) + "..."
      : cleanContent;
  };

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded mb-4"></div>
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex space-x-3 mb-4">
              <div className="w-16 h-16 bg-gray-200 rounded"></div>
              <div className="flex-1">
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-3/4"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (popularPosts.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
          <TrendingUp className="h-5 w-5 mr-2 text-orange-500" />
          {title}
        </h3>
        <p className="text-gray-500 text-center py-4">
          Nenhum post encontrado.
        </p>
      </div>
    );
  }

  if (variant === 'grid') {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold text-gray-900 flex items-center">
            <Flame className="h-6 w-6 mr-3 text-orange-500" />
            {title}
          </h3>
          <Link 
            href="/blog" 
            className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1"
          >
            <span>Ver todos</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularPosts.map((post, index) => {
            const featuredImage = post.featured_image?.[0];
            const imageUrl = getImageUrl(featuredImage);
            
            return (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  {showImages && (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={imageUrl}
                        alt={featuredImage?.attributes?.alternativeText || post.image_alt || post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                        <TrendingUp className="h-3 w-3" />
                        <span>#{index + 1}</span>
                      </div>
                    </div>
                  )}
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                        {post.category || post.categories?.[0]?.name || 'Geral'}
                      </span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                      {post.title}
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                      {post.seo_description || getExcerpt(post.content)}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <FormattedDate dateString={post.publishedAt} />
                      </div>
                      <span>{getReadTime(post.content)} min de leitura</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }

  if (variant === 'list') {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
          <TrendingUp className="h-5 w-5 mr-2 text-orange-500" />
          {title}
        </h3>
        
        <div className="space-y-4">
          {popularPosts.map((post, index) => {
            const featuredImage = post.featured_image?.[0];
            const imageUrl = getImageUrl(featuredImage);
            
            return (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group block">
                <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-orange-600">#{index + 1}</span>
                  </div>
                  
                  {showImages && (
                    <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
                      <img
                        src={imageUrl}
                        alt={featuredImage?.attributes?.alternativeText || post.image_alt || post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 mb-1 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                      {post.title}
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-1 mb-2">
                      {post.seo_description || getExcerpt(post.content)}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center space-x-3">
                        <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">
                          {post.category || post.categories?.[0]?.name || 'Geral'}
                        </span>
                      </div>
                      <FormattedDate dateString={post.publishedAt} />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        
        <div className="mt-6 text-center">
          <Link 
            href="/blog" 
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
          >
            <span>Ver todos os posts</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    );
  }

  // Variant sidebar (default)
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <TrendingUp className="h-5 w-5 mr-2 text-orange-500" />
        {title}
      </h3>
      
      <div className="space-y-4">
        {popularPosts.map((post, index) => {
          const featuredImage = post.featured_image?.[0];
          const imageUrl = getImageUrl(featuredImage);
          
          return (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group block">
              <div className="flex items-start space-x-3 hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200">
                <div className="flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-orange-600">#{index + 1}</span>
                </div>
                
                {showImages && (
                  <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden">
                    <img
                      src={imageUrl}
                      alt={featuredImage?.attributes?.alternativeText || post.image_alt || post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-900 mb-1 line-clamp-2 text-sm group-hover:text-blue-600 transition-colors duration-200">
                    {post.title}
                  </h4>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs">
                      {post.category || post.categories?.[0]?.name || 'Geral'}
                    </span>
                    <FormattedDate dateString={post.publishedAt} />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-200">
        <Link 
          href="/blog" 
          className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center justify-center space-x-1"
        >
          <span>Ver todos os posts</span>
          <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
    </div>
  );
}
