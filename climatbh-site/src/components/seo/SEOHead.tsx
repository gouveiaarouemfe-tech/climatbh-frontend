import { Metadata } from 'next';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
}

export function generateMetadata({
  title,
  description,
  keywords,
  image = '/images/VRFDAIKIN.png',
  url = 'https://climatbh.com.br',
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'ClimatBH'
}: SEOHeadProps): Metadata {
  const fullTitle = title.includes('ClimatBH') ? title : `${title} | ClimatBH`;
  const fullUrl = url.startsWith('http') ? url : `https://climatbh.com.br${url}`;
  const fullImage = image.startsWith('http') ? image : `https://climatbh.com.br${image}`;

  return {
    title: fullTitle,
    description,
    keywords,
    authors: [{ name: author }],
    creator: author,
    publisher: 'ClimatBH',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type,
      locale: 'pt_BR',
      url: fullUrl,
      title: fullTitle,
      description,
      siteName: 'ClimatBH',
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(type === 'article' && {
        publishedTime,
        modifiedTime,
        authors: [author],
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [fullImage],
      creator: '@climatbh',
      site: '@climatbh',
    },
    alternates: {
      canonical: fullUrl,
    },
    other: {
      'application-name': 'ClimatBH',
      'apple-mobile-web-app-title': 'ClimatBH',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'default',
      'format-detection': 'telephone=yes',
      'mobile-web-app-capable': 'yes',
      'msapplication-config': '/browserconfig.xml',
      'msapplication-TileColor': '#2563eb',
      'msapplication-tap-highlight': 'no',
      'theme-color': '#2563eb',
    },
  };
}

export default function SEOHead(props: SEOHeadProps) {
  // Este componente não renderiza nada, apenas exporta a função generateMetadata
  return null;
}

