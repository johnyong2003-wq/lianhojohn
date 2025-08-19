import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function HelpCenter() {
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
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">帮助中心</h1>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4 text-green-600 dark:text-green-400">欢迎来到 连何国际集团 帮助中心</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              我们希望每一位用户都能安心使用益排毒，从选购、配送到售后，我们为您提供全面支持。
              请选择以下需要了解的内容，或通过页面右下角的WhatsApp按钮直接联系我们的客服团队。
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <Link to="/faq" className="block">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl transition-transform hover:scale-105 hover:shadow-lg">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                    <i className="fa-solid fa-question-circle text-xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">常见问题（FAQ）</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    了解产品功效、使用方法、见效时间等常见问题的解答。
                  </p>
                </div>
              </Link>
              
              <Link to="/after-sales" className="block">
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl transition-transform hover:scale-105 hover:shadow-lg">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mb-4">
                    <i className="fa-solid fa-headphones text-xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">售后服务</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    了解退货、换货、退款流程及其他售后服务相关信息。
                  </p>
                </div>
              </Link>
              
              <Link to="/warranty-policy" className="block">
                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl transition-transform hover:scale-105 hover:shadow-lg">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-800 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                    <i className="fa-solid fa-shield text-xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">保修政策</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    了解产品质量保证、正品保障及相关政策说明。
                  </p>
                </div>
              </Link>
              
              <Link to="/privacy-policy" className="block">
                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl transition-transform hover:scale-105 hover:shadow-lg">
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-800 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4">
                    <i className="fa-solid fa-lock text-xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">隐私政策</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    了解我们如何收集、使用和保护您的个人信息。
                  </p>
                </div>
              </Link>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6 text-orange-600 dark:text-orange-400">联系我们</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  如果您在帮助中心没有找到所需的答案，或有其他问题需要咨询，欢迎通过以下方式联系我们的客服团队。
                </p>
                
                <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center text-orange-600 dark:text-orange-400 flex-shrink-0 mt-1">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">电话咨询</h4>
                      <p>+60102491818</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center text-orange-600 dark:text-orange-400 flex-shrink-0 mt-1">
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">电子邮件</h4>
                      <p>johnyong2003@gmail.com</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center text-orange-600 dark:text-orange-400 flex-shrink-0 mt-1">
                      <i className="fa-brands fa-whatsapp"></i>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">WhatsApp</h4>
                      <p>点击右下角按钮开始聊天</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-orange-50 dark:bg-orange-900/10 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-4 text-orange-700 dark:text-orange-300">客服工作时间</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex justify-between">
                    <span>周一至周五</span>
                    <span>9:00 - 18:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>周六</span>
                    <span>9:00 - 14:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>周日及公共假期</span>
                    <span>休息</span>
                  </li>
                </ul>
                
                <div className="mt-6 pt-6 border-t border-orange-200 dark:border-orange-800">
                  <p className="text-sm text-gray-600 dark:text-gray-300 italic">
                    我们通常会在1-2个工作日内回复您的咨询。如有紧急问题，建议通过电话或WhatsApp联系我们，以获得更快的响应。
                  </p>
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