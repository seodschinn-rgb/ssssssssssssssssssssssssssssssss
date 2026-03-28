import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactSection from '@/components/ContactSection'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import BlogFAQSchema from '@/components/BlogFAQSchema'
import GeoProfessionalServiceSchema from '@/components/GeoProfessionalServiceSchema'
import { geoAgenturPageStyles } from '@/lib/leistungen/geo-agentur-styles'
import { geoAgenturPageHtml } from '@/lib/leistungen/geo-agentur-html'
import { geoAgenturFaqs } from '@/lib/leistungen/geo-agentur-faqs'

const breadcrumbItems = [
  { name: 'Startseite', url: '/' },
  { name: 'Leistungen', url: '/leistungen' },
  { name: 'GEO Agentur', url: '/leistungen/geo-agentur' },
]

export default function GeoAgenturLeistungPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <BlogFAQSchema faqs={geoAgenturFaqs} />
      <GeoProfessionalServiceSchema />
      <Header />
      <main className="pt-28 pb-8 sm:pt-32">
        <style dangerouslySetInnerHTML={{ __html: geoAgenturPageStyles }} />
        <div dangerouslySetInnerHTML={{ __html: geoAgenturPageHtml }} />
      </main>
      <ContactSection />
      <Footer />
    </>
  )
}
