
import axios from 'axios';

// Busca a URL da API e o Token do ambiente
const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;
const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

// Cria uma instância do Axios para a API do Strapi
const strapiApi = axios.create({
  baseURL: API_URL,
  headers: {
    'Authorization': `Bearer ${API_TOKEN}`,
    'Content-Type': 'application/json',
  },
});

// Interfaces para tipagem dos dados do Strapi
export interface StrapiImageAttributes {
  name: string;
  alternativeText?: string;
  caption?: string;
  width: number;
  height: number;
  formats?: {
    small?: { url: string; width: number; height: number };
    medium?: { url: string; width: number; height: number };
    thumbnail?: { url: string; width: number; height: number };
  };
  url: string;
  provider: string;
  provider_metadata?: object;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface StrapiImage {
  id: number;
  attributes: StrapiImageAttributes;
}

export interface CategoryAttributes {
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Category {
  id: number;
  attributes: CategoryAttributes;
}

export interface TagAttributes {
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Tag {
  id: number;
  attributes: TagAttributes;
}

// Interface principal para um Post, refletindo a estrutura do Strapi v4/v5
export interface PostAttributes {
  title: string;
  content: string;
  slug: string;
  seo_title?: string;
  seo_description?: string;
  image_alt?: string;
  featured_image?: { data: StrapiImage }; // Imagem destacada é um único objeto de dados
  categories?: { data: Category[] };
  tags?: { data: Tag[] };
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Post {
  id: number;
  attributes: PostAttributes;
}

export interface StrapiResponse<T> {
  data: T[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

// Função para buscar todos os posts
export const getPosts = async (): Promise<Post[]> => {
  try {
    if (!API_URL || !API_TOKEN) {
      console.warn('Variáveis de ambiente do Strapi não configuradas.');
      return [];
    }
    const response = await strapiApi.get<StrapiResponse<Post>>('/api/posts?populate=deep');
    return response.data.data || [];
  } catch (error) {
    console.error('Erro ao buscar posts:', error);
    return [];
  }
};

// Função para buscar um post específico pelo slug
export const getPostBySlug = async (slug: string): Promise<Post | null> => {
  try {
    if (!API_URL || !API_TOKEN) {
      console.warn('Variáveis de ambiente do Strapi não configuradas.');
      return null;
    }
    const response = await strapiApi.get<StrapiResponse<Post>>(`/api/posts?filters[slug][$eq]=${slug}&populate=deep`);
    return response.data.data[0] || null;
  } catch (error) {
    console.error(`Erro ao buscar post pelo slug: ${slug}`, error);
    return null;
  }
};

/**
 * Retorna a URL completa de uma imagem do Strapi.
 * Lida com URLs que já são absolutas (Cloudinary) e URLs relativas (upload local).
 */
export const getImageUrl = (image: StrapiImage | undefined, format?: 'small' | 'medium' | 'thumbnail'): string => {
  // Se não houver imagem ou atributos, retorna um placeholder
  if (!image || !image.attributes || !image.attributes.url) {
    return 'https://via.placeholder.com/800x600.png?text=Imagem+Nao+Disponivel';
  }

  let url = image.attributes.url;

  // Se um formato específico foi solicitado e existe, usa a URL desse formato
  if (format && image.attributes.formats && image.attributes.formats[format]) {
    url = image.attributes.formats[format]!.url;
  }

  // Se a URL já for completa (ex: Cloudinary), retorna diretamente
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('//')) {
    return url;
  }

  // Se a URL for relativa (ex: /uploads/...), adiciona a URL base da API
  return `${API_URL}${url}`;
};

export default strapiApi;

