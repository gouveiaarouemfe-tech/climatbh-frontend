
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { Metadata } from 'next';
import dynamic from 'next/dynamic'; // Importando dynamic

import { getPostBySlug, getPosts, getImageUrl, Post } from '@/lib/strapi';
import Breadcrumb from '@/components/blog/Breadcrumb';
// import SocialShare from '@/components/blog/SocialShare'; // Removendo importação estática
import RelatedPosts from '@/components/blog/RelatedPosts';
import PostNavigation from '@/components/blog/PostNavigation';
import ArticleStructuredData from '@/components/seo/ArticleStructuredData';

// Importando SocialShare dinamicamente para evitar problemas de hidratação
const DynamicSocialShare = dynamic(() => import('@/components/blog/SocialShare'), { ssr: false });

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post não encontrado',
      description: 'O post que você está procurando não foi encontrado.',
    };
  }

  const { title, seo_title, seo_description, content, image_alt, featured_image, publishedAt, updatedAt } = post.attributes;
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

  const { title, content, publishedAt, image_alt, featured_image } = post.attributes;

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
              Publicado em: {new Date(publishedAt).toLocaleDateString('pt-BR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>

            <div className="prose prose-lg prose-blue max-w-none text-gray-800 leading-relaxed">
              <ReactMarkdown
                components={{
                  h1: ({ children }) => <h1 className="text-2xl font-bold mt-8 mb-4 text-blue-800">{children}</h1>,
                  h2: ({ children }) => <h2 className="text-xl font-semibold mt-6 mb-3 text-blue-700">{children}</h2>,
                  h3: ({ children }) => <h3 className="text-lg font-medium mt-4 mb-2 text-blue-600">{children}</h3>,
                  p: ({ children }) => <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>,
                  ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>,
                  ol: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>,
                  li: ({ children }) => <li className="text-gray-700">{children}</li>,
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-blue-500 pl-4 py-2 my-4 bg-blue-50 italic text-gray-700">
                      {children}
                    </blockquote>
                  ),
                  strong: ({ children }) => <strong className="font-semibold text-gray-900">{children}</strong>,
                  img: ({ node, ...props }) => {
                    const markdownImageUrl = typeof props.src === 'string' ? getImageUrl({ attributes: { url: props.src } } as any) : '';
                    return (
                      <Image
                        src={markdownImageUrl}
                        alt={props.alt || ''}
                        width={typeof props.width === 'number' ? props.width : (typeof props.width === 'string' ? parseInt(props.width) : 800)}
                        height={typeof props.height === 'number' ? props.height : (typeof props.height === 'string' ? parseInt(props.height) : 600)}
                        className="my-4 rounded-lg shadow-md"
                      />
                    );
                  },
                }}
              >
                {content}
              </ReactMarkdown>
            </div>
          </div>
          
          <DynamicSocialShare // Usando o componente dinâmico
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

