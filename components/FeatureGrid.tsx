import Link from 'next/link'
import { LEISTUNGEN, LEISTUNGEN_CONTENT } from '@/lib/leistungen-data'
import LeistungIcons from './LeistungIcons'
import HomeSectionLabel from '@/components/HomeSectionLabel'

const homepageLeistungen = LEISTUNGEN.slice(0, 4)

export default function FeatureGrid() {
  return (
    <section
      id="leistungen"
      className="relative overflow-hidden px-4 py-20 sm:px-6 md:py-28"
      aria-labelledby="features-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white via-indigo-50/20 to-white" />
      <div className="absolute left-1/2 top-1/4 h-[420px] w-[min(100%,720px)] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-400/15 via-violet-300/10 to-indigo-400/15 blur-3xl" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto mb-14 flex max-w-2xl min-w-0 flex-col items-center gap-3 px-1 text-center md:mb-20">
          <HomeSectionLabel>Leistungen</HomeSectionLabel>
          <h2
            id="features-heading"
            className="break-words text-balance text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl md:text-4xl"
          >
            SEO-Leistungen in München: Von Audit bis Optimierung
          </h2>
          <p className="mt-1 text-sm leading-relaxed text-zinc-600 sm:text-base">
            Wir finden heraus, was Google von deiner Seite will — und liefern es. Jede Maßnahme wird priorisiert nach
            Impact: die größten Hebel zuerst.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {homepageLeistungen.map((leistung) => {
            const content = LEISTUNGEN_CONTENT[leistung.slug]
            const benefits = content?.benefits?.slice(0, 2) ?? []
            const cardTitle =
              leistung.slug === 'local-seo'
                ? 'Local SEO München'
                : leistung.slug === 'technisches-seo'
                  ? 'Technisches SEO & Optimierung'
                  : leistung.title
            const colorMap: Record<string, string> = {
              blue: 'from-blue-500/15 to-violet-500/10 text-blue-600 group-hover:from-blue-500 group-hover:to-violet-500',
              emerald: 'from-emerald-500/15 to-teal-500/10 text-emerald-600 group-hover:from-emerald-500 group-hover:to-teal-500',
              violet: 'from-violet-500/15 to-purple-500/10 text-violet-600 group-hover:from-violet-500 group-hover:to-purple-500',
              amber: 'from-amber-500/15 to-orange-500/10 text-amber-600 group-hover:from-amber-500 group-hover:to-orange-500',
              rose: 'from-rose-500/15 to-pink-500/10 text-rose-600 group-hover:from-rose-500 group-hover:to-pink-500',
              cyan: 'from-cyan-500/15 to-sky-500/10 text-cyan-600 group-hover:from-cyan-500 group-hover:to-sky-500',
              indigo: 'from-indigo-500/15 to-blue-500/10 text-indigo-600 group-hover:from-indigo-500 group-hover:to-blue-500',
            }
            const colors = colorMap[leistung.color] || colorMap.blue
            return (
              <article key={leistung.slug} className="group">
                <Link
                  href={`/leistungen/${leistung.slug}`}
                  className="block h-full rounded-3xl border border-zinc-200/60 bg-white/85 p-8 shadow-lg shadow-zinc-200/50 ring-1 ring-black/[0.04] transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo-200/70 hover:shadow-2xl hover:shadow-indigo-500/10"
                >
                  <div
                    className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${colors} shadow-inner transition-all duration-300 group-hover:text-white`}
                  >
                    <LeistungIcons icon={leistung.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-zinc-900">{cardTitle}</h3>
                  <p className="text-sm leading-relaxed text-zinc-600">{leistung.shortDescription}</p>
                  {benefits.length > 0 && (
                    <div className="mt-4 max-h-0 overflow-hidden opacity-0 transition-all duration-300 ease-out group-hover:max-h-[100px] group-hover:opacity-100">
                      <ul className="space-y-1">
                        {benefits.map((b) => (
                          <li key={b.title} className="flex items-center gap-2 text-xs text-zinc-500">
                            <span className="h-1 w-1 shrink-0 rounded-full bg-blue-500" />
                            {b.title}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </Link>
              </article>
            )
          })}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/leistungen"
            className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-zinc-900/20 transition-all hover:scale-[1.02] hover:bg-zinc-800"
          >
            Alle Leistungen im Detail (inkl. OnPage, Beratung & Monitoring)
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
