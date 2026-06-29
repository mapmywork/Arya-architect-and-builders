import CountUpPkg from 'react-countup'
const CountUp = CountUpPkg.default || CountUpPkg
import { motion } from 'framer-motion'

const stats = [
  { number: 500, label: 'प्रोजेक्ट्स', suffix: '+' },
  { number: 150, label: 'संतुष्ट ग्राहक', suffix: '+' },
  { number: 25, label: 'कमर्शियल प्रोजेक्ट्स', suffix: '+' },
  { number: 10, label: 'वर्षों का अनुभव', suffix: '+' }
]

const Stats = () => {
  return (
    <section className="relative py-20 bg-accent overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      
      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-2 drop-shadow-md">
                <CountUp end={stat.number} duration={3} enableScrollSpy />
                {stat.suffix}
              </div>
              <p className="text-white/80 font-medium uppercase tracking-wider text-xs md:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
