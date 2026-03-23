import Link from 'next/link'
import { LEISTUNGEN } from '@/lib/leistungen-data'
import LeistungIcons from './LeistungIcons'

const colorClasses: Record<string, string> = {
  blue: 'bg-blue-500/15 text-blue-600 border-blue-200 hover:bg-blue-500 hover:text-white hover:border-blue-500',
  emerald: 'bg-emerald-500/15 text-emerald-600 border-emerald-200 hover:bg-emerald-500 hover:text-white hover:border-emerald-500',
  violet: 'bg-violet-500/15 text-violet-600 border-violet-200 hover:bg-violet-500 hover:text-white hover:border-violet-500',
  amber: 'bg-amber-500/15 text-amber-600 border-amber-200 hover:bg-amber-500 hover:text-white hover:border-amber-500',
  rose: 'bg-rose-500/15 text-rose-600 border-rose-200 hover:bg-rose-500 hover:text-white hover:border-rose-500',
  cyan: 'bg-cyan-500/15 text-cyan-600 border-cyan-200 hover:bg-cyan-500 hover:text-white hover:border-cyan-500',
  indigo: 'bg-indigo-500/15 text-indigo-600 border-indigo-200 hover:bg-indigo-500 hover:text-white hover:border-indigo-500',
}

export default function LeistungenHero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-32">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-emerald-50/60" />
      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-bl from-violet-300/20 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-amber-300/15 to-transparent blur-3xl" />
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-cyan-200/10 via-transparent to-rose-200/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        <div className="mb-12 flex flex-wrap justify-center gap-3 sm:gap-4">
          {LEISTUNGEN.map((leistung) => (
            <Link
              key={leistung.slug}
              href={`#${leistung.slug}`}
              className={`inline-flex items-center gap-2 rounded-2xl border-2 px-4 py-2.5 transition-all duration-300 ${colorClasses[leistung.color]}`}
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/50">
                <LeistungIcons icon={leistung.icon} className="h-4 w-4" />
              </span>
              <span className="text-sm font-semibold">{leistung.title}</span>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <span className="mb-6 inline-block rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-4 py-1.5 text-sm font-semibold text-white">
            Unsere Leistungen
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            <span className="bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 bg-clip-text text-transparent">
              SEO Leistungen
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600 sm:text-xl">
            Von der Keyword-Recherche bis zum technischen SEO: Wir bieten ganzheitliche Suchmaschinenoptimierung für
            Unternehmen in München und ganz Bayern.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-500">
            Branchenspezifische Anleitungen und FAQs:{' '}
            <Link href="/branchen" className="font-semibold text-indigo-600 hover:underline">
              SEO nach Branche in München
            </Link>
            .
          </p>
          <Link
            href="/kontakt"
            className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-500 to-violet-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/30 transition-all duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/40"
          >
            Kostenloses SEO-Gespräch
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
