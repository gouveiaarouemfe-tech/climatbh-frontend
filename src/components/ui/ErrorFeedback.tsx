import { AlertTriangle, RefreshCw, Home, Mail } from 'lucide-react';
import Link from 'next/link';

interface ErrorFeedbackProps {
  title?: string;
  message?: string;
  showRetry?: boolean;
  onRetry?: () => void;
  showHomeLink?: boolean;
  showContactInfo?: boolean;
  type?: 'error' | 'warning' | 'info';
  className?: string;
}

export default function ErrorFeedback({
  title = 'Algo deu errado',
  message = 'Ocorreu um erro inesperado. Tente novamente.',
  showRetry = true,
  onRetry,
  showHomeLink = true,
  showContactInfo = false,
  type = 'error',
  className = ''
}: ErrorFeedbackProps) {
  const typeStyles = {
    error: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      icon: 'text-red-500',
      title: 'text-red-800',
      message: 'text-red-600',
      button: 'bg-red-600 hover:bg-red-700 focus:ring-red-500'
    },
    warning: {
      bg: 'bg-yellow-50',
      border: 'border-yellow-200',
      icon: 'text-yellow-500',
      title: 'text-yellow-800',
      message: 'text-yellow-600',
      button: 'bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500'
    },
    info: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      icon: 'text-blue-500',
      title: 'text-blue-800',
      message: 'text-blue-600',
      button: 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500'
    }
  };

  const styles = typeStyles[type];

  return (
    <div className={`${styles.bg} ${styles.border} border rounded-lg p-6 ${className}`}>
      <div className="flex items-start space-x-3">
        <AlertTriangle className={`w-6 h-6 ${styles.icon} flex-shrink-0 mt-0.5`} />
        <div className="flex-1">
          <h3 className={`text-lg font-semibold ${styles.title} mb-2`}>
            {title}
          </h3>
          <p className={`${styles.message} mb-4`}>
            {message}
          </p>
          
          <div className="flex flex-wrap gap-3">
            {showRetry && onRetry && (
              <button
                onClick={onRetry}
                className={`inline-flex items-center px-4 py-2 text-white font-medium rounded-md 
                          ${styles.button} transition-colors duration-200
                          focus:outline-none focus:ring-2 focus:ring-offset-2`}
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Tentar Novamente
              </button>
            )}
            
            {showHomeLink && (
              <Link
                href="/"
                className="inline-flex items-center px-4 py-2 border border-gray-300 
                         text-gray-700 font-medium rounded-md hover:bg-gray-50 
                         transition-colors duration-200 focus:outline-none 
                         focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                <Home className="w-4 h-4 mr-2" />
                Página Inicial
              </Link>
            )}
          </div>
          
          {showContactInfo && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-2">
                Precisa de ajuda? Entre em contato:
              </p>
              <div className="flex flex-col space-y-1 text-sm text-gray-700">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>contato@climatbh.com.br</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>📞</span>
                  <span>(31) 99535-2139</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Componente específico para erro de conexão
export function ConnectionError({ onRetry }: { onRetry?: () => void }) {
  return (
    <ErrorFeedback
      title="Problema de Conexão"
      message="Não foi possível conectar com o servidor. Verifique sua conexão com a internet e tente novamente."
      onRetry={onRetry}
      showContactInfo={true}
      type="warning"
    />
  );
}

// Componente específico para erro de carregamento de dados
export function DataLoadError({ onRetry }: { onRetry?: () => void }) {
  return (
    <ErrorFeedback
      title="Erro ao Carregar Dados"
      message="Não foi possível carregar as informações solicitadas. Tente novamente em alguns instantes."
      onRetry={onRetry}
      type="error"
    />
  );
}

// Componente para quando não há dados
export function NoDataFound({ message = "Nenhum resultado encontrado." }: { message?: string }) {
  return (
    <ErrorFeedback
      title="Nenhum Resultado"
      message={message}
      showRetry={false}
      showHomeLink={false}
      type="info"
    />
  );
}
