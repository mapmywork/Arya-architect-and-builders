import { motion } from 'framer-motion'
import { QrCode, MessageCircle, Send, Wallet, AlertCircle, X } from 'lucide-react'
import qrImage from '../../assets/QR.PNG'

const PaymentInfo = ({ isOpen, onClose, amount }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-background w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-[2rem] shadow-2xl relative"
      >
        <button onClick={onClose} className="absolute top-4 right-4 md:top-6 md:right-6 p-2 bg-black/5 hover:bg-black/10 text-primary rounded-full transition-all duration-300 z-50">
          <X size={24} />
        </button>
        <div className="p-6 md:p-8">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-[2px] bg-accent"></div>
            <span className="text-accent font-medium tracking-widest uppercase text-xs">Secure Payment</span>
            <div className="w-8 h-[2px] bg-accent"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-3">
            Payment <span className="text-secondary font-light italic">Details</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Payment Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass bg-white p-6 md:p-8 rounded-3xl shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-full blur-2xl -mr-12 -mt-12 transition-all duration-500 group-hover:bg-accent/20"></div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg">
                <Wallet size={20} />
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold text-primary">UPI Payment</h3>
                <p className="text-secondary text-xs">Fast and Secure</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              {amount > 0 && (
                <div className="bg-background rounded-xl p-3 border border-black/5">
                  <p className="text-xs text-secondary mb-1">Amount to Pay</p>
                  <p className="font-mono text-2xl font-bold text-accent">₹{amount.toLocaleString()}</p>
                </div>
              )}
              <div className="bg-background rounded-xl p-3 border border-black/5">
                <p className="text-xs text-secondary mb-1">UPI ID</p>
                <p className="font-mono text-base font-bold text-primary">9179868594@ybl</p>
              </div>
              <div className="bg-background rounded-xl p-3 border border-black/5">
                <p className="text-xs text-secondary mb-1">Bank Account Name</p>
                <p className="font-heading text-sm font-bold text-primary">SAHAYATA SUTRAKAR</p>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 flex items-start gap-2">
              <AlertCircle size={16} className="text-amber-500 shrink-0 mt-0.5" />
              <p className="text-xs text-amber-800 leading-relaxed font-medium">
                Note: If UPI payment fails, please use the QR code or pay to the number.
              </p>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-3"
          >
            <div className="w-full aspect-square bg-white border border-black/10 rounded-2xl flex flex-col items-center justify-center p-2 relative mb-2 shadow-sm overflow-hidden">
              <img 
                src={qrImage} 
                alt="Payment QR Code" 
                className="w-full h-full object-cover"
              />
            </div>

            <a href={`https://wa.me/9179868594?text=I%20have%20made%20the%20payment${amount ? `%20of%20₹${amount}` : ''},%20here%20is%20the%20screenshot.`} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-[#25D366]/10 text-[#25D366] border-2 border-[#25D366]/30 rounded-2xl font-bold text-base hover:bg-[#25D366] hover:text-white transition-colors group">
              <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
              Send Screenshot on WhatsApp
            </a>

            <button className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-white text-primary border-2 border-primary/10 rounded-2xl font-bold text-base hover:border-primary transition-colors group mt-2">
              <Send size={20} className="text-accent group-hover:-translate-y-1 transition-transform" />
              Submit Details
            </button>
          </motion.div>
        </div>
        </div>
      </motion.div>
    </div>
  )
}

export default PaymentInfo
