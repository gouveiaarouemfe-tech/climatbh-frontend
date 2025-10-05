'use client';

import { useState, useEffect } from 'react';

interface AccessibilityPreferences {
  reducedMotion: boolean;
  highContrast: boolean;
  largeText: boolean;
}

export function useAccessibility(): AccessibilityPreferences {
  const [preferences, setPreferences] = useState<AccessibilityPreferences>({
    reducedMotion: false,
    highContrast: false,
    largeText: false,
  });

  useEffect(() => {
    // Detectar preferência por movimento reduzido
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    // Detectar preferência por alto contraste
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
    
    // Detectar preferência por texto grande
    const largeTextQuery = window.matchMedia('(prefers-reduced-data: reduce)');

    const updatePreferences = () => {
      setPreferences({
        reducedMotion: reducedMotionQuery.matches,
        highContrast: highContrastQuery.matches,
        largeText: largeTextQuery.matches,
      });
    };

    // Configurar inicial
    updatePreferences();

    // Escutar mudanças
    reducedMotionQuery.addEventListener('change', updatePreferences);
    highContrastQuery.addEventListener('change', updatePreferences);
    largeTextQuery.addEventListener('change', updatePreferences);

    return () => {
      reducedMotionQuery.removeEventListener('change', updatePreferences);
      highContrastQuery.removeEventListener('change', updatePreferences);
      largeTextQuery.removeEventListener('change', updatePreferences);
    };
  }, []);

  return preferences;
}
