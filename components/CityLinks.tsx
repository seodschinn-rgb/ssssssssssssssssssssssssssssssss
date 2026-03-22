import Link from 'next/link'
import HomeSectionLabel from '@/components/HomeSectionLabel'
import { CITIES } from '@/lib/seo-data'

export default function CityLinks() {
  return (
    <section
      id="orte"
      className="relative overflow-hidden px-4 py-20 sm:px-6 md:py-28"
      aria-labelledby="city-links-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white via-indigo-50/10 to-zinc-50/70" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto mb-10 flex max-w-2xl flex-col items-center gap-3 text-center md:mb-12">
          <HomeSectionLabel>Standorte</HomeSectionLabel>
          <h2
            id="city-links-heading"
            className="text-balance text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl md:text-4xl"
          >
            SEO für München und ganz Bayern
          </h2>
          <p className="mt-1 text-sm leading-relaxed text-zinc-600 sm:text-base">
            Von München aus betreuen wir Unternehmen in der gesamten Region. Ob Handwerker in Rosenheim, Arztpraxis in
            Starnberg oder IT-Firma in Augsburg — wir helfen dir, dein Google-Ranking in München und Bayern nachhaltig zu
            verbessern.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
          <Link
            href="/"
            className="rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 ring-1 ring-white/20 transition-all duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-indigo-500/35"
          >
            München
          </Link>
          {CITIES.map((city) => (
            <Link
              key={city.slug}
              href={`/standorte/${city.slug}`}
              className="rounded-full border border-zinc-200/90 bg-white/95 px-5 py-2.5 text-sm font-medium text-zinc-700 shadow-sm ring-1 ring-black/[0.03] backdrop-blur-sm transition-all duration-200 hover:border-indigo-200 hover:bg-indigo-50/40 hover:text-zinc-900 hover:shadow-md sm:px-6 sm:py-3"
            >
              {city.name}
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/standorte"
            className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 transition-colors hover:text-indigo-700"
          >
            Alle Standorte anzeigen
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
