interface LocalBusinessSchemaProps {
  name: string;
  description: string;
  address: {
    streetAddress?: string;
    addressLocality: string;
    addressRegion: string;
    postalCode?: string;
    addressCountry: string;
  };
  telephone: string;
  email: string;
  url: string;
  openingHours?: string[];
  priceRange?: string;
  areaServed: string[];
  services: string[];
}

export default function LocalBusinessSchema({
  name,
  description,
  address,
  telephone,
  email,
  url,
  openingHours = ['Mo-Fr 08:00-18:00', 'Sa 08:00-12:00'],
  priceRange = '$$',
  areaServed,
  services
}: LocalBusinessSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${url}#localbusiness`,
    name,
    description,
    url,
    telephone,
    email,
    priceRange,
    address: {
      '@type': 'PostalAddress',
      ...address,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -19.9166813,
      longitude: -43.9344931
    },
    openingHoursSpecification: openingHours.map(hours => {
      const [days, time] = hours.split(' ');
      const [startTime, endTime] = time.split('-');
      
      const dayMap: { [key: string]: string[] } = {
        'Mo-Fr': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        'Sa': ['Saturday'],
        'Su': ['Sunday']
      };
      
      return {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: dayMap[days] || [days],
        opens: startTime,
        closes: endTime
      };
    }),
    areaServed: areaServed.map(area => ({
      '@type': 'City',
      name: area,
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Serviços de Climatização',
      itemListElement: services.map((service, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service,
          description: `Serviço profissional de ${service.toLowerCase()} em Belo Horizonte e região metropolitana`,
        },
      })),
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone,
      contactType: 'customer service',
      availableLanguage: 'Portuguese',
      areaServed: 'BR',
    },
    sameAs: [
      'https://www.facebook.com/climatbh',
      'https://www.instagram.com/climatbh',
      'https://www.linkedin.com/company/climatbh'
    ],
    founder: {
      '@type': 'Person',
      name: 'ClimatBH'
    },
    foundingDate: '2020',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: 10,
      maxValue: 50
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

