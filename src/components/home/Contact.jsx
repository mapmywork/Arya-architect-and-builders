import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
          alt="Architecture" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-accent"></div>
            <span className="text-accent font-medium tracking-widest uppercase text-sm">संपर्क करें</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-8">
            आइए आपके सपनों की <br />
            <span className="text-white/60 font-light italic">जगह बनाएं</span>
          </h2>
          
          <p className="text-white/70 mb-12 max-w-md">
            चाहे आप नए घर की योजना बना रहे हों, व्यावसायिक स्थान का नवीनीकरण कर रहे हों, या निर्माण परामर्श की आवश्यकता हो, हम आपकी मदद के लिए यहाँ हैं।
          </p>

          <div className="space-y-8 mb-12">
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="text-lg font-heading font-semibold mb-1">ऑफिस का पता</h4>
                <p className="text-white/60">पन्ना, मध्य प्रदेश, भारत</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="text-lg font-heading font-semibold mb-1">फ़ोन नंबर</h4>
                <a href="tel:+917974768589" className="text-white/60 hover:text-accent transition-colors">7974768589</a>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="text-lg font-heading font-semibold mb-1">ईमेल एड्रेस</h4>
                <a href="mailto:ajayaray949@gmail.com" className="text-white/60 hover:text-accent transition-colors">ajayaray949@gmail.com</a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right - Form & Map */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="glass-dark p-8 md:p-10 rounded-[2rem]">
            <h3 className="text-2xl font-heading font-bold mb-6">हमें मैसेज भेजें</h3>
            <form className="space-y-4 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="आपका नाम" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-colors"
                />
                <input 
                  type="tel" 
                  placeholder="फ़ोन नंबर" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <input 
                type="email" 
                placeholder="ईमेल एड्रेस" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-colors"
              />
              <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white/40 focus:text-white focus:outline-none focus:border-accent transition-colors appearance-none">
                <option value="" disabled selected>प्रोजेक्ट का प्रकार चुनें</option>
                <option value="residential">आवासीय आर्किटेक्चर</option>
                <option value="commercial">व्यावसायिक डिज़ाइन</option>
                <option value="interior">इंटीरियर डिज़ाइन</option>
                <option value="consultancy">निर्माण परामर्श</option>
              </select>
              <textarea 
                placeholder="आपका मैसेज" 
                rows="4"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-colors resize-none"
              ></textarea>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <button type="submit" className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-accent text-white rounded-xl font-medium hover:bg-white hover:text-primary transition-all duration-300">
                  <Send size={18} />
                  सबमिट करें
                </button>
                <a href="https://wa.me/917974768589" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-6 py-4 bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/30 rounded-xl font-medium hover:bg-[#25D366] hover:text-white transition-all duration-300">
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
              </div>
            </form>

            {/* Map */}
            <div className="w-full h-48 rounded-xl overflow-hidden bg-white/5">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115456.98595827364!2d80.11904550882194!3d24.717652758117912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3983226a4afc1d93%3A0xe9f7cb6797b5ed05!2sPanna%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              ></iframe>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Contact
