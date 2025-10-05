// Rate limiting utilities

interface RateLimitConfig {
  windowMs: number; // Janela de tempo em milissegundos
  maxRequests: number; // Máximo de requests por janela
  keyGenerator?: (request: any) => string; // Função para gerar chave única
}

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

class MemoryStore {
  private store = new Map<string, RateLimitEntry>();

  get(key: string): RateLimitEntry | undefined {
    const entry = this.store.get(key);
    if (entry && Date.now() > entry.resetTime) {
      this.store.delete(key);
      return undefined;
    }
    return entry;
  }

  set(key: string, entry: RateLimitEntry): void {
    this.store.set(key, entry);
  }

  increment(key: string, windowMs: number): RateLimitEntry {
    const now = Date.now();
    const existing = this.get(key);
    
    if (existing) {
      existing.count++;
      return existing;
    } else {
      const newEntry: RateLimitEntry = {
        count: 1,
        resetTime: now + windowMs
      };
      this.set(key, newEntry);
      return newEntry;
    }
  }

  cleanup(): void {
    const now = Date.now();
    for (const [key, entry] of this.store.entries()) {
      if (now > entry.resetTime) {
        this.store.delete(key);
      }
    }
  }
}

export class RateLimiter {
  private config: RateLimitConfig;
  private store: MemoryStore;
  private cleanupInterval: NodeJS.Timeout;

  constructor(config: RateLimitConfig) {
    this.config = config;
    this.store = new MemoryStore();
    
    // Limpeza automática a cada 5 minutos
    this.cleanupInterval = setInterval(() => {
      this.store.cleanup();
    }, 5 * 60 * 1000);
  }

  async check(request: any): Promise<{
    allowed: boolean;
    remaining: number;
    resetTime: number;
    retryAfter?: number;
  }> {
    const key = this.config.keyGenerator 
      ? this.config.keyGenerator(request)
      : this.getDefaultKey(request);

    const entry = this.store.increment(key, this.config.windowMs);
    const allowed = entry.count <= this.config.maxRequests;
    const remaining = Math.max(0, this.config.maxRequests - entry.count);

    const result = {
      allowed,
      remaining,
      resetTime: entry.resetTime
    };

    if (!allowed) {
      return {
        ...result,
        retryAfter: Math.ceil((entry.resetTime - Date.now()) / 1000)
      };
    }

    return result;
  }

  private getDefaultKey(request: any): string {
    // Tentar extrair IP de diferentes headers
    const ip = request.ip || 
               request.headers?.['x-forwarded-for']?.split(',')[0] ||
               request.headers?.['x-real-ip'] ||
               request.connection?.remoteAddress ||
               'unknown';
    
    return `rate_limit:${ip}`;
  }

  destroy(): void {
    if (this.cleanupInterval) {
      clearInterval(this.cleanupInterval);
    }
  }
}

// Rate limiters pré-configurados
export const rateLimiters = {
  // API geral: 100 requests por minuto
  api: new RateLimiter({
    windowMs: 60 * 1000, // 1 minuto
    maxRequests: 100
  }),

  // Formulários: 5 submissões por minuto
  forms: new RateLimiter({
    windowMs: 60 * 1000, // 1 minuto
    maxRequests: 5
  }),

  // Login: 5 tentativas por 15 minutos
  auth: new RateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutos
    maxRequests: 5
  }),

  // Busca: 30 requests por minuto
  search: new RateLimiter({
    windowMs: 60 * 1000, // 1 minuto
    maxRequests: 30
  }),

  // Upload: 10 uploads por hora
  upload: new RateLimiter({
    windowMs: 60 * 60 * 1000, // 1 hora
    maxRequests: 10
  })
};

// Middleware para Next.js API routes
export function withRateLimit(limiter: RateLimiter) {
  return async function rateLimitMiddleware(req: any, res: any, next?: Function) {
    try {
      const result = await limiter.check(req);

      // Adicionar headers de rate limit
      res.setHeader('X-RateLimit-Limit', limiter['config'].maxRequests);
      res.setHeader('X-RateLimit-Remaining', result.remaining);
      res.setHeader('X-RateLimit-Reset', Math.ceil(result.resetTime / 1000));

      if (!result.allowed) {
        res.setHeader('Retry-After', result.retryAfter);
        return res.status(429).json({
          error: 'Too Many Requests',
          message: 'Rate limit exceeded. Please try again later.',
          retryAfter: result.retryAfter
        });
      }

      if (next) {
        return next();
      }
    } catch (error) {
      console.error('Rate limit error:', error);
      // Em caso de erro, permitir a requisição
      if (next) {
        return next();
      }
    }
  };
}

