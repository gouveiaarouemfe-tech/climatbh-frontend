'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Clock, Calendar, Tag, BookOpen, TrendingUp } from 'lucide-react';
import { Post, getImageUrl, StrapiImage } from '@/lib/strapi';

interface EnhancedRelatedPostsProps {
  posts: Post[];
  currentPostId: number;
  currentCategory?: string;
  currentTags?: string[];
  maxPosts?: number;
  title?: string;
  showPopular?: boolean;
}

export default function EnhancedRelatedPosts({
  posts,
  currentPostId,
  currentCategory,
  currentTags = [],
  maxPosts = 3,
  title = "Posts Relacionados",
  showPopular = true
}: EnhancedRelatedPostsProps) {
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);
  const [popularPosts, setPopularPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Filtrar posts relacionados
    let filtered = posts.filter(post => post.id !== currentPostId);
    
    // Algoritmo de relevância
    const scoredPosts = filtered.map(post => {
      let score = 0;
      
      // Mesma categoria = +3 pontos
      if (post.category === currentCategory) {
        score += 3;
      }
      
      // Tags em comum = +1 ponto por tag (se disponível)
      if (currentTags.length > 0 && post.tags) {
        const commonTags = post.tags.filter((tag) => currentTags.includes(tag.name || tag.slug));
        score += commonTags.length;
      }
      
      // Posts mais recentes = +1 ponto
      const daysDiff = Math.abs(new Date().getTime() - new Date(post.publishedAt || post.createdAt).getTime()) / (1000 * 3600 * 24);
      if (daysDiff < 30) {
        score += 1;
      }
      
      return { ...post, score };
    });
    
    // Ordenar por score e pegar os primeiros
    const sortedPosts = scoredPosts
      .sort((a, b) => (b.score || 0) - (a.score || 0))
      .slice(0, maxPosts);
    
    setRelatedPosts(sortedPosts);

    // Posts populares (simulado - em produção seria baseado em views/engagement)
    if (showPopular) {
      const popular = posts
        .filter(post => post.id !== currentPostId)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
      setPopularPosts(popular);
    }
  }, [posts, currentPostId, currentCategory, currentTags, maxPosts, showPopular]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Dicas': 'bg-green-100 text-green-700',
      'PMOC': 'bg-blue-100 text-blue-700',
      'Sistemas': 'bg-purple-100 text-purple-700',
      'Manutenção': 'bg-orange-100 text-orange-700',
      'Instalação': 'bg-red-100 text-red-700',
      'Saúde': 'bg-teal-100 text-teal-700',
      'Tecnologia': 'bg-indigo-100 text-indigo-700'
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
  };

  const getReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(' ').length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  if (relatedPosts.length === 0 && popularPosts.length === 0) {
    return null;
  }

  return (
    <div className="space-y-12">
      {/* Posts Relacionados */}
      {relatedPosts.length > 0 && (
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center">
              <BookOpen className="h-6 w-6 mr-3 text-blue-600" />
              {title}
            </h3>
            <Link 
              href="/blog" 
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1"
            >
              <span>Ver mais posts</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPosts.map((post) => {
              const featuredImage: StrapiImage | undefined = post.featured_image?.[0];
              const finalImageUrl = getImageUrl(featuredImage);
              const readTime = getReadTime(post.content || '');

              return (
                <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                  <article className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={finalImageUrl}
                        alt={featuredImage?.attributes?.alternativeText || post.image_alt || post.title}
                        width={400}
                        height={200}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className={`text-xs font-medium px-2 py-1 rounded ${getCategoryColor(post.category || 'Geral')}`}>
                          {post.category || 'Geral'}
                        </span>
                        <div className="flex items-center text-xs text-gray-500 space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{readTime} min</span>
                        </div>
                      </div>
                      
                      <h4 className="font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                        {post.title}
                      </h4>
                      
                      <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                        {post.seo_description || post.content?.replace(/[#*]/g, '').substring(0, 100) + '...'}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-xs text-gray-500 space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{formatDate(post.publishedAt || post.createdAt)}</span>
                        </div>
                        
                        <div className="flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-700">
                          <span>Ler mais</span>
                          <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Posts Populares */}
      {showPopular && popularPosts.length > 0 && (
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg shadow-lg p-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center">
              <TrendingUp className="h-6 w-6 mr-3 text-orange-500" />
              Posts Mais Populares
            </h3>
            <Link 
              href="/blog" 
              className="text-orange-600 hover:text-orange-700 font-medium flex items-center space-x-1"
            >
              <span>Ver ranking completo</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {popularPosts.map((post, index) => {
              const featuredImage: StrapiImage | undefined = post.featured_image?.[0];
              const finalImageUrl = getImageUrl(featuredImage);
              const readTime = getReadTime(post.content || '');

              return (
                <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                  <article className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:scale-105 relative">
                    <div className="absolute top-3 left-3 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold z-10 flex items-center space-x-1">
                      <TrendingUp className="h-3 w-3" />
                      <span>#{index + 1}</span>
                    </div>
                    
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={finalImageUrl}
                        alt={featuredImage?.attributes?.alternativeText || post.image_alt || post.title}
                        width={400}
                        height={160}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-xs font-medium px-2 py-1 rounded ${getCategoryColor(post.category || 'Geral')}`}>
                          {post.category || 'Geral'}
                        </span>
                        <div className="flex items-center text-xs text-gray-500 space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{readTime} min</span>
                        </div>
                      </div>
                      
                      <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors duration-200">
                        {post.title}
                      </h4>
                      
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{formatDate(post.publishedAt || post.createdAt)}</span>
                        </div>
                        <div className="flex items-center text-orange-600 font-medium">
                          <span>Ler mais</span>
                          <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* CTA para explorar mais */}
      <div className="text-center bg-blue-50 rounded-lg p-8">
        <h4 className="text-xl font-bold text-gray-900 mb-4">
          Explore Mais Conteúdo sobre Climatização
        </h4>
        <p className="text-gray-600 mb-6">
          Descubra dicas, guias técnicos e novidades do setor de climatização
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <BookOpen className="h-5 w-5" />
            <span>Todos os Posts</span>
          </Link>
          <Link
            href="/blog?categoria=dicas"
            className="inline-flex items-center space-x-2 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200"
          >
            <Tag className="h-5 w-5" />
            <span>Dicas e Economia</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
