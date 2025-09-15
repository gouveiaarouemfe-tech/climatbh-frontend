
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

  const url = `${strapiApiUrl}/api/posts?populate=featured_image`;

  try {
    console.log('SERVER-SIDE: Fazendo requisição para:', url);
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${strapiApiToken}`,
        'Content-Type': 'application/json',
      },
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    });

    console.log('SERVER-SIDE: Resposta da requisição - Status:', res.status, res.statusText);

    if (!res.ok) {
      const errorText = await res.text();
      console.error(`SERVER-SIDE: Erro ao buscar posts: ${res.status} ${res.statusText} - ${errorText}`);
      return { posts: [], error: `Erro ao buscar posts: ${res.status} ${res.statusText}` };
    }

    const data = await res.json();
    console.log('SERVER-SIDE: Posts recebidos:', data.data?.length || 0);

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
      <p>Blog está funcionando! Posts recebidos:</p>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </div>
  );
}


