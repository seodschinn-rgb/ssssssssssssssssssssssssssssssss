import Link from 'next/link'
import { PREISE_PACKAGES, PREISE_COMPARISON, PREISE_FAQS, PREISE_TAX_NOTE, formatPreis } from '@/lib/preise-data'
import styles from './PreisePageContent.module.css'

function Check({ label = false }: { label?: boolean }) {
  return <><span className={styles.tick} aria-hidden="true"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m4 10 4 4 8-8" /></svg></span>{label && <span className="sr-only">Enthalten</span>}</>
}

const included = [
  { title: 'Fester Ansprechpartner', text: 'Eine Person, die deine Website und deine Ziele kennt.' },
  { title: 'Audit zum Start', text: 'Eine Bestandsaufnahme als Grundlage für die nächsten Aufgaben.' },
  { title: 'Monatliches Reporting', text: 'Die Entwicklung und umgesetzte Maßnahmen verständlich eingeordnet.' },
  { title: 'Fester Monatspreis', text: 'Ein abgestimmter Umfang für deine laufende SEO-Betreuung.' },
]

const fit = [
  { title: 'Lokal gefunden werden', text: 'Für Dienstleister und Unternehmen mit lokalem Einzugsgebiet.', pick: 'Starter / Growth', href: '#paket-starter' },
  { title: 'Mehr laufende Umsetzung', text: 'Für KMU, die Inhalte und Technik kontinuierlich verbessern wollen.', pick: 'Growth / Business', href: '#paket-growth' },
  { title: 'SEO und KI-Suche verbinden', text: 'Für Unternehmen, die ihre Präsenz in KI-Antworten mitbetrachten möchten.', pick: 'Professional', href: '#paket-professional' },
  { title: 'Komplexe Websites begleiten', text: 'Für mehrere Standorte, große Websites oder einen Relaunch.', pick: 'Enterprise', href: '#paket-enterprise' },
]

