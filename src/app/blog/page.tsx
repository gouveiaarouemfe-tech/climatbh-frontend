
import Link from 'next/link';
import { GetServerSideProps } from 'next';
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
        url: 'https://climatbh-site-frontend.onrender.com/images/logo-climatbh.png', // Substitua pela URL da sua imagem de capa do blog
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
    images: ['https://climatbh-site-frontend.onrender.com/images/logo-climatbh.png'], // Substitua pela URL da sua imagem de capa do blog
  },
};

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
    featured_image?: {
      data: Array<{
        id: number;
        attributes: {
          url: string;
          alternativeText?: string;
          width: number;
          height: number;
        };
      }>;
    };
  };
}

interface BlogPageProps {
  posts: Post[];
  error: string | null;
}

export default function BlogPage({ posts, error }: BlogPageProps) {
  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl font-bold text-center mb-12">Nosso Blog</h1>
        <p className="text-red-600 text-lg">Erro: {error}</p>
        <p className="text-gray-500 text-sm">Por favor, tente novamente mais tarde.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">Nosso Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts && Array.isArray(posts) && posts.length > 0 ? (
          posts.map((post: Post) => (
            <div key={post.id} className="p-6 border rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {post.attributes.title}
              </h2>
              <Link href={`/blog/${post.attributes.slug}`} className="text-blue-600 font-medium">Leia Mais &rarr;</Link>
            </div>
          ))
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

export const getServerSideProps: GetServerSideProps<BlogPageProps> = async () => {
  try {
    const strapiApiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;
    const strapiApiToken = process.env.NEXT_PUBLIC_API_TOKEN;

    if (!strapiApiUrl || !strapiApiToken) {
      throw new Error('Configuração do Strapi não encontrada (URL ou Token)');
    }

    const url = `${strapiApiUrl}/api/posts?populate=featured_image`;
    
    console.log('SERVER-SIDE: Fazendo requisição para:', url);
    console.log('SERVER-SIDE: Token existe:', !!strapiApiToken);

    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${strapiApiToken}`,
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Erro ao buscar posts: ${res.status} ${res.statusText} - ${errorText}`);
    }

    const data = await res.json();
    console.log('SERVER-SIDE: Posts recebidos:', data.data?.length || 0);

    return {
      props: {
        posts: data.data || [],
        error: null,
      },
    };
  } catch (err: any) {
    console.error('SERVER-SIDE: Erro ao buscar posts:', err);
    return {
      props: {
        posts: [],
        error: err.message || 'Ocorreu um erro ao carregar os posts.',
      },
    };
  }
};


