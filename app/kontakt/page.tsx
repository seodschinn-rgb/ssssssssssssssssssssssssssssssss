import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

const KontaktPageContent = dynamic(() => import('@/components/KontaktPageContent'), { ssr: true })

export const metadata: Metadata = {
  title: { absolute: 'Kontakt & Termin buchen | SEO Agentur München' },
  description:
    'Vereinbaren Sie ein kostenloses SEO-Beratungsgespräch. Wählen Sie Ihren Wunschtermin und -uhrzeit. Wir freuen uns auf Ihre Anfrage aus München und Bayern.',
  openGraph: {
    title: 'Kontakt & Termin buchen | SEO Agentur München',
    description: 'Kostenloses Erstgespräch vereinbaren. Termin und Uhrzeit online auswählen.',
  },
}

export default function KontaktPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Startseite', url: '/' },
        { name: 'Kontakt', url: '/kontakt' },
      ]} />
      <Header />
      <main>
        <KontaktPageContent />
      </main>
      <Footer />
    </>
  )
}
