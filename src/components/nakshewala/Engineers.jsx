import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'

const engineers = [
  { name: 'Er. Swati Sahu', phone: '78987 95031' },
  { name: 'Er. Shivam Athiya', phone: '83191 03175' },
  { name: 'Er. Sahayata Sutrakar', phone: '9179868594' }
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
            हमारे <span className="text-secondary font-light italic">इंजीनियर्स</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {engineers.map((eng, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass bg-white p-8 rounded-3xl flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300"
            >
              <h3 className="text-xl font-heading font-bold text-primary mb-4">{eng.name}</h3>
              <a href={`tel:+91${eng.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 text-secondary hover:text-accent transition-colors bg-background px-6 py-3 rounded-full text-lg shadow-sm border border-black/5">
                <Phone size={20} className="text-accent" />
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
