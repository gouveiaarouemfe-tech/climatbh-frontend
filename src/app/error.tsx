'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { RefreshCw, Home, AlertTriangle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log do erro para monitoramento
    console.error('Erro da aplicação:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="flex justify-center mb-4">
            <AlertTriangle className="w-16 h-16 text-red-500" />
          </div>
          <h1 className="text-4xl font-bold text-red-600 mb-4">
            Ops! Algo deu errado
          </h1>
          <p className="text-gray-600 mb-8">
            Ocorreu um erro inesperado. Nossa equipe foi notificada e está trabalhando para resolver o problema.
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center w-full px-6 py-3 
                     bg-red-600 text-white font-medium rounded-lg
                     hover:bg-red-700 transition-colors duration-200
                     focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Tentar Novamente
          </button>

          <Link
            href="/"
            className="inline-flex items-center justify-center w-full px-6 py-3 
                     border-2 border-red-600 text-red-600 font-medium rounded-lg
                     hover:bg-red-600 hover:text-white transition-colors duration-200
                     focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            <Home className="w-5 h-5 mr-2" />
            Voltar ao Início
          </Link>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-2">
            Se o problema persistir, entre em contato:
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
  );
}
