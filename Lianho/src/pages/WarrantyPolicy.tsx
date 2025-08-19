import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useState, useEffect } from 'react';

export default function WarrantyPolicy() {
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
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">保修政策</h1>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">健康食品特别说明</h2>
              <p className="text-gray-600 dark:text-gray-300">
                益排毒作为健康食品，不适用传统意义上的产品保修服务。我们的质量承诺主要体现在产品的生产、包装和配送环节，确保您收到的是符合质量标准的产品。
              </p>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <i className="fa-solid fa-shield text-green-500"></i>
                  正品保证
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  我们承诺所有产品均为正品，来源可追溯。每一批次产品都经过严格质量检测，确保符合相关标准。如您对产品真伪有疑问，可联系客服进行核验。
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <i className="fa-solid fa-certificate text-green-500"></i>
                  国际认证保障
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  益排毒通过多项国际和国内权威认证，包括HACCP、GMP、ISO 22000、ISO 9001、MeSTI、HALAL和KKM（马来西亚卫生部）认证，确保产品品质稳定可靠。
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <i className="fa-solid fa-box text-green-500"></i>
                  包装与运输保障
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  我们采用专业包装确保产品在运输过程中的安全。如您收到的产品存在包装破损或因运输导致的损坏，请在签收后7天内联系客服，我们将根据情况提供退换货服务。
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <i className="fa-solid fa-calendar-check text-green-500"></i>
                  保质期保障
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  我们确保所有销售的产品均在保质期内。产品包装上标注有明确的生产日期和保质期，请在购买后注意查看，并在保质期内食用以获得最佳效果。
                </p>
              </div>
            </div>
            
            <div className="mt-10 p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
              <h3 className="text-lg font-semibold mb-2 text-purple-700 dark:text-purple-300">注意事项</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                本保修政策不涵盖因个人使用不当、储存不当或超过保质期导致的产品问题。健康食品效果因人而异，我们无法保证对每个人都能达到预期效果。如您有特殊健康状况，请在使用前咨询医生建议。
              </p>
            </div>
          </div>
        </motion.div>
      </main>
      
      <WhatsAppButton />
      <Footer />
    </div>
  );
}