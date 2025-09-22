import { getPosts, Post } from '@/lib/strapi';
import BlogClientPage from './BlogClientPage';

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <BlogClientPage initialPosts={posts} />
  );
}
