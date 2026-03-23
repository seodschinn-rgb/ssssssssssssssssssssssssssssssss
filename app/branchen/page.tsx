import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BranchenHubContent from '@/components/BranchenHubContent'
import ContactSection from '@/components/ContactSection'

export const metadata: Metadata = {
  title: {
    absolute: 'SEO für Unternehmen in München | Branchenspezifisch | SEO München',
  },
  description:
    'Branchenspezifisches SEO für Unternehmen in München. Von Ärzten bis Handwerkern — wir bringen dein Unternehmen auf Seite 1 bei Google. Kostenloses Erstgespräch.',
  keywords: [
    'SEO für Unternehmen München',
    'branchenspezifisches SEO',
    'Local SEO München Branchen',
    'SEO Agentur München kleine Unternehmen',
  ],
  openGraph: {
    title: 'SEO für Unternehmen in München | Branchenspezifisch | SEO München',
    description:
      'Branchenspezifisches SEO für Unternehmen in München. Von Ärzten bis Handwerkern — mehr Sichtbarkeit bei Google.',
  },
}

export default function BranchenHubPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <BranchenHubContent />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
