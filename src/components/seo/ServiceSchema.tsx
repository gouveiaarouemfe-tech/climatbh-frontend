import Script from 'next/script';

interface ServiceSchemaProps {
  name: string;
  description: string;
  serviceType: string;
  provider: {
    name: string;
    url: string;
    telephone: string;
    address: {
      streetAddress?: string;
      addressLocality: string;
      addressRegion: string;
      postalCode?: string;
      addressCountry: string;
    };
  };
  areaServed: string[];
  url: string;
  offers?: {
    price?: string;
    priceCurrency?: string;
    availability?: string;
  };
}

export default function ServiceSchema({
  name,
  description,
  serviceType,
  provider,
  areaServed,
  url,
  offers = {
    priceCurrency: "BRL",
    availability: "https://schema.org/InStock"
  }
}: ServiceSchemaProps) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    "name": name,
    "description": description,
    "serviceType": serviceType,
    "url": url,
    "provider": {
      "@type": "LocalBusiness",
      "name": provider.name,
      "url": provider.url,
      "telephone": provider.telephone,
      "address": {
        "@type": "PostalAddress",
        ...provider.address
      }
    },
    "areaServed": areaServed.map(area => ({
      "@type": "City",
      "name": area
    })),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Catálogo de ${name}`,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": name,
            "description": description
          },
          "priceCurrency": offers.priceCurrency,
          "availability": offers.availability,
          "validFrom": new Date().toISOString().split('T')[0],
          "seller": {
            "@type": "Organization",
            "name": provider.name
          }
        }
      ]
    },
    "category": "Climatização",
    "audience": {
      "@type": "BusinessAudience",
      "audienceType": "Empresas e Residências"
    }
  };

  return (
    <Script
      id="service-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
    />
  );
}
