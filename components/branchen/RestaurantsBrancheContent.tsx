import Link from 'next/link'
import '@/components/branchen/restaurants-page.css'
import '@/components/branchen/branchen-img-cls.css'
import { restaurantsPageInnerHtml } from '@/lib/branchen/restaurants-page-html'
import { getBrancheBySlug } from '@/lib/branchen'
import type { BranchePageData } from '@/lib/branchen'

const RELATED_SLUGS = ['hotels', 'zahnaerzte', 'handwerker', 'immobilienmakler', 'steuerberater'] as const

export default function RestaurantsBrancheContent() {
  const related = RELATED_SLUGS.map((slug) => getBrancheBySlug(slug)).filter(
    (b): b is BranchePageData => Boolean(b)
  )

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: restaurantsPageInnerHtml }} />
      <div className="mx-auto max-w-[1200px] px-5 pb-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">Weitere Branchen</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {related.map((b) => (
            <li key={b.slug}>
              <Link
                href={`/branchen/${b.slug}`}
                className="inline-flex rounded-full border border-zinc-200 bg-white px-3 py-1 text-sm text-zinc-700 hover:border-indigo-200 hover:text-indigo-700"
              >
                SEO fuer {b.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
