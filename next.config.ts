import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configurações para deploy
  output: 'standalone',
  
  // Desabilitar ESLint durante build
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Configurações para SSR
  serverExternalPackages: ['axios'],
  
  // Configurações de imagem
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'my-blog-backend-9xz1.onrender.com',
        port: '',
        pathname: '/uploads/**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Otimizações de performance
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  
  // Configurações de SEO
  async generateBuildId() {
    return 'climatbh-build-' + Date.now();
  },
  
  // Configurações de headers para SEO e segurança
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
  
  // Configurações de redirecionamento
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
