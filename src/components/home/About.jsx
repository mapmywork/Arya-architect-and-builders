import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 overflow-hidden bg-background">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-accent"></div>
            <span className="text-accent font-medium tracking-widest uppercase text-sm">हमारे बारे में</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary leading-tight mb-8">
            आधुनिक आर्किटेक्चर के माध्यम से <span className="text-secondary font-light italic">खूबसूरत जगहों का निर्माण</span>
          </h2>
          
          <p className="text-secondary text-lg leading-relaxed mb-6 max-w-lg">
            आर्या आर्किटेक्ट और बिल्डर (ARYA ARCHITECT AND BUILDER) रचनात्मकता, इंजीनियरिंग विशेषज्ञता और बेहतरीन डिजाइन सिद्धांतों को मिलाकर शानदार आवासीय और व्यावसायिक आर्किटेक्चर प्रदान करता है। हम आपके सपनों के घर और प्रोजेक्ट्स को हकीकत में बदलते हैं।
          </p>
          <p className="text-secondary text-lg leading-relaxed mb-10 max-w-lg">
            हमारे हर प्रोजेक्ट में आधुनिक तकनीक, मजबूत निर्माण और आकर्षक डिज़ाइन का बेहतरीन संयोजन होता है।
          </p>

          <a href="#projects" className="inline-flex items-center gap-2 pb-2 border-b-2 border-primary text-primary font-medium hover:text-accent hover:border-accent transition-colors group">
            हमारे प्रोजेक्ट्स देखें
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Right Content - Image Collage */}
        <div className="relative h-[600px] w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute top-0 right-0 w-[70%] h-[70%] rounded-3xl overflow-hidden shadow-2xl z-10"
          >
            <img 
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop" 
              alt="Architecture Detail" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute bottom-0 left-0 w-[60%] h-[50%] rounded-3xl overflow-hidden shadow-2xl z-20 border-8 border-background"
          >
            <img 
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop" 
              alt="Interior Design" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          {/* Decorative Elements */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  )
}

export default About
