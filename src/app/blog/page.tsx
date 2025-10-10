import { getPosts, Post, getCategoriesWithPostCount } from '@/lib/strapi';
import BlogClientPage from './BlogClientPage';

// Usar ISR (Incremental Static Regeneration) para melhor performance
export const revalidate = 300; // Revalidar a cada 5 minutos

export default async function BlogPage() {
  try {
    // Buscar posts e categorias em paralelo para otimizar performance
    const [posts, categoriesWithCount] = await Promise.all([
      getPosts(),
      getCategoriesWithPostCount()
    ]);
    
    return (
      <BlogClientPage 
        initialPosts={posts} 
        initialCategories={categoriesWithCount}
      />
    );
  } catch (error) {
    console.error('Erro ao carregar dados do blog:', error);
    return (
      <BlogClientPage 
        initialPosts={[]} 
        initialCategories={[]}
      />
    );
  }
}
