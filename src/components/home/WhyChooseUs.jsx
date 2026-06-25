import { motion } from 'framer-motion'
import { Users, BadgeIndianRupee, Clock, Target, Headset, HardHat, Monitor, Layers } from 'lucide-react'

const reasons = [
  { icon: Users, title: 'Experienced Engineers', desc: 'Our team comprises highly experienced and skilled civil engineers.' },
  { icon: BadgeIndianRupee, title: 'Affordable Pricing', desc: 'We offer premium quality services at highly competitive prices.' },
  { icon: Clock, title: 'Fast & Timely Work', desc: 'We guarantee timely project completion without any delays.' },
  { icon: Target, title: 'Accurate Survey & Design', desc: 'Use of modern equipment like DGPS to ensure absolute accuracy.' },
  { icon: Headset, title: 'Customer Support', desc: 'Round-the-clock dedicated support and guidance for our clients.' },
  { icon: HardHat, title: 'Quality Assurance', desc: 'Strict supervision and use of premium standardized materials.' },
  { icon: Monitor, title: '3D Visualization', desc: 'Realistic 3D renderings to visualize your dream space.' },
  { icon: Layers, title: 'End-to-End Service', desc: 'Complete turnkey solutions from initial planning to final handover.' },
]

const WhyChooseUs = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Text */}
          <div className="lg:w-1/3">
             <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-accent"></div>
              <span className="text-accent font-medium tracking-widest uppercase text-sm">Why Choose Us?</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6 leading-tight">
              Why we are the best <span className="text-secondary font-light italic">choice</span>
            </h2>
            <p className="text-secondary leading-relaxed mb-8">
              With a decade of experience and a passion for architectural excellence, ARYA ARCHITECT AND BUILDER is committed to delivering projects that exceed expectations without compromising on quality or budget.
            </p>
          </div>

          {/* Right Grid */}
          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-4">
            {reasons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="glass rounded-2xl p-6 flex flex-col items-center text-center gap-4 group hover:bg-primary hover:text-white transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-colors">
                  <item.icon size={24} />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-sm group-hover:text-white mb-2">{item.title}</h4>
                  <p className="text-xs text-secondary group-hover:text-white/80">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
