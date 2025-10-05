'use client';

import { useLazyImage } from '@/hooks/useLazyLoad';
import { ImageIcon } from 'lucide-react';

interface LazyImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  placeholderClassName?: string;
  threshold?: number;
  rootMargin?: string;
  quality?: number;
  sizes?: string;
}

export default function LazyImage({
  src,
  alt,
  width,
  height,
  className = '',
  placeholderClassName = '',
  threshold = 0.1,
  rootMargin = '50px',
  quality = 85,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
}: LazyImageProps) {
  const {
    ref,
    imageSrc,
    isLoaded,
    hasError,
    handleLoad,
    handleError
  } = useLazyImage(src, { threshold, rootMargin });

  // Gerar URL otimizada se for uma imagem do Strapi
  const getOptimizedSrc = (originalSrc: string) => {
    if (originalSrc.includes('strapi') || originalSrc.includes('uploads')) {
      // Adicionar parâmetros de otimização para Strapi
      const separator = originalSrc.includes('?') ? '&' : '?';
      return `${originalSrc}${separator}format=webp&quality=${quality}`;
    }
    return originalSrc;
  };

  const optimizedSrc = imageSrc ? getOptimizedSrc(imageSrc) : undefined;

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      {/* Placeholder enquanto não carrega */}
      {!imageSrc && (
        <div className={`
          w-full h-full bg-gray-200 animate-pulse flex items-center justify-center
          ${placeholderClassName}
        `}>
          <ImageIcon className="w-8 h-8 text-gray-400" />
        </div>
      )}

      {/* Imagem com erro */}
      {hasError && (
        <div className={`
          w-full h-full bg-gray-100 flex items-center justify-center border-2 border-dashed border-gray-300
          ${placeholderClassName}
        `}>
          <div className="text-center text-gray-500">
            <ImageIcon className="w-8 h-8 mx-auto mb-2" />
            <p className="text-sm">Imagem não disponível</p>
          </div>
        </div>
      )}

      {/* Imagem carregada */}
      {optimizedSrc && !hasError && (
        <>
          {/* Skeleton loader */}
          {!isLoaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse" />
          )}
          
          <img
            src={optimizedSrc}
            alt={alt}
            width={width}
            height={height}
            sizes={sizes}
            className={`
              w-full h-full object-cover transition-opacity duration-300
              ${isLoaded ? 'opacity-100' : 'opacity-0'}
            `}
            onLoad={handleLoad}
            onError={handleError}
            loading="lazy"
          />
        </>
      )}
    </div>
  );
}

// Componente para galeria de imagens com lazy loading
export function LazyImageGallery({ 
  images, 
  className = '',
  itemClassName = ''
}: { 
  images: Array<{ src: string; alt: string; width?: number; height?: number }>;
  className?: string;
  itemClassName?: string;
}) {
  return (
    <div className={`grid gap-4 ${className}`}>
      {images.map((image, index) => (
        <div key={index} className={itemClassName}>
          <LazyImage
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="w-full h-full"
          />
        </div>
      ))}
    </div>
  );
}

// Componente para avatar com lazy loading
export function LazyAvatar({
  src,
  alt,
  size = 40,
  className = ''
}: {
  src: string;
  alt: string;
  size?: number;
  className?: string;
}) {
  return (
    <LazyImage
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={`rounded-full ${className}`}
      placeholderClassName="rounded-full"
    />
  );
}
