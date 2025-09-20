import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog ClimatBH - Notícias e Dicas sobre Climatização',
  description: 'Fique por dentro das últimas notícias, dicas e tendências sobre sistemas de climatização, VRF, Chiller e PMOC com o blog da ClimatBH.',
  keywords: ['blog climatização', 'notícias ar condicionado', 'dicas VRF', 'manutenção chiller', 'PMOC'],
  openGraph: {
    title: 'Blog ClimatBH - Notícias e Dicas sobre Climatização',
    description: 'Fique por dentro das últimas notícias, dicas e tendências sobre sistemas de climatização, VRF, Chiller e PMOC com o blog da ClimatBH.',
    url: 'https://climatbh-site-frontend.onrender.com/blog',
    siteName: 'ClimatBH',
    images: [
      {
        url: 'https://climatbh-site-frontend.onrender.com/images/logo-climatbh.png',
        width: 800,
        height: 600,
        alt: 'Blog ClimatBH',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog ClimatBH - Notícias e Dicas sobre Climatização',
    description: 'Fique por dentro das últimas notícias, dicas e tendências sobre sistemas de climatização, VRF, Chiller e PMOC com o blog da ClimatBH.',
    images: ['https://climatbh-site-frontend.onrender.com/images/logo-climatbh.png'],
  },
};

// Interface atualizada baseada na estrutura real dos dados
interface Post {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  content: string;
  seo_title?: string;
  seo_description?: string;
  image_alt?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  featured_image?: Array<{
    id: number;
    documentId: string;
    name: string;
    alternativeText?: string;
    url: string;
    width: number;
    height: number;
  }>;
}

async function getPosts() {
  console.log('SERVER-SIDE: Iniciando getPosts...');
  const strapiApiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;
  const strapiApiToken = process.env.NEXT_PUBLIC_API_TOKEN;

  console.log('SERVER-SIDE: NEXT_PUBLIC_STRAPI_API_URL:', strapiApiUrl ? 'Configurado' : 'NÃO Configurado');
  console.log('SERVER-SIDE: NEXT_PUBLIC_API_TOKEN:', strapiApiToken ? 'Configurado' : 'NÃO Configurado');

  if (!strapiApiUrl || !strapiApiToken) {
    console.error('SERVER-SIDE: Configuração do Strapi não encontrada (URL ou Token)');
    return { posts: [], error: 'Configuração do Strapi não encontrada.' };
  }

  const url = `${strapiApiUrl}/api/posts?populate=*`;

  try {
    console.log('SERVER-SIDE: Fazendo requisição para:', url);
    console.log('SERVER-SIDE: Token existe:', !!strapiApiToken);
    
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${strapiApiToken}`,
        'Content-Type': 'application/json',
      },
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    });

    console.log('SERVER-SIDE: Status da resposta:', res.status);

    if (!res.ok) {
      const errorText = await res.text();
      console.error(`SERVER-SIDE: Erro ao buscar posts: ${res.status} ${res.statusText} - ${errorText}`);
      return { posts: [], error: `Erro ao buscar posts: ${res.status} ${res.statusText}` };
    }

    const data = await res.json();
    console.log('SERVER-SIDE: Postagens recebidas:', data.data?.length || 0);
    console.log('SERVER-SIDE: Postagens no componente:', data.data?.length || 0);

    // Log detalhado para debug
    if (data.data && data.data.length > 0) {
      data.data.forEach((post: any, index: number) => {
        console.log(`SERVER-SIDE: Post ${index + 1}:`, {
          id: post.id,
          title: post.title,
          slug: post.slug,
          hasContent: !!post.content,
          hasFeaturedImage: !!post.featured_image,
          featuredImageLength: post.featured_image?.length || 0
        });
      });
    }

    return { posts: data.data || [], error: null };
  } catch (err: any) {
    console.error('SERVER-SIDE: Erro ao buscar posts:', err);
    return { posts: [], error: `Ocorreu um erro ao carregar os posts: ${err.message}` };
  }
}

export default async function BlogPage() {
  const { posts, error } = await getPosts();

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-4xl font-bold text-center mb-12 text-blue-800">Blog ClimatBH</h1>
          <p className="text-red-600 text-lg">Erro: {error}</p>
          <p className="text-gray-500 text-sm">Por favor, tente novamente mais tarde.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-blue-800">
          Blog ClimatBH
        </h1>
        <p className="text-xl text-center mb-12 text-gray-600">
          Fique por dentro das últimas notícias e dicas sobre climatização
        </p>

        {posts.length === 0 ? (
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
            {posts.map((post: Post) => {
              // Validação básica do post
              if (!post.title || !post.slug || !post.content) {
                console.log('SERVER-SIDE: Post inválido encontrado:', post);
                return null;
              }

              const featuredImage = post.featured_image && post.featured_image.length > 0 ? post.featured_image[0] : null;

              return (
                <article
                  key={post.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  {featuredImage && (
                    <div className="relative h-48">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${featuredImage.url}`}
                        alt={featuredImage.alternativeText || post.image_alt || post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h2 className="text-xl font-semibold mb-3 text-gray-800 line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.seo_description || 
                       post.content.replace(/[#*]/g, '').substring(0, 150) + '...'}
                    </p>
                    <div className="flex justify-between items-center">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                      >
                        Ler mais
                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                      <span className="text-sm text-gray-500">
                        {new Date(post.publishedAt).toLocaleDateString('pt-BR')}
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
  );
}
