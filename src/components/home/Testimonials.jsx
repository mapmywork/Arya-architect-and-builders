import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Rahul',
    role: 'Customer',
    image: 'https://i.pravatar.cc/150?img=11',
    text: 'Bahut acchi service, fast work',
    stars: 5
  },
  {
    name: 'Ajay',
    role: 'Customer',
    image: 'https://i.pravatar.cc/150?img=12',
    text: 'Best civil engineer in area',
    stars: 5
  },
  {
    name: 'Neelesh Vishwakarna',
    role: 'Customer',
    image: 'https://i.pravatar.cc/150?img=13',
    text: 'Best civil engineer in panna',
    stars: 5
  },
  {
    name: 'Mahendra Yadav',
    role: 'Customer',
    image: 'https://i.pravatar.cc/150?img=14',
    text: 'price bhi kam h aur kaam bhi oura dete h',
    stars: 5
  },
  {
    name: 'Sanjay',
    role: 'Customer',
    image: 'https://i.pravatar.cc/150?img=15',
    text: 'mene nmdc ke work bhi yaha se karwaye h',
    stars: 5
  },
  {
    name: 'Gourav',
    role: 'Customer',
    image: 'https://i.pravatar.cc/150?img=16',
    text: 'maximum civil work ke liye ye best h',
    stars: 4
  },
  {
    name: 'Soniya',
    role: 'Customer',
    image: 'https://i.pravatar.cc/150?img=5',
    text: 'mene bahar se kaam karvaya raha lekin pasand nahu aaya to mere 8000 rs bhi chake gye aur inka work 3500 rs me comolete kiya aur pasand bhi aaya',
    stars: 5
  }
]

const Testimonials = () => {
  return (
    <section className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
           <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-[2px] bg-accent"></div>
            <span className="text-accent font-medium tracking-widest uppercase text-sm">Testimonials</span>
            <div className="w-8 h-[2px] bg-accent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Client <span className="text-secondary font-light italic">Reviews</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto cursor-grab active:cursor-grabbing"
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            className="pb-16"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="glass bg-white p-8 rounded-[2rem] h-full flex flex-col justify-between transition-transform duration-300 hover:-translate-y-2">
                  <div>
                    <div className="flex gap-1 text-accent mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill={i < item.stars ? "currentColor" : "none"} strokeWidth={i < item.stars ? 0 : 2} />
                      ))}
                    </div>
                    <p className="text-secondary text-sm leading-relaxed mb-8 italic">
                      "{item.text}"
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <h4 className="font-heading font-bold text-primary text-sm">{item.name}</h4>
                      <p className="text-xs text-secondary">{item.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
