import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useState, useEffect } from 'react';

export default function AfterSales() {
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
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">售后服务</h1>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">退货政策</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  签收 7 天内，如遇产品质量问题、包装破损或错发等情况，您可以申请退货。请保留原包装和所有附件，并联系客服提供相关照片证据，我们将尽快为您处理。
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">换货政策</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  如收到的产品存在质量问题或因运输导致损坏，我们将为您提供免费换货服务。请在签收后 7 天内联系客服，提供订单信息和问题照片，我们将安排补发新货。
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">退款流程</h2>
                <ol className="list-decimal pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                  <li>联系客服提交退款申请及相关证明</li>
                  <li>客服审核（1-2个工作日）</li>
                  <li>审核通过后安排退款</li>
                  <li>退款到账（5-10个工作日，具体到账时间取决于支付方式和银行处理速度）</li>
                </ol>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">真伪核验</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  为确保您购买的是正品，您可以凭产品包装上的批号、有效期和认证编号（含 KKM）联系客服进行核验。我们将协助您确认产品真伪，保障您的权益。
                </p>
              </div>
              
              <div className="mt-10 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <i className="fa-solid fa-headphones text-blue-500"></i>
                  联系客服
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">如有任何售后问题，欢迎通过以下方式联系我们的客服团队：</p>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center gap-3">
                    <i className="fa-solid fa-phone text-green-500 w-5 text-center"></i>
                    <span>+60102491818</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa-solid fa-envelope text-blue-500 w-5 text-center"></i>
                    <span>johnyong2003@gmail.com</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa-brands fa-whatsapp text-green-500 w-5 text-center"></i>
                    <span>点击右下角按钮通过WhatsApp联系我们</span>
                  </li>
                </ul>
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