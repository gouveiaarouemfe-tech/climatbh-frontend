import axios from 'axios';

// Busca a URL da API e o Token do ambiente
const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;
console.log("strapi.ts - API_URL (global):", API_URL);
console.log("strapi.ts - API_TOKEN (global, first 5 chars):", API_TOKEN ? API_TOKEN.substring(0, 5) : "TOKEN_NOT_SET");

// Cria uma instância do Axios para a API do Strapi
const strapiApi = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interfaces para tipagem dos dados do Strapi
export interface StrapiImageFormats {
  small?: { url: string; width: number; height: number; ext: string; hash: string; mime: string; name: string; path: string | null; size: number; sizeInBytes: number };
  medium?: { url: string; width: number; height: number; ext: string; hash: string; mime: string; name: string; path: string | null; size: number; sizeInBytes: number };
  thumbnail?: { url: string; width: number; height: number; ext: string; hash: string; mime: string; name: string; path: string | null; size: number; sizeInBytes: number };
  large?: { url: string; width: number; height: number; ext: string; hash: string; mime: string; name: string; path: string | null; size: number; sizeInBytes: number };
}

export interface StrapiImageAttributes {
  name: string;
  alternativeText?: string;
  caption?: string;
  width: number;
  height: number;
  formats?: StrapiImageFormats;
  url: string;
  provider: string;
  provider_metadata?: object;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  ext: string;
  hash: string;
  mime: string;
  size: number;
  previewUrl: string | null;
  path: string | null;
}

export interface StrapiImage {
  id: number;
  documentId?: string;
  attributes?: StrapiImageAttributes;
  // Propriedades que podem estar diretamente na imagem (nova estrutura)
  name?: string;
  alternativeText?: string;
  caption?: string;
  width?: number;
  height?: number;
  formats?: Record<string, StrapiImageFormat>;
  hash?: string;
  ext?: string;
  mime?: string;
  size?: number;
  url?: string;
  previewUrl?: string | null;
  provider?: string;
  provider_metadata?: any;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}

export interface Category {
  id: number;
  documentId?: string;
  Category: string;
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Tag {
  id: number;
  documentId?: string;
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

// Interface principal para um Post, refletindo a estrutura real da API
export interface Post {
  id: number;
  documentId?: string;
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
  dados: T[]; // A API retorna diretamente 'dados' como propriedade principal
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
    console.log("GET_POSTS - API_URL:", API_URL);
    console.log("GET_POSTS - API_TOKEN (first 5 chars):", API_TOKEN ? API_TOKEN.substring(0, 5) : "TOKEN_NOT_SET");
    if (!API_URL) {
      console.warn('URL da API do Strapi não configurada.');
      return [];
    }
    // Usando populate=* para simplificar a depuração
    const res = await strapiApi.get<StrapiResponse<Post>>(`/api/posts?populate=*`);
    console.log("GET_POSTS - Status:", res.status);
    console.log("GET_POSTS - Data:", JSON.stringify(res.data, null, 2));
    console.log("GET_POSTS - Raw Response Data:", JSON.stringify(res.data, null, 2));
    console.log("GET_POSTS - Number of posts received:", res.data.dados?.length); // Acessando diretamente res.data.dados
    if (res.data.dados && res.data.dados.length > 0) { // Acessando diretamente res.data.dados
      const firstPost = res.data.dados[0]; // Acessando diretamente res.data.dados
      if (firstPost) {
        console.log("GET_POSTS - First post object:", JSON.stringify(firstPost, null, 2));
        console.log("GET_POSTS - First post title:", firstPost.title);
        console.log("GET_POSTS - First post featured image URL:", firstPost.featured_image?.[0]?.attributes?.url);
      } else {
        console.log("GET_POSTS - No first post found in data.");
      }
    }
    return res.data.dados || []; // Acessando diretamente res.data.dados
  } catch (error) {
    console.error('Erro ao buscar posts:', error);
    return [];
  }
};

// Função para buscar um post específico pelo slug
export const getPostBySlug = async (slug: string): Promise<Post | null> => {
  try {
    console.log("GET_POST_BY_SLUG - API_URL:", API_URL);
    console.log("GET_POST_BY_SLUG - API_TOKEN (first 5 chars):", API_TOKEN ? API_TOKEN.substring(0, 5) : "TOKEN_NOT_SET");
    if (!API_URL) {
      console.warn('URL da API do Strapi não configurada.');
      return null;
    }
    // Usando populate=* para simplificar a depuração
    const res = await strapiApi.get<StrapiResponse<Post>>(`/api/posts?filters[slug][$eq]=${slug}&populate=*`);
    console.log(`GET_POST_BY_SLUG (${slug}) - Status:`, res.status);
    console.log(`GET_POST_BY_SLUG (${slug}) - Data:`, JSON.stringify(res.data, null, 2));
    console.log(`GET_POST_BY_SLUG (${slug}) - Featured Image:`, res.data.dados?.[0]?.featured_image?.[0]?.attributes?.url); // Acessando diretamente res.data.dados
    return res.data.dados?.[0] || null; // Acessando diretamente res.data.dados
  } catch (error) {
    console.error(`Erro ao buscar post pelo slug: ${slug}`, error);
    return null;
  }
};

/**
 * Retorna a URL completa de uma imagem do Strapi.
 * Lida com URLs que já são absolutas (Cloudinary) e URLs relativas (upload local).
 */
export const getImageUrl = (image?: StrapiImage, format?: string): string => {
  // Se não houver imagem, retorna um placeholder
  if (!image) {
    return 'https://via.placeholder.com/800x600.png?text=Imagem+Nao+Disponivel';
  }

  // A imagem pode ter a estrutura direta ou com attributes
  let url = image.url || image.attributes?.url;

  // Se um formato específico foi solicitado e existe, usa a URL desse formato
  if (format) {
    const formats = image.formats || image.attributes?.formats;
    if (formats && formats[format]) {
      url = formats[format]!.url;
    }
  }  // Se ainda não temos uma URL válida, retorna placeholder
  if (!url) {
    console.warn("getImageUrl: URL da imagem não encontrada. Objeto de imagem: ", JSON.stringify(image));
    return 'https://via.placeholder.com/800x600.png?text=URL_IMAGEM_NAO_ENCONTRADA';
  }

  // Se a URL já for completa (http, https, ou //  ), retorna diretamente
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('//')) {
    return url;
  }

  // Se a URL for relativa (ex: /uploads/...), adiciona a URL base da API
  // Garante que API_URL esteja definida para construir a URL completa
  if (API_URL) {
    // Garante que não haja barras duplas no meio da URL
    const baseUrl = API_URL.endsWith('/') ? API_URL.slice(0, -1) : API_URL;
    const imageUrl = url.startsWith('/') ? url : `/${url}`;
    return `${baseUrl}${imageUrl}`;
  } else {
    // Se API_URL não estiver definida, não podemos construir uma URL absoluta para a imagem relativa.
    // Retorna um placeholder mais específico para depuração.
    console.warn("API_URL não está definida. Não foi possível construir a URL absoluta para a imagem. Retornando placeholder: API_URL_UNDEFINIDA");
    return 'https://via.placeholder.com/800x600.png?text=API_URL_INDEFINIDA';
  }
};

export default strapiApi;
