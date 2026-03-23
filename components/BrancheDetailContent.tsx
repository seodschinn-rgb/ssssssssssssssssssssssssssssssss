import Link from 'next/link'
import type { BranchePageData } from '@/lib/branchen'
import { getBrancheBySlug } from '@/lib/branchen'

interface Props {
  data: BranchePageData
}

export default function BrancheDetailContent({ data }: Props) {
  const related = data.relatedSlugs
    .map((s) => getBrancheBySlug(s))
    .filter((x): x is BranchePageData => Boolean(x))

  return (
    <article className="prose prose-zinc max-w-none prose-headings:scroll-mt-24 prose-a:text-indigo-600">
      <section className="not-prose mb-12 rounded-2xl border border-zinc-200 bg-gradient-to-br from-indigo-50/60 to-white p-6 sm:p-8">
        <p className="text-sm font-semibold text-indigo-700">
          <Link href="/branchen" className="hover:underline">
            Branchen
          </Link>
          <span className="mx-2 text-zinc-400">/</span>
          <span className="text-zinc-800">{data.name}</span>
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl md:text-5xl">
          {data.h1}
        </h1>
      </section>

      <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
        Warum {data.name} in München SEO brauchen
      </h2>
      {data.warumParagraphs.map((p, i) => (
        <p key={i} className="text-zinc-600 leading-relaxed">
          {p}
        </p>
      ))}
      <p className="rounded-xl border border-blue-100 bg-blue-50/80 px-4 py-3 text-sm font-medium text-blue-900">
        <strong className="font-semibold">Suchpotenzial:</strong> {data.statistik}
      </p>
      <p className="text-zinc-600 leading-relaxed">{data.ohneSeoParagraph}</p>

      <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
        Die 5 wichtigsten SEO-Maßnahmen für {data.name}
      </h2>
      <ol className="list-none space-y-8 pl-0">
        {data.massnahmen.map((m, i) => (
          <li key={m.title}>
            <h3 className="text-lg font-bold text-zinc-900">
              {i + 1}. {m.title}
            </h3>
            <p className="mt-2 text-zinc-600 leading-relaxed">{m.body}</p>
          </li>
        ))}
      </ol>

      <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
        Typische SEO-Fehler bei {data.name}-Websites
      </h2>
      <ul className="list-disc space-y-2 pl-5 text-zinc-600">
        {data.fehler.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
      <p className="text-zinc-600">
        Viele Wettbewerber unterschätzen genau diese Punkte — hier lässt sich mit strukturierten Fixes schnell
        Boden gutmachen.
      </p>

      <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">{data.fallstudieTitle}</h2>
      {data.fallstudieParagraphs.map((p, i) => (
        <p key={i} className="text-zinc-600 leading-relaxed">
          {p}
        </p>
      ))}

      <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">Was kostet SEO für {data.name}?</h2>
      {data.kostenParagraphs.map((p, i) => (
        <p key={i} className="text-zinc-600 leading-relaxed">
          {p}
        </p>
      ))}
      <p className="text-zinc-600">
        Alle Pakete und Preise sind transparent hinterlegt:{' '}
        <Link href="/preise" className="font-semibold text-indigo-600 hover:underline">
          Zur Preisseite
        </Link>
        .
      </p>

      <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
        FAQ: Häufige Fragen zu SEO für {data.name}
      </h2>
      <div className="not-prose space-y-6">
        {data.faqs.map((f) => (
          <div key={f.q} className="rounded-xl border border-zinc-200 bg-zinc-50/50 p-5">
            <p className="font-semibold text-zinc-900">{f.q}</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">{f.a}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
        Bereit für mehr {data.ctaNoun}?
      </h2>
      <p className="text-zinc-600">
        Im kostenlosen Erstgespräch klären wir Ziele, Wettbewerb und das passende Paket — transparent und ohne
        Verpflichtung.
      </p>
      <div className="not-prose mt-6 flex flex-wrap gap-3">
        <Link
          href="/kontakt"
          className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition hover:bg-indigo-700"
        >
          Erstgespräch vereinbaren
        </Link>
        <Link
          href="/branchen"
          className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white px-6 py-3 text-sm font-semibold text-zinc-800 hover:border-zinc-300"
        >
          Alle Branchen
        </Link>
      </div>

      <section className="not-prose mt-16 border-t border-zinc-200 pt-10">
        <h2 className="text-xl font-bold text-zinc-900">Weiterführend &amp; interne Links</h2>
        <ul className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
          <li>
            <Link href="/branchen" className="text-indigo-600 hover:underline">
              ← Zurück zum Branchen-Überblick
            </Link>
          </li>
          <li>
            <Link href="/leistungen/local-seo" className="text-indigo-600 hover:underline">
              Local SEO (Leistung)
            </Link>
          </li>
          <li>
            <Link href="/leistungen/seo-audit" className="text-indigo-600 hover:underline">
              SEO-Audit (Leistung)
            </Link>
          </li>
          <li>
            <Link href="/blog/onpage-seo-checkliste" className="text-indigo-600 hover:underline">
              OnPage SEO Checkliste (Blog)
            </Link>
          </li>
          <li>
            <Link href="/standorte" className="text-indigo-600 hover:underline">
              Standorte &amp; Region Bayern
            </Link>
          </li>
        </ul>
        {related.length > 0 && (
          <>
            <h3 className="mt-8 text-sm font-semibold uppercase tracking-wide text-zinc-500">
              Weitere Branchen
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/branchen/${r.slug}`}
                    className="inline-flex rounded-full border border-zinc-200 bg-white px-3 py-1 text-sm text-zinc-700 hover:border-indigo-200 hover:text-indigo-700"
                  >
                    SEO für {r.name}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </section>
    </article>
  )
}
