import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useState, useEffect } from 'react';

export default function PrivacyPolicy() {
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
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">隐私政策</h1>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
            <div className="mb-8">
              <p className="text-gray-600 dark:text-gray-300">
                连何国际集团尊重并保护所有使用服务用户的个人隐私权。为了给您提供更准确、更有个性化的服务，我们会按照本隐私权政策的规定使用和披露您的个人信息。但连何国际集团将以高度的勤勉、审慎义务对待这些信息。除本隐私权政策另有规定外，在未征得您事先许可的情况下，连何国际集团不会将这些信息对外披露或向第三方提供。连何国际集团会不时更新本隐私权政策。您在同意连何国际集团服务使用协议之时，即视为您已经同意本隐私权政策全部内容。
              </p>
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">信息收集与使用</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  我们仅收集完成交易和提供服务所需的必要信息，包括但不限于：
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                  <li>个人身份信息：姓名、电话号码、电子邮箱</li>
                  <li>配送信息：收货地址、邮政编码、联系电话</li>
                  <li>交易信息：购买记录、支付信息（由第三方支付平台处理，我们不直接存储完整支付卡信息）</li>
                  <li>使用信息：您与我们网站和服务的互动方式</li>
                </ul>
                <p className="text-gray-600 dark:text-gray-300 mt-4">
                  我们使用这些信息来：处理订单、提供配送服务、与您沟通订单状态、提供客户支持、改进我们的产品和服务。
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">信息披露</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  我们不会向第三方出售、交易或以其他方式转让您的个人身份信息，除非：
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                  <li>获得您的明确许可</li>
                  <li>为了完成您发起的交易或提供您请求的服务</li>
                  <li>遵守适用法律、法规或法律程序</li>
                  <li>保护我们的权利、财产或安全，以及我们的用户和公众的权利、财产或安全</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">数据安全</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  我们采用适当的技术和组织措施来保护您的个人信息免受未授权访问、使用或披露。这些措施包括数据加密、访问控制、安全审计和员工培训。尽管我们采取了合理的安全措施，但没有任何方法可以完全保证互联网传输或电子存储的安全性。
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">Cookies的使用</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  我们使用Cookies和类似技术来改善您的浏览体验、分析网站使用情况、个性化内容和广告。Cookies是存储在您设备上的小型数据文件。您可以通过浏览器设置禁用Cookies，但这可能会影响网站某些功能的正常使用。
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">用户权利</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  您有权：
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                  <li>查询、更正或删除您的个人信息</li>
                  <li>限制或反对某些信息的处理</li>
                  <li>撤回您的同意（不影响撤回前基于同意的处理合法性）</li>
                </ul>
                <p className="text-gray-600 dark:text-gray-300 mt-4">
                  如您想行使上述权利，请通过本政策底部提供的联系方式与我们联系。我们将在合理时间内响应您的请求。
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">联系我们</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  如您对本隐私政策有任何疑问或建议，请通过以下方式联系我们：
                </p>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center gap-3">
                    <i className="fa-solid fa-envelope text-blue-500 w-5 text-center"></i>
                    <span>johnyong2003@gmail.com</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa-solid fa-phone text-green-500 w-5 text-center"></i>
                    <span>+60102491818</span>
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