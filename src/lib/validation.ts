// Utilitários de validação e sanitização

export class ValidationError extends Error {
  constructor(message: string, public field?: string) {
    super(message);
    this.name = 'ValidationError';
  }
}

// Validações básicas
export const validators = {
  email: (value: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  },

  phone: (value: string): boolean => {
    const phoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
    return phoneRegex.test(value);
  },

  url: (value: string): boolean => {
    try {
      new URL(value);
      return true;
    } catch {
      return false;
    }
  },

  required: (value: any): boolean => {
    if (typeof value === 'string') return value.trim().length > 0;
    return value !== null && value !== undefined;
  },

  minLength: (value: string, min: number): boolean => {
    return value.length >= min;
  },

  maxLength: (value: string, max: number): boolean => {
    return value.length <= max;
  },

  slug: (value: string): boolean => {
    const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
    return slugRegex.test(value);
  },

  alphanumeric: (value: string): boolean => {
    const alphanumericRegex = /^[a-zA-Z0-9]+$/;
    return alphanumericRegex.test(value);
  },

  numeric: (value: string): boolean => {
    return !isNaN(Number(value)) && isFinite(Number(value));
  }
};

// Sanitização de dados
export const sanitizers = {
  html: (value: string): string => {
    return value
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .replace(/\//g, '&#x2F;');
  },

  sql: (value: string): string => {
    return value.replace(/['";\\]/g, '');
  },

  xss: (value: string): string => {
    return value
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/javascript:/gi, '')
      .replace(/on\w+\s*=/gi, '');
  },

  trim: (value: string): string => {
    return value.trim();
  },

  lowercase: (value: string): string => {
    return value.toLowerCase();
  },

  uppercase: (value: string): string => {
    return value.toUpperCase();
  },

  slug: (value: string): string => {
    return value
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Remove acentos
      .replace(/[^a-z0-9\s-]/g, '') // Remove caracteres especiais
      .replace(/\s+/g, '-') // Substitui espaços por hífens
      .replace(/-+/g, '-') // Remove hífens duplicados
      .replace(/^-|-$/g, ''); // Remove hífens do início e fim
  },

  phone: (value: string): string => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length === 11) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
    } else if (numbers.length === 10) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`;
    }
    return value;
  }
};

// Schema de validação
interface ValidationRule {
  required?: boolean;
  type?: 'string' | 'number' | 'email' | 'url' | 'phone';
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: any) => boolean | string;
  sanitize?: (value: string) => string;
}

interface ValidationSchema {
  [key: string]: ValidationRule;
}

export class Validator {
  private schema: ValidationSchema;

  constructor(schema: ValidationSchema) {
    this.schema = schema;
  }

  validate(data: Record<string, any>): { isValid: boolean; errors: Record<string, string>; sanitized: Record<string, any> } {
    const errors: Record<string, string> = {};
    const sanitized: Record<string, any> = {};

    for (const [field, rule] of Object.entries(this.schema)) {
      let value = data[field];

      // Verificar campo obrigatório
      if (rule.required && !validators.required(value)) {
        errors[field] = `${field} é obrigatório`;
        continue;
      }

      // Se não é obrigatório e está vazio, pular validação
      if (!rule.required && !validators.required(value)) {
        sanitized[field] = value;
        continue;
      }

      // Sanitizar valor se especificado
      if (rule.sanitize && typeof value === 'string') {
        value = rule.sanitize(value);
      }

      // Validar tipo
      if (rule.type) {
        switch (rule.type) {
          case 'email':
            if (!validators.email(value)) {
              errors[field] = `${field} deve ser um email válido`;
              continue;
            }
            break;
          case 'phone':
            if (!validators.phone(value)) {
              errors[field] = `${field} deve ser um telefone válido`;
              continue;
            }
            break;
          case 'url':
            if (!validators.url(value)) {
              errors[field] = `${field} deve ser uma URL válida`;
              continue;
            }
            break;
          case 'number':
            if (!validators.numeric(value)) {
              errors[field] = `${field} deve ser um número`;
              continue;
            }
            value = Number(value);
            break;
        }
      }

      // Validar comprimento mínimo
      if (rule.minLength && typeof value === 'string' && !validators.minLength(value, rule.minLength)) {
        errors[field] = `${field} deve ter pelo menos ${rule.minLength} caracteres`;
        continue;
      }

      // Validar comprimento máximo
      if (rule.maxLength && typeof value === 'string' && !validators.maxLength(value, rule.maxLength)) {
        errors[field] = `${field} deve ter no máximo ${rule.maxLength} caracteres`;
        continue;
      }

      // Validar padrão
      if (rule.pattern && typeof value === 'string' && !rule.pattern.test(value)) {
        errors[field] = `${field} não atende ao formato esperado`;
        continue;
      }

      // Validação customizada
      if (rule.custom) {
        const customResult = rule.custom(value);
        if (customResult !== true) {
          errors[field] = typeof customResult === 'string' ? customResult : `${field} é inválido`;
          continue;
        }
      }

      sanitized[field] = value;
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors,
      sanitized
    };
  }
}

// Schemas pré-definidos
export const schemas = {
  contact: new Validator({
    name: {
      required: true,
      type: 'string',
      minLength: 2,
      maxLength: 100,
      sanitize: sanitizers.trim
    },
    email: {
      required: true,
      type: 'email',
      sanitize: (value: string) => sanitizers.trim(sanitizers.lowercase(value))
    },
    phone: {
      required: false,
      type: 'phone',
      sanitize: sanitizers.phone
    },
    message: {
      required: true,
      type: 'string',
      minLength: 10,
      maxLength: 1000,
      sanitize: (value: string) => sanitizers.xss(sanitizers.trim(value))
    }
  }),

  blog: new Validator({
    title: {
      required: true,
      type: 'string',
      minLength: 5,
      maxLength: 200,
      sanitize: sanitizers.trim
    },
    slug: {
      required: true,
      type: 'string',
      pattern: /^[a-z0-9-]+$/,
      sanitize: sanitizers.slug
    },
    content: {
      required: true,
      type: 'string',
      minLength: 50,
      sanitize: (value: string) => sanitizers.xss(sanitizers.trim(value))
    },
    excerpt: {
      required: false,
      type: 'string',
      maxLength: 300,
      sanitize: sanitizers.trim
    }
  })
};

// Utilitário para validação rápida
export function validateField(value: any, rules: ValidationRule): { isValid: boolean; error?: string; sanitized: any } {
  const validator = new Validator({ field: rules });
  const result = validator.validate({ field: value });
  
  return {
    isValid: result.isValid,
    error: result.errors.field,
    sanitized: result.sanitized.field
  };
}
