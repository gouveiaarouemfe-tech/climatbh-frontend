export const dynamic = "force-dynamic";

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';

import { getPosts, Post, getImageUrl } from '@/lib/strapi';
import FormattedDate from '@/components/common/FormattedDate';
import BlogStructuredData from '@/components/seo/BlogStructuredData';

const DynamicBlogFilter = dynamic(( ) => import('@/components/blog/BlogFilter'), { ssr: false });

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getPosts();
        setPosts(fetchedPosts);
        setFilteredPosts(fetchedPosts);
      } catch (error) {
        console.error('Erro ao carregar posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

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
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-12 text-blue-800">
            Blog ClimatBH: Notícias e Dicas sobre Climatização e Refrigeração
          </h1>
          <p className="text-xl text-center mb-12 text-gray-600">
            Fique por dentro das últimas notícias e dicas sobre climatização
          </p>

          <DynamicBlogFilter
            posts={posts}
            onFilteredPosts={setFilteredPosts}
          />

          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600 mb-4">
                Nenhum post encontrado no momento.
              </p>
              <p className="text-gray-500">
                Volte em breve para conferir nossos conteúdos!
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post: Post) => {
                if (!post || !post.attributes || !post.attributes.title || !post.attributes.slug || !post.attributes.content) {
                  return null;
                }

                const featuredImage = post.attributes.featured_image?.data?.[0];
                console.log("NEXT_PUBLIC_STRAPI_API_URL:", process.env.NEXT_PUBLIC_STRAPI_API_URL);
                console.log("post:", JSON.stringify(post, null, 2));
                console.log("featured_image?.[0]:", featuredImage);
                console.log("featured_image?.[0]?.url:", featuredImage?.attributes?.url);
                const finalImageUrl = getImageUrl(featuredImage);

                return (
                  <article
                    key={post.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
                  >
                    <div className="relative h-48 w-full">
                <img
                  src={finalImageUrl}
                  alt={featuredImage?.attributes?.alternativeText || post.attributes.image_alt || post.attributes.title}
                  className="object-cover w-full h-full"
                />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h2 className="text-xl font-semibold mb-3 text-gray-800 line-clamp-2 flex-grow">
                        {post.attributes.title}
                      </h2>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.attributes.seo_description || 
                         post.attributes.content.replace(/[#*]/g, "").substring(0, 150) + "..."}
                      </p>
                      <div className="flex justify-between items-center mt-auto">
                        <Link
                          href={`/blog/${post.attributes.slug}`}
                          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                        >
                          Ler mais
                          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                        <span className="text-sm text-gray-500">
                          <FormattedDate dateString={post.attributes.publishedAt} />
                        </span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
