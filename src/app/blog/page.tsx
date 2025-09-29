import { getPosts, Post } from '@/lib/strapi';
import BlogClientPage from './BlogClientPage';

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  console.log("BlogPage - Iniciando busca de posts...");
  const posts = await getPosts(); // getPosts já foi corrigido para retornar res.data.dados
  console.log("BlogPage - Posts recebidos:", posts);
  console.log("BlogPage - Número de posts:", posts.length);
  console.log("BlogPage - Primeiro post (se existir):", posts[0] ? JSON.stringify(posts[0], null, 2) : "Nenhum post encontrado");

  return (
    <BlogClientPage initialPosts={posts} />
  );
}
