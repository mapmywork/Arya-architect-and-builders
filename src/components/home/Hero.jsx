import { motion } from 'framer-motion'
import CountUpPkg from 'react-countup'
const CountUp = CountUpPkg.default || CountUpPkg
import { MapPin, Star, Building, ArrowRight } from 'lucide-react'
import aryaLogo from '../../assets/arya_logo.png.jpeg'

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[800px] w-full flex items-center overflow-hidden bg-primary">
      {/* Background Image & Overlay - Blueprint/Plan Drawing style */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/construction_hero_bg.png"
          alt="Civil Engineering and Architecture Hero Background"
          className="w-full h-full object-cover object-bottom opacity-50 scale-105 animate-[kenburns_20s_ease-out_forwards]"
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
            <div className="mb-6">
              <img 
                src={aryaLogo} 
                alt="Arya Architect & Builder Logo" 
                className="h-32 md:h-48 lg:h-56 w-auto object-contain drop-shadow-2xl"
              />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-heading font-bold mb-4 tracking-wide">
              आर्या आर्किटेक्ट एंड बिल्डर
            </h1>
            <h2 className="text-2xl md:text-3xl text-accent font-medium mb-6">
              पेशेवर सिविल इंजीनियरिंग सेवाएं
            </h2>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mb-10 font-light leading-relaxed text-balance">
              2D फ्लोर प्लान &bull; प्लॉटिंग प्लान &bull; रूफ प्लान &bull; एस्टीमेट &bull; स्ट्रक्चरल ड्रॉइंग &bull; 3D फ्रंट एलिवेशन &bull; 3D फ्लोर प्लान &bull; इंटीरियर डिजाइन &bull; साइट विजिट
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <a href="tel:+919179868594" className="px-8 py-4 bg-accent text-primary rounded-xl font-bold hover:bg-white transition-all duration-300 flex items-center gap-2 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                अभी कॉल करें
              </a>
              <a href="https://wa.me/9179868594" target="_blank" rel="noreferrer" className="px-8 py-4 bg-accent text-primary rounded-xl font-bold hover:bg-white transition-all duration-300 flex items-center gap-2 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                WhatsApp
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
                  <p className="text-white/60 text-sm font-medium">डिज़ाइन किए गए प्रोजेक्ट्स</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-accent mb-2">
                    <Star size={20} />
                    <span className="text-4xl font-heading font-bold text-white">
                      <CountUp end={150} duration={3} enableScrollSpy />+
                    </span>
                  </div>
                  <p className="text-white/60 text-sm font-medium">संतुष्ट ग्राहक</p>
                </div>
              </div>

              <div className="h-px w-full bg-white/10"></div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 text-white mb-1">
                    <MapPin size={16} className="text-accent" />
                    <span className="font-medium">पन्ना, एम.पी.</span>
                  </div>
                  <p className="text-white/60 text-sm">10+ वर्षों का अनुभव</p>
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
