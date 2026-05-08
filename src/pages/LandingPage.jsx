import Header         from '../components/Header'
import HeroSection    from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection'
import EssenceSection  from '../components/EssenceSection'
import AboutSection    from '../components/AboutSection'
import WorksSection    from '../components/WorksSection'
import FeaturesSection from '../components/FeaturesSection'
import ContactSection  from '../components/ContactSection'
import Footer          from '../components/Footer'

export default function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <EssenceSection />
        <AboutSection />
        <WorksSection />
        <FeaturesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
