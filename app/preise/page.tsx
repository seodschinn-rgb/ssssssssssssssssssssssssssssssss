import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import PreisePageContent from '@/components/PreisePageContent'

export const metadata: Metadata = {
  title: { absolute: 'SEO Preise & Pakete | Transparente Preise München' },
  description:
    'Transparente SEO-Pakete für jedes Budget: vom Starter bis Enterprise. Monatliche Retainer ohne versteckte Kosten. SEO Agentur München – faire Preise, messbare Erfolge.',
  openGraph: {
    title: 'SEO Preise & Pakete | Transparente Preise München',
    description: 'Starter, Growth, Business, Professional, Enterprise – wählen Sie Ihr SEO-Paket.',
  },
}

export default function PreisePage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Startseite', url: '/' },
        { name: 'Preise', url: '/preise' },
      ]} />
      <Header />
      <main>
        <PreisePageContent />
      </main>
      <Footer />
    </>
  )
}
