'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';
import { useAccessibility } from '@/hooks/useAccessibility';

interface AccessibleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  loadingText?: string;
  children: React.ReactNode;
}

const AccessibleButton = forwardRef<HTMLButtonElement, AccessibleButtonProps>(
  ({ 
    variant = 'primary', 
    size = 'md', 
    loading = false, 
    loadingText = 'Carregando...', 
    children, 
    className = '', 
    disabled,
    ...props 
  }, ref) => {
    const { reducedMotion } = useAccessibility();

    const baseClasses = `
      inline-flex items-center justify-center font-medium rounded-md
      focus:outline-none focus:ring-2 focus:ring-offset-2
      transition-colors duration-200
      ${reducedMotion ? '' : 'transition-all duration-200 hover:transform hover:scale-105'}
      disabled:opacity-50 disabled:cursor-not-allowed
      ${reducedMotion ? '' : 'active:scale-95'}
    `;

    const variants = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
      secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
      outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500',
      ghost: 'text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
    };

    const sizes = {
      sm: 'px-3 py-2 text-sm min-h-[36px]',
      md: 'px-4 py-2 text-base min-h-[44px]',
      lg: 'px-6 py-3 text-lg min-h-[52px]',
    };

    const classes = `
      ${baseClasses}
      ${variants[variant]}
      ${sizes[size]}
      ${className}
    `;

    return (
      <button
        ref={ref}
        className={classes}
        disabled={disabled || loading}
        aria-disabled={disabled || loading}
        aria-describedby={loading ? `${props.id}-loading` : undefined}
        {...props}
      >
        {loading ? (
          <>
            <svg 
              className={`animate-spin -ml-1 mr-3 h-5 w-5 ${reducedMotion ? 'animate-none' : ''}`}
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle 
                className="opacity-25" 
                cx="12" 
                cy="12" 
                r="10" 
                stroke="currentColor" 
                strokeWidth="4"
              />
              <path 
                className="opacity-75" 
                fill="currentColor" 
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span>{loadingText}</span>
            {loading && (
              <span id={`${props.id}-loading`} className="sr-only">
                Carregando, por favor aguarde
              </span>
            )}
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

AccessibleButton.displayName = 'AccessibleButton';

export default AccessibleButton;
