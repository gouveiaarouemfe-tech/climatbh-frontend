'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log do erro global para monitoramento
    console.error('Erro global da aplicação:', error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 flex items-center justify-center px-4">
          <div className="max-w-md w-full text-center">
            <div className="mb-8">
              <div className="flex justify-center mb-4">
                <AlertTriangle className="w-16 h-16 text-red-500" />
              </div>
              <h1 className="text-4xl font-bold text-red-600 mb-4">
                Erro Crítico
              </h1>
              <p className="text-gray-600 mb-8">
                Ocorreu um erro crítico na aplicação. Por favor, recarregue a página.
              </p>
            </div>

            <button
              onClick={reset}
              className="inline-flex items-center justify-center px-6 py-3 
                       bg-red-600 text-white font-medium rounded-lg
                       hover:bg-red-700 transition-colors duration-200
                       focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              Recarregar Página
            </button>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-2">
                Precisa de suporte técnico?
              </p>
              <div className="space-y-1">
                <p className="text-sm text-gray-600">
                  <strong>Telefone:</strong> (31) 99535-2139
                </p>
                <p className="text-sm text-gray-600">
                  <strong>WhatsApp:</strong> (31) 99535-2139
                </p>
              </div>
              
              {error.digest && (
                <p className="text-xs text-gray-400 mt-4">
                  ID do erro: {error.digest}
                </p>
              )}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
