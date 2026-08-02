import '@/app/branchen-handwerker-v2.css'
import BranchenInteractions from '@/components/branchen-v2/BranchenInteractions'
import HandwerkerHero from './HandwerkerHero'
import HandwerkerPain from './HandwerkerPain'
import HandwerkerServices from './HandwerkerServices'
import HandwerkerBand from './HandwerkerBand'
import HandwerkerSpec from './HandwerkerSpec'
import HandwerkerProof from './HandwerkerProof'
import HandwerkerInvest from './HandwerkerInvest'
import HandwerkerFaq from './HandwerkerFaq'
import HandwerkerContactCta from './HandwerkerContactCta'

export default function HandwerkerPage() {
  return (
    <div className="branche-handwerker-v2">
      <a className="skip" href="#main">
        Zum Inhalt springen
      </a>
      <main id="main">
        <HandwerkerHero />
        <HandwerkerPain />
        <HandwerkerServices />
        <HandwerkerBand />
        <HandwerkerSpec />
        <HandwerkerProof />
        <HandwerkerInvest />
        <HandwerkerFaq />
        <HandwerkerContactCta />
      </main>
      <BranchenInteractions rootSelector=".branche-handwerker-v2" />
    </div>
  )
}
