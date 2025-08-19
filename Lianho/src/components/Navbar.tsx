import { motion } from 'framer-motion';

interface NavbarProps {
  isScrolled: boolean;
}

export default function Navbar({ isScrolled }: NavbarProps) {
  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
         <motion.div
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <img src="https://lf-code-agent.coze.cn/obj/x-ai-cn/245488055042/attachment/未命名(1)(5)_20250814121305.png" alt="连何国际集团" className="h-10 w-auto" />
          <span className="text-xl font-bold text-gray-800 dark:text-white">连何国际集团</span>
        </motion.div>
        
          <div className="hidden md:flex items-center space-x-8">
            <a href="/#features" className="text-sm font-medium hover:text-[#c45332] dark:hover:text-[#c45332] transition-colors">核心功效</a>
            <a href="/#ingredients" className="text-sm font-medium hover:text-[#c45332] dark:hover:text-[#c45332] transition-colors">产品成分</a>
            <a href="/#testimonials" className="text-sm font-medium hover:text-[#c45332] dark:hover:text-[#c45332] transition-colors">客户评价</a>
            <a href="/contact-us" className="text-sm font-medium hover:text-[#c45332] dark:hover:text-[#c45332] transition-colors">联系我们</a>
        </div>
        
        <button className="md:hidden text-gray-700 dark:text-gray-300">
          <i class="fa-solid fa-bars text-xl"></i>
        </button>
      </div>
    </motion.nav>
  );
}