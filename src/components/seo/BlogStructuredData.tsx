
import Script from 'next/script';
import { Post } from '@/lib/strapi';

interface BlogStructuredDataProps {
  posts: Post[];
}

export default function BlogStructuredData({ posts }: BlogStructuredDataProps) {
  const blogPostingSchema = posts.map(post => ({
    '@type': 'BlogPosting',
    'headline': post.attributes.title,
    'image': post.attributes.featured_image?.data ? getImageUrl(post.attributes.featured_image.data) : 'https://climatbh-site-frontend.onrender.com/images/logo-climatbh.png',
    'url': `https://climatbh-site-frontend.onrender.com/blog/${post.attributes.slug}`,
    'datePublished': post.attributes.publishedAt,
    'dateModified': post.attributes.updatedAt,
    'author': {
      '@type': 'Person',
      'name': 'ClimatBH',
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'ClimatBH',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://climatbh-site-frontend.onrender.com/images/logo-climatbh.png',
      },
    },
    'description': post.attributes.seo_description || post.attributes.content.substring(0, 160).replace(/[#*]/g, '') + '...',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `https://climatbh-site-frontend.onrender.com/blog/${post.attributes.slug}`,
    },
  }));

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    'name': 'Blog ClimatBH: Notícias e Dicas sobre Climatização e Refrigeração',
    'description': 'Fique por dentro das últimas notícias, dicas e tendências sobre sistemas de climatização, VRF, Chiller e PMOC com o blog da ClimatBH.',
    'url': 'https://climatbh-site-frontend.onrender.com/blog',
    'image': 'https://climatbh-site-frontend.onrender.com/images/logo-climatbh.png',
    'publisher': {
      '@type': 'Organization',
      'name': 'ClimatBH',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://climatbh-site-frontend.onrender.com/images/logo-climatbh.png',
      },
    },
    'blogPost': blogPostingSchema,
  };

  return (
    <Script
      id="blog-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
    />
  );
}

// Helper function to get image URL (assuming it's available in the context or imported)
// This needs to be imported or defined if not available globally
function getImageUrl(image: any): string {
  if (!image || !image.attributes || !image.attributes.url) {
    return 'https://via.placeholder.com/800x600.png?text=Imagem+Nao+Disponivel';
  }
  const url = image.attributes.url;
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('//')) {
    return url;
  }
  // Assuming API_URL is available globally or passed as prop if needed
  return `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${url}`;
}

