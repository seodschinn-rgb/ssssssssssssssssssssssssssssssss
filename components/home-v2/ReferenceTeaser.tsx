import Link from 'next/link'
import { REFERENCE_PROJECTS } from '@/lib/reference-projects'

export default function ReferenceTeaser() {
  return (
    <section className="reference-teaser" id="projekt-einblicke" aria-labelledby="projekte-heading">
      <div className="wrap">
        <div className="reference-teaser-heading">
          <div>
            <p className="eyebrow">Aus unserer Projektarbeit</p>
            <h2 id="projekte-heading">Zwei Websites. Konkrete Einblicke.</h2>
          </div>
          <Link className="arrow-link" href="/referenzen">Zu den Referenzen <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="reference-teaser-grid">
          {REFERENCE_PROJECTS.map((project) => (
            <article className="reference-teaser-card" key={project.id}>
              <img src={project.image} alt={project.imageAlt} width={1200} height={900} loading="lazy" decoding="async" />
              <div>
                <p className="reference-teaser-category">{project.category}</p>
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
                <Link href={`/referenzen#${project.id}`} aria-label={`Projektarbeit für ${project.name} ansehen`}>Projekt ansehen <span aria-hidden="true">↗</span></Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
