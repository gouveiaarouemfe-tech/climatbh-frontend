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
  }

  // Se ainda não temos uma URL válida, retorna placeholder
  if (!url) {
    console.warn("getImageUrl: URL da imagem não encontrada. Objeto de imagem: ", JSON.stringify(image));
    return 'https://via.placeholder.com/800x600.png?text=URL_IMAGEM_NAO_ENCONTRADA';
  }

  // Se a URL já for completa (http, https, ou //), retorna diretamente
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
