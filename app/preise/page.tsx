import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import BlogFAQSchema from '@/components/BlogFAQSchema'
import PreiseServiceSchema from '@/components/PreiseServiceSchema'
import PreisePageContent from '@/components/PreisePageContent'
import { PREISE_FAQS } from '@/lib/preise-data'
import { absoluteCanonical } from '@/lib/canonical'

export const metadata: Metadata = {
  title: { absolute: 'SEO Pakete & Preise 2026: Betreuung ab 990 EUR im Monat' },
  description:
    'SEO-Preise ohne Blackbox: 5 Pakete von 990 bis 2.990 EUR im Monat, fester Ansprechpartner, monatliches Reporting. Hol dir dein kostenloses Erstgespräch.',
  alternates: { canonical: absoluteCanonical('/preise') },
  openGraph: {
    title: 'SEO Pakete & Preise 2026: Betreuung ab 990 EUR im Monat',
    description:
      'SEO-Preise ohne Blackbox: 5 Pakete von 990 bis 2.990 EUR im Monat, fester Ansprechpartner, monatliches Reporting. Hol dir dein kostenloses Erstgespräch.',
  },
}

export default function PreisePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Startseite', url: '/' },
          { name: 'Preise', url: '/preise' },
        ]}
      />
      <PreiseServiceSchema />
      <BlogFAQSchema faqs={[...PREISE_FAQS]} />
      <Header />
      <main>
        <PreisePageContent />
      </main>
      <Footer />
    </>
  )
}
