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
              Premium architecture and interior design studio based in Panna, MP. We transform ideas into timeless spaces with precision and creativity.
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
            <h4 className="text-lg font-heading font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Portfolio', 'Process', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-white/60 hover:text-accent transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {['Architectural Planning', 'Interior Design', '3D Elevation', 'Commercial Design', 'Turnkey Projects'].map((service) => (
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
            <h4 className="text-lg font-heading font-semibold mb-6">Newsletter</h4>
            <p className="text-white/60 text-sm mb-4">
              Subscribe to get the latest updates and design inspirations.
            </p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-colors"
              />
              <button type="submit" className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-white hover:text-primary transition-colors text-sm font-medium">
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            &copy; 2026 www.nakshewala.xyz. All rights reserved.
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
