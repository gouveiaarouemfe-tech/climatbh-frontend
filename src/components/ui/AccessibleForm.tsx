'use client';

import { InputHTMLAttributes, TextareaHTMLAttributes, forwardRef } from 'react';

// Input Field Component
interface AccessibleInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  hint?: string;
  required?: boolean;
}

export const AccessibleInput = forwardRef<HTMLInputElement, AccessibleInputProps>(
  ({ label, error, hint, required, id, className = '', ...props }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    const errorId = `${inputId}-error`;
    const hintId = `${inputId}-hint`;

    return (
      <div className="mb-4">
        <label 
          htmlFor={inputId}
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {label}
          {required && (
            <span className="text-red-500 ml-1" aria-label="obrigatório">*</span>
          )}
        </label>
        
        {hint && (
          <p id={hintId} className="text-sm text-gray-600 mb-2">
            {hint}
          </p>
        )}
        
        <input
          ref={ref}
          id={inputId}
          required={required}
          aria-required={required}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={`${hint ? hintId : ''} ${error ? errorId : ''}`.trim()}
          className={`
            w-full px-3 py-2 border rounded-md shadow-sm
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            ${error 
              ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
              : 'border-gray-300'
            }
            ${className}
          `}
          {...props}
        />
        
        {error && (
          <p id={errorId} className="mt-2 text-sm text-red-600" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

AccessibleInput.displayName = 'AccessibleInput';

// Textarea Component
interface AccessibleTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  hint?: string;
  required?: boolean;
}

export const AccessibleTextarea = forwardRef<HTMLTextAreaElement, AccessibleTextareaProps>(
  ({ label, error, hint, required, id, className = '', ...props }, ref) => {
    const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;
    const errorId = `${textareaId}-error`;
    const hintId = `${textareaId}-hint`;

    return (
      <div className="mb-4">
        <label 
          htmlFor={textareaId}
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {label}
          {required && (
            <span className="text-red-500 ml-1" aria-label="obrigatório">*</span>
          )}
        </label>
        
        {hint && (
          <p id={hintId} className="text-sm text-gray-600 mb-2">
            {hint}
          </p>
        )}
        
        <textarea
          ref={ref}
          id={textareaId}
          required={required}
          aria-required={required}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={`${hint ? hintId : ''} ${error ? errorId : ''}`.trim()}
          className={`
            w-full px-3 py-2 border rounded-md shadow-sm
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            resize-vertical min-h-[100px]
            ${error 
              ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
              : 'border-gray-300'
            }
            ${className}
          `}
          {...props}
        />
        
        {error && (
          <p id={errorId} className="mt-2 text-sm text-red-600" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

AccessibleTextarea.displayName = 'AccessibleTextarea';

// Select Component
interface AccessibleSelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  hint?: string;
  required?: boolean;
  options: { value: string; label: string }[];
  placeholder?: string;
}

export const AccessibleSelect = forwardRef<HTMLSelectElement, AccessibleSelectProps>(
  ({ label, error, hint, required, options, placeholder, id, className = '', ...props }, ref) => {
    const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;
    const errorId = `${selectId}-error`;
    const hintId = `${selectId}-hint`;

    return (
      <div className="mb-4">
        <label 
          htmlFor={selectId}
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {label}
          {required && (
            <span className="text-red-500 ml-1" aria-label="obrigatório">*</span>
          )}
        </label>
        
        {hint && (
          <p id={hintId} className="text-sm text-gray-600 mb-2">
            {hint}
          </p>
        )}
        
        <select
          ref={ref}
          id={selectId}
          required={required}
          aria-required={required}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={`${hint ? hintId : ''} ${error ? errorId : ''}`.trim()}
          className={`
            w-full px-3 py-2 border rounded-md shadow-sm
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            ${error 
              ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
              : 'border-gray-300'
            }
            ${className}
          `}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        
        {error && (
          <p id={errorId} className="mt-2 text-sm text-red-600" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

AccessibleSelect.displayName = 'AccessibleSelect';
