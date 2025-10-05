import Script from 'next/script';

interface Review {
  author: string;
  rating: number;
  reviewBody: string;
  datePublished: string;
}

interface ReviewSchemaProps {
  businessName: string;
  reviews: Review[];
  aggregateRating: {
    ratingValue: number;
    reviewCount: number;
  };
}

export default function ReviewSchema({ businessName, reviews, aggregateRating }: ReviewSchemaProps) {
  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': businessName,
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': aggregateRating.ratingValue,
      'reviewCount': aggregateRating.reviewCount,
      'bestRating': 5,
      'worstRating': 1
    },
    'review': reviews.map(review => ({
      '@type': 'Review',
      'author': {
        '@type': 'Person',
        'name': review.author
      },
      'reviewRating': {
        '@type': 'Rating',
        'ratingValue': review.rating,
        'bestRating': 5,
        'worstRating': 1
      },
      'reviewBody': review.reviewBody,
      'datePublished': review.datePublished
    }))
  };

  return (
    <Script
      id="review-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
    />
  );
}
