'use client';

import { useEffect, useState, useCallback } from 'react';

interface PerformanceMetrics {
  fcp: number | null; // First Contentful Paint
  lcp: number | null; // Largest Contentful Paint
  fid: number | null; // First Input Delay
  cls: number | null; // Cumulative Layout Shift
  ttfb: number | null; // Time to First Byte
}

interface NetworkInfo {
  effectiveType: string;
  downlink: number;
  rtt: number;
  saveData: boolean;
}

export function usePerformance() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
  });

  const [networkInfo, setNetworkInfo] = useState<NetworkInfo | null>(null);
  const [isSlowConnection, setIsSlowConnection] = useState(false);

  // Detectar informações de rede
  useEffect(() => {
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      
      const updateNetworkInfo = () => {
        const info: NetworkInfo = {
          effectiveType: connection.effectiveType || 'unknown',
          downlink: connection.downlink || 0,
          rtt: connection.rtt || 0,
          saveData: connection.saveData || false,
        };
        
        setNetworkInfo(info);
        setIsSlowConnection(
          info.effectiveType === 'slow-2g' || 
          info.effectiveType === '2g' || 
          info.saveData
        );
      };

      updateNetworkInfo();
      connection.addEventListener('change', updateNetworkInfo);

      return () => {
        connection.removeEventListener('change', updateNetworkInfo);
      };
    }
  }, []);

  // Coletar métricas de performance
  useEffect(() => {
    // Web Vitals usando Performance Observer
    const observePerformance = () => {
      // First Contentful Paint
      if ('PerformanceObserver' in window) {
        try {
          const fcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
            if (fcpEntry) {
              setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
            }
          });
          fcpObserver.observe({ entryTypes: ['paint'] });

          // Largest Contentful Paint
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            if (lastEntry) {
              setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
            }
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

          // First Input Delay
          const fidObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry: any) => {
              if (entry.processingStart && entry.startTime) {
                const fid = entry.processingStart - entry.startTime;
                setMetrics(prev => ({ ...prev, fid }));
              }
            });
          });
          fidObserver.observe({ entryTypes: ['first-input'] });

          // Cumulative Layout Shift
          let clsValue = 0;
          const clsObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry: any) => {
              if (!entry.hadRecentInput) {
                clsValue += entry.value;
                setMetrics(prev => ({ ...prev, cls: clsValue }));
              }
            });
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });

        } catch (error) {
          console.warn('Performance Observer não suportado:', error);
        }
      }

      // Time to First Byte usando Navigation Timing
      if ('performance' in window && 'getEntriesByType' in performance) {
        const navigationEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
        if (navigationEntries.length > 0) {
          const entry = navigationEntries[0];
          const ttfb = entry.responseStart - entry.requestStart;
          setMetrics(prev => ({ ...prev, ttfb }));
        }
      }
    };

    // Aguardar carregamento completo
    if (document.readyState === 'complete') {
      observePerformance();
    } else {
      window.addEventListener('load', observePerformance);
      return () => window.removeEventListener('load', observePerformance);
    }
  }, []);

  const getPerformanceScore = useCallback(() => {
    const { fcp, lcp, fid, cls } = metrics;
    
    let score = 0;
    let count = 0;

    // FCP: Good < 1.8s, Needs Improvement < 3s, Poor >= 3s
    if (fcp !== null) {
      if (fcp < 1800) score += 100;
      else if (fcp < 3000) score += 50;
      else score += 0;
      count++;
    }

    // LCP: Good < 2.5s, Needs Improvement < 4s, Poor >= 4s
    if (lcp !== null) {
      if (lcp < 2500) score += 100;
      else if (lcp < 4000) score += 50;
      else score += 0;
      count++;
    }

    // FID: Good < 100ms, Needs Improvement < 300ms, Poor >= 300ms
    if (fid !== null) {
      if (fid < 100) score += 100;
      else if (fid < 300) score += 50;
      else score += 0;
      count++;
    }

    // CLS: Good < 0.1, Needs Improvement < 0.25, Poor >= 0.25
    if (cls !== null) {
      if (cls < 0.1) score += 100;
      else if (cls < 0.25) score += 50;
      else score += 0;
      count++;
    }

    return count > 0 ? Math.round(score / count) : null;
  }, [metrics]);

  const reportPerformance = useCallback(() => {
    const score = getPerformanceScore();
    
    // Enviar métricas para analytics (exemplo)
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'performance_metrics', {
        custom_map: {
          fcp: metrics.fcp,
          lcp: metrics.lcp,
          fid: metrics.fid,
          cls: metrics.cls,
          ttfb: metrics.ttfb,
          score: score,
          network_type: networkInfo?.effectiveType,
          is_slow_connection: isSlowConnection,
        }
      });
    }

    return { metrics, score, networkInfo };
  }, [metrics, networkInfo, isSlowConnection, getPerformanceScore]);

  return {
    metrics,
    networkInfo,
    isSlowConnection,
    performanceScore: getPerformanceScore(),
    reportPerformance,
  };
}

// Hook para otimizações baseadas em performance
export function usePerformanceOptimizations() {
  const { isSlowConnection, networkInfo } = usePerformance();
  
  const shouldReduceAnimations = isSlowConnection;
  const shouldLazyLoadImages = isSlowConnection;
  const shouldPreloadCriticalResources = !isSlowConnection;
  const shouldUseWebP = 'webp' in (new Image());
  
  const getImageQuality = useCallback(() => {
    if (isSlowConnection) return 60;
    if (networkInfo?.effectiveType === '3g') return 75;
    return 85;
  }, [isSlowConnection, networkInfo]);

  const getImageSizes = useCallback(() => {
    if (isSlowConnection) {
      return '(max-width: 768px) 50vw, 25vw';
    }
    return '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';
  }, [isSlowConnection]);

  return {
    shouldReduceAnimations,
    shouldLazyLoadImages,
    shouldPreloadCriticalResources,
    shouldUseWebP,
    getImageQuality,
    getImageSizes,
    isSlowConnection,
  };
}

// Hook para monitoramento de recursos
export function useResourceMonitoring() {
  const [resourceMetrics, setResourceMetrics] = useState<{
    totalResources: number;
    totalSize: number;
    slowResources: string[];
  }>({
    totalResources: 0,
    totalSize: 0,
    slowResources: [],
  });

  useEffect(() => {
    const monitorResources = () => {
      if ('performance' in window) {
        const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
        
        let totalSize = 0;
        const slowResources: string[] = [];
        
        resources.forEach(resource => {
          // Calcular tamanho aproximado
          if (resource.transferSize) {
            totalSize += resource.transferSize;
          }
          
          // Identificar recursos lentos (> 2s)
          const loadTime = resource.responseEnd - resource.startTime;
          if (loadTime > 2000) {
            slowResources.push(resource.name);
          }
        });

        setResourceMetrics({
          totalResources: resources.length,
          totalSize,
          slowResources,
        });
      }
    };

    // Monitorar após carregamento
    if (document.readyState === 'complete') {
      monitorResources();
    } else {
      window.addEventListener('load', monitorResources);
      return () => window.removeEventListener('load', monitorResources);
    }
  }, []);

  return resourceMetrics;
}