export default function PreisePageContent() {
  return (
    <div className={styles.page} data-pricing-page>
      <section className={styles.hero} aria-labelledby="pricing-heading">
        <div className={styles.wrap}>
          <nav className={styles.breadcrumb} aria-label="Brotkrümelnavigation">
            <Link href="/">Startseite</Link><span aria-hidden="true">/</span><span aria-current="page">Preise</span>
          </nav>
          <div className={styles.intro}>
            <div><p className={styles.eyebrow}>Monatliche SEO-Betreuung</p><h1 id="pricing-heading">SEO-Pakete &amp; Preise.<span>Planbar von Anfang an.</span></h1></div>
            <p className={styles.introText}>Fünf Pakete. Klare Monatspreise. Wähle den Umfang, der zu deiner Website und deinen Zielen passt – die konkreten Aufgaben stimmen wir gemeinsam ab.</p>
          </div>
          <nav className={styles.quickNav} aria-label="Auf der Preiseseite">
            <a href="#vergleich">Leistungen vergleichen <span aria-hidden="true">↓</span></a>
            <a href="#welches-paket">Das passende Paket finden <span aria-hidden="true">↓</span></a>
            <a href="#faq">Fragen vor dem Start <span aria-hidden="true">↓</span></a>
          </nav>
        </div>
      </section>

      <section id="pakete" className={styles.packages} aria-labelledby="packages-heading">
        <div className={styles.wrap}>
          <div className={styles.packageHeader}><h2 id="packages-heading">Die fünf SEO-Pakete im Überblick</h2><span className={styles.period}>Feste Preise pro Monat</span></div>
          <div className={styles.planGrid}>
            {PREISE_PACKAGES.map(plan => <article key={plan.id} id={`paket-${plan.id}`} data-plan={plan.id} data-price={plan.price} className={`${styles.card} ${plan.id === 'business' ? styles.featured : ''}`} aria-labelledby={`name-${plan.id}`}>
              <div className={styles.cardTop}>
                <p className={styles.cardLabel}>{plan.label}</p>
                <h3 id={`name-${plan.id}`}>{plan.name}</h3>
                <p className={styles.price}><span className={styles.amount}>{formatPreis(plan.price)}</span><span className={styles.currency}>€</span></p>
                <p className={styles.perMonth}>pro Monat</p>
                <p className={styles.target}>{plan.target}</p>
              </div>
              <Link href="/kontakt" className={styles.cardCta} aria-label={`${plan.name}: kostenloses Erstgespräch vereinbaren`}>Erstgespräch <span aria-hidden="true">↗</span></Link>
              <p className={styles.scopeLabel}>Typischer Umfang</p>
              <ul className={styles.featureList}>{plan.features.map(feature => <li key={feature}><Check /><span>{feature}</span></li>)}</ul>
            </article>)}
          </div>
          {PREISE_TAX_NOTE && <p className={styles.taxNote}>{PREISE_TAX_NOTE}</p>}
          <div className={styles.packageNote}><p>Die Pakete zeigen den typischen Zuschnitt. Welche Seiten, Themen und Aufgaben wir bearbeiten, vereinbaren wir vor dem Start. Das Erstgespräch ist kostenlos und unverbindlich.</p><a href="#vergleich">Zum Detailvergleich <span aria-hidden="true">↓</span></a></div>
        </div>
      </section>

      <section id="enthalten" className={styles.included} aria-labelledby="warum-wir">
        <div className={`${styles.wrap} ${styles.includedLayout}`}>
          <div><p className={styles.eyebrow}>In jedem Paket</p><h2 id="warum-wir">Eine gemeinsame Basis.<br />Von Starter bis Enterprise.</h2></div>
          <div className={styles.commonGrid}>{included.map((item,i) => <article key={item.title}><span className={styles.commonIndex} aria-hidden="true">{String(i+1).padStart(2,'0')}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div>
        </div>
      </section>

      <section id="vergleich" className={styles.section} aria-labelledby="comparison-heading">
        <div className={styles.wrap}>
          <div className={styles.headingRow}><div><p className={styles.eyebrow}>Der direkte Vergleich</p><h2 id="comparison-heading">Was steckt in welchem Paket?</h2></div><p>Von der technischen Basis bis zur KI-Suche: Hier siehst du die Unterschiede im typischen Leistungsumfang.</p></div>
          <p id="comparison-hint" className={styles.tableHint}>Auf kleinen Bildschirmen lässt sich die Tabelle seitlich verschieben.</p>
          <div className={styles.tableScroll} role="region" aria-labelledby="comparison-heading" aria-describedby="comparison-hint" tabIndex={0}>
            <table className={styles.comparison}>
              <caption>✓ Enthalten · – Im typischen Zuschnitt nicht enthalten. Individuelle Anpassungen stimmen wir gemeinsam ab.</caption>
              <thead><tr><th scope="col">Leistung</th>{PREISE_PACKAGES.map(plan => <th key={plan.id} scope="col">{plan.name}<span className={styles.tablePrice}>{formatPreis(plan.price)} € / Monat</span></th>)}</tr></thead>
              <tbody>{PREISE_COMPARISON.map(row => <tr key={row.name}><th scope="row">{row.href ? <Link href={row.href}>{row.name}</Link> : row.name}</th>{row.values.map((value,i) => <td key={i}>{value === true ? <Check label /> : value === false ? <><span className={styles.dash} aria-hidden="true">–</span><span className="sr-only">Nicht enthalten</span></> : value}</td>)}</tr>)}</tbody>
            </table>
          </div>
          {PREISE_TAX_NOTE && <p className={styles.taxNote}>{PREISE_TAX_NOTE}</p>}
        </div>
      </section>

      <section id="welches-paket" className={`${styles.section} ${styles.fitSection}`} aria-labelledby="fit-heading">
        <div className={`${styles.wrap} ${styles.fitLayout}`}>
          <div><p className={styles.eyebrow}>Orientierung für deinen Einstieg</p><h2 id="fit-heading">Was passt zu deinem Vorhaben?</h2>
            <div className={styles.fitList}>{fit.map(item => <article key={item.title}><div><h3>{item.title}</h3><p>{item.text}</p></div><a href={item.href}>{item.pick} <span aria-hidden="true">↑</span></a></article>)}</div>
          </div>
          <aside id="seo-betreuung" className={styles.monthly} aria-labelledby="monthly-heading"><p className={styles.eyebrow}>Warum monatlich?</p><h2 id="monthly-heading">Analysieren. Umsetzen.<br />Weiterentwickeln.</h2>
            <p>Die laufende Betreuung verbindet Planung, Umsetzung und Auswertung. Aus den Ergebnissen entstehen die nächsten Aufgaben für deine Website – passend zum vereinbarten Paket.</p>
            <p>Du brauchst zunächst nur eine einzelne Prüfung oder Überarbeitung? Ein <Link href="/leistungen/seo-audit">SEO-Audit</Link> oder ein anderes abgegrenztes Projekt lässt sich separat besprechen.</p>
            <p>Wie sich Budgets grundsätzlich zusammensetzen, erklärt unser <Link href="/blog/seo-kosten">Ratgeber zu SEO-Kosten</Link>.</p>
            <p className={styles.location}>Für Unternehmen in München und Bayern.<br />Geschäftssitz Engelskirchen · Zusammenarbeit remote.</p>
          </aside>
        </div>
      </section>

      <section id="faq" className={styles.section} aria-labelledby="faq-heading">
        <div className={`${styles.wrap} ${styles.faqLayout}`}>
          <div><p className={styles.eyebrow}>Vor der Zusammenarbeit</p><h2 id="faq-heading">Noch eine Frage?</h2><p className={styles.faqIntro}>Hier klären wir Umfang, Einstieg und Zusammenarbeit. Die verbindlichen Konditionen stehen in deinem individuellen Angebot.</p></div>
          <div className={styles.faqList}>{PREISE_FAQS.map(faq => <details key={faq.question}><summary>{faq.question}<span className={styles.plus} aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div>
        </div>
      </section>

      <section id="erstgespraech" className={styles.final} aria-labelledby="start-heading">
        <div className={styles.wrap}><div className={styles.finalPanel}>
          <div><p className={styles.eyebrow}>Dein nächster Schritt</p><h2 id="start-heading">Erst deine Ziele.<br />Dann das passende Paket.</h2><p>Zeig uns deine Website und erzähl uns, was du erreichen möchtest. Gemeinsam klären wir, welcher Umfang sinnvoll ist. Kostenlos und unverbindlich.</p></div>
          <div className={styles.finalActions}><Link href="/kontakt" className={styles.solidCta}>Erstgespräch vereinbaren <span aria-hidden="true">↗</span></Link><a href="tel:+4915233524138" className={styles.outlineCta}>+49 152 33524138</a><a href="mailto:info@seomuenchen.com" className={styles.emailLink}>info@seomuenchen.com</a></div>
        </div></div>
      </section>
    </div>
  )
}
