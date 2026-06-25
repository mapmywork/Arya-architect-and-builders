import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Hero from '../components/home/Hero'
import TrustStrip from '../components/home/TrustStrip'
import About from '../components/home/About'
import Services from '../components/home/Services'
import Projects from '../components/home/Projects'
import Process from '../components/home/Process'
import WhyChooseUs from '../components/home/WhyChooseUs'
import Stats from '../components/home/Stats'
import Testimonials from '../components/home/Testimonials'
import Contact from '../components/home/Contact'
import Engineers from '../components/nakshewala/Engineers'
import PricingCalculator from '../components/nakshewala/PricingCalculator'
import PaymentInfo from '../components/nakshewala/PaymentInfo'

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <Services />
        <Projects />
        <Process />
        <Engineers />
        <PricingCalculator />
        <WhyChooseUs />
        <Stats />
        <Testimonials />
        <PaymentInfo />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default Home
