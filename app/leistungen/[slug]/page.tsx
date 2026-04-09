import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/Header'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import {
  getLeistungBySlug,
  getLeistungContent,
  getAllLeistungSlugs,
} from '@/lib/leistungen-data'
import type { Leistung } from '@/lib/leistungen-data'
import LeistungIcons from '@/components/LeistungIcons'

const heroIconGradients: Record<Leistung['color'], string> = {
  blue: 'from-blue-500 to-blue-600',
  emerald: 'from-emerald-500 to-emerald-600',
  violet: 'from-violet-500 to-violet-600',
  amber: 'from-amber-500 to-amber-600',
  rose: 'from-rose-500 to-rose-600',
  cyan: 'from-cyan-500 to-cyan-600',
  indigo: 'from-indigo-500 to-indigo-600',
}
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import ServiceSchema from '@/components/ServiceSchema'
import GeoAgenturLeistungPage from '@/components/GeoAgenturLeistungPage'
import BlogPostThumbnail from '@/components/BlogPostThumbnail'
import { jsonLdStringify } from '@/lib/safe-json-ld'
import SeoAuditHeroVisual from '@/components/SeoAuditHeroVisual'

const GEO_AGENTUR_META = {
  title: 'GEO Agentur München — Generative Engine Optimization | SEO München',
  description:
    'GEO Agentur München: Sichtbar in ChatGPT, Google AI Overviews & Perplexity. Generative Engine Optimization vom Spezialisten. Kostenloses Erstgespräch.',
  focusKeyword: 'GEO Agentur München',
} as const

const SEO_AUDIT_META = {
  title: 'SEO-Audit München: Dein kompletter Website-Check 2026',
  description:
    'SEO-Audit München: Technik, Content, Backlinks, Local SEO & AI-Readiness. 6 Analysebereiche, priorisierter Maßnahmenplan. Kostenloses Erstgespräch.',
  focusKeyword: 'SEO-Audit München',
} as const

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getAllLeistungSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  if (params.slug === 'geo-agentur') {
    return {
      title: { absolute: GEO_AGENTUR_META.title },
      description: GEO_AGENTUR_META.description,
      keywords: GEO_AGENTUR_META.focusKeyword,
      openGraph: {
        title: GEO_AGENTUR_META.title,
        description: GEO_AGENTUR_META.description,
      },
    }
  }
  if (params.slug === 'seo-audit') {
    return {
      title: { absolute: SEO_AUDIT_META.title },
      description: SEO_AUDIT_META.description,
      keywords: SEO_AUDIT_META.focusKeyword,
      openGraph: {
        title: SEO_AUDIT_META.title,
        description: SEO_AUDIT_META.description,
      },
    }
  }
  const content = getLeistungContent(params.slug)
  if (!content) return { title: 'Leistung' }
  return {
    title: { absolute: `${content.title} | SEO Agentur München` },
    description: content.metaDescription,
    openGraph: {
      title: `${content.title} | SEO Agentur München`,
      description: content.metaDescription,
    },
  }
}

