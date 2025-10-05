import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CookieConsent from '@/components/CookieConsent';
import StructuredData, { organizationStructuredData, localBusinessStructuredData } from '@/components/seo/StructuredData';
import PerformanceOptimizer from '@/components/seo/PerformanceOptimizer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ClimatBH - Climatização Comercial e Industrial em BH',
  description: 'Especialistas em climatização comercial e industrial em Belo Horizonte. Instalação e manutenção de sistemas VRF, chillers, splitões e contratos PMOC. Atendimento 24h.',
  keywords: 'climatização BH, VRF Belo Horizonte, chiller industrial, manutenção ar condicionado, PMOC, splitão comercial',
  authors: [{ name: 'ClimatBH' }],
  creator: 'ClimatBH',
  publisher: 'ClimatBH',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://climatbh.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://climatbh.com.br',
    title: 'ClimatBH - Climatização Comercial e Industrial em BH',
    description: 'Especialistas em climatização comercial e industrial em Belo Horizonte. Instalação e manutenção de sistemas VRF, chillers, splitões e contratos PMOC.',
    siteName: 'ClimatBH',
    images: [
      {
        url: '/images/VRFDAIKIN.png',
        width: 1200,
        height: 630,
        alt: 'ClimatBH - Climatização Comercial e Industrial',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ClimatBH - Climatização Comercial e Industrial em BH',
    description: 'Especialistas em climatização comercial e industrial em Belo Horizonte. Instalação e manutenção de sistemas VRF, chillers, splitões e contratos PMOC.',
    images: ['/images/VRFDAIKIN.png'],
    creator: '@climatbh',
    site: '@climatbh',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <StructuredData type="Organization" data={organizationStructuredData} />
        <StructuredData type="LocalBusiness" data={localBusinessStructuredData} />
      </head>
      <body className={inter.className}>
        <PerformanceOptimizer />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
