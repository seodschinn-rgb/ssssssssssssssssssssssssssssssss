import Link from 'next/link'
import HomeSectionLabel from '@/components/HomeSectionLabel'
import HomeBlogTeaserSlider from '@/components/HomeBlogTeaserSlider'
import { getBlogTeaserItems } from '@/lib/blog-posts'

/**
 * Blog-Teaser: Daten serverseitig, Slider mit Pfeilen clientseitig.
 */
export default function HomeBlogTeaser() {
  const items = getBlogTeaserItems()

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

        <div className="-mx-4 md:mx-0">
          <HomeBlogTeaserSlider items={items} />
        </div>

        <p className="mt-8 text-center sm:mt-10">
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
