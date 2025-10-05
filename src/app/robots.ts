import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/sobre',
          '/contato',
          '/instalacao-vrf',
          '/manutencao-vrf',
          '/instalacao-chiller',
          '/manutencao-chiller',
          '/instalacao-splitao',
          '/manutencao-splitao',
          '/contratos-pmoc',
          '/blog',
          '/blog/*',
          '/images/',
          '/_next/static/',
          '/_next/image/',
        ],
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/private/',
          '*.json$',
          '*.xml$',
          '/favicon.ico',
        ],
        crawlDelay: 1,
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
        ],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
        ],
      },
    ],
    sitemap: 'https://www.climatbh.com.br/sitemap.xml',
    host: 'https://www.climatbh.com.br',
  }
}
