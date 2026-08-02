import '@/app/branchen-kfz-v2.css'
import BranchenInteractions from '@/components/branchen-v2/BranchenInteractions'
import KfzHero from './KfzHero'
import KfzPain from './KfzPain'
import KfzServices from './KfzServices'
import KfzPath from './KfzPath'
import KfzSpec from './KfzSpec'
import KfzBand from './KfzBand'
import KfzProof from './KfzProof'
import KfzInvest from './KfzInvest'
import KfzFaq from './KfzFaq'
import KfzContactCta from './KfzContactCta'

export default function KfzPage() {
  return (
    <div className="branche-kfz-v2">
      <a className="skip" href="#main">
        Zum Inhalt springen
      </a>
      <main id="main">
        <KfzHero />
        <KfzPain />
        <KfzServices />
        <KfzPath />
        <KfzSpec />
        <KfzBand />
        <KfzProof />
        <KfzInvest />
        <KfzFaq />
        <KfzContactCta />
      </main>
      <BranchenInteractions rootSelector=".branche-kfz-v2" />
    </div>
  )
}
