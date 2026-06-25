import { motion } from 'framer-motion'
import { QrCode, MessageCircle, Send, Wallet, AlertCircle } from 'lucide-react'

const PaymentInfo = () => {
  return (
    <section id="payment" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-[2px] bg-accent"></div>
            <span className="text-accent font-medium tracking-widest uppercase text-sm">Secure Checkout</span>
            <div className="w-8 h-[2px] bg-accent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Payment <span className="text-secondary font-light italic">Details</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Payment Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass bg-white p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl -mr-16 -mt-16 transition-all duration-500 group-hover:bg-accent/20"></div>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-lg">
                <Wallet size={24} />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-primary">UPI Payment</h3>
                <p className="text-secondary text-sm">Fast & Secure</p>
              </div>
            </div>

            <div className="space-y-6 mb-8">
              <div className="bg-background rounded-xl p-4 border border-black/5">
                <p className="text-sm text-secondary mb-1">UPI ID</p>
                <p className="font-mono text-lg font-bold text-primary">9179868594@ybl</p>
              </div>
              <div className="bg-background rounded-xl p-4 border border-black/5">
                <p className="text-sm text-secondary mb-1">Banker Name</p>
                <p className="font-heading font-bold text-primary">SAHAYATA SUTRAKAR</p>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
              <AlertCircle size={20} className="text-amber-500 shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800 leading-relaxed font-medium">
                Note: यदि UPI से payment नहीं हो पा रही है तो QR code से payment करें या नंबर पर payment करें।
              </p>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <a href="upi://pay?pa=9179868594@ybl&pn=SAHAYATA%20SUTRAKAR" className="flex items-center justify-center gap-3 w-full px-8 py-5 bg-primary text-white rounded-2xl font-bold text-lg hover:bg-accent transition-colors shadow-lg hover:shadow-accent/20 group">
              <QrCode size={24} className="group-hover:scale-110 transition-transform" />
              Pay Now
            </a>

            <a href="https://wa.me/9179868594" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 w-full px-8 py-5 bg-[#25D366]/10 text-[#25D366] border-2 border-[#25D366]/30 rounded-2xl font-bold text-lg hover:bg-[#25D366] hover:text-white transition-colors group">
              <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
              Send WhatsApp
            </a>

            <button className="flex items-center justify-center gap-3 w-full px-8 py-5 bg-white text-primary border-2 border-primary/10 rounded-2xl font-bold text-lg hover:border-primary transition-colors group mt-4">
              <Send size={24} className="text-accent group-hover:-translate-y-1 transition-transform" />
              Submit Details
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default PaymentInfo
