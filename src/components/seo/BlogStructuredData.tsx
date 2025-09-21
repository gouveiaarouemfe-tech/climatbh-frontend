
import Script from 'next/script';
import { Post, getImageUrl } from '@/lib/strapi';

interface BlogStructuredDataProps {
  posts: Post[];
}

export default function BlogStructuredData({ posts }: BlogStructuredDataProps) {
  const blogPostingSchema = posts.map(post => ({
    '@type': 'BlogPosting',
    'headline': post.title,
    'image': post.featured_image?.[0] ? getImageUrl(post.featured_image[0]) : 'https://climatbh-site-frontend.onrender.com/images/logo-climatbh.png',
    'url': `https://climatbh-site-frontend.onrender.com/blog/${post.slug}`,
    'datePublished': post.publishedAt,
    'dateModified': post.updatedAt,
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
    'description': post.seo_description || post.content.substring(0, 160).replace(/[#*]/g, '') + '...',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `https://climatbh-site-frontend.onrender.com/blog/${post.slug}`,
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

