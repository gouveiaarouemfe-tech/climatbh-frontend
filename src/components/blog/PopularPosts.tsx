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

  // Dados simulados - em produção, viria da API
  const mockPopularPosts: PopularPost[] = [
    {
      id: '1',
      title: 'Como Economizar Energia com Ar Condicionado: 10 Dicas Práticas',
      slug: 'como-economizar-energia-ar-condicionado',
      excerpt: 'Descubra estratégias eficazes para reduzir o consumo de energia do seu ar condicionado sem perder o conforto.',
      image: '/images/blog/economia-energia-ar-condicionado.webp',
      publishedAt: '2024-10-01',
      views: 2847,
      category: 'Dicas',
      readTime: 8
    },
    {
      id: '2',
      title: 'PMOC: Tudo que Você Precisa Saber sobre a Legislação',
      slug: 'pmoc-legislacao-completa',
      excerpt: 'Guia completo sobre PMOC, legislação ANVISA e como manter seu estabelecimento em conformidade.',
      image: '/images/blog/pmoc-legislacao.webp',
      publishedAt: '2024-09-28',
      views: 2156,
      category: 'PMOC',
      readTime: 12
    },
    {
      id: '3',
      title: 'VRF vs Chiller: Qual Sistema Escolher para seu Projeto?',
      slug: 'vrf-vs-chiller-comparacao',
      excerpt: 'Comparação detalhada entre sistemas VRF e Chiller para ajudar na escolha do melhor sistema.',
      image: '/images/blog/vrf-vs-chiller.webp',
      publishedAt: '2024-09-25',
      views: 1923,
      category: 'Sistemas',
      readTime: 10
    },
    {
      id: '4',
      title: 'Manutenção Preventiva: Quando e Como Fazer',
      slug: 'manutencao-preventiva-ar-condicionado',
      excerpt: 'Cronograma completo de manutenção preventiva para diferentes tipos de sistemas de climatização.',
      image: '/images/blog/manutencao-preventiva.webp',
      publishedAt: '2024-09-22',
      views: 1687,
      category: 'Manutenção',
      readTime: 7
    },
    {
      id: '5',
      title: 'Qualidade do Ar Interior: Por que é Importante?',
      slug: 'qualidade-ar-interior-importancia',
      excerpt: 'Entenda como a qualidade do ar interior afeta a saúde e produtividade no ambiente de trabalho.',
      image: '/images/blog/qualidade-ar-interior.webp',
      publishedAt: '2024-09-20',
      views: 1534,
      category: 'Saúde',
      readTime: 6
    },
    {
      id: '6',
      title: 'Instalação de Ar Condicionado: Erros Comuns a Evitar',
      slug: 'erros-instalacao-ar-condicionado',
      excerpt: 'Os principais erros na instalação de ar condicionado e como evitá-los para garantir eficiência.',
      image: '/images/blog/erros-instalacao.webp',
      publishedAt: '2024-09-18',
      views: 1342,
      category: 'Instalação',
      readTime: 9
    }
  ];

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
      month: '2-digit',
      year: 'numeric'
    });
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
        {popularPosts.map((post, index) => (
          <Link key={post.id} href={`/blog/${post.slug}`} className="group block">
            <div className="flex items-start space-x-3 hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200">
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
