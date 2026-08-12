import SmoothScroll from './components/SmoothScroll'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Welcome from './components/Welcome'
import Services from './components/Services'
import TrustStats from './components/TrustStats'
import Portfolio from './components/Portfolio'
import About from './components/About'
import StudioExperience from './components/StudioExperience'
import Location from './components/Location'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export default function App() {
  return (
    <SmoothScroll>
      <Navbar />
      <main>
        <Hero />
        <Welcome />
        <Services />
        <TrustStats />
        <Portfolio />
        <About />
        <StudioExperience />
        <Location />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </SmoothScroll>
  )
}
