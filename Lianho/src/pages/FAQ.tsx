import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useState, useEffect } from 'react';

export default function FAQ() {
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
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">常见问题（FAQ）</h1>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">1. 益排毒的核心功效是什么？</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  益排毒聚焦 四大功效：清肠排毒、肠胃健康、净化肝脏、保护细胞。精选 9 种天然成分，搭配 3 大专利成分（Nutriose®、Vitacel、DigeZyme®） 与日本益生菌 BB536，由内而外焕发健康活力。
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">2. 多久能感受到效果？</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">多数用户反馈：</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                  <li>8–24 小时：开始有通便感或上厕所更顺畅；</li>
                  <li>7–14 天：肠道通畅、轻盈感更明显；</li>
                  <li>≥30 天：精神与活力更稳定、皮肤与代谢表现更好。</li>
                </ul>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  提示：体质与饮食作息不同，感受存在个体差异。初次食用可从半包起，配足量温水。
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">3. 产品是否安全？</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  益排毒通过多项权威认证：HACCP、GMP、ISO 22000、ISO 9001、MeSTI、HALAL、KKM（马来西亚卫生部）。
                  无添加防腐剂与人工色素，适合长期服用。孕妇、哺乳期及慢性病患者请先咨询医生。
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">4. 如何食用？</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  每日 1–2 次，每次 1 包，搭配温水或果汁。久坐、应酬或作息不规律人群可酌情调整。
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">5. 配送需要多久？</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  24 小时内发货；本地 2–5 个工作日送达，海外 7–14 个工作日（以物流为准）。
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">6. 可以退换货吗？</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  签收 7 天内 如遇破损、发错或质量问题，联系客服可办理退换/退款。
                </p>
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