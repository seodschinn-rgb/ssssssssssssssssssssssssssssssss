import Link from 'next/link'
import { LEISTUNGEN, LEISTUNGEN_CONTENT } from '@/lib/leistungen-data'
import LeistungIcons from './LeistungIcons'

const colorStyles: Record<string, { icon: string; border: string; link: string; bullet: string }> = {
  blue: { icon: 'bg-blue-500/15 text-blue-600 group-hover:bg-blue-500 group-hover:text-white', border: 'border-blue-200 hover:border-blue-400', link: 'text-blue-600', bullet: 'bg-blue-500' },
  emerald: { icon: 'bg-emerald-500/15 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white', border: 'border-emerald-200 hover:border-emerald-400', link: 'text-emerald-600', bullet: 'bg-emerald-500' },
  violet: { icon: 'bg-violet-500/15 text-violet-600 group-hover:bg-violet-500 group-hover:text-white', border: 'border-violet-200 hover:border-violet-400', link: 'text-violet-600', bullet: 'bg-violet-500' },
  amber: { icon: 'bg-amber-500/15 text-amber-600 group-hover:bg-amber-500 group-hover:text-white', border: 'border-amber-200 hover:border-amber-400', link: 'text-amber-600', bullet: 'bg-amber-500' },
  rose: { icon: 'bg-rose-500/15 text-rose-600 group-hover:bg-rose-500 group-hover:text-white', border: 'border-rose-200 hover:border-rose-400', link: 'text-rose-600', bullet: 'bg-rose-500' },
  cyan: { icon: 'bg-cyan-500/15 text-cyan-600 group-hover:bg-cyan-500 group-hover:text-white', border: 'border-cyan-200 hover:border-cyan-400', link: 'text-cyan-600', bullet: 'bg-cyan-500' },
  indigo: { icon: 'bg-indigo-500/15 text-indigo-600 group-hover:bg-indigo-500 group-hover:text-white', border: 'border-indigo-200 hover:border-indigo-400', link: 'text-indigo-600', bullet: 'bg-indigo-500' },
}

/** Kein Framer Motion / whileInView — Inhalt bleibt sichtbar (Intersection Observer war unzuverlässig). */
export default function LeistungenGrid() {
  return (
    <section
      id="leistungen"
      className="relative overflow-hidden px-6 py-24"
      aria-labelledby="leistungen-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white via-zinc-50/50 to-blue-50/30" />
      <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-violet-200/20 blur-3xl" />
      <div className="absolute bottom-20 left-0 h-80 w-80 rounded-full bg-emerald-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 id="leistungen-heading" className="text-3xl font-bold text-zinc-900 sm:text-4xl">
            Unsere SEO-Leistungen im Überblick
          </h2>
          <p className="mt-4 leading-relaxed text-zinc-600">
            Von der Keyword-Recherche bis zum Reporting: Wir bieten die Leistungen, die Ihr Unternehmen für mehr
            Sichtbarkeit bei Google braucht.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {LEISTUNGEN.map((leistung) => {
            const colors = colorStyles[leistung.color] || colorStyles.blue
            const content = LEISTUNGEN_CONTENT[leistung.slug]
            const benefits = content?.benefits?.slice(0, 3) ?? []
            return (
              <article key={leistung.slug} id={leistung.slug} className="group scroll-mt-28">
                <Link
                  href={`/leistungen/${leistung.slug}`}
                  className={`flex h-full flex-col overflow-hidden rounded-3xl border-2 bg-white p-8 shadow-md ${colors.border} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
                >
                  <span
                    className={`mb-6 inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl ${colors.icon} transition-all duration-300`}
                  >
                    <LeistungIcons icon={leistung.icon} className="h-8 w-8" />
                  </span>
                  <h3 className="shrink-0 text-xl font-bold text-zinc-900 transition-colors group-hover:text-zinc-800">
                    {leistung.title}
                  </h3>
                  <p className="mt-3 shrink-0 text-sm leading-relaxed text-zinc-600">{leistung.shortDescription}</p>
                  <div className="mt-4 min-h-0 flex-1">
                    <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-300 ease-out group-hover:max-h-[140px] group-hover:opacity-100">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">Im Überblick:</p>
                      <ul className="space-y-1.5">
                        {benefits.map((b) => (
                          <li key={b.title} className="flex items-start gap-2 text-sm text-zinc-600">
                            <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${colors.bullet}`} />
                            <span>{b.title}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <span
                    className={`mt-6 inline-flex shrink-0 items-center gap-2 text-sm font-semibold transition-all group-hover:gap-3 ${colors.link}`}
                  >
                    Mehr erfahren
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
