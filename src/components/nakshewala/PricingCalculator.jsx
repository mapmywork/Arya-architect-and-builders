import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calculator } from 'lucide-react'
import PaymentInfo from './PaymentInfo'

const services = [
  { id: '2d', name: '2D Plan', price: 2, unit: 'sqft' },
  { id: 'ruf', name: 'Rough Plan', price: 1, unit: 'sqft' },
  { id: '3d', name: '3D Elevation', price: 4, unit: 'sqft' },
  { id: 'interior', name: 'Interior', price: 8, unit: 'sqft' },
  { id: 'site', name: 'Site Visit', price: 800, unit: 'flat' },
  { id: 'dgps', name: 'DGPS Survey', price: 3000, unit: 'acre' }
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
            Select <span className="text-accent italic font-light">Service</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Calculate the estimated cost of your project instantly.
          </p>
        </div>

        <div className="max-w-4xl mx-auto glass-dark p-8 md:p-12 rounded-[2rem]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {services.map((service) => {
              const isSelected = !!selectedServices[service.id]
              return (
                <motion.div 
                  key={service.id}
                  className={`border rounded-2xl p-6 transition-colors duration-300 cursor-pointer ${isSelected ? 'bg-white/10 border-accent' : 'bg-white/5 border-white/10 hover:border-white/30'}`}
                >
                  <div className="flex items-center justify-between mb-4" onClick={() => handleToggle(service.id)}>
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded flex items-center justify-center border ${isSelected ? 'bg-accent border-accent' : 'border-white/30'}`}>
                        {isSelected && <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                      </div>
                      <h4 className="font-heading font-semibold">{service.name}</h4>
                    </div>
                    <span className="text-accent font-medium">₹{service.price}/{service.unit === 'flat' ? 'visit' : service.unit}</span>
                  </div>

                  {isSelected && service.unit !== 'flat' && (
                    <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between animate-fade-up">
                      <label className="text-sm text-white/60">Enter Area ({service.unit}):</label>
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
                <p className="text-white/60 font-medium">Estimated Total</p>
                <p className="text-4xl font-heading font-bold text-white">₹{calculateTotal().toLocaleString()}</p>
              </div>
            </div>
            
            <div className="flex gap-4 w-full md:w-auto">
              <button 
                onClick={() => setIsPaymentModalOpen(true)}
                className="flex-1 md:flex-none px-8 py-4 bg-accent text-white text-center rounded-full font-medium hover:bg-white hover:text-primary transition-all duration-300"
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isPaymentModalOpen && (
          <PaymentInfo isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} />
        )}
      </AnimatePresence>
    </section>
  )
}

export default PricingCalculator
