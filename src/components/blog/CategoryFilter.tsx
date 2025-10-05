'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Tag, Filter, Grid, List, Search, X } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  slug: string;
  count: number;
  color: string;
  description?: string;
}

interface CategoryFilterProps {
  variant?: 'sidebar' | 'header' | 'grid';
  showSearch?: boolean;
  showViewToggle?: boolean;
  currentCategory?: string;
  onCategoryChange?: (category: string) => void;
  onViewChange?: (view: 'grid' | 'list') => void;
}

export default function CategoryFilter({
  variant = 'sidebar',
  showSearch = false,
  showViewToggle = false,
  currentCategory = '',
  onCategoryChange,
  onViewChange
}: CategoryFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [currentView, setCurrentView] = useState<'grid' | 'list'>('grid');

  // Categorias do blog de climatização
  const categories: Category[] = [
    {
      id: 'all',
      name: 'Todos os Posts',
      slug: '',
      count: 24,
      color: 'bg-gray-100 text-gray-700',
      description: 'Todos os artigos do blog'
    },
    {
      id: 'dicas',
      name: 'Dicas e Economia',
      slug: 'dicas',
      count: 8,
      color: 'bg-green-100 text-green-700',
      description: 'Dicas para economizar energia e otimizar o uso'
    },
    {
      id: 'pmoc',
      name: 'PMOC',
      slug: 'pmoc',
      count: 6,
      color: 'bg-blue-100 text-blue-700',
      description: 'Plano de Manutenção, Operação e Controle'
    },
    {
      id: 'sistemas',
      name: 'Sistemas',
      slug: 'sistemas',
      count: 5,
      color: 'bg-purple-100 text-purple-700',
      description: 'VRF, Chiller, Splitão e outros sistemas'
    },
    {
      id: 'manutencao',
      name: 'Manutenção',
      slug: 'manutencao',
      count: 7,
      color: 'bg-orange-100 text-orange-700',
      description: 'Manutenção preventiva e corretiva'
    },
    {
      id: 'instalacao',
      name: 'Instalação',
      slug: 'instalacao',
      count: 4,
      color: 'bg-red-100 text-red-700',
      description: 'Instalação de sistemas de climatização'
    },
    {
      id: 'saude',
      name: 'Saúde e Qualidade do Ar',
      slug: 'saude',
      count: 3,
      color: 'bg-teal-100 text-teal-700',
      description: 'Qualidade do ar e impactos na saúde'
    },
    {
      id: 'tecnologia',
      name: 'Tecnologia',
      slug: 'tecnologia',
      count: 2,
      color: 'bg-indigo-100 text-indigo-700',
      description: 'Inovações e novas tecnologias'
    }
  ];

  const handleCategoryClick = (categorySlug: string) => {
    if (onCategoryChange) {
      onCategoryChange(categorySlug);
    } else {
      // Navegar para a página do blog com filtro
      const params = new URLSearchParams(searchParams);
      if (categorySlug) {
        params.set('categoria', categorySlug);
      } else {
        params.delete('categoria');
      }
      router.push(`/blog?${params.toString()}`);
    }
  };

  const handleViewToggle = (view: 'grid' | 'list') => {
    setCurrentView(view);
    if (onViewChange) {
      onViewChange(view);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    if (searchTerm) {
      params.set('busca', searchTerm);
    } else {
      params.delete('busca');
    }
    router.push(`/blog?${params.toString()}`);
  };

  const clearSearch = () => {
    setSearchTerm('');
    const params = new URLSearchParams(searchParams);
    params.delete('busca');
    router.push(`/blog?${params.toString()}`);
  };

  if (variant === 'header') {
    return (
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            {/* Search */}
            {showSearch && (
              <div className="flex-1 max-w-md">
                <form onSubmit={handleSearch} className="relative">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Buscar posts..."
                    className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  {searchTerm && (
                    <button
                      type="button"
                      onClick={clearSearch}
                      className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 hover:text-gray-600"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </form>
              </div>
            )}

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.slice(0, 6).map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category.slug)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    currentCategory === category.slug
                      ? 'bg-blue-600 text-white'
                      : `${category.color} hover:opacity-80`
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* View Toggle */}
            {showViewToggle && (
              <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => handleViewToggle('grid')}
                  className={`p-2 rounded-md transition-colors duration-200 ${
                    currentView === 'grid'
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handleViewToggle('list')}
                  className={`p-2 rounded-md transition-colors duration-200 ${
                    currentView === 'list'
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'grid') {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-center">
            <Tag className="h-6 w-6 mr-3 text-blue-600" />
            Categorias do Blog
          </h3>
          <p className="text-gray-600">
            Explore nossos artigos organizados por categoria
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.filter(cat => cat.id !== 'all').map((category) => (
            <Link
              key={category.id}
              href={`/blog?categoria=${category.slug}`}
              className="group block"
            >
              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${category.color}`}>
                    {category.name}
                  </div>
                  <span className="text-2xl font-bold text-gray-400 group-hover:text-blue-600 transition-colors duration-200">
                    {category.count}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  // Variant sidebar (default)
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <Filter className="h-5 w-5 mr-2 text-blue-600" />
        Categorias
      </h3>
      
      <div className="space-y-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category.slug)}
            className={`w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 flex items-center justify-between group ${
              currentCategory === category.slug
                ? 'bg-blue-100 text-blue-700'
                : 'hover:bg-gray-50 text-gray-700'
            }`}
          >
            <span className="font-medium">{category.name}</span>
            <span className={`text-sm px-2 py-1 rounded-full ${
              currentCategory === category.slug
                ? 'bg-blue-200 text-blue-800'
                : 'bg-gray-200 text-gray-600 group-hover:bg-gray-300'
            }`}>
              {category.count}
            </span>
          </button>
        ))}
      </div>

      {/* Category Stats */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="text-center">
          <p className="text-sm text-gray-500 mb-2">Total de artigos</p>
          <p className="text-2xl font-bold text-blue-600">
            {categories.find(c => c.id === 'all')?.count || 0}
          </p>
        </div>
      </div>
    </div>
  );
}

// Componente para mostrar a categoria atual
export function CurrentCategoryBanner({ category }: { category: string }) {
  const categories: Category[] = [
    { id: 'dicas', name: 'Dicas e Economia', slug: 'dicas', count: 8, color: 'bg-green-100 text-green-700' },
    { id: 'pmoc', name: 'PMOC', slug: 'pmoc', count: 6, color: 'bg-blue-100 text-blue-700' },
    { id: 'sistemas', name: 'Sistemas', slug: 'sistemas', count: 5, color: 'bg-purple-100 text-purple-700' },
    { id: 'manutencao', name: 'Manutenção', slug: 'manutencao', count: 7, color: 'bg-orange-100 text-orange-700' },
    { id: 'instalacao', name: 'Instalação', slug: 'instalacao', count: 4, color: 'bg-red-100 text-red-700' },
    { id: 'saude', name: 'Saúde e Qualidade do Ar', slug: 'saude', count: 3, color: 'bg-teal-100 text-teal-700' },
    { id: 'tecnologia', name: 'Tecnologia', slug: 'tecnologia', count: 2, color: 'bg-indigo-100 text-indigo-700' }
  ];

  const currentCat = categories.find(c => c.slug === category);
  
  if (!currentCat) return null;

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6 mb-8">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center space-x-3 mb-2">
            <Tag className="h-6 w-6 text-blue-600" />
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${currentCat.color}`}>
              {currentCat.name}
            </span>
          </div>
          <p className="text-gray-600">
            Mostrando {currentCat.count} artigos na categoria "{currentCat.name}"
          </p>
        </div>
        <Link
          href="/blog"
          className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1"
        >
          <X className="h-4 w-4" />
          <span>Limpar filtro</span>
        </Link>
      </div>
    </div>
  );
}
