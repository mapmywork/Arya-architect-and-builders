import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import logo from '../../assets/66.png'

const navItems = [
  { label: 'प्रोजेक्ट्स', href: '#projects' },
  { label: 'सेवाएं', href: '#services' },
  { label: 'हमारे बारे में', href: '#about' },
  { label: 'प्रक्रिया', href: '#process' },
  { label: 'संपर्क करें', href: '#contact' },
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="#" className="block h-16 group">
            <img src={logo} alt="Company Logo" className="h-full w-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] group-hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.7)] group-hover:scale-105 transition-all duration-300" />
          </a>
        </div>

        {/* Center Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-accent relative group ${
                isScrolled ? 'text-secondary hover:text-primary' : 'text-white/80 hover:text-white'
              }`}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+917974768589"
            className={`flex items-center gap-2 text-sm font-medium transition-colors ${
              isScrolled ? 'text-primary hover:text-accent' : 'text-white hover:text-accent'
            }`}
          >
            <Phone size={16} />
            <span>7974768589</span>
          </a>
          <a
            href="#contact"
            className="px-6 py-2.5 bg-accent text-white text-sm font-medium rounded-full hover:bg-primary transition-all duration-300 shadow-lg shadow-accent/20"
          >
            कोटेशन प्राप्त करें
          </a>
        </div>

        {/* Mobile menu button could go here */}
      </div>
    </motion.header>
  )
}

export default Navbar
