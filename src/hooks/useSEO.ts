import { useEffect } from 'react';
import { useRouter } from 'next/router';

interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

export function useSEO(config: SEOConfig) {
  const router = useRouter();

  useEffect(() => {
    // Atualizar título da página
    if (config.title) {
      document.title = config.title;
    }

    // Atualizar meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && config.description) {
      metaDescription.setAttribute('content', config.description);
    }

    // Atualizar meta keywords
    if (config.keywords && config.keywords.length > 0) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', config.keywords.join(', '));
    }

    // Atualizar canonical URL
    const canonicalUrl = config.canonicalUrl || `${window.location.origin}${router.asPath}`;
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // Atualizar robots meta tag
    const robotsDirectives = [];
    if (config.noindex) robotsDirectives.push('noindex');
    else robotsDirectives.push('index');
    
    if (config.nofollow) robotsDirectives.push('nofollow');
    else robotsDirectives.push('follow');

    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute('content', robotsDirectives.join(', '));

  }, [config, router.asPath]);

  return {
    updateTitle: (newTitle: string) => {
      document.title = newTitle;
    },
    updateDescription: (newDescription: string) => {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', newDescription);
      }
    }
  };
}

// Hook para tracking de eventos SEO
export function useSEOTracking() {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      // Enviar evento de pageview para Google Analytics
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
          page_path: url,
        });
      }

      // Enviar evento para outras ferramentas de analytics
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'PageView');
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, parameters);
    }
  };

  return { trackEvent };
}
