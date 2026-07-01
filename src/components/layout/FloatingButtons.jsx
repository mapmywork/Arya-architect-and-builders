import { MessageCircle, Phone } from 'lucide-react';

const FloatingButtons = () => {
  const whatsappNumber = '919232660441'; // Replace with actual number
  const phoneNumber = '+919232660441'; // Replace with actual number

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center group relative"
        aria-label="WhatsApp Us"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-full mr-4 bg-black/80 text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          WhatsApp पर संदेश भेजें
        </span>
      </a>

      {/* Call Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="bg-primary text-primary-foreground p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center group relative"
        aria-label="Call Us"
      >
        <Phone className="w-6 h-6" />
        <span className="absolute right-full mr-4 bg-black/80 text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          हमें कॉल करें
        </span>
      </a>
    </div>
  );
};

export default FloatingButtons;
