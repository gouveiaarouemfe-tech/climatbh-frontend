import { NextResponse } from 'next/server';
import { getPosts } from '@/lib/strapi';

export async function GET() {
  try {
    const posts = await getPosts();
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.climatbh.com.br';
    
    const blogPosts = posts
      .filter(post => post.slug && post.publishedAt)
      .map(post => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.updatedAt || post.publishedAt),
        changeFrequency: 'weekly',
        priority: 0.6,
      }));

    return NextResponse.json(blogPosts);
  } catch (error) {
    console.error('Erro ao buscar posts para sitemap:', error);
    return NextResponse.json([]);
  }
}
