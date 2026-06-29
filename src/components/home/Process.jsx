import { motion } from 'framer-motion'

const steps = [
  { id: '01', title: 'परामर्श', desc: 'आपके दृष्टिकोण और आवश्यकताओं को समझना।' },
  { id: '02', title: 'साइट विजिट', desc: 'स्थान और स्थानिक बाधाओं का विश्लेषण।' },
  { id: '03', title: 'योजना', desc: 'प्रारंभिक ड्राफ्ट और 2D फ्लोर प्लान बनाना।' },
  { id: '04', title: '3D विज़ुअलाइज़ेशन', desc: '3D रेंडर के साथ योजना को जीवंत करना।' },
  { id: '05', title: 'निर्माण ड्राइंग', desc: 'निष्पादन के लिए विस्तृत ब्लूप्रिंट।' },
  { id: '06', title: 'परियोजना वितरण', desc: 'डिजाइन को अंतिम रूप देना और सौंपना।' }
]

const Process = () => {
  return (
    <section id="process" className="py-24 md:py-32 bg-primary text-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            हमारी कार्य <span className="text-accent italic font-light">प्रक्रिया</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            यह सुनिश्चित करने के लिए एक व्यवस्थित और पारदर्शी दृष्टिकोण कि आपका प्रोजेक्ट सुचारू रूप से पूरा हो।
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
