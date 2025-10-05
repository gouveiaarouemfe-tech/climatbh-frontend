import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const url = request.nextUrl.clone();

  // Headers de segurança básicos
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('X-DNS-Prefetch-Control', 'on');
  
  // HSTS (HTTP Strict Transport Security) - apenas em produção
  if (process.env.NODE_ENV === 'production') {
    response.headers.set(
      'Strict-Transport-Security',
      'max-age=31536000; includeSubDomains; preload'
    );
  }

  // Permissions Policy (Feature Policy)
  response.headers.set(
    'Permissions-Policy',
    [
      'camera=()',
      'microphone=()',
      'geolocation=()',
      'interest-cohort=()',
      'payment=()',
      'usb=()',
      'bluetooth=()',
      'magnetometer=()',
      'gyroscope=()',
      'accelerometer=()'
    ].join(', ')
  );

  // Content Security Policy mais restritivo
  const cspDirectives = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://connect.facebook.net",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com data:",
    "img-src 'self' data: https: http: blob:",
    "media-src 'self' data: https:",
    "connect-src 'self' https://www.google-analytics.com https://meublognovo-1.onrender.com https://my-blog-backend-9xz1.onrender.com wss:",
    "frame-src 'none'",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "object-src 'none'",
    "worker-src 'self' blob:",
    "manifest-src 'self'",
    "upgrade-insecure-requests"
  ];

  response.headers.set('Content-Security-Policy', cspDirectives.join('; '));

  // Cache headers otimizados
  const pathname = request.nextUrl.pathname;

  // Recursos estáticos do Next.js
  if (pathname.startsWith('/_next/static/')) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  }
  // Imagens
  else if (pathname.startsWith('/images/') || pathname.match(/\.(jpg|jpeg|png|gif|webp|svg|ico)$/)) {
    response.headers.set('Cache-Control', 'public, max-age=2592000, stale-while-revalidate=86400');
  }
  // Fontes
  else if (pathname.match(/\.(woff|woff2|eot|ttf|otf)$/)) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  }
  // CSS e JS
  else if (pathname.match(/\.(css|js)$/)) {
    response.headers.set('Cache-Control', 'public, max-age=86400, stale-while-revalidate=3600');
  }
  // HTML pages
  else if (pathname.endsWith('.html') || !pathname.includes('.')) {
    response.headers.set('Cache-Control', 'public, max-age=0, must-revalidate');
  }

  // Rate limiting básico (em produção, usar serviço dedicado)
  if (process.env.NODE_ENV === 'production') {
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
    // Implementar rate limiting aqui se necessário
  }

  // Redirecionamentos
  
  // www para não-www
  if (url.hostname.startsWith('www.')) {
    url.hostname = url.hostname.replace('www.', '');
    return NextResponse.redirect(url, 301);
  }

  // Trailing slash removal (exceto para diretórios)
  if (pathname.endsWith('/') && pathname !== '/') {
    url.pathname = pathname.slice(0, -1);
    return NextResponse.redirect(url, 301);
  }

  // Redirecionamentos de URLs antigas (se houver)
  const redirects: Record<string, string> = {
    '/old-blog': '/blog',
    '/servicos': '/sobre',
    // Adicionar mais redirecionamentos conforme necessário
  };

  if (redirects[pathname]) {
    url.pathname = redirects[pathname];
    return NextResponse.redirect(url, 301);
  }

  // Bloquear bots maliciosos
  const userAgent = request.headers.get('user-agent') || '';
  const blockedBots = [
    'AhrefsBot',
    'SemrushBot',
    'MJ12bot',
    'DotBot',
    'AspiegelBot'
  ];

  if (blockedBots.some(bot => userAgent.includes(bot))) {
    return new NextResponse('Access Denied', { status: 403 });
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
