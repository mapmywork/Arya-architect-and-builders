import { motion } from 'framer-motion'

const steps = [
  { id: '01', title: 'Consultation', desc: 'Understanding your vision and requirements.' },
  { id: '02', title: 'Site Visit', desc: 'Analyzing the space and spatial constraints.' },
  { id: '03', title: 'Planning', desc: 'Creating initial drafts and 2D floor plans.' },
  { id: '04', title: '3D Visualization', desc: 'Bringing the plan to life with 3D renders.' },
  { id: '05', title: 'Construction Drawing', desc: 'Detailed blueprints for execution.' },
  { id: '06', title: 'Project Delivery', desc: 'Finalizing the design and handover.' }
]

const Process = () => {
  return (
    <section id="process" className="py-24 md:py-32 bg-primary text-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Our Work <span className="text-accent italic font-light">Process</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            A systematic and transparent approach to ensure your project is completed smoothly.
          </p>
        </div>

        <div className="relative">
          {/* Animated Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2">
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full h-full bg-accent origin-left"
            ></motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Node */}
                <div className="w-16 h-16 rounded-full bg-primary border-2 border-accent flex items-center justify-center mb-6 relative z-10 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <span className="font-heading font-bold text-white group-hover:text-primary">{step.id}</span>
                </div>
                
                {/* Content */}
                <h4 className="text-xl font-heading font-semibold mb-2">{step.title}</h4>
                <p className="text-white/50 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