export default function LeistungPage({ params }: PageProps) {
  if (params.slug === 'geo-agentur') {
    return <GeoAgenturLeistungPage />
  }

  const leistung = getLeistungBySlug(params.slug)
  const content = getLeistungContent(params.slug)

  if (!leistung || !content) notFound()

  const seoAuditFaqSchema =
    params.slug === 'seo-audit'
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Wie lange dauert ein SEO-Audit?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Ein Quick-Check mit den wichtigsten Erkenntnissen ist in der Regel in 1 bis 3 Werktagen fertig. Ein umfassender SEO-Audit mit allen sechs Analysebereichen und Wettbewerbsvergleich benötigt typischerweise 1 bis 2 Wochen.',
              },
            },
            {
              '@type': 'Question',
              name: 'Wie oft sollte man einen SEO-Audit machen?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Wir empfehlen mindestens ein- bis zweimal pro Jahr einen vollständigen Audit. Zusätzlich ist eine SEO-Analyse nach Website-Relaunches, bei plötzlichen Traffic-Einbrüchen oder vor dem Eintritt in neue Märkte sinnvoll.',
              },
            },
            {
              '@type': 'Question',
              name: 'Brauche ich als kleines Unternehmen in München einen SEO-Audit?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Gerade KMU in München und Bayern profitieren enorm. 46 % aller Google-Suchen haben einen lokalen Bezug, und 76 % der mobilen Suchenden besuchen ein lokales Geschäft innerhalb von 24 Stunden. Ein SEO-Audit zeigt dir, ob du diese Nachfrage auch tatsächlich erreichst.',
              },
            },
            {
              '@type': 'Question',
              name: 'Was kostet ein SEO-Audit?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Basis-Audits liegen typischerweise bei 300 bis 700 EUR, ein umfassender SEO-Audit mit Wettbewerbsanalyse bei 1.000 bis 3.000 EUR. Bei seomuenchen.com ist der SEO-Audit in allen Paketen ab 990 EUR/Monat enthalten.',
              },
            },
            {
              '@type': 'Question',
              name: 'Was passiert nach dem Audit?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Du erhältst einen priorisierten Maßnahmenplan, der genau aufzeigt, welche Optimierungen den größten Hebel haben. Die Umsetzung kann intern, durch eine andere Agentur oder durch unser Team erfolgen.',
              },
            },
            {
              '@type': 'Question',
              name: 'Was unterscheidet euren Audit von kostenlosen Online-Tools?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Unser Audit deckt sechs Spezialbereiche ab, wird manuell von Experten geprüft, enthält einen direkten Wettbewerbsvergleich und basiert auf fundierter Münchner Marktkenntnis. Die AI/GEO-Readiness-Analyse und lokale SEO-Bewertung gehen weit über automatisierte Tools hinaus.',
              },
            },
          ],
        }
      : null

  const breadcrumbItems = [
    { name: 'Startseite', url: '/' },
    { name: 'Leistungen', url: '/leistungen' },
    { name: content.title, url: `/leistungen/${params.slug}` },
  ]

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        name={content.title}
        description={content.intro}
        url={`/leistungen/${params.slug}`}
      />
      <Header />
      <main>
        {/* Hero mit Gradient – mehr Abstand zum Header, Back-Link unten */}
        <section className="relative pt-40 pb-24 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-white to-accent/10" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/10 to-transparent opacity-50" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
          <div className="relative mx-auto max-w-4xl text-center">
            {content.heroImage && (
              <div className="mb-10 px-4 sm:px-0">
                <BlogPostThumbnail
                  src={content.heroImage}
                  alt={content.heroImageAlt ?? content.title}
                />
              </div>
            )}
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${heroIconGradients[leistung.color]} text-white shadow-xl mb-8`}>
              <LeistungIcons icon={leistung.icon} className="w-8 h-8" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900">
              {params.slug === 'seo-audit'
                ? 'SEO-Audit München: Deine Website auf dem Prüfstand'
                : content.title}
            </h1>
            <p className="mt-4 text-xl text-accent font-semibold">{content.heroSubline}</p>
            <p className="mt-6 text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
              {content.intro}
            </p>
            {params.slug === 'seo-audit' && <SeoAuditHeroVisual />}
            <Link
              href="/leistungen"
              className="mt-10 inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-accent transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Zurück zu allen Leistungen
            </Link>
          </div>
        </section>

        {/* Benefits - Bento-Grid Style */}
        <section className="py-24 px-6 bg-zinc-50/50">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 text-center mb-16">
              {params.slug === 'seo-audit' ? 'Was du davon hast' : 'Was Sie davon haben'}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="group relative rounded-2xl bg-white p-8 shadow-sm border border-zinc-100 hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300"
                >
                  <span className="absolute top-6 right-6 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-sm">
                    {i + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-zinc-900 pr-12">{benefit.title}</h3>
                  <p className="mt-3 text-zinc-600 text-sm leading-relaxed">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 text-center mb-16">
              So arbeiten wir
            </h2>
            <div className="space-y-8">
              {content.process.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-8 items-start p-8 rounded-2xl bg-white border border-zinc-100 hover:border-accent/20 hover:shadow-lg transition-all duration-300"
                >
                  <span className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-accent-hover text-white font-bold text-lg flex items-center justify-center shadow-lg shadow-accent/25">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-zinc-900">{item.title}</h3>
                    <p className="mt-2 text-zinc-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 bg-gradient-to-br from-zinc-900 to-zinc-800">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              {content.ctaHeadline}
            </h2>
            <p className="mt-4 text-zinc-400">
              {params.slug === 'seo-audit'
                ? 'Wir melden uns innerhalb von 24 Stunden und besprechen mit dir die nächsten Schritte.'
                : 'Wir melden uns innerhalb von 24 Stunden und besprechen mit Ihnen die nächsten Schritte.'}
            </p>
            <Link
              href="/#kontakt"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 text-base font-semibold text-white hover:bg-accent-hover transition-all duration-200 shadow-xl shadow-accent/25 hover:shadow-accent/40"
            >
              {content.ctaText}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>

        <ContactSection />

        {params.slug === 'seo-audit' && (
          <section aria-label="SEO-Audit Leistungsseite Zusatzinhalt" className="bg-white">
            <style
              dangerouslySetInnerHTML={{
                __html: `
  .audit-content {
    max-width: 900px;
    margin: 0 auto;
    padding: 60px 24px;
    font-family: inherit;
    color: #1F2937;
    line-height: 1.75;
    font-size: 17px;
  }
  .audit-content h2 {
    color: #4F46E5;
    font-size: 1.65rem;
    margin-top: 48px;
    margin-bottom: 16px;
    font-weight: 700;
    line-height: 1.3;
  }
  .audit-content h3 {
    color: #1F2937;
    font-size: 1.15rem;
    margin-top: 28px;
    margin-bottom: 8px;
    font-weight: 600;
  }
  .audit-content p { margin-bottom: 16px; }
  .audit-content a {
    color: #4F46E5;
    text-decoration: underline;
    text-underline-offset: 2px;
  }
  .audit-content a:hover { color: #3730A3; }
  .audit-content strong { font-weight: 600; }

  .audit-areas {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    margin: 24px 0 32px;
  }
  .audit-area-card {
    background: #F9FAFB;
    border-left: 4px solid #4F46E5;
    border-radius: 8px;
    padding: 20px 24px;
  }
  .audit-area-card h3 {
    margin-top: 0;
    margin-bottom: 6px;
    font-size: 1.05rem;
    color: #4F46E5;
  }
  .audit-area-card p {
    margin-bottom: 0;
    font-size: 0.95rem;
    line-height: 1.6;
  }
  .audit-area-card .card-highlight {
    color: #10B981;
    font-weight: 600;
    font-size: 0.85rem;
    display: inline-block;
    margin-bottom: 6px;
  }

  .process-steps {
    counter-reset: step;
    list-style: none;
    padding: 0;
    margin: 24px 0 32px;
  }
  .process-step {
    counter-increment: step;
    position: relative;
    padding: 20px 24px 20px 72px;
    margin-bottom: 16px;
    background: #F9FAFB;
    border-radius: 8px;
  }
  .process-step::before {
    content: counter(step);
    position: absolute;
    left: 20px;
    top: 20px;
    width: 36px;
    height: 36px;
    background: #4F46E5;
    color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 1rem;
  }
  .process-step h3 { margin-top: 0; margin-bottom: 4px; }
  .process-step p { margin-bottom: 0; font-size: 0.95rem; }

  .audit-cta {
    background: linear-gradient(135deg, #4F46E5, #3730A3);
    color: #fff;
    border-radius: 12px;
    padding: 32px;
    text-align: center;
    margin: 40px 0;
  }
  .audit-cta p {
    color: #E0E7FF;
    margin-bottom: 20px;
    font-size: 1.1rem;
  }
  .audit-cta a.cta-btn {
    display: inline-block;
    background: #10B981;
    color: #fff;
    text-decoration: none;
    padding: 14px 32px;
    border-radius: 8px;
    font-weight: 700;
    font-size: 1.05rem;
    transition: background 0.2s;
  }
  .audit-cta a.cta-btn:hover {
    background: #059669;
    color: #fff;
  }
  .audit-cta .phone {
    display: block;
    margin-top: 12px;
    color: #E0E7FF;
    font-size: 0.95rem;
  }

  .audit-faq { margin-top: 32px; }
  .faq-item {
    border-bottom: 1px solid #E5E7EB;
    padding: 20px 0;
  }
  .faq-item:last-child { border-bottom: none; }
  .faq-q {
    font-weight: 700;
    color: #1F2937;
    font-size: 1.05rem;
    margin-bottom: 8px;
  }
  .faq-a {
    color: #374151;
    font-size: 0.95rem;
    line-height: 1.7;
  }

  .cost-overview {
    background: #F9FAFB;
    border-radius: 8px;
    padding: 20px 24px;
    margin: 16px 0 24px;
  }
  .cost-overview table { width: 100%; border-collapse: collapse; }
  .cost-overview th, .cost-overview td {
    text-align: left;
    padding: 10px 12px;
    font-size: 0.95rem;
  }
  .cost-overview th {
    color: #4F46E5;
    font-weight: 600;
    border-bottom: 2px solid #E5E7EB;
  }
  .cost-overview td { border-bottom: 1px solid #E5E7EB; }
  .cost-overview tr:last-child td { border-bottom: none; }

  .audit-closing {
    font-size: 0.9rem;
    color: #6B7280;
    text-align: center;
    margin-top: 24px;
    line-height: 1.6;
  }
  .audit-closing a { color: #4F46E5; }

  @media (max-width: 640px) {
    .audit-content { padding: 40px 16px; font-size: 16px; }
    .audit-content h2 { font-size: 1.4rem; }
    .audit-areas { grid-template-columns: 1fr; }
    .audit-cta { padding: 24px 20px; }
  }
`,
              }}
            />

            <div
              dangerouslySetInnerHTML={{
                __html: `
<div class="audit-content">

  <h2>Was ist ein SEO-Audit?</h2>
  <p>Ein <strong>SEO-Audit</strong> (auch Website Audit oder SEO-Check genannt) ist der systematische Gesundheitscheck für deine Website. Bei unserem <strong>SEO-Audit in München</strong> prüfen wir Sichtbarkeit, technische Substanz und Wettbewerbsfähigkeit deines Webauftritts in den Suchergebnissen.</p>
  <p>Dabei betrachten wir drei zentrale Dimensionen: die <strong>technische Infrastruktur</strong> deiner Website, die <strong>Qualität und Relevanz deiner Inhalte</strong> sowie dein <strong>Backlink-Profil und deine Autorität</strong> im Netz. Erst wenn alle drei Bereiche zusammenspielen, entfaltet SEO seine volle Wirkung.</p>
  <p>Gerade für Unternehmen im Großraum München ist ein professioneller SEO-Audit der erste Schritt zu nachhaltig mehr Sichtbarkeit. Der Münchner Markt ist wettbewerbsintensiv, und wer hier auf Seite 1 erscheinen will, braucht eine solide Grundlage.</p>

  <h2>Was prüfen wir in deinem SEO-Audit?</h2>
  <p>Unsere <strong>Website-Analyse</strong> umfasst sechs Bereiche, die wir systematisch durchleuchten:</p>

  <div class="audit-areas">
    <div class="audit-area-card">
      <span class="card-highlight">Bereich 1</span>
      <h3>Technisches SEO</h3>
      <p>Crawlability, <a href="https://developers.google.com/search/docs/crawling-indexing" target="_blank" rel="noopener">Indexierung</a>, Core Web Vitals, Mobile-Friendliness, HTTPS und Structured Data. Technische Fehler sind erfahrungsgemäß die häufigste Ursache für verschenkte Rankings.</p>
    </div>
    <div class="audit-area-card">
      <span class="card-highlight">Bereich 2</span>
      <h3><a href="/leistungen/onpage-optimierung/">OnPage-Optimierung</a></h3>
      <p>Title Tags, Meta Descriptions, Heading-Struktur und interne Verlinkung. Wir prüfen, ob jede Seite optimal auf ihre Ziel-Keywords ausgerichtet ist und die richtige Suchintention bedient.</p>
    </div>
    <div class="audit-area-card">
      <span class="card-highlight">Bereich 3</span>
      <h3>Content & Keywords</h3>
      <p>Triffst du die Suchintention deiner Zielgruppe? Wir bewerten <a href="/leistungen/keyword-recherche/">Keyword-Targeting</a>, Content-Qualität und decken Content-Gaps gegenüber deinen Wettbewerbern auf.</p>
    </div>
    <div class="audit-area-card">
      <span class="card-highlight">Bereich 4</span>
      <h3>Backlink-Profil</h3>
      <p>Backlinks bleiben ein zentraler Rankingfaktor. Wir analysieren Linkqualität, identifizieren toxische Links und vergleichen deine Autorität mit den stärksten Wettbewerbern in deiner Branche.</p>
    </div>
    <div class="audit-area-card">
      <span class="card-highlight">Bereich 5</span>
      <h3><a href="/leistungen/local-seo/">Local SEO</a></h3>
      <p>Für Münchner Unternehmen entscheidend: Google Business Profile, lokale Citations, NAP-Konsistenz und Bewertungsmanagement. 46 % aller Google-Suchen haben einen lokalen Bezug.</p>
    </div>
    <div class="audit-area-card">
      <span class="card-highlight">Bereich 6</span>
      <h3>AI/GEO-Readiness</h3>
      <p>Was uns unterscheidet: Wir prüfen deine Sichtbarkeit in <strong>KI-gestützten Suchsystemen</strong> wie ChatGPT, Perplexity und Google AI Overviews. Wer jetzt vorbereitet ist, sichert sich einen Vorsprung.</p>
    </div>
  </div>

  <h2>So läuft dein SEO-Audit ab</h2>

  <ol class="process-steps">
    <li class="process-step">
      <h3>Kostenloses Erstgespräch</h3>
      <p>Im persönlichen Gespräch lernen wir dein Unternehmen, deine Ziele und dein Wettbewerbsumfeld kennen. Wir klären, welche Märkte in München und Bayern für dich relevant sind. Das Erstgespräch ist kostenlos und ohne Bindung.</p>
    </li>
    <li class="process-step">
      <h3>Datenerfassung & Crawl</h3>
      <p>Wir führen einen umfassenden technischen Crawl durch, werten deine Google Search Console- und GA4-Daten aus und analysieren dein Backlink-Profil. Diese Datengrundlage ist das Fundament für jede fundierte Sichtbarkeitsanalyse.</p>
    </li>
    <li class="process-step">
      <h3>Expertenanalyse</h3>
      <p>Unsere Spezialisten prüfen systematisch alle sechs Analysebereiche. Dabei vergleichen wir deine Performance direkt mit deinen Wettbewerbern und bewerten jeden Bereich nach Dringlichkeit und erwartetem Impact.</p>
    </li>
    <li class="process-step">
      <h3>Audit-Report & Präsentation</h3>
      <p>Du erhältst einen priorisierten Maßnahmenkatalog mit konkreten Handlungsempfehlungen. In einer persönlichen Besprechung gehen wir jeden Punkt durch und definieren gemeinsam die nächsten Schritte.</p>
    </li>
  </ol>

  <div class="audit-cta">
    <p>Du willst wissen, wo deine Website steht?</p>
    <a href="/kontakt/" class="cta-btn">Kostenloses Erstgespräch vereinbaren</a>
    <span class="phone">Oder ruf uns direkt an: <a href="tel:+4915565087694" style="color:#fff; text-decoration:underline;">+49 155 65087694</a></span>
  </div>

  <h2>Was kostet ein SEO-Audit?</h2>
  <p>Die Kosten für einen SEO-Audit variieren je nach Umfang der Analyse. Hier ein Marktüberblick:</p>

  <div class="cost-overview">
    <table>
      <thead>
        <tr>
          <th>Audit-Typ</th>
          <th>Typische Kosten</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Basis-Audit (Technik-Schnellcheck)</td>
          <td>300 bis 700 EUR</td>
        </tr>
        <tr>
          <td>Umfassender SEO-Audit mit Wettbewerbsanalyse</td>
          <td>1.000 bis 3.000 EUR</td>
        </tr>
        <tr>
          <td>Enterprise-Audit (komplexe Websites)</td>
          <td>3.000 bis 6.000 EUR</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>Bei seomuenchen.com ist der SEO-Audit fester Bestandteil unserer laufenden SEO-Betreuung und in allen Paketen ab 990 EUR/Monat enthalten. So profitierst du nicht nur von der einmaligen Analyse, sondern von kontinuierlicher Optimierung und regelmäßigen Re-Audits. Natürlich bieten wir den Audit auch als Einzelleistung an.</p>
  <p>Alle Details zu unseren fünf Paketen findest du auf unserer <a href="/preise/">Preisseite</a>.</p>

  <h2>Häufige Fragen zum SEO-Audit</h2>

  <div class="audit-faq">
    <div class="faq-item">
      <div class="faq-q">Wie lange dauert ein SEO-Audit?</div>
      <div class="faq-a">Ein Quick-Check mit den wichtigsten Erkenntnissen ist in der Regel in 1 bis 3 Werktagen fertig. Ein umfassender SEO-Audit mit allen sechs Analysebereichen und Wettbewerbsvergleich benötigt typischerweise 1 bis 2 Wochen.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q">Wie oft sollte man einen SEO-Audit machen?</div>
      <div class="faq-a">Wir empfehlen mindestens ein- bis zweimal pro Jahr einen vollständigen Audit. Zusätzlich ist eine SEO-Analyse nach Website-Relaunches, bei plötzlichen Traffic-Einbrüchen oder vor dem Eintritt in neue Märkte sinnvoll. Im Rahmen unserer <a href="/leistungen/">laufenden Betreuung</a> führen wir regelmäßige Re-Audits automatisch durch.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q">Brauche ich als kleines Unternehmen in München einen SEO-Audit?</div>
      <div class="faq-a">Gerade KMU in München und Bayern profitieren enorm. 46 % aller Google-Suchen haben einen lokalen Bezug, und 76 % der mobilen Suchenden besuchen ein lokales Geschäft innerhalb von 24 Stunden (Quelle: Google/Ipsos). Ein SEO-Audit zeigt dir, ob du diese Nachfrage auch tatsächlich erreichst, oder ob sie bei deiner Konkurrenz landet.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q">Was passiert nach dem Audit?</div>
      <div class="faq-a">Du erhältst einen priorisierten Maßnahmenplan, der genau aufzeigt, welche Optimierungen den größten Hebel haben. Ob du die Umsetzung selbst übernimmst, an deine Agentur übergibst oder von uns betreuen lässt, entscheidest du. In unseren <a href="/preise/">SEO-Paketen</a> übernehmen wir die komplette Umsetzung und das laufende Monitoring.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q">Was unterscheidet euren Audit von kostenlosen Online-Tools?</div>
      <div class="faq-a">Kostenlose SEO-Tools prüfen in der Regel nur die technische Oberfläche und liefern generische Empfehlungen. Unser Audit deckt sechs Spezialbereiche ab, wird manuell von Experten geprüft, enthält einen direkten Wettbewerbsvergleich und basiert auf fundierter Münchner Marktkenntnis. Vor allem die AI/GEO-Readiness-Analyse und die lokale SEO-Bewertung für den bayerischen Markt gehen weit über automatisierte Tools hinaus.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q">Kann ich die Empfehlungen auch intern umsetzen?</div>
      <div class="faq-a">Selbstverständlich. Der Audit-Report ist so aufgebaut, dass auch dein internes Team oder eine andere Agentur die Maßnahmen umsetzen kann. Jede Empfehlung enthält eine klare Priorität, den erwarteten Aufwand und den geschätzten Impact. Du suchst eine <a href="/blog/seo-audit-checkliste">SEO-Audit-Checkliste zum Selbermachen</a>? Auch die haben wir für dich erstellt.</div>
    </div>
  </div>

  <div class="audit-cta">
    <p>Bereit für deinen SEO-Audit in München?</p>
    <a href="/kontakt/" class="cta-btn">Kostenloses Erstgespräch sichern</a>
    <span class="phone">Oder ruf uns direkt an: <a href="tel:+4915565087694" style="color:#fff; text-decoration:underline;">+49 155 65087694</a></span>
  </div>

  <p class="audit-closing">
    Wir betreuen Unternehmen in München und ganz Bayern. Erfahre mehr über unsere <a href="/leistungen/">SEO-Leistungen</a> oder lies in unserem <a href="/blog/">Blog</a>, wie andere Münchner Unternehmen ihre Sichtbarkeit verbessert haben.
  </p>

</div>
`,
              }}
            />

            {seoAuditFaqSchema && (
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLdStringify(seoAuditFaqSchema) }}
              />
            )}
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}
