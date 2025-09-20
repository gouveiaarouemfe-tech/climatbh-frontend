
import Script from 'next/script';
import { Post } from '@/lib/strapi';

interface ArticleStructuredDataProps {
  post: Post;
  imageUrl?: string;
}

export default function ArticleStructuredData({ post, imageUrl }: ArticleStructuredDataProps) {
  const { title, content, publishedAt, updatedAt, seo_description, slug } = post;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': title,
    'image': imageUrl || 'https://climatbh-site-frontend.onrender.com/images/logo-climatbh.png',
    'datePublished': publishedAt,
    'dateModified': updatedAt,
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
    'description': seo_description || content.substring(0, 160).replace(/[#*]/g, '') + '...',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `https://climatbh-site-frontend.onrender.com/blog/${slug}`,
    },
  };

  return (
    <Script
      id="article-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
    />
  );
}

