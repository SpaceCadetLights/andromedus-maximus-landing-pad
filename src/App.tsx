import { TopNav } from './components/TopNav/TopNav'
import { HeroSection } from './components/HeroSection/HeroSection'
import { NebulaControlSection } from './components/NebulaControlSection/NebulaControlSection'
import { VibeComparisonSection } from './components/VibeComparisonSection/VibeComparisonSection'
import { FeatureCardsSection } from './components/FeatureCardsSection/FeatureCardsSection'
import { TrustStrip } from './components/TrustStrip/TrustStrip'
import { FooterCTA } from './components/FooterCTA/FooterCTA'

function App() {
  return (
    <div className="page-shell">
      <TopNav />
      <main>
        <HeroSection />
        <NebulaControlSection />
        <VibeComparisonSection />
        <FeatureCardsSection />
        <TrustStrip />
      </main>
      <FooterCTA />
    </div>
  )
}

export default App
