import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Página não encontrada
          </h2>
          <p className="text-gray-600 mb-8">
            A página que você está procurando não existe ou foi movida.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center w-full px-6 py-3 
                     bg-blue-600 text-white font-medium rounded-lg
                     hover:bg-blue-700 transition-colors duration-200
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <Home className="w-5 h-5 mr-2" />
            Voltar ao Início
          </Link>

          <Link
            href="/blog"
            className="inline-flex items-center justify-center w-full px-6 py-3 
                     border-2 border-blue-600 text-blue-600 font-medium rounded-lg
                     hover:bg-blue-600 hover:text-white transition-colors duration-200
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Ver Blog
          </Link>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Precisa de ajuda? Entre em contato conosco:
          </p>
          <div className="mt-2 space-y-1">
            <p className="text-sm text-gray-600">
              <strong>Telefone:</strong> (31) 99535-2139
            </p>
            <p className="text-sm text-gray-600">
              <strong>WhatsApp:</strong> (31) 99535-2139
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
