import { ArrowUp } from 'lucide-react'
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-primary pt-20 pb-10 text-white border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="inline-block text-2xl font-heading font-bold tracking-tighter text-white mb-6">
              ARYA<span className="text-accent">.</span>
            </a>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              पन्ना, मध्य प्रदेश में स्थित प्रीमियम आर्किटेक्चर और इंटीरियर डिज़ाइन स्टूडियो। हम सटीकता और रचनात्मकता के साथ विचारों को शानदार स्थानों में बदलते हैं।
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors">
                <FaFacebookF size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors">
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">क्विक लिंक्स</h4>
            <ul className="space-y-3">
              {[
                { name: 'होम', id: 'home' }, 
                { name: 'हमारे बारे में', id: 'about' }, 
                { name: 'सेवाएं', id: 'services' }, 
                { name: 'पोर्टफोलियो', id: 'projects' }, 
                { name: 'प्रक्रिया', id: 'process' }, 
                { name: 'संपर्क करें', id: 'contact' }
              ].map((link) => (
                <li key={link.name}>
                  <a href={`#${link.id}`} className="text-white/60 hover:text-accent transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">हमारी सेवाएं</h4>
            <ul className="space-y-3">
              {['आर्किटेक्चरल प्लानिंग', 'इंटीरियर डिज़ाइन', '3D एलिवेशन', 'कमर्शियल डिज़ाइन', 'टर्नकी प्रोजेक्ट्स'].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-white/60 hover:text-accent transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">न्यूज़लेटर</h4>
            <p className="text-white/60 text-sm mb-4">
              नवीनतम अपडेट और डिज़ाइन प्रेरणा प्राप्त करने के लिए सदस्यता लें।
            </p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="ईमेल एड्रेस" 
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-colors"
              />
              <button type="submit" className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-white hover:text-primary transition-colors text-sm font-medium">
                सब्सक्राइब करें
              </button>
            </form>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            &copy; 2026 www.nakshewala.xyz. सर्वाधिकार सुरक्षित।
          </p>
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors text-white/40 hover:text-white group">
            <ArrowUp size={18} className="group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
