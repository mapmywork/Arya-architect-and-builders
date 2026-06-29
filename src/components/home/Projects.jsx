import { MapPin, ArrowUpRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const projects = [
  { name: 'आवासीय फ्लोर प्लान', category: '2D प्लानिंग', location: 'कस्टम डिजाइन', image: '/assets/projects/floor_plan_1_1782629109980.png' },
  { name: 'आधुनिक हाउस लेआउट', category: '2D प्लानिंग', location: 'कस्टम डिजाइन', image: '/assets/projects/floor_plan_2_1782629122213.png' },
  { name: 'कमर्शियल ऑफिस प्लान', category: '2D प्लानिंग', location: 'कस्टम डिजाइन', image: '/assets/projects/floor_plan_3_1782629132798.png' },
  { name: 'स्ट्रक्चरल ब्लूप्रिंट', category: '2D प्लानिंग', location: 'कस्टम डिजाइन', image: '/assets/projects/floor_plan_4_1782629143931.png' },
  { name: 'लक्ज़री विला', category: 'आर्किटेक्चर डिजाइन', location: 'पन्ना, एम.पी.', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop' },
  { name: 'आधुनिक घर', category: 'इंटीरियर डिजाइन', location: 'खजुराहो, एम.पी.', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop' },
  { name: 'कॉर्पोरेट कार्यालय', category: 'कमर्शियल', location: 'सतना, एम.पी.', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop' },
  { name: 'साइट विजिट - 1', category: 'साइट विजिट', location: 'पन्ना बाईपास', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn_PMZC1MWZamTSJSCyfVwLqUg5oihg0n37RRKKtMC5KLW99tMN5-rGj0&s=10' },
  { name: '2D फ्लोर प्लान', category: 'ड्रॉइंग / नक्शा', location: 'छतरपुर, एम.पी.', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2069&auto=format&fit=crop' },
  { name: 'लिविंग रूम इंटीरियर', category: 'इंटीरियर डिजाइन', location: 'सतना, एम.पी.', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop' },
  { name: 'साइट विजिट - 2', category: 'साइट विजिट', location: 'पन्ना, एम.पी.', image: 'https://5.imimg.com/data5/LU/GI/MY-3048477/graceproperties-luxury-villa-residential-plots-in-hosur-500x500.jpg' },
  { name: '3D एलिवेशन', category: 'आर्किटेक्चर डिजाइन', location: 'खजुराहो, एम.पी.', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop' },
  { name: 'किचन डिजाइन', category: 'इंटीरियर डिजाइन', location: 'पन्ना, एम.पी.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm0IKXFSh_D8Vy-IZy7-CK609hVwgRRVAHaS_5xQcE2s99V5Vfvh-Z7hU&s=10' },
  { name: 'कमर्शियल कॉम्प्लेक्स', category: 'कमर्शियल', location: 'छतरपुर, एम.पी.', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop' },
  { name: 'बेडरूम इंटीरियर', category: 'इंटीरियर डिजाइन', location: 'सतना, एम.पी.', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop' },
  { name: 'स्ट्रक्चरल ड्रॉइंग', category: 'ड्रॉइंग / नक्शा', location: 'पन्ना, एम.पी.', image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop' },
  { name: 'साइट विजिट - 3', category: 'साइट विजिट', location: 'खजुराहो, एम.पी.', image: 'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=2097&auto=format&fit=crop' },
  { name: 'रेस्टोरेंट डिजाइन', category: 'इंटीरियर डिजाइन', location: 'छतरपुर, एम.पी.', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop' },
  { name: 'फार्महाउस', category: 'आर्किटेक्चर डिजाइन', location: 'पन्ना बाईपास', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop' }
]

const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-[2px] bg-accent"></div>
            <span className="text-accent font-medium tracking-widest uppercase text-sm">पोर्टफोलियो</span>
            <div className="w-8 h-[2px] bg-accent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary leading-tight max-w-3xl">
            हमारे <span className="text-secondary font-light italic">सर्वश्रेष्ठ प्रोजेक्ट्स</span>
          </h2>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          className="pb-16"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="group relative rounded-2xl overflow-hidden cursor-pointer h-[400px]">
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
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-8 flex justify-center">
          <a href="#" className="px-8 py-4 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-white transition-all duration-300">
            सभी प्रोजेक्ट्स देखें
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
