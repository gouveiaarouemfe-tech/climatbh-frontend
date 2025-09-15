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
  openingHours = ['Mo-Fr 08:00-18:00'],
  priceRange = '$$',
  areaServed,
  services
}: LocalBusinessSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': url,
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
    openingHoursSpecification: openingHours.map(hours => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: hours.split(' ')[0],
      opens: hours.split(' ')[1]?.split('-')[0],
      closes: hours.split(' ')[1]?.split('-')[1],
    })),
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
        },
      })),
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '127',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone,
      contactType: 'customer service',
      availableLanguage: 'Portuguese',
      areaServed: 'BR',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

