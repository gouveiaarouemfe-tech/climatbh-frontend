interface FAQItem {
  question: string;
  answer: string;
}

interface FAQStructuredDataProps {
  faqs: FAQItem[];
  pageTitle: string;
}

export default function FAQStructuredData({ faqs, pageTitle }: FAQStructuredDataProps) {
  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    name: `Perguntas Frequentes - ${pageTitle}`,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqStructuredData),
      }}
    />
  );
}

