'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TrendingUp, Eye, Calendar, ArrowRight, Flame } from 'lucide-react';

interface PopularPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  image?: string;
  publishedAt: string;
  views: number;
  category: string;
  readTime: number;
}

interface PopularPostsProps {
  limit?: number;
  showImages?: boolean;
  variant?: 'sidebar' | 'grid' | 'list';
  title?: string;
}

export default function PopularPosts({ 
  limit = 5, 
  showImages = true, 
  variant = 'sidebar',
  title = "Posts Mais Populares"
}: PopularPostsProps) {
  const [popularPosts, setPopularPosts] = useState<PopularPost[]>([]);
  const [loading, setLoading] = useState(true);

  // Em produção, os posts populares virão da API do Strapi
  // Por enquanto, retornamos array vazio até que posts reais sejam criados
  const mockPopularPosts: PopularPost[] = [];

  useEffect(() => {
    // Simular carregamento da API
    setTimeout(() => {
      setPopularPosts(mockPopularPosts.slice(0, limit));
      setLoading(false);
    }, 500);
  }, [limit]);

  const formatViews = (views: number) => {
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}k`;
    }
    return views.toString();
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded mb-4"></div>
          <div className="space-y-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex space-x-3">
                <div className="w-16 h-16 bg-gray-200 rounded"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'grid') {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
          <TrendingUp className="h-5 w-5 mr-2 text-orange-500" />
          {title}
        </h3>
        
        {popularPosts.length === 0 ? (
          <div className="text-center py-8">
            <Flame className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">Posts populares aparecerão aqui conforme o engajamento dos leitores.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularPosts.map((post, index) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  {showImages && post.image && (
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={400}
                        height={200}
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
                        {post.category}
                      </span>
                      <div className="flex items-center text-xs text-gray-500 space-x-2">
                        <Eye className="h-3 w-3" />
                        <span>{formatViews(post.views)}</span>
                      </div>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                      {post.title}
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{formatDate(post.publishedAt)}</span>
                      </div>
                      <span>{post.readTime} min de leitura</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
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
        
        {popularPosts.length === 0 ? (
          <div className="text-center py-8">
            <TrendingUp className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">Posts populares aparecerão aqui conforme o engajamento dos leitores.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {popularPosts.map((post, index) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group block">
                <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-orange-600">#{index + 1}</span>
                  </div>
                  
                  {showImages && post.image && (
                    <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 mb-1 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                      {post.title}
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-1 mb-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center space-x-3">
                        <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">
                          {post.category}
                        </span>
                        <div className="flex items-center space-x-1">
                          <Eye className="h-3 w-3" />
                          <span>{formatViews(post.views)} visualizações</span>
                        </div>
                      </div>
                      <span>{formatDate(post.publishedAt)}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
        
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

  // Variant 'sidebar' (default)
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <TrendingUp className="h-5 w-5 mr-2 text-orange-500" />
        {title}
      </h3>
      
      {popularPosts.length === 0 ? (
        <div className="text-center py-8">
          <TrendingUp className="h-12 w-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 text-sm">Posts populares aparecerão aqui conforme o engajamento dos leitores.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {popularPosts.map((post, index) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group block">
              <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <div className="flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-orange-600">#{index + 1}</span>
                </div>
                
                {showImages && post.image && (
                  <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-900 mb-1 line-clamp-2 text-sm group-hover:text-blue-600 transition-colors duration-200">
                    {post.title}
                  </h4>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Eye className="h-3 w-3" />
                      <span>{formatViews(post.views)}</span>
                    </div>
                    <span>{formatDate(post.publishedAt)}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
        
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
