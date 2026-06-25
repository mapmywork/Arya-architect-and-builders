import { motion } from 'framer-motion'
import { Phone, User } from 'lucide-react'

const engineers = [
  { name: 'Er. Swati Sahu', phone: '78987 95031', image: 'https://i.pravatar.cc/150?img=9' },
  { name: 'Er. Shivam Athiya', phone: '83191 03175', image: 'https://i.pravatar.cc/150?img=11' },
  { name: 'Er. Sahayata Sutrakar', phone: '9179868594', image: 'https://i.pravatar.cc/150?img=12' }
]

const Engineers = () => {
  return (
    <section id="engineers" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-[2px] bg-accent"></div>
            <span className="text-accent font-medium tracking-widest uppercase text-sm">NAKSHEWALA Team</span>
            <div className="w-8 h-[2px] bg-accent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Our <span className="text-secondary font-light italic">Engineers</span>
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
              <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-4 border-background group-hover:border-accent transition-colors duration-300 shadow-lg">
                <img src={eng.image} alt={eng.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-2">{eng.name}</h3>
              <a href={`tel:+91${eng.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 text-secondary hover:text-accent transition-colors bg-background px-4 py-2 rounded-full">
                <Phone size={16} />
                <span className="font-medium">{eng.phone}</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Engineers
