import { motion } from 'framer-motion';
import { useState } from 'react';

// 定义认证数据类型
interface Certification {
  id: number;
  title: string;
  issuingAuthority: string;
  description: string;
  imageUrl: string;
}

export default function ProductCertifications() {
  // 认证数据
  const certifications: Certification[] = [
    {
      id: 1,
      title: "HACCP 认证",
      issuingAuthority: "World Certification Services",
      description: "符合HACCP MS1480:2019食品安全管理体系标准，确保从生产到销售的全过程安全",
      imageUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/245488055042/attachment/2f187f5f00bd950fc26a928c22a28c5b_20250814123408.jpg"
    },
    {
      id: 2,
      title: "GMP 良好生产规范",
      issuingAuthority: "World Certification Services",
      description: "符合GMP MS1514:2009良好生产规范，确保产品生产过程的质量和安全",
      imageUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/245488055042/attachment/811c157dcd3036fe66af732b2b452ea1_20250814123523.jpg"
    },
    {
      id: 3,
      title: "ISO 22000 食品安全管理",
      issuingAuthority: "World Certification Services",
      description: "符合ISO 22000:2018国际食品安全管理体系标准，确保产品安全可追溯",
      imageUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/245488055042/attachment/4e510d1a0857d832773d0323ae0e4a0b_20250814123409.jpg"
    },
    {
      id: 4,
      title: "ISO 9001 质量管理体系",
      issuingAuthority: "World Certification Services",
      description: "符合ISO 9001:2015国际质量管理体系标准，确保产品质量稳定可靠",
      imageUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/245488055042/attachment/79cd3d184db838008c3da21567f53d4f_20250814123418.jpg"
    },
    {
      id: 5,
      title: "MeSTI 食品安全认证",
      issuingAuthority: "马来西亚卫生部",
      description: "获得马来西亚卫生部MeSTI食品安全认证，符合当地食品安全标准",
      imageUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/245488055042/attachment/cb771ddad9b2b24494f31587b7bab1a4_20250814123408.jpg"
    },
  {
      id: 6,
      title: "HALAL 清真认证",
      issuingAuthority: "马来西亚伊斯兰发展部",
      description: "获得马来西亚政府HALAL清真认证，符合伊斯兰食品标准",
      imageUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/245488055042/attachment/图片_20240615142207_20250814123406.jpg"
    },
    {
      id: 7,
      title: "KKM 认证",
      issuingAuthority: "马来西亚卫生部",
      description: "符合马来西亚食品法规要求，通过卫生部产品分类审核，确保产品安全合规",
      imageUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/245488055042/attachment/a87928ebe122804498538ae06ed08ee4_20250816200818.jpg"
    }
  ];

  const [selectedCertification, setSelectedCertification] = useState<Certification | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              产品<span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">权威认证</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              益排毒产品通过多项国际和国内权威认证，确保品质安全，让您使用更放心
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div 
                key={cert.id}
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={cert.imageUrl} 
                    alt={cert.title} 
                    className="w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <i className="fa-solid fa-certificate mr-2"></i>
                      <span className="text-sm font-medium">{cert.issuingAuthority}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{cert.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{cert.description}</p>
                  <button 
                    className="mt-4 text-green-600 dark:text-green-400 text-sm font-medium flex items-center hover:underline"
                    onClick={() => {
                      setSelectedCertification(cert);
                      setIsModalOpen(true);
                    }}
                  >
                    查看详情 <i className="fa-solid fa-arrow-right ml-1 text-xs"></i>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Certification Detail Modal */}
      {isModalOpen && selectedCertification && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="sticky top-0 bg-white dark:bg-gray-900 z-10 flex justify-between items-center p-6 border-b">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{selectedCertification.title}</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <i className="fa-solid fa-times text-xl"></i>
              </button>
            </div>
            
            <div className="p-6">
              <div className="mb-6 flex justify-center">
                <img 
                  src={selectedCertification.imageUrl} 
                  alt={selectedCertification.title} 
                  className="max-w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              
              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-300">发证机构</h4>
                <p className="text-gray-600 dark:text-gray-300">{selectedCertification.issuingAuthority}</p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-300">认证描述</h4>
                <p className="text-gray-600 dark:text-gray-300">{selectedCertification.description}</p>
              </div>
            </div>
            
            <div className="p-6 border-t flex justify-end">
               <button 
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-2 bg-[#c45332] hover:bg-[#a34328] text-white font-medium rounded-full shadow transition-all"
              >
                关闭
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}