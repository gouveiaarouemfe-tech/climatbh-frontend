interface StructuredDataProps {
  type: 'Organization' | 'LocalBusiness' | 'Article' | 'Service' | 'BreadcrumbList';
  data: object;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const generateStructuredData = () => {
    const baseData = {
      '@context': 'https://schema.org',
      '@type': type,
      ...data,
    };

    return JSON.stringify(baseData);
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: generateStructuredData() }}
    />
  );
}

// Dados estruturados pré-definidos para a empresa
export const organizationStructuredData = {
  name: 'ClimatBH',
  alternateName: 'ClimatBH Climatização',
  description: 'Especialistas em climatização comercial e industrial em Belo Horizonte e região. Instalação e manutenção de sistemas VRF, chillers, splitões e contratos PMOC.',
  url: 'https://climatbh.com.br',
  logo: 'https://climatbh.com.br/images/logo.png',
  image: 'https://climatbh.com.br/images/VRFDAIKIN.png',
  telephone: '+5531995352139',
  email: 'contato@climatbh.com.br',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Belo Horizonte',
    addressRegion: 'MG',
    addressCountry: 'BR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -19.9167,
    longitude: -43.9345,
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Belo Horizonte',
    },
    {
      '@type': 'City',
      name: 'Contagem',
    },
    {
      '@type': 'City',
      name: 'Nova Lima',
    },
  ],
  serviceType: [
    'Instalação de VRF',
    'Manutenção de VRF',
    'Instalação de Chiller',
    'Manutenção de Chiller',
    'Instalação de Splitão',
    'Contratos PMOC',
  ],
  foundingDate: '2009',
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    minValue: 10,
    maxValue: 50,
  },
  priceRange: '$$',
  paymentAccepted: ['Cash', 'Credit Card', 'Bank Transfer'],
  currenciesAccepted: 'BRL',
  openingHours: 'Mo-Fr 08:00-18:00, Sa 08:00-12:00',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Serviços de Climatização',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Instalação de Sistema VRF',
          description: 'Instalação profissional de sistemas VRF para climatização comercial e industrial',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Manutenção de Sistema VRF',
          description: 'Manutenção preventiva e corretiva de sistemas VRF/VRV',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Instalação de Chiller',
          description: 'Instalação especializada de chillers industriais e comerciais',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Manutenção de Chiller',
          description: 'Manutenção preventiva e corretiva de chillers industriais',
        },
      },
    ],
  },
  sameAs: [
    'https://www.facebook.com/climatbh',
    'https://www.instagram.com/climatbh',
    'https://www.linkedin.com/company/climatbh',
  ],
};

export const localBusinessStructuredData = {
  ...organizationStructuredData,
  '@type': 'LocalBusiness',
  hasMap: 'https://maps.google.com/?q=Belo+Horizonte,+MG',
  isAccessibleForFree: false,
  maximumAttendeeCapacity: 100,
  smokingAllowed: false,
};

