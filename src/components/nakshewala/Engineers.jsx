import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'

const engineers = [
  { name: 'Er. Swati Sahu', role: 'आर्किटेक्ट', phone: '78987 95031' },
  { name: 'Er. Shivam Athiya', role: 'सिविल इंजी. विशेषज्ञ', phone: '83191 03175' },
  { name: 'Er. Jubair Khan', role: 'तकनीकी विशेषज्ञ', phone: '80857 86182' },
  { name: 'Er. Sahayata Sutrakar', role: 'आर्किटेक्ट', phone: '92326 60441' }
]

const Engineers = () => {
  return (
    <section id="engineers" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-[2px] bg-accent"></div>
            <span className="text-accent font-medium tracking-widest uppercase text-sm">नक्शेवाला टीम</span>
            <div className="w-8 h-[2px] bg-accent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            हमारे <span className="text-secondary font-light italic">इंजीनियर</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {engineers.map((eng, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass bg-white p-6 rounded-3xl flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300 h-full"
            >
              <h3 className="text-xl font-heading font-bold text-primary mb-1">{eng.name}</h3>
              <p className="text-xs text-secondary/70 mb-5 font-bold uppercase tracking-wider">{eng.role}</p>
              <a href={`tel:+91${eng.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 text-secondary hover:text-accent transition-colors bg-background px-5 py-2.5 rounded-full text-base shadow-sm border border-black/5 mt-auto w-full justify-center">
                <Phone size={18} className="text-accent shrink-0" />
                <span className="font-bold">{eng.phone}</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Engineers
