import { motion } from 'framer-motion'
import { PenTool, Box, Glasses, HardHat } from 'lucide-react'

const features = [
  { icon: PenTool, title: 'Architectural Planning' },
  { icon: Box, title: 'Interior Design' },
  { icon: Glasses, title: '3D Visualization' },
  { icon: HardHat, title: 'Construction Consultancy' },
]

const TrustStrip = () => {
  return (
    <section className="relative z-20 -mt-16 md:-mt-24 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white shadow-xl border border-black/5 rounded-2xl p-6 flex flex-col items-center justify-center text-center group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="h-14 w-14 rounded-full bg-background flex items-center justify-center text-accent mb-4 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                <feature.icon size={24} />
              </div>
              <h3 className="font-heading font-semibold text-primary">{feature.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustStrip
