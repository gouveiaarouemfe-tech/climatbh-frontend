import { mockPosts } from '@/lib/mock-posts';
import BlogClientPage from './BlogClientPage';

export const dynamic = "force-dynamic";

export default function BlogPage() {
  // Usar apenas posts mocados para garantir funcionamento
  console.log('BlogPage - Carregando posts mocados');
  console.log('BlogPage - Total de posts:', mockPosts.length);
  
  return <BlogClientPage initialPosts={mockPosts} />;
}
