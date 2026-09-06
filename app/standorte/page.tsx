import type { Metadata } from 'next'
import Header from '@/components/Header'
import StandorteList from '@/components/StandorteList'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import { absoluteCanonical } from '@/lib/canonical'

export const metadata: Metadata = {
  title: { absolute: 'Betreuungsgebiete in Bayern | SEO München' },
  description:
    'SEO-Betreuung für Unternehmen in München und Bayern: Local SEO, Technik und Inhalte. Geschäftssitz Engelskirchen, Zusammenarbeit remote.',
  alternates: { canonical: absoluteCanonical('/standorte') },
  openGraph: {
    title: 'Betreuungsgebiete in Bayern | SEO München',
    description:
      'SEO-Betreuung für Unternehmen in München und Bayern. Geschäftssitz Engelskirchen, Zusammenarbeit remote.',
  },
}

export default function StandortePage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Startseite', url: '/' },
        { name: 'Betreuungsgebiete', url: '/standorte' },
      ]} />
      <Header />
      <main>
        <section className="pt-32 pb-12 px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900">
              SEO für Unternehmen in Bayern
            </h1>
            <p className="mt-6 text-lg text-zinc-600">
              Unser Geschäftssitz ist Engelskirchen. Wir unterstützen Unternehmen in München und ganz Bayern
              bei Suchmaschinenoptimierung und Local SEO – die Zusammenarbeit erfolgt remote.
              Die folgenden Orte zeigen unsere Betreuungsgebiete, keine Niederlassungen. Wähle deinen Ort.
            </p>
          </div>
        </section>
        <StandorteList />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
