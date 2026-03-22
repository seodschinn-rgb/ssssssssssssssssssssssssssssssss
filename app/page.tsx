import type { Metadata } from 'next'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import PainPointsSection from '@/components/PainPointsSection'
import FeatureGrid from '@/components/FeatureGrid'
import WhySeoSection from '@/components/WhySeoSection'
import ContactPersonSection from '@/components/ContactPersonSection'
import ScreenshotsSection from '@/components/ScreenshotsSection'
import TestimonialSlider from '@/components/TestimonialSlider'
import ProcessSection from '@/components/ProcessSection'
import HomePricingSection from '@/components/HomePricingSection'
import HomeBlogTeaser from '@/components/HomeBlogTeaser'
import CityLinks from '@/components/CityLinks'
import HomeFAQSection from '@/components/HomeFAQSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import HomePageSchema from '@/components/HomePageSchema'

export const metadata: Metadata = {
  title: {
    absolute: 'SEO Agentur München — +312% mehr Traffic | SEO München',
  },
  description:
    'SEO Agentur in München: Datengetriebene SEO-Optimierung ab 990 EUR/Monat. +312% mehr Traffic für unsere Kunden. Kostenloses Erstgespräch vereinbaren.',
  openGraph: {
    title: 'SEO Agentur München — +312% mehr Traffic | SEO München',
    description:
      'SEO Agentur in München: Datengetriebene SEO-Optimierung ab 990 EUR/Monat. +312% mehr Traffic für unsere Kunden. Kostenloses Erstgespräch vereinbaren.',
  },
}

export default function Home() {
  return (
    <>
      <HomePageSchema />
      <Header />
      <main className="home-main">
        <Hero
          headline="SEO Agentur München — Dein Weg von unsichtbar zu Seite 1"
          subheadline="Du investierst in eine Website, aber Google schickt dir keine Kunden? Wir ändern das. Mit einer datengetriebenen SEO-Strategie, die Rankings liefert — nicht nur Reports. Durchschnittlich +312 % mehr organischer Traffic für Unternehmen in München und Bayern."
          showSearchAnimation
          showHomeSecondaryLinks
        />
        <PainPointsSection />
        <FeatureGrid />
        <WhySeoSection />
        <ContactPersonSection />
        <ScreenshotsSection />
        <TestimonialSlider />
        <ProcessSection />
        <HomePricingSection />
        <HomeBlogTeaser />
        <CityLinks />
        <HomeFAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
