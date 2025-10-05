'use client';

import { useEffect, useRef, useState } from 'react';

interface UseLazyLoadOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useLazyLoad({
  threshold = 0.1,
  rootMargin = '50px',
  triggerOnce = true
}: UseLazyLoadOptions = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting;
        
        if (isVisible && (!triggerOnce || !hasTriggered)) {
          setIsIntersecting(true);
          setHasTriggered(true);
        } else if (!triggerOnce) {
          setIsIntersecting(isVisible);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce, hasTriggered]);

  return { ref, isIntersecting, hasTriggered };
}

// Hook para lazy loading de imagens
export function useLazyImage(src: string, options?: UseLazyLoadOptions) {
  const { ref, isIntersecting } = useLazyLoad(options);
  const [imageSrc, setImageSrc] = useState<string | undefined>();
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (isIntersecting && !imageSrc) {
      setImageSrc(src);
    }
  }, [isIntersecting, src, imageSrc]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  return {
    ref,
    imageSrc,
    isLoaded,
    hasError,
    handleLoad,
    handleError
  };
}

// Hook para lazy loading de dados
export function useLazyData<T>(
  fetchFunction: () => Promise<T>,
  options?: UseLazyLoadOptions
) {
  const { ref, isIntersecting } = useLazyLoad(options);
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (isIntersecting && !data && !isLoading) {
      setIsLoading(true);
      setError(null);
      
      fetchFunction()
        .then(setData)
        .catch(setError)
        .finally(() => setIsLoading(false));
    }
  }, [isIntersecting, data, isLoading, fetchFunction]);

  return {
    ref,
    data,
    isLoading,
    error,
    refetch: () => {
      setData(null);
      setError(null);
    }
  };
}
