'use client';

import { useState, useEffect, useCallback } from 'react';

interface AccessibilityPreferences {
  reducedMotion: boolean;
  highContrast: boolean;
  largeText: boolean;
  darkMode: boolean;
  fontSize: number;
}

interface AccessibilityActions {
  toggleHighContrast: () => void;
  toggleLargeText: () => void;
  toggleDarkMode: () => void;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
  resetFontSize: () => void;
  announceToScreenReader: (message: string) => void;
}

export function useAccessibility(): AccessibilityPreferences & AccessibilityActions {
  const [preferences, setPreferences] = useState<AccessibilityPreferences>({
    reducedMotion: false,
    highContrast: false,
    largeText: false,
    darkMode: false,
    fontSize: 16,
  });

  // Carregar preferências salvas
  useEffect(() => {
    const savedPrefs = localStorage.getItem('accessibility-preferences');
    if (savedPrefs) {
      try {
        const parsed = JSON.parse(savedPrefs);
        setPreferences(prev => ({ ...prev, ...parsed }));
      } catch (error) {
        console.error('Erro ao carregar preferências de acessibilidade:', error);
      }
    }
  }, []);

  // Detectar preferências do sistema
  useEffect(() => {
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const updateSystemPreferences = () => {
      setPreferences(prev => ({
        ...prev,
        reducedMotion: reducedMotionQuery.matches,
        // Só atualiza se não foi definido manualmente
        ...(prev.highContrast === false && { highContrast: highContrastQuery.matches }),
        ...(prev.darkMode === false && { darkMode: darkModeQuery.matches }),
      }));
    };

    updateSystemPreferences();

    reducedMotionQuery.addEventListener('change', updateSystemPreferences);
    highContrastQuery.addEventListener('change', updateSystemPreferences);
    darkModeQuery.addEventListener('change', updateSystemPreferences);

    return () => {
      reducedMotionQuery.removeEventListener('change', updateSystemPreferences);
      highContrastQuery.removeEventListener('change', updateSystemPreferences);
      darkModeQuery.removeEventListener('change', updateSystemPreferences);
    };
  }, []);

  // Salvar preferências quando mudarem
  useEffect(() => {
    localStorage.setItem('accessibility-preferences', JSON.stringify(preferences));
    
    // Aplicar classes CSS no documento
    const root = document.documentElement;
    
    if (preferences.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    if (preferences.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }
    
    if (preferences.darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // Aplicar tamanho da fonte
    root.style.fontSize = `${preferences.fontSize}px`;
    
  }, [preferences]);

  const toggleHighContrast = useCallback(() => {
    setPreferences(prev => ({ ...prev, highContrast: !prev.highContrast }));
  }, []);

  const toggleLargeText = useCallback(() => {
    setPreferences(prev => ({ ...prev, largeText: !prev.largeText }));
  }, []);

  const toggleDarkMode = useCallback(() => {
    setPreferences(prev => ({ ...prev, darkMode: !prev.darkMode }));
  }, []);

  const increaseFontSize = useCallback(() => {
    setPreferences(prev => ({ 
      ...prev, 
      fontSize: Math.min(prev.fontSize + 2, 24) 
    }));
  }, []);

  const decreaseFontSize = useCallback(() => {
    setPreferences(prev => ({ 
      ...prev, 
      fontSize: Math.max(prev.fontSize - 2, 12) 
    }));
  }, []);

  const resetFontSize = useCallback(() => {
    setPreferences(prev => ({ ...prev, fontSize: 16 }));
  }, []);

  const announceToScreenReader = useCallback((message: string) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }, []);

  return {
    ...preferences,
    toggleHighContrast,
    toggleLargeText,
    toggleDarkMode,
    increaseFontSize,
    decreaseFontSize,
    resetFontSize,
    announceToScreenReader,
  };
}

// Hook para navegação por teclado
export function useKeyboardNavigation() {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content (Alt + M)
      if (event.altKey && event.key === 'm') {
        event.preventDefault();
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.focus();
        }
      }
      
      // Skip to navigation (Alt + N)
      if (event.altKey && event.key === 'n') {
        event.preventDefault();
        const navigation = document.getElementById('main-navigation');
        if (navigation) {
          navigation.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);
}

// Hook para foco visível
export function useFocusVisible() {
  useEffect(() => {
    let hadKeyboardEvent = false;

    const keyboardThrottleTimeout = 100;
    let keyboardThrottleTimeoutId: NodeJS.Timeout;

    const onKeyDown = () => {
      hadKeyboardEvent = true;
      clearTimeout(keyboardThrottleTimeoutId);
      keyboardThrottleTimeoutId = setTimeout(() => {
        hadKeyboardEvent = false;
      }, keyboardThrottleTimeout);
    };

    const onFocus = (event: FocusEvent) => {
      if (hadKeyboardEvent) {
        (event.target as HTMLElement)?.classList.add('focus-visible');
      }
    };

    const onBlur = (event: FocusEvent) => {
      (event.target as HTMLElement)?.classList.remove('focus-visible');
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('focus', onFocus, true);
    document.addEventListener('blur', onBlur, true);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('focus', onFocus, true);
      document.removeEventListener('blur', onBlur, true);
      clearTimeout(keyboardThrottleTimeoutId);
    };
  }, []);
}
