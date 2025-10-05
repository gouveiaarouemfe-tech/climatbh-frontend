import { MetadataRoute } from 'next';
import { getPosts } from './strapi';

export interface SitemapEntry {
  url: string;
  lastModified?: Date;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

export class SitemapGenerator {
  private baseUrl: string;

  constructor(baseUrl: string = 'https://www.climatbh.com.br') {
    this.baseUrl = baseUrl;
  }

  // Páginas estáticas do site
  getStaticPages(): SitemapEntry[] {
    return [
      {
        url: this.baseUrl,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1.0,
      },
      {
        url: `${this.baseUrl}/sobre`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: `${this.baseUrl}/contato`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: `${this.baseUrl}/instalacao-vrf`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${this.baseUrl}/manutencao-vrf`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${this.baseUrl}/instalacao-chiller`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${this.baseUrl}/manutencao-chiller`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${this.baseUrl}/instalacao-splitao`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${this.baseUrl}/manutencao-splitao`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${this.baseUrl}/contratos-pmoc`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${this.baseUrl}/blog`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.7,
      },
      {
        url: `${this.baseUrl}/politica-privacidade`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.3,
      },
      {
        url: `${this.baseUrl}/termos-uso`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.3,
      },
    ];
  }

  // Páginas dinâmicas do blog
  async getBlogPages(): Promise<SitemapEntry[]> {
    try {
      const posts = await getPosts();
      return posts
        .filter(post => post.slug && post.publishedAt)
        .map(post => ({
          url: `${this.baseUrl}/blog/${post.slug}`,
          lastModified: new Date(post.updatedAt || post.publishedAt),
          changeFrequency: 'weekly' as const,
          priority: 0.6,
        }));
    } catch (error) {
      console.error('Erro ao buscar posts para sitemap:', error);
      return [];
    }
  }

  // Gerar sitemap completo
  async generateSitemap(): Promise<MetadataRoute.Sitemap> {
    const staticPages = this.getStaticPages();
    const blogPages = await this.getBlogPages();
    
    return [...staticPages, ...blogPages];
  }

  // Gerar sitemap em formato XML
  async generateXMLSitemap(): Promise<string> {
    const sitemap = await this.generateSitemap();
    
    const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
    const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
    const urlsetClose = '</urlset>';
    
    const urls = sitemap.map(entry => `
  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastModified instanceof Date ? entry.lastModified.toISOString() : new Date().toISOString()}</lastmod>
    <changefreq>${entry.changeFrequency}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`).join('');
    
    return `${xmlHeader}\n${urlsetOpen}${urls}\n${urlsetClose}`;
  }

  // Gerar índice de sitemap para sites grandes
  async generateSitemapIndex(): Promise<string> {
    const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
    const sitemapIndexOpen = '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
    const sitemapIndexClose = '</sitemapindex>';
    
    const sitemaps = [
      {
        loc: `${this.baseUrl}/sitemap-static.xml`,
        lastmod: new Date().toISOString()
      },
      {
        loc: `${this.baseUrl}/sitemap-blog.xml`,
        lastmod: new Date().toISOString()
      }
    ];
    
    const sitemapEntries = sitemaps.map(sitemap => `
  <sitemap>
    <loc>${sitemap.loc}</loc>
    <lastmod>${sitemap.lastmod}</lastmod>
  </sitemap>`).join('');
    
    return `${xmlHeader}\n${sitemapIndexOpen}${sitemapEntries}\n${sitemapIndexClose}`;
  }
}