// Hook para rate limiting no cliente
export function useRateLimit(key: string, maxRequests: number, windowMs: number) {
  const checkRateLimit = (): boolean => {
    const now = Date.now();
    const storageKey = `rate_limit_${key}`;
    
    try {
      const stored = localStorage.getItem(storageKey);
      const data = stored ? JSON.parse(stored) : { count: 0, resetTime: now + windowMs };

      // Reset se a janela expirou
      if (now > data.resetTime) {
        data.count = 0;
        data.resetTime = now + windowMs;
      }

      // Verificar se excedeu o limite
      if (data.count >= maxRequests) {
        return false;
      }

      // Incrementar contador
      data.count++;
      localStorage.setItem(storageKey, JSON.stringify(data));
      
      return true;
    } catch (error) {
      console.error('Client rate limit error:', error);
      return true; // Em caso de erro, permitir
    }
  };

  const getRemainingRequests = (): number => {
    try {
      const stored = localStorage.getItem(`rate_limit_${key}`);
      if (!stored) return maxRequests;
      
      const data = JSON.parse(stored);
      const now = Date.now();
      
      if (now > data.resetTime) {
        return maxRequests;
      }
      
      return Math.max(0, maxRequests - data.count);
    } catch {
      return maxRequests;
    }
  };

  const getResetTime = (): number => {
    try {
      const stored = localStorage.getItem(`rate_limit_${key}`);
      if (!stored) return Date.now() + windowMs;
      
      const data = JSON.parse(stored);
      return data.resetTime;
    } catch {
      return Date.now() + windowMs;
    }
  };

  return {
    checkRateLimit,
    getRemainingRequests,
    getResetTime
  };
}

// Utilitário para detectar comportamento suspeito
export class SuspiciousActivityDetector {
  private activities = new Map<string, number[]>();

  recordActivity(identifier: string): void {
    const now = Date.now();
    const activities = this.activities.get(identifier) || [];
    
    // Manter apenas atividades dos últimos 5 minutos
    const fiveMinutesAgo = now - (5 * 60 * 1000);
    const recentActivities = activities.filter(time => time > fiveMinutesAgo);
    
    recentActivities.push(now);
    this.activities.set(identifier, recentActivities);
  }

  isSuspicious(identifier: string): boolean {
    const activities = this.activities.get(identifier) || [];
    const now = Date.now();
    
    // Verificar diferentes padrões suspeitos
    
    // 1. Muitas atividades em pouco tempo (>50 em 1 minuto)
    const oneMinuteAgo = now - (60 * 1000);
    const recentActivities = activities.filter(time => time > oneMinuteAgo);
    if (recentActivities.length > 50) {
      return true;
    }
    
    // 2. Padrão muito regular (intervalos muito similares)
    if (activities.length >= 10) {
      const intervals = [];
      for (let i = 1; i < activities.length; i++) {
        intervals.push(activities[i] - activities[i - 1]);
      }
      
      const avgInterval = intervals.reduce((a, b) => a + b, 0) / intervals.length;
      const variance = intervals.reduce((sum, interval) => {
        return sum + Math.pow(interval - avgInterval, 2);
      }, 0) / intervals.length;
      
      // Se a variância é muito baixa, pode ser um bot
      if (variance < 100) { // 100ms de variância
        return true;
      }
    }
    
    return false;
  }

  cleanup(): void {
    const now = Date.now();
    const fiveMinutesAgo = now - (5 * 60 * 1000);
    
    for (const [identifier, activities] of this.activities.entries()) {
      const recentActivities = activities.filter(time => time > fiveMinutesAgo);
      if (recentActivities.length === 0) {
        this.activities.delete(identifier);
      } else {
        this.activities.set(identifier, recentActivities);
      }
    }
  }
}

export const suspiciousActivityDetector = new SuspiciousActivityDetector();

// Limpeza automática a cada 5 minutos
setInterval(() => {
  suspiciousActivityDetector.cleanup();
}, 5 * 60 * 1000);
