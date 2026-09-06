import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactSection from '@/components/ContactSection'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import ServiceSchema from '@/components/ServiceSchema'
import { REFERENCE_PROJECTS } from '@/lib/reference-projects'
import { jsonLdStringify } from '@/lib/safe-json-ld'
import type { ServicePageCopy } from '@/lib/service-page-types'
import styles from './ServiceLanding.module.css'

const projectIds: Record<string, string[]> = {
  'seo-audit': ['capehart', 'vapeoase'],
  'local-seo': ['capehart'],
  'technisches-seo': ['capehart'],
  'keyword-recherche': ['vapeoase'],
  'onpage-optimierung': ['vapeoase'],
}

const sectionLinks = [
  ['umfang', 'Leistungsumfang'], ['beispiel', 'Arbeitsbeispiel'],
  ['ablauf', 'Ablauf'], ['kosten', 'Kosten'], ['fragen', 'Fragen'],
] as const

function Arrow() {
  return <span aria-hidden="true" className={styles.arrow}>↗</span>
}

export default function ServiceLanding({ slug, name, page }: { slug: string; name: string; page: ServicePageCopy }) {
  const projects = REFERENCE_PROJECTS.filter(p => (projectIds[slug] ?? []).includes(p.id))
  const faqs = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: page.faqs.map(({ question, answer }) => ({
      '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  }
  return <>
    <Header />
    <BreadcrumbSchema items={[{ name: 'Startseite', url: '/' }, { name: 'Leistungen', url: '/leistungen' }, { name, url: `/leistungen/${slug}` }]} />
    <ServiceSchema name={name} description={page.description} url={`/leistungen/${slug}`} />
    {page.faqs.length > 0 && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(faqs) }} />}
    <main className={styles.page} data-service={slug}>
      <section className={styles.hero} aria-labelledby="service-heading">
        <div className={styles.wrap}>
          <nav className={styles.breadcrumb} aria-label="Brotkrümelnavigation">
            <Link href="/">Startseite</Link><span aria-hidden="true">/</span><Link href="/leistungen">Leistungen</Link><span aria-hidden="true">/</span><span aria-current="page">{name}</span>
          </nav>
          <div className={styles.heroGrid}>
            <div>
              <p className={styles.eyebrow}>{page.eyebrow}</p>
              <h1 id="service-heading">{page.h1}</h1>
              <p className={styles.intro}>{page.intro}</p>
              <div className={styles.actions}>
                <a href="#kontakt" className={styles.primary}>{name} anfragen <Arrow /></a>
                <a href="#beispiel" className={styles.secondary}>Arbeitsbeispiel ansehen <span aria-hidden="true">↓</span></a>
              </div>
              <p className={styles.location}>Für Unternehmen in München und Bayern.<br />Geschäftssitz Engelskirchen · Zusammenarbeit remote.</p>
            </div>
            <aside className={styles.heroPanel} aria-labelledby="result-heading">
              <p className={styles.panelLabel}>Von der Frage zum nächsten Schritt</p>
              <h2 id="result-heading">Was du aus der Zusammenarbeit mitnimmst</h2>
              <ol>{page.deliverables.slice(0,3).map((d,i) => <li key={d.title}><span className={styles.stepNumber}>{String(i+1).padStart(2,'0')}</span><span>{d.title}</span></li>)}</ol>
              <p>Den konkreten Umfang stimmen wir vor dem Start ab. Das Beispiel weiter unten zeigt die Arbeitsweise.</p>
              <a href="#umfang">Leistung im Detail <Arrow /></a>
            </aside>
          </div>
        </div>
      </section>
      <nav className={styles.sectionNav} aria-label="Auf dieser Leistungsseite">
        <div className={styles.wrap}>{sectionLinks.map(([id,label]) => <a key={id} href={`#${id}`}>{label}</a>)}</div>
      </nav>
      <section className={styles.section} aria-labelledby="audience-heading">
        <div className={styles.wrap}>
          <div className={styles.sectionHead}><p className={styles.eyebrow}>Deine Ausgangslage</p><h2 id="audience-heading">Passt {name} zu deinem Vorhaben?</h2></div>
          <div className={styles.threeGrid}>{page.audience.map(a => <article className={styles.audienceCard} key={a.title}><h3>{a.title}</h3><p>{a.text}</p></article>)}</div>
        </div>
      </section>
      <section className={`${styles.section} ${styles.tinted}`} id="umfang" aria-labelledby="scope-heading">
        <div className={styles.wrap}>
          <div className={styles.sectionHead}><p className={styles.eyebrow}>Konkret statt pauschal</p><h2 id="scope-heading">Das gehört zur Leistung</h2></div>
          <div className={styles.scopeGrid}>{page.deliverables.map((d,i) => <article className={styles.scopeCard} key={d.title}><span className={styles.index}>{String(i+1).padStart(2,'0')}</span><div><h3>{d.title}</h3><p>{d.text}</p></div></article>)}</div>
          <div className={styles.boundary}><h3>Was wir vorab klären</h3><p>{page.boundaries}</p></div>
        </div>
      </section>
      <section className={styles.section} id="beispiel" aria-labelledby="example-heading">
        <div className={styles.wrap}>
          <div className={styles.splitHead}><div><p className={styles.eyebrow}>{page.example.label}</p><h2 id="example-heading">{page.example.title}</h2></div><p>{page.example.intro}</p></div>
          <div className={styles.exampleTable} role="region" aria-labelledby="example-heading" tabIndex={0}>
            <table><caption>Illustratives Muster – keine echten Kundendaten und kein Erfolgsversprechen.</caption><thead><tr>{page.example.columns.map(c=><th scope="col" key={c}>{c}</th>)}</tr></thead><tbody>{page.example.rows.map((r,i)=><tr key={i}>{r.map((c,j)=>j===0?<th scope="row" key={j}>{c}</th>:<td key={j}>{c}</td>)}</tr>)}</tbody></table>
          </div>
        </div>
      </section>
      <section className={`${styles.section} ${styles.dark}`} id="ablauf" aria-labelledby="process-heading">
        <div className={styles.wrap}>
          <div className={styles.sectionHead}><p className={styles.eyebrow}>Klare Schritte, klare Zuständigkeiten</p><h2 id="process-heading">So läuft die Zusammenarbeit ab</h2></div>
          <ol className={styles.processGrid}>{page.process.map((p,i)=><li key={p.title}><span className={styles.stepNumber}>{String(i+1).padStart(2,'0')}</span><h3>{p.title}</h3><p>{p.text}</p></li>)}</ol>
        </div>
      </section>
      {projects.length > 0 && <section className={styles.section} aria-labelledby="proof-heading"><div className={styles.wrap}>
        <div className={styles.splitHead}><div><p className={styles.eyebrow}>Einblicke in unsere Arbeit</p><h2 id="proof-heading">{slug === 'seo-audit' ? 'Weitere SEO-Arbeit aus der Praxis' : 'Konkrete Projekte aus der Praxis'}</h2></div><p>{slug === 'seo-audit' ? 'Diese Referenzen zeigen angrenzende Content-, Website- und Local-SEO-Arbeit. Sie sind keine Audit-Fallstudien und belegen keinen bestimmten Rankinggewinn.' : 'Hier zeigen wir dokumentierte Umsetzungsarbeit. Aufgaben und Ergebnisse der Arbeit sind abgegrenzt – ohne daraus einen bestimmten Rankinggewinn abzuleiten.'}</p></div>
        <div className={styles.proofGrid}>{projects.map(p=><article key={p.id} className={styles.proofCard}>
          <div className={styles.proofImage}><img src={p.image} alt={p.imageAlt} width={1200} height={900} loading="lazy" /></div>
          <div><p className={styles.eyebrow}>{p.category}</p><h3>{p.name}</h3><p>{p.summary}</p><p className={styles.proofScope}>{p.scope}</p><Link href={`/referenzen#${p.id}`}>Aufgaben und Umsetzung ansehen <Arrow /></Link></div>
        </article>)}</div>
      </div></section>}
      <section className={`${styles.section} ${styles.tinted}`} id="kosten" aria-labelledby="price-heading"><div className={styles.wrap}>
        <div className={styles.priceBox}><div><p className={styles.eyebrow}>Umfang vor Aufwand</p><h2 id="price-heading">Was kostet {name}?</h2><p>{page.priceNote}</p></div><div className={styles.priceActions}><a href="#kontakt" className={styles.primary}>Vorhaben besprechen <Arrow /></a><Link className={styles.secondary} href="/preise">Laufende SEO-Pakete ansehen</Link><p>Ein Projektangebot ist nicht automatisch eine monatliche Betreuung.</p></div></div>
      </div></section>
      <section className={styles.section} id="fragen" aria-labelledby="faq-heading"><div className={`${styles.wrap} ${styles.faqGrid}`}>
        <div><p className={styles.eyebrow}>Vor deiner Anfrage</p><h2 id="faq-heading">Häufige Fragen</h2><p className={styles.faqIntro}>Dein Projekt passt in keine Standardlösung? Im Erstgespräch klären wir die offenen Punkte.</p></div>
        <div className={styles.faqList}>{page.faqs.map(f=><details key={f.question}><summary>{f.question}<span aria-hidden="true" className={styles.faqPlus}>+</span></summary><p>{f.answer}</p></details>)}</div>
      </div></section>
      <section className={`${styles.section} ${styles.related}`} aria-labelledby="related-heading"><div className={styles.wrap}>
        <div className={styles.sectionHead}><p className={styles.eyebrow}>Passend zu deinem nächsten Schritt</p><h2 id="related-heading">Leistungen und Wissen vertiefen</h2></div>
        <div className={styles.relatedGrid}>{page.related.map(r=><Link href={r.href} key={r.href}><span>{r.label}</span><Arrow /></Link>)}</div>
      </div></section>
      <ContactSection serviceName={name} />
    </main>
    <Footer />
  </>
}
