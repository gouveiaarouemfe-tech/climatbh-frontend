import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;
const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

const strapiApi = axios.create({
  baseURL: API_URL,
  headers: {
    'Authorization': `Bearer ${API_TOKEN}`,
    'Content-Type': 'application/json',
  },
});

export interface StrapiImage {
  id: number;
  documentId: string;
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
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: string;
  provider: string;
  provider_metadata?: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Category {
  id: number;
  documentId: string;
  Category: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Tag {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Post {
  id: number;
  documentId: string;
  title: string;
  content: string;
  slug: string;
  seo_title?: string;
  seo_description?: string;
  image_alt?: string;
  featured_image?: StrapiImage[];
  categories?: Category[];
  tags?: Tag[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export const getPosts = async (): Promise<Post[]> => {
  try {
    const response = await strapiApi.get<StrapiResponse<Post[]>>('/api/posts?populate=*');
    return response.data.data;
  } catch (error) {
    console.error('Erro ao buscar posts:', error);
    return [];
  }
};

export const getPostBySlug = async (slug: string): Promise<Post | null> => {
  try {
    const response = await strapiApi.get<StrapiResponse<Post[]>>(`/api/posts?filters[slug][$eq]=${slug}&populate=*`);
    return response.data.data[0] || null;
  } catch (error) {
    console.error('Erro ao buscar post por slug:', error);
    return null;
  }
};

export const getImageUrl = (image: StrapiImage): string => {
  if (image.url.startsWith('http')) {
    return image.url;
  }
  return `${API_URL}${image.url}`;
};

export default strapiApi;

