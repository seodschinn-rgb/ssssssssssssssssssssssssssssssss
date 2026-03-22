import Link from 'next/link'
import HomeSectionLabel from '@/components/HomeSectionLabel'
import { HOME_PAGE_FAQ_ITEMS } from '@/lib/home-page-faqs'

export default function HomeFAQSection() {
  return (
    <section
      id="faq-start"
      className="relative overflow-hidden border-t border-zinc-200/60 bg-gradient-to-b from-zinc-50 to-white px-4 py-20 sm:px-6 md:py-28"
      aria-labelledby="home-faq-heading"
    >
      <div className="relative mx-auto max-w-3xl">
        <div className="mb-10 flex flex-col items-center gap-3 text-center md:mb-12">
          <HomeSectionLabel>FAQ</HomeSectionLabel>
          <h2
            id="home-faq-heading"
            className="text-balance text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl md:text-4xl"
          >
            Häufig gestellte Fragen
          </h2>
        </div>
        <div className="space-y-3 md:space-y-4">
          {HOME_PAGE_FAQ_ITEMS.map((item) => (
            <div
              key={item.q}
              className="overflow-hidden rounded-3xl border border-zinc-200/80 bg-white/95 shadow-lg shadow-zinc-200/30 ring-1 ring-black/[0.03] backdrop-blur-sm transition-colors hover:border-indigo-200/50"
            >
              <h3 className="m-0 border-b border-zinc-100/90 bg-gradient-to-r from-indigo-50/60 to-zinc-50/80 px-5 py-4 text-base font-semibold text-zinc-900 sm:px-6">
                {item.q}
              </h3>
              <div className="px-5 py-4 text-sm leading-relaxed text-zinc-600 sm:px-6 sm:text-base">
                {item.q.startsWith('Bietet ihr auch Einmal-Leistungen') ? (
                  <p className="m-0">
                    Ja. Neben unseren monatlichen Paketen bieten wir auch Einmal-Leistungen wie ein{' '}
                    <Link href="/leistungen/seo-audit" className="font-medium text-indigo-600 hover:underline">
                      SEO-Audit
                    </Link>{' '}
                    oder eine{' '}
                    <Link href="/leistungen/keyword-recherche" className="font-medium text-indigo-600 hover:underline">
                      Keyword-Recherche
                    </Link>{' '}
                    an. Sprich uns im Erstgespräch darauf an.
                  </p>
                ) : (
                  <p className="m-0">{item.a}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
