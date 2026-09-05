import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import { absoluteCanonical } from '@/lib/canonical'
import { jsonLdStringify } from '@/lib/safe-json-ld'
import { REFERENCE_PROJECTS } from '@/lib/reference-projects'
import styles from './references.module.css'

const title = 'SEO-Referenzen: VapeOase & Capehart | SEO München'
const description = 'Einblicke in unsere Arbeit für VapeOase und Capehart: SEO-Inhalte, lokale Leistungsseiten, individuelles WordPress-Design und integrierte Terminbuchung.'

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: absoluteCanonical('/referenzen') },
  openGraph: { title, description, url: absoluteCanonical('/referenzen'), type: 'website', locale: 'de_DE' },
  twitter: { card: 'summary', title, description },
}

export default function ReferenzenPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${absoluteCanonical('/referenzen')}#webpage`,
    url: absoluteCanonical('/referenzen'),
    name: 'SEO-Referenzen: VapeOase und Capehart',
    description,
    inLanguage: 'de-DE',
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: REFERENCE_PROJECTS.length,
      itemListElement: REFERENCE_PROJECTS.map((project, index) => ({
        '@type': 'ListItem', position: index + 1, name: project.name,
        url: `${absoluteCanonical('/referenzen')}#${project.id}`,
      })),
    },
  }

  return (
    <>
      <Header />
      <BreadcrumbSchema items={[{ name: 'Startseite', url: '/' }, { name: 'Referenzen', url: '/referenzen' }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(schema) }} />
      <main id="main" className={styles.page}>
        <a className={styles.skip} href="#projekte">Zu den Projekten</a>
        <div className={styles.wrap}>
          <nav aria-label="Brotkrümelnavigation" className={styles.breadcrumb}>
            <Link href="/">Startseite</Link><span aria-hidden="true">/</span><span aria-current="page">Referenzen</span>
          </nav>
          <header className={styles.hero}>
            <div>
              <p className={styles.eyebrow}>Ausgewählte Projekte</p>
              <h1>SEO-Referenzen.<br /><span>Einblick in unsere Arbeit.</span></h1>
              <p className={styles.lead}>Ein Online-Shop in Deutschland. Ein Handwerksbetrieb in Oklahoma. Zwei unterschiedliche Aufgaben – und ein konkreter Blick darauf, was wir umgesetzt haben.</p>
            </div>
            <nav className={styles.projectIndex} aria-label="Projekte auf dieser Seite">
              {REFERENCE_PROJECTS.map((project) => (
                <a key={project.id} href={`#${project.id}`}>
                  <span className={styles.indexNumber}>{project.number}</span>
                  <span><strong>{project.name}</strong><small>{project.category}</small></span>
                  <span aria-hidden="true">↘</span>
                </a>
              ))}
            </nav>
          </header>
          <div className={styles.projectList} id="projekte">
            {REFERENCE_PROJECTS.map((project) => (
              <article key={project.id} id={project.id} className={styles.project} aria-labelledby={`${project.id}-heading`}>
                <header className={styles.projectHeader}>
                  <div><p className={styles.eyebrow}>Projekt {project.number} / {project.category}</p><h2 id={`${project.id}-heading`}>{project.name}</h2></div>
                  <span className={styles.platform}>{project.platform}</span>
                </header>
                <div className={styles.projectMain}>
                  <figure className={`${styles.screenshot} ${project.id === 'vapeoase' ? styles.warm : styles.cool}`}>
                    <div className={styles.browserBar}><span aria-hidden="true">● ● ●</span><span>{project.domain}</span></div>
                    <img src={project.image} alt={project.imageAlt} width={1200} height={900} loading="lazy" decoding="async" />
                    <figcaption>{project.imageCaption}</figcaption>
                  </figure>
                  <div className={styles.projectIntro}>
                    <p className={styles.label}>Die Aufgabe</p>
                    <h3>{project.title}</h3>
                    <p>{project.task}</p>
                    <div className={styles.scope}>{project.scope}</div>
                  </div>
                </div>
                <div className={styles.workGrid}>
                  {project.services.map((service, index) => (
                    <section key={service.title}>
                      <span className={styles.workNumber} aria-hidden="true">0{index + 1}</span>
                      <h3>{service.title}</h3><p>{service.text}</p>
                    </section>
                  ))}
                </div>
                <footer className={styles.projectFooter}>
                  <div><p className={styles.label}>Konkret umgesetzt</p><p>{project.deliverable}</p></div>
                  <nav aria-label={`Passende Leistungen zum Projekt ${project.name}`}>
                    {project.links.map((link) => <Link key={link.href} href={link.href}>{link.label}<span aria-hidden="true">↗</span></Link>)}
                  </nav>
                </footer>
              </article>
            ))}
          </div>
          <aside className={styles.evidence}>
            <h2>Umsetzung zeigen. Ergebnisse belegen.</h2>
            <p>Diese Referenzen dokumentieren unsere Projektarbeit. Sie sind kein Vorher-nachher-Nachweis für Rankings, Traffic oder Umsatz. Solche Ergebnisse ergänzen wir nur mit vergleichbaren Messdaten und Freigabe des jeweiligen Unternehmens.</p>
          </aside>
          <section className={styles.contact} aria-labelledby="projekt-anfrage">
            <div><p className={styles.eyebrow}>Dein Projekt</p><h2 id="projekt-anfrage">Was soll deine Website<br />besser machen?</h2><p>Wir schauen gemeinsam auf deine Ausgangslage und besprechen, welche Schritte für dein Unternehmen sinnvoll sind.</p></div>
            <Link href="/kontakt" className={styles.button}>Projekt besprechen <span aria-hidden="true">↗</span></Link>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
