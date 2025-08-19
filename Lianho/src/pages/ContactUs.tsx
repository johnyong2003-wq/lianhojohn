import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useState, useEffect } from 'react';

export default function ContactUs() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      <Navbar isScrolled={isScrolled} />
      
      <main className="container mx-auto px-4 py-20 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">联系我们</h1>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-orange-600 dark:text-orange-400">联系方式</h2>
                
                <ul className="space-y-6 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center text-orange-600 dark:text-orange-400 flex-shrink-0 mt-1">
                      <i className="fa-solid fa-phone text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">电话咨询</h3>
                      <p className="mb-2">+60102491818</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">周一至周五: 9:00 - 18:00</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1">
                      <i className="fa-solid fa-envelope text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">电子邮件</h3>
                      <p className="mb-2">johnyong2003@gmail.com</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">我们通常会在1-2个工作日内回复</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 flex-shrink-0 mt-1">
                      <i className="fa-brands fa-whatsapp text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">WhatsApp</h3>
                      <p className="mb-2">+60102491818</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">点击右下角按钮开始聊天</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">客服工作时间</h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex justify-between pb-2 border-b border-gray-200 dark:border-gray-600">
                    <span>周一至周五</span>
                    <span>9:00 - 18:00</span>
                  </li>
                  <li className="flex justify-between pb-2 border-b border-gray-200 dark:border-gray-600">
                    <span>周六</span>
                    <span>9:00 - 14:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>周日及公共假期</span>
                    <span>休息</span>
                  </li>
                </ul>
                
                <div className="mt-8 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <h4 className="font-medium mb-2 text-orange-700 dark:text-orange-300">紧急问题？</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    对于紧急问题，建议通过电话或WhatsApp联系我们，以获得更快的响应。
                  </p>
                  <a 
                    href="https://wa.me/message/TRUHQK5R7LVWI1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-sm font-medium rounded-full transition-colors"
                  >
                    <i className="fa-brands fa-whatsapp mr-2"></i>
                    立即联系
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
      
      <WhatsAppButton />
      <Footer />
    </div>
  );
}