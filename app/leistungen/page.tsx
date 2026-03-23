import type { Metadata } from 'next'
import Header from '@/components/Header'
import LeistungenHero from '@/components/LeistungenHero'
import LeistungenGrid from '@/components/LeistungenGrid'
import ContactSection from '@/components/ContactSection'
import Link from 'next/link'
import Footer from '@/components/Footer'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import ItemListSchema from '@/components/ItemListSchema'

export const metadata: Metadata = {
  title: { absolute: 'SEO Leistungen | Suchmaschinenoptimierung München & Bayern' },
  description:
    'Unsere SEO-Leistungen: Keyword-Recherche, Local SEO, Technisches SEO, Linkaufbau, OnPage-Optimierung und Reporting. Professionelle Suchmaschinenoptimierung für Unternehmen in München und Bayern.',
  openGraph: {
    title: 'SEO Leistungen | Suchmaschinenoptimierung München & Bayern',
    description:
      'Keyword-Recherche, Local SEO, Technisches SEO, Linkaufbau, OnPage-Optimierung und Reporting – alle Leistungen im Überblick.',
  },
}

export default function LeistungenPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Startseite', url: '/' },
        { name: 'Leistungen', url: '/leistungen' },
      ]} />
      <ItemListSchema />
      <Header />
      <main>
        <LeistungenHero />
        <LeistungenGrid />
        <section className="border-y border-zinc-100 bg-indigo-50/40 px-6 py-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-xl font-bold text-zinc-900 sm:text-2xl">SEO für deine Branche</h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-base">
              Ärzte, Handwerker, Gastronomie und mehr: Im Branchen-Hub findest du konkrete Maßnahmen, typische Fehler
              und FAQs — perfekt ergänzend zu unseren{' '}
              <Link href="/leistungen/local-seo" className="font-semibold text-indigo-600 hover:underline">
                Local-SEO
              </Link>
              - und{' '}
              <Link href="/leistungen/seo-audit" className="font-semibold text-indigo-600 hover:underline">
                Audit
              </Link>
              -Leistungen.
            </p>
            <Link
              href="/branchen"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-indigo-700"
            >
              Zum Branchen-SEO-Überblick
            </Link>
          </div>
        </section>
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
