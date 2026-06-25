import { motion } from 'framer-motion'
import CountUpPkg from 'react-countup'
const CountUp = CountUpPkg.default || CountUpPkg
import { MapPin, Star, Building, ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[800px] w-full flex items-center overflow-hidden bg-primary">
      {/* Background Image & Overlay - Blueprint/Plan Drawing style */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/hero_bg.png"
          alt="Modern Bungalow Elevation"
          className="w-full h-full object-cover opacity-50 scale-105 animate-[kenburns_20s_ease-out_forwards]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 pb-32 lg:pb-48 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Content */}
        <div className="lg:col-span-7 pt-32 md:pt-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white leading-[1.1] mb-6">
              Designing spaces <br />
              <span className="text-white/80">that</span> <span className="text-accent italic font-light">inspire.</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-xl mb-10 font-light leading-relaxed text-balance">
              From architectural planning and front elevation to luxury interiors and construction consultancy, we turn your ideas into spectacular spaces with precision and creativity.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <a href="#projects" className="px-8 py-4 bg-accent text-white rounded-full font-medium hover:bg-white hover:text-primary transition-all duration-300 flex items-center gap-2 group">
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-medium hover:bg-white/20 transition-all duration-300">
                Get Consultation
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Content - Floating Card */}
        <div className="lg:col-span-5 flex justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="glass-dark rounded-3xl p-8 max-w-md w-full relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-accent/30 to-white/5 rounded-[2rem] blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
            
            <div className="relative z-10 space-y-8">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-2 text-accent mb-2">
                    <Building size={20} />
                    <span className="text-4xl font-heading font-bold text-white">
                      <CountUp end={500} duration={3} enableScrollSpy />+
                    </span>
                  </div>
                  <p className="text-white/60 text-sm font-medium">Projects Designed</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-accent mb-2">
                    <Star size={20} />
                    <span className="text-4xl font-heading font-bold text-white">
                      <CountUp end={150} duration={3} enableScrollSpy />+
                    </span>
                  </div>
                  <p className="text-white/60 text-sm font-medium">Happy Clients</p>
                </div>
              </div>

              <div className="h-px w-full bg-white/10"></div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 text-white mb-1">
                    <MapPin size={16} className="text-accent" />
                    <span className="font-medium">Panna, MP</span>
                  </div>
                  <p className="text-white/60 text-sm">10+ Years Experience</p>
                </div>
                <a href="#contact" className="h-12 w-12 bg-white text-primary rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
