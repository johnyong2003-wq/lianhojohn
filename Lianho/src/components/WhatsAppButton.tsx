import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  // 使用用户提供的完整WhatsApp链接
  const whatsappUrl = "https://wa.me/message/TRUHQK5R7LVWI1";
  
  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      id="contact"
    >
      <motion.div 
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-14 h-14 md:w-16 md:h-16 rounded-full shadow-lg flex items-center justify-center cursor-pointer z-50"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        whileTap={{ scale: 0.95 }}
      >
        <i class="fa-brands fa-whatsapp text-xl md:text-2xl"></i>
      </motion.div>
    </a>
  );
}