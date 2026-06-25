import { motion } from 'framer-motion'
import { MapPin, ArrowUpRight } from 'lucide-react'

const projects = [
  {
    name: 'The Sander Residence',
    category: 'Luxury Villa',
    location: 'Panna, MP',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop',
    span: 'md:col-span-2 md:row-span-1'
  },
  {
    name: 'Modern Oasis Bungalow',
    category: 'Residential',
    location: 'Khajuraho, MP',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop',
    span: 'md:col-span-1 md:row-span-1'
  },
  {
    name: 'Lumina Corporate',
    category: 'Commercial',
    location: 'Satna, MP',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
    span: 'md:col-span-3 md:row-span-1'
  },
  {
    name: 'Heritage Farmhouse',
    category: 'Architecture & Interior',
    location: 'Panna Outskirts',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
    span: 'md:col-span-1 md:row-span-1'
  },
  {
    name: 'Zenith Restaurant',
    category: 'Interior Design',
    location: 'Chhatarpur, MP',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop',
    span: 'md:col-span-2 md:row-span-1'
  }
]

const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-[2px] bg-accent"></div>
            <span className="text-accent font-medium tracking-widest uppercase text-sm">Portfolio</span>
            <div className="w-8 h-[2px] bg-accent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary leading-tight max-w-3xl">
            Selected <span className="text-secondary font-light italic">Works</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[300px]">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${project.span}`}
            >
              <img 
                src={project.image} 
                alt={project.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                <div className="flex justify-end">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
                
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 bg-accent/90 text-white text-xs font-medium rounded-full mb-3 backdrop-blur-sm">
                    {project.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-2 text-white/80 text-sm">
                    <MapPin size={14} />
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a href="#" className="px-8 py-4 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-white transition-all duration-300">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
