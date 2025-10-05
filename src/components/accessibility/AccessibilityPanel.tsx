'use client';

import { useState } from 'react';
import { 
  Settings, 
  Eye, 
  Type, 
  Moon, 
  Sun, 
  Plus, 
  Minus, 
  RotateCcw,
  X,
  Accessibility
} from 'lucide-react';
import { useAccessibility } from '@/hooks/useAccessibility';

export default function AccessibilityPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const {
    highContrast,
    largeText,
    darkMode,
    fontSize,
    toggleHighContrast,
    toggleLargeText,
    toggleDarkMode,
    increaseFontSize,
    decreaseFontSize,
    resetFontSize,
    announceToScreenReader
  } = useAccessibility();

  const handleToggle = (action: () => void, message: string) => {
    action();
    announceToScreenReader(message);
  };

  return (
    <>
      {/* Botão flutuante de acessibilidade */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-50 bg-blue-600 text-white p-3 rounded-full 
                   shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 
                   focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        aria-label="Abrir painel de acessibilidade"
        title="Opções de Acessibilidade"
      >
        <Accessibility className="w-6 h-6" />
      </button>

      {/* Painel de acessibilidade */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                <Settings className="w-5 h-5 mr-2" />
                Opções de Acessibilidade
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 focus:outline-none 
                         focus:ring-2 focus:ring-blue-500 rounded"
                aria-label="Fechar painel"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Conteúdo */}
            <div className="p-4 space-y-6">
              {/* Contraste */}
              <div className="space-y-2">
                <h3 className="font-medium text-gray-900 flex items-center">
                  <Eye className="w-4 h-4 mr-2" />
                  Contraste
                </h3>
                <button
                  onClick={() => handleToggle(
                    toggleHighContrast, 
                    highContrast ? 'Alto contraste desativado' : 'Alto contraste ativado'
                  )}
                  className={`w-full p-3 rounded-lg border-2 transition-colors text-left
                    ${highContrast 
                      ? 'border-blue-500 bg-blue-50 text-blue-900' 
                      : 'border-gray-200 hover:border-gray-300'
                    }`}
                  aria-pressed={highContrast}
                >
                  <div className="flex items-center justify-between">
                    <span>Alto Contraste</span>
                    <div className={`w-4 h-4 rounded ${highContrast ? 'bg-blue-500' : 'bg-gray-300'}`} />
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    Aumenta o contraste para melhor visibilidade
                  </p>
                </button>
              </div>

              {/* Tema */}
              <div className="space-y-2">
                <h3 className="font-medium text-gray-900 flex items-center">
                  {darkMode ? <Moon className="w-4 h-4 mr-2" /> : <Sun className="w-4 h-4 mr-2" />}
                  Tema
                </h3>
                <button
                  onClick={() => handleToggle(
                    toggleDarkMode, 
                    darkMode ? 'Tema claro ativado' : 'Tema escuro ativado'
                  )}
                  className={`w-full p-3 rounded-lg border-2 transition-colors text-left
                    ${darkMode 
                      ? 'border-gray-600 bg-gray-800 text-white' 
                      : 'border-gray-200 hover:border-gray-300'
                    }`}
                  aria-pressed={darkMode}
                >
                  <div className="flex items-center justify-between">
                    <span>Modo Escuro</span>
                    {darkMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                  </div>
                  <p className={`text-sm mt-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Reduz o brilho da tela
                  </p>
                </button>
              </div>

              {/* Tamanho do texto */}
              <div className="space-y-2">
                <h3 className="font-medium text-gray-900 flex items-center">
                  <Type className="w-4 h-4 mr-2" />
                  Tamanho do Texto
                </h3>
                
                <div className="space-y-3">
                  <button
                    onClick={() => handleToggle(
                      toggleLargeText, 
                      largeText ? 'Texto grande desativado' : 'Texto grande ativado'
                    )}
                    className={`w-full p-3 rounded-lg border-2 transition-colors text-left
                      ${largeText 
                        ? 'border-blue-500 bg-blue-50 text-blue-900' 
                        : 'border-gray-200 hover:border-gray-300'
                      }`}
                    aria-pressed={largeText}
                  >
                    <div className="flex items-center justify-between">
                      <span>Texto Grande</span>
                      <div className={`w-4 h-4 rounded ${largeText ? 'bg-blue-500' : 'bg-gray-300'}`} />
                    </div>
                  </button>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleToggle(decreaseFontSize, 'Tamanho da fonte diminuído')}
                      className="p-2 border border-gray-300 rounded hover:bg-gray-50 
                               focus:outline-none focus:ring-2 focus:ring-blue-500"
                      aria-label="Diminuir fonte"
                      disabled={fontSize <= 12}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    
                    <div className="flex-1 text-center">
                      <span className="text-sm text-gray-600">Fonte: {fontSize}px</span>
                    </div>
                    
                    <button
                      onClick={() => handleToggle(increaseFontSize, 'Tamanho da fonte aumentado')}
                      className="p-2 border border-gray-300 rounded hover:bg-gray-50 
                               focus:outline-none focus:ring-2 focus:ring-blue-500"
                      aria-label="Aumentar fonte"
                      disabled={fontSize >= 24}
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                    
                    <button
                      onClick={() => handleToggle(resetFontSize, 'Tamanho da fonte resetado')}
                      className="p-2 border border-gray-300 rounded hover:bg-gray-50 
                               focus:outline-none focus:ring-2 focus:ring-blue-500"
                      aria-label="Resetar fonte"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Atalhos de teclado */}
              <div className="space-y-2">
                <h3 className="font-medium text-gray-900">Atalhos de Teclado</h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><kbd className="px-2 py-1 bg-gray-100 rounded">Alt + M</kbd> - Ir para conteúdo principal</p>
                  <p><kbd className="px-2 py-1 bg-gray-100 rounded">Alt + N</kbd> - Ir para navegação</p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t bg-gray-50">
              <p className="text-xs text-gray-500 text-center">
                Suas preferências são salvas automaticamente
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
