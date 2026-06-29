import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calculator } from 'lucide-react'
import PaymentInfo from './PaymentInfo'

const services = [
  { id: '2d', name: '2D प्लान', price: 2, unit: 'sqft', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop' },
  { id: 'ruf', name: 'रफ प्लान', price: 1, unit: 'sqft', image: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?q=80&w=2070&auto=format&fit=crop' },
  { id: '3d', name: '3D एलिवेशन', price: 4, unit: 'sqft', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop' },
  { id: 'interior', name: 'इंटीरियर', price: 8, unit: 'sqft', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2067&auto=format&fit=crop' },
  { id: 'pillar', name: 'पिलर प्लान', price: 1, unit: 'sqft', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop' },
  { id: '3dfloor', name: '3D फ्लोर प्लान', price: 2, unit: 'sqft', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop' },
  { id: 'plotting', name: 'प्लॉटिंग प्लान', price: 0.2, unit: 'sqft', image: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=2072&auto=format&fit=crop' },
  { id: 'structural', name: 'स्ट्रक्चरल ड्रॉइंग', price: 3, unit: 'sqft', image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=2070&auto=format&fit=crop' },
  { id: 'site', name: 'साइट विजिट', price: 800, unit: 'flat', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiXDRYgi1yelIyTu9GOEfzSdqUpRs2KktoFpBeK4WUer3xNqWBgVW842U&s=10' },
  { id: 'dgps', name: 'DGPS सर्वेक्षण', price: 3000, unit: 'acre', image: 'https://spectrokavs.com/wp-content/uploads/AdobeStock_189984006-scaled-1.jpeg' }
]

const PricingCalculator = () => {
  const [selectedServices, setSelectedServices] = useState({})
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false)

  const handleToggle = (id) => {
    setSelectedServices(prev => ({
      ...prev,
      [id]: prev[id] ? undefined : { quantity: 1 }
    }))
  }

  const handleQuantityChange = (id, quantity) => {
    if (!quantity || quantity < 1) quantity = 1
    setSelectedServices(prev => ({
      ...prev,
      [id]: { quantity: parseInt(quantity) }
    }))
  }

  const calculateTotal = () => {
    let total = 0
    services.forEach(service => {
      if (selectedServices[service.id]) {
        total += service.price * (service.unit === 'flat' ? 1 : selectedServices[service.id].quantity)
      }
    })
    return total
  }

  return (
    <section id="pricing" className="py-24 bg-primary text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            सेवा <span className="text-accent italic font-light">चुनें</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            अपने प्रोजेक्ट की अनुमानित लागत की तुरंत गणना करें।
          </p>
        </div>

        <div className="max-w-4xl mx-auto glass-dark p-8 md:p-12 rounded-[2rem]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {services.map((service) => {
              const isSelected = !!selectedServices[service.id]
              return (
                <motion.div 
                  key={service.id}
                  className={`group border rounded-2xl p-6 transition-colors duration-300 cursor-pointer ${isSelected ? 'bg-white/10 border-accent' : 'bg-white/5 border-white/10 hover:border-white/30'}`}
                >
                  <div className="w-full h-40 mb-5 rounded-xl overflow-hidden" onClick={() => handleToggle(service.id)}>
                    <img src={service.image} alt={service.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className={`flex items-center justify-between ${isSelected && service.unit !== 'flat' ? 'mb-4' : ''}`} onClick={() => handleToggle(service.id)}>
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded flex items-center justify-center border ${isSelected ? 'bg-accent border-accent' : 'border-white/30'}`}>
                        {isSelected && <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                      </div>
                      <h4 className="font-heading font-semibold">{service.name}</h4>
                    </div>
                    <span className="text-accent font-medium">₹{service.price}/{service.unit === 'flat' ? 'विजिट' : service.unit === 'sqft' ? 'वर्ग फुट' : service.unit === 'acre' ? 'एकड़' : service.unit}</span>
                  </div>

                  {isSelected && service.unit !== 'flat' && (
                    <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between animate-fade-up">
                      <label className="text-sm text-white/60">क्षेत्रफल दर्ज करें ({service.unit === 'sqft' ? 'वर्ग फुट' : service.unit === 'acre' ? 'एकड़' : service.unit}):</label>
                      <input 
                        type="number" 
                        min="1"
                        value={selectedServices[service.id].quantity}
                        onChange={(e) => handleQuantityChange(service.id, e.target.value)}
                        className="w-24 bg-background/50 border border-white/20 rounded-lg px-3 py-1 text-right text-white focus:outline-none focus:border-accent"
                        onClick={(e) => e.stopPropagation()}
                      />
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>

          <div className="bg-background/10 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-white">
                <Calculator size={28} />
              </div>
              <div>
                <p className="text-white/60 font-medium">अनुमानित कुल</p>
                <p className="text-4xl font-heading font-bold text-white">₹{calculateTotal().toLocaleString()}</p>
              </div>
            </div>
            
            <div className="flex gap-4 w-full md:w-auto">
              <button 
                onClick={() => setIsPaymentModalOpen(true)}
                className="flex-1 md:flex-none px-8 py-4 bg-accent text-white text-center rounded-full font-medium hover:bg-white hover:text-primary transition-all duration-300"
              >
                भुगतान के लिए आगे बढ़ें
              </button>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isPaymentModalOpen && (
          <PaymentInfo isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} amount={calculateTotal()} />
        )}
      </AnimatePresence>
    </section>
  )
}

export default PricingCalculator
