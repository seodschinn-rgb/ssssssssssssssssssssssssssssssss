import '@/components/preise-page.css'
import { preisePageContent } from '@/lib/preise-content'

export default function PreisePageContent() {
  return (
    <section className="relative pt-28 pb-24 px-4 sm:px-6">
      <div
        className="preise-page-content"
        dangerouslySetInnerHTML={{ __html: preisePageContent }}
      />
    </section>
  )
}
