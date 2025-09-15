import Link from 'next/link';
import Image from 'next/image';

interface Post {
  id: number;
  attributes: {
    title: string;
    slug: string;
    content: string;
    seo_description?: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    featured_image?: Array<{
      id: number;
      attributes: {
        url: string;
        alternativeText?: string;
        width: number;
        height: number;
      };
    }>;
  };
}

async function getPosts() {
  const url = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/posts?populate=*`;
  const token = process.env.NEXT_PUBLIC_API_TOKEN;

  console.log('Fazendo requisição para:', url);
  console.log('Token existe:', !!token);

  if (!token || !process.env.NEXT_PUBLIC_STRAPI_API_URL) {
    console.error('Configuração do Strapi não encontrada');
    return { data: [] };
  }

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      next: { revalidate: 60 },
    });

    console.log('Status da resposta:', res.status);

    if (!res.ok) {
      console.error(`Erro ao buscar posts: ${res.status} ${res.statusText}`);
      const errorText = await res.text();
      console.error('Detalhes do erro:', errorText);
      return { data: [] };
    }

    const data = await res.json();
    console.log('Posts recebidos:', data.data?.length || 0);
    return data;
  } catch (error) {
    console.error('Erro ao buscar posts:', error);
    return { data: [] };
  }
}

export default async function BlogPage() {
  const { data: posts } = await getPosts();

  console.log('Posts no componente:', posts?.length || 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">Nosso Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts && Array.isArray(posts) && posts.length > 0 ? (
          posts.map((post: Post) => {
            // Verificação robusta de dados
            if (!post || !post.attributes || !post.attributes.slug || !post.attributes.title) {
              console.warn('Post inválido encontrado:', post);
              return null;
            }
            
            const featuredImage = post.attributes.featured_image?.[0];
            
            return (
              <Link 
                href={`/blog/${post.attributes.slug}`} 
                key={post.id} 
                className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                {featuredImage?.attributes?.url ? (
                  <div className="relative w-full h-48">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${featuredImage.attributes.url}`}
                      alt={featuredImage.attributes.alternativeText || post.attributes.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-t-lg"
                    />
                  </div>
                ) : (
                  <div className="relative w-full h-48 bg-gradient-to-br from-blue-600 to-blue-800 rounded-t-lg flex items-center justify-center">
                    <h3 className="text-white text-lg font-semibold text-center px-4">
                      {post.attributes.title}
                    </h3>
                  </div>
                )}
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {post.attributes.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4">
                    {post.attributes.seo_description || 
                     (post.attributes.content ? 
                      post.attributes.content.substring(0, 150).replace(/[#*]/g, '') + '...' : 
                      'Clique para ler mais...'
                     )}
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    Publicado em: {new Date(post.attributes.publishedAt).toLocaleDateString('pt-BR')}
                  </p>
                  <p className="text-blue-600 font-medium">Leia Mais &rarr;</p>
                </div>
              </Link>
            );
          }).filter(Boolean)
        ) : (
          <div className="col-span-full text-center">
            <p className="text-gray-600 text-lg mb-4">Nenhum post encontrado no momento.</p>
            <p className="text-gray-500 text-sm">
              Verifique a conexão com o servidor ou tente novamente mais tarde.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

