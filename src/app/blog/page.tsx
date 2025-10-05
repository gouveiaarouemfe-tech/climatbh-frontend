import { getPosts, Post } from '@/lib/strapi';
import BlogClientPage from './BlogClientPage';

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  try {
    const posts = await getPosts();
    return <BlogClientPage initialPosts={posts} />;
  } catch (error) {
    console.error('Erro ao carregar posts:', error);
    return <BlogClientPage initialPosts={[]} />;
  }
}
