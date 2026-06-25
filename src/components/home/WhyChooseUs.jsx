import { motion } from 'framer-motion'
import { Users, BadgeIndianRupee, Clock, Target, Headset, HardHat, Monitor, Layers } from 'lucide-react'

const reasons = [
  { icon: Users, title: 'अनुभवी इंजीनियर्स', desc: 'हमारी टीम में अत्यधिक अनुभवी और कुशल सिविल इंजीनियर शामिल हैं।' },
  { icon: BadgeIndianRupee, title: 'किफायती मूल्य', desc: 'हम अत्यधिक प्रतिस्पर्धी कीमतों पर प्रीमियम गुणवत्ता वाली सेवाएं प्रदान करते हैं।' },
  { icon: Clock, title: 'तेज और समय पर काम', desc: 'हम बिना किसी देरी के समय पर प्रोजेक्ट पूरा करने की गारंटी देते हैं।' },
  { icon: Target, title: 'सटीक सर्वे और डिज़ाइन', desc: 'पूर्ण सटीकता सुनिश्चित करने के लिए DGPS जैसे आधुनिक उपकरणों का उपयोग।' },
  { icon: Headset, title: 'ग्राहक सहायता', desc: 'हमारे ग्राहकों के लिए चौबीसों घंटे समर्पित सहायता और मार्गदर्शन।' },
  { icon: HardHat, title: 'गुणवत्ता आश्वासन', desc: 'सख्त पर्यवेक्षण और प्रीमियम मानकीकृत सामग्रियों का उपयोग।' },
  { icon: Monitor, title: '3D विज़ुअलाइज़ेशन', desc: 'आपके सपनों की जगह की कल्पना करने के लिए यथार्थवादी 3D रेंडरिंग।' },
  { icon: Layers, title: 'एंड-टू-एंड सर्विस', desc: 'प्रारंभिक योजना से लेकर अंतिम हैंडओवर तक पूर्ण टर्नकी समाधान।' },
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
              <span className="text-accent font-medium tracking-widest uppercase text-sm">हम ही क्यों?</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6 leading-tight">
              हम सबसे अच्छा <span className="text-secondary font-light italic">विकल्प क्यों हैं</span>
            </h2>
            <p className="text-secondary leading-relaxed mb-8">
              एक दशक के अनुभव और आर्किटेक्चरल उत्कृष्टता के जुनून के साथ, आर्या आर्किटेक्ट एंड बिल्डर (ARYA ARCHITECT AND BUILDER) गुणवत्ता या बजट से समझौता किए बिना अपेक्षाओं से अधिक प्रोजेक्ट देने के लिए प्रतिबद्ध है।
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
