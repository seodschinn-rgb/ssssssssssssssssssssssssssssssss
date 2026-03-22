import Link from 'next/link'
import HomeSectionLabel from '@/components/HomeSectionLabel'

const featuredPosts = [
  {
    href: '/blog/onpage-seo-checkliste',
    title: 'OnPage SEO Checkliste 2026',
    desc: 'Alle Ranking-Faktoren mit Prioritäts-Matrix',
    image: '/images/blog/onpage-seo-checkliste-featured-image.webp',
    imageAlt:
      'OnPage SEO Checkliste 2026: Die vollständige Anleitung für Top-Rankings bei Google',
  },
  {
    href: '/blog/seo-kosten',
    title: 'Was kostet SEO?',
    desc: 'Preise, Pakete und ROI-Berechnung',
    image: '/images/blog/seo%20kosten%202026.webp',
    imageAlt:
      'SEO Kosten 2026: Was kostet Suchmaschinenoptimierung – Preisüberblick für München und Bayern',
  },
  {
    href: '/blog/seo-audit-checkliste',
    title: 'SEO Audit: Der komplette Leitfaden',
    desc: 'Checkliste, Kosten und Schritt-für-Schritt-Anleitung',
    image: '/images/blog/seo-audit-thumbnail.webp',
    imageAlt:
      'SEO Audit 2026: Dashboard mit Health Score, Checkliste und Ranking-Faktoren',
  },
]

export default function HomeBlogTeaser() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-white via-zinc-50/40 to-white px-4 py-20 sm:px-6 md:py-28"
      aria-labelledby="blog-teaser-heading"
    >
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col items-center gap-3 text-center md:mb-12">
          <HomeSectionLabel>Wissen</HomeSectionLabel>
          <h2
            id="blog-teaser-heading"
            className="max-w-3xl text-balance text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl md:text-4xl"
          >
            SEO-Wissen: Guides für bessere Google-Rankings
          </h2>
          <p className="mx-auto mt-1 max-w-2xl text-sm leading-relaxed text-zinc-600 sm:text-base">
            In unserem Blog teilen wir unser Know-how — praxisnah, aktuell und kostenlos.
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {featuredPosts.map((item, index) => (
            <li key={item.href} className="min-w-0">
              <Link
                href={item.href}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200/70 bg-white shadow-md shadow-zinc-200/30 transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-lg hover:shadow-zinc-200/50"
              >
                <div className="shrink-0 bg-white p-2 sm:p-2.5">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-white">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      width={640}
                      height={400}
                      loading={index === 0 ? 'eager' : 'lazy'}
                      className="absolute inset-2 rounded-md object-cover object-center transition-transform duration-500 ease-out [transform-origin:center] will-change-transform sm:inset-2.5 group-hover:scale-[1.06]"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-bold leading-snug text-zinc-900 transition-colors group-hover:text-indigo-600">
                    {item.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-zinc-600">{item.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 transition-all group-hover:gap-3">
                    Zum Artikel
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-800 shadow-sm transition-all hover:border-indigo-200 hover:bg-indigo-50/50 hover:text-indigo-700"
          >
            → Alle Blog-Artikel
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </p>
      </div>
    </section>
  )
}
