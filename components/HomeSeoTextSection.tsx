import { homeSeoTextStyles } from '@/lib/home-seo-text-styles'
import { homeSeoTextHtml } from '@/lib/home-seo-text-html'

/** SEO-Fließtext unterhalb der Haupt-Sections (Startseite) */
export default function HomeSeoTextSection() {
  return (
    <section className="border-t border-zinc-100 bg-zinc-50/40" aria-label="SEO Informationen">
      <style dangerouslySetInnerHTML={{ __html: homeSeoTextStyles }} />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pb-8">
        <div dangerouslySetInnerHTML={{ __html: homeSeoTextHtml }} />
      </div>
    </section>
  )
}
