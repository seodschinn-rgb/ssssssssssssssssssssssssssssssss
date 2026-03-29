import { jsonLdStringify } from '@/lib/safe-json-ld'
import { HOME_PAGE_FAQ_ITEMS } from '@/lib/home-page-faqs'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://seomuenchen.com'

/**
 * Ein JSON-LD mit @graph: LocalBusiness (+ ProfessionalService, Pakete), FAQPage, WebSite.
 * FAQPage entspricht den sichtbaren FAQs (lib/home-page-faqs.ts).
 */
export default function HomePageSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        additionalType: 'https://schema.org/ProfessionalService',
        name: 'SEO München',
        url: SITE_URL,
        telephone: '+4915565087694',
        email: 'info@seomuenchen.com',
        description:
          'Deine SEO Agentur in München: Suchmaschinenoptimierung für KMU und lokale Unternehmen. Fester Ansprechpartner, transparente Pakete. Jetzt kostenlos beraten lassen.',
        founder: {
          '@type': 'Person',
          name: 'Julian Schäfer',
          jobTitle: 'Gründer & SEO-Stratege',
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'München',
          addressRegion: 'Bayern',
          addressCountry: 'DE',
        },
        areaServed: [
          { '@type': 'City', name: 'München' },
          { '@type': 'City', name: 'Garching' },
          { '@type': 'City', name: 'Starnberg' },
          { '@type': 'City', name: 'Rosenheim' },
          { '@type': 'City', name: 'Augsburg' },
          { '@type': 'City', name: 'Freising' },
          { '@type': 'City', name: 'Dachau' },
          { '@type': 'City', name: 'Landshut' },
          { '@type': 'City', name: 'Ingolstadt' },
          { '@type': 'City', name: 'Regensburg' },
          { '@type': 'City', name: 'Kempten' },
          { '@type': 'State', name: 'Bayern' },
        ],
        priceRange: '990-2990 EUR/Monat',
        knowsAbout: [
          'Suchmaschinenoptimierung',
          'Local SEO',
          'Technisches SEO',
          'SEO Audit',
          'Keyword-Recherche',
          'OnPage-Optimierung',
          'Generative Engine Optimization',
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'SEO-Pakete',
          itemListElement: [
            {
              '@type': 'Offer',
              name: 'Starter',
              description: 'SEO-Paket für lokale Unternehmen & Startups',
              price: '990',
              priceCurrency: 'EUR',
              priceSpecification: {
                '@type': 'UnitPriceSpecification',
                price: '990',
                priceCurrency: 'EUR',
                billingDuration: 'P1M',
              },
            },
            {
              '@type': 'Offer',
              name: 'Growth',
              description: 'SEO-Paket für wachsende KMU',
              price: '1590',
              priceCurrency: 'EUR',
              priceSpecification: {
                '@type': 'UnitPriceSpecification',
                price: '1590',
                priceCurrency: 'EUR',
                billingDuration: 'P1M',
              },
            },
            {
              '@type': 'Offer',
              name: 'Business',
              description: 'SEO-Paket für etablierte Mittelständler',
              price: '2390',
              priceCurrency: 'EUR',
              priceSpecification: {
                '@type': 'UnitPriceSpecification',
                price: '2390',
                priceCurrency: 'EUR',
                billingDuration: 'P1M',
              },
            },
            {
              '@type': 'Offer',
              name: 'Professional',
              description: 'SEO-Paket für ambitionierte Unternehmen',
              price: '2590',
              priceCurrency: 'EUR',
              priceSpecification: {
                '@type': 'UnitPriceSpecification',
                price: '2590',
                priceCurrency: 'EUR',
                billingDuration: 'P1M',
              },
            },
            {
              '@type': 'Offer',
              name: 'Enterprise',
              description: 'SEO-Paket für Großunternehmen & komplexe Projekte',
              price: '2990',
              priceCurrency: 'EUR',
              priceSpecification: {
                '@type': 'UnitPriceSpecification',
                price: '2990',
                priceCurrency: 'EUR',
                billingDuration: 'P1M',
              },
            },
          ],
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: HOME_PAGE_FAQ_ITEMS.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a,
          },
        })),
      },
      {
        '@type': 'WebSite',
        name: 'SEO München',
        url: SITE_URL,
        potentialAction: {
          '@type': 'SearchAction',
          target: `${SITE_URL}/?s={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLdStringify(schema) }}
    />
  )
}
