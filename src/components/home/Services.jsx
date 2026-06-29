import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'वास्तु योजना',
    description: 'स्थान अनुकूलन और संरचनात्मक ताकत पर केंद्रित व्यापक 2D और 3D योजना। पिलर प्लान - 1 रुपये/वर्ग फुट, 3D फ्लोर प्लान - 2 रुपये/वर्ग फुट।',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop'
  },
  {
    title: 'प्लॉटिंग प्लान',
    description: 'इष्टतम भूमि उपयोग और लेआउट योजना के लिए विस्तृत और सटीक प्लॉटिंग प्लान। मूल्य निर्धारण: 0.2 रुपये/वर्ग फुट।',
    image: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=2072&auto=format&fit=crop'
  },
  {
    title: 'स्ट्रक्चरल ड्रॉइंग',
    description: 'सुरक्षा, स्थिरता और इंजीनियरिंग मानकों का पालन सुनिश्चित करने वाले व्यापक स्ट्रक्चरल ड्रॉइंग। मूल्य निर्धारण: 3 रुपये/वर्ग फुट।',
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: '3D एलिवेशन डिजाइन',
    description: 'यथार्थवादी 3D विज़ुअलाइज़ेशन जो निर्माण से पहले आपके वास्तुशिल्प विचारों को जीवंत करते हैं।',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'इंटीरियर डिजाइन',
    description: 'आपकी जीवनशैली को दर्शाने और आपके रहने के अनुभव को बढ़ाने के लिए लक्जरी इंटीरियर समाधान।',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2067&auto=format&fit=crop'
  },
  {
    title: 'फ्रंट एलिवेशन',
    description: 'आवासीय और व्यावसायिक संपत्तियों के लिए शानदार मुखौटा डिजाइन जो एक स्थायी छाप छोड़ते हैं।',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop'
  },
  {
    title: 'निर्माण परामर्श',
    description: 'गुणवत्ता, सुरक्षा और समय पर परियोजना पूरी करने के लिए विशेषज्ञ मार्गदर्शन और पर्यवेक्षण।',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiXDRYgi1yelIyTu9GOEfzSdqUpRs2KktoFpBeK4WUer3xNqWBgVW842U&s=10'
  },
  {
    title: 'टर्नकी समाधान',
    description: 'प्रारंभिक डिजाइन से लेकर अंतिम हैंडओवर तक संपूर्ण परियोजना प्रबंधन, बिना किसी समझौते के।',
    image: 'https://spectrokavs.com/wp-content/uploads/AdobeStock_189984006-scaled-1.jpeg'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-primary text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-accent"></div>
              <span className="text-accent font-medium tracking-widest uppercase text-sm">हमारी विशेषज्ञता</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
              संपूर्ण <span className="text-white/60 font-light italic">समाधान</span>
            </h2>
          </div>
          <a href="#contact" className="hidden md:flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-full font-medium hover:bg-accent hover:text-white transition-all duration-300">
            अपने प्रोजेक्ट पर चर्चा करें
          </a>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative rounded-[32px] overflow-hidden aspect-[4/5] cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              {/* Glass Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-heading font-bold mb-3 text-white">{service.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {service.description}
                  </p>
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 md:hidden">
          <a href="#contact" className="flex items-center justify-center w-full gap-2 px-8 py-4 bg-white text-primary rounded-full font-medium hover:bg-accent hover:text-white transition-all duration-300">
            अपने प्रोजेक्ट पर चर्चा करें
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services
