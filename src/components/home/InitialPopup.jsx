import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const InitialPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    address: ''
  });

  useEffect(() => {
    // Show popup after a short delay on first visit
    const hasVisited = sessionStorage.getItem('hasVisitedPopup');
    if (!hasVisited) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('hasVisitedPopup', 'true');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.target.preventDefault?.(); // fallback if called from form
    if (!formData.name || !formData.mobile || !formData.address) {
      alert('कृपया सभी जानकारी भरें।');
      return;
    }

    const message = `नमस्ते, मेरा नाम ${formData.name} है।\nमोबाइल: ${formData.mobile}\nपता: ${formData.address}\nकृपया मुझे संपर्क करें।`;
    const whatsappNumber = '919876543210'; // Replace with actual number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-background w-full max-w-md rounded-2xl shadow-2xl overflow-hidden relative"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 text-muted-foreground hover:bg-muted rounded-full transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="bg-primary p-6 text-primary-foreground text-center">
              <h2 className="text-2xl font-bold mb-2">हमसे जुड़ें</h2>
              <p className="text-primary-foreground/80 text-sm">अपनी जानकारी दें और हमारी टीम आपसे जल्द संपर्क करेगी</p>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1.5">आपका नाम</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="अपना नाम दर्ज करें"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1.5">मोबाइल नंबर</label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="अपना मोबाइल नंबर दर्ज करें"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5">आपका पता</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="अपना पता दर्ज करें"
                  rows="3"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25 mt-2"
              >
                WhatsApp पर भेजें
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default InitialPopup;
