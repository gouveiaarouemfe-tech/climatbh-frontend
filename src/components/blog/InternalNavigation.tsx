'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  ChevronRight, 
  Home, 
  ArrowLeft, 
  ArrowRight, 
  ExternalLink, 
  BookOpen,
  Wrench,
  Phone,
  Info,
  FileText
} from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface InternalNavigationProps {
  showBreadcrumbs?: boolean;
  showPrevNext?: boolean;
  showSiteLinks?: boolean;
  currentPost?: {
    title: string;
    slug: string;
    category?: string;
  };
  prevPost?: {
    title: string;
    slug: string;
  };
  nextPost?: {
    title: string;
    slug: string;
  };
}

export default function InternalNavigation({
  showBreadcrumbs = true,
  showPrevNext = true,
  showSiteLinks = true,
  currentPost,
  prevPost,
  nextPost
}: InternalNavigationProps) {
  const pathname = usePathname();
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([]);

  useEffect(() => {
    const generateBreadcrumbs = () => {
      const items: BreadcrumbItem[] = [
        { label: 'Início', href: '/', icon: Home }
      ];

      if (pathname.startsWith('/blog')) {
        items.push({ label: 'Blog', href: '/blog', icon: BookOpen });
        
        if (currentPost && pathname !== '/blog') {
          if (currentPost.category) {
            items.push({
              label: currentPost.category,
              href: `/blog?categoria=${currentPost.category.toLowerCase()}`
            });
          }
          items.push({
            label: currentPost.title,
            href: `/blog/${currentPost.slug}`
          });
        }
      } else if (pathname.startsWith('/servicos')) {
        items.push({ label: 'Serviços', href: '/servicos', icon: Wrench });
      } else if (pathname.startsWith('/contato')) {
        items.push({ label: 'Contato', href: '/contato', icon: Phone });
      } else if (pathname.startsWith('/sobre')) {
        items.push({ label: 'Sobre', href: '/sobre', icon: Info });
      }

      setBreadcrumbs(items);
    };

    generateBreadcrumbs();
  }, [pathname, currentPost]);

  const siteLinks = [
    {
      title: 'Nossos Serviços',
      description: 'Conheça todos os serviços de climatização',
      href: '/servicos',
      icon: Wrench,
      color: 'bg-blue-50 text-blue-700 border-blue-200'
    },
    {
      title: 'Contratos PMOC',
      description: 'Planos de manutenção personalizados',
      href: '/contratos-pmoc',
      icon: FileText,
      color: 'bg-green-50 text-green-700 border-green-200'
    },
    {
      title: 'Entre em Contato',
      description: 'Solicite um orçamento gratuito',
      href: '/contato',
      icon: Phone,
      color: 'bg-orange-50 text-orange-700 border-orange-200'
    },
    {
      title: 'Sobre a ClimatBH',
      description: 'Nossa história e experiência',
      href: '/sobre',
      icon: Info,
      color: 'bg-purple-50 text-purple-700 border-purple-200'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Breadcrumbs */}
      {showBreadcrumbs && breadcrumbs.length > 1 && (
        <nav className="bg-gray-50 rounded-lg p-4" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm">
            {breadcrumbs.map((item, index) => {
              const IconComponent = item.icon;
              const isLast = index === breadcrumbs.length - 1;
              
              return (
                <li key={item.href} className="flex items-center">
                  {index > 0 && (
                    <ChevronRight className="h-4 w-4 text-gray-400 mx-2" />
                  )}
                  
                  {isLast ? (
                    <span className="flex items-center space-x-1 text-gray-900 font-medium">
                      {IconComponent && <IconComponent className="h-4 w-4" />}
                      <span className="truncate max-w-xs">{item.label}</span>
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 transition-colors duration-200"
                    >
                      {IconComponent && <IconComponent className="h-4 w-4" />}
                      <span>{item.label}</span>
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      )}

      {/* Previous/Next Navigation */}
      {showPrevNext && (prevPost || nextPost) && (
        <nav className="bg-white rounded-lg shadow-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Previous Post */}
            <div className="flex justify-start">
              {prevPost ? (
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="group flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all duration-200 w-full"
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-200">
                      <ArrowLeft className="h-5 w-5 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-500 mb-1">Post anterior</p>
                    <p className="font-medium text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                      {prevPost.title}
                    </p>
                  </div>
                </Link>
              ) : (
                <div className="w-full"></div>
              )}
            </div>

            {/* Next Post */}
            <div className="flex justify-end">
              {nextPost ? (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="group flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all duration-200 w-full text-right"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-500 mb-1">Próximo post</p>
                    <p className="font-medium text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                      {nextPost.title}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-200">
                      <ArrowRight className="h-5 w-5 text-blue-600" />
                    </div>
                  </div>
                </Link>
              ) : (
                <div className="w-full"></div>
              )}
            </div>
          </div>
        </nav>
      )}

      {/* Site Links */}
      {showSiteLinks && (
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Explore Mais da ClimatBH
            </h3>
            <p className="text-gray-600">
              Descubra nossos serviços e entre em contato para soluções personalizadas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group block"
                >
                  <div className={`p-6 rounded-lg border-2 ${link.color} hover:shadow-lg transition-all duration-300 group-hover:scale-105`}>
                    <div className="flex items-center justify-between mb-4">
                      <IconComponent className="h-8 w-8" />
                      <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">{link.title}</h4>
                    <p className="text-sm opacity-80">{link.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

// Componente específico para breadcrumbs simples
export function SimpleBreadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="mb-6" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm text-gray-600">
        {items.map((item, index) => {
          const IconComponent = item.icon;
          const isLast = index === items.length - 1;
          
          return (
            <li key={item.href} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="h-4 w-4 text-gray-400 mx-2" />
              )}
              
              {isLast ? (
                <span className="flex items-center space-x-1 text-gray-900 font-medium">
                  {IconComponent && <IconComponent className="h-4 w-4" />}
                  <span>{item.label}</span>
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="flex items-center space-x-1 hover:text-blue-600 transition-colors duration-200"
                >
                  {IconComponent && <IconComponent className="h-4 w-4" />}
                  <span>{item.label}</span>
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

// Componente para navegação entre posts
export function PostNavigation({ 
  prevPost, 
  nextPost 
}: { 
  prevPost?: { title: string; slug: string }; 
  nextPost?: { title: string; slug: string }; 
}) {
  if (!prevPost && !nextPost) return null;

  return (
    <div className="flex justify-between items-center py-8 border-t border-gray-200">
      <div className="flex-1">
        {prevPost && (
          <Link
            href={`/blog/${prevPost.slug}`}
            className="group flex items-center space-x-2 text-blue-600 hover:text-blue-700"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-200" />
            <div>
              <div className="text-sm text-gray-500">Anterior</div>
              <div className="font-medium">{prevPost.title}</div>
            </div>
          </Link>
        )}
      </div>
      
      <div className="flex-1 text-right">
        {nextPost && (
          <Link
            href={`/blog/${nextPost.slug}`}
            className="group flex items-center justify-end space-x-2 text-blue-600 hover:text-blue-700"
          >
            <div>
              <div className="text-sm text-gray-500">Próximo</div>
              <div className="font-medium">{nextPost.title}</div>
            </div>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        )}
      </div>
    </div>
  );
}
