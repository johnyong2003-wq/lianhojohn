import { motion } from 'framer-motion';

export default function ProductFeatures() {
   const features = [
    {
      icon: 'fa-leaf',
      title: '天然配方',
      description: '精选多种天然植物精华，温和排毒不刺激，适合长期服用。'
    },
    {
      icon: 'fa-heart',
      title: '肠道健康',
      description: '促进肠道蠕动，改善消化吸收功能，维持肠道菌群平衡。'
    },
    {
      icon: 'fa-bolt',
      title: '提升活力',
      description: '排出体内毒素，减轻身体负担，让您全天精力充沛。'
    },
    {
      icon: 'fa-shield-alt',
      title: '安全认证',
      description: '通过多项权威安全检测，无添加防腐剂和人工色素，使用更放心。'
    }
     ],
     advancedFeatures = [
      {
        icon: 'fa-wind',
        title: '净化肝脏',
        description: '小麦草富含叶绿素、维生素和抗氧化剂SOD，帮助净化肝脏，排除体内毒素。'
      },
      {
        icon: 'fa-shield-virus',
        title: '保护细胞',
        description: '提升抗氧化能力，去除自由基，保护细胞免受氧压力损害，促进细胞健康。'
      }
     ];
  
  return (
    <section id="features" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            益排毒<span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">核心功效</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            我们的产品融合了创新技术与人性化设计，为您带来无与伦比的使用体验，满足您的各种需求。
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-14 h-14 bg-orange-100 dark:bg-[#c45332]/30 rounded-xl flex items-center justify-center text-[#c45332] dark:text-[#c45332] mb-5 group-hover:scale-110 transition-transform">
                <i class={`fa-solid ${feature.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
           {advancedFeatures.map((feature, index) => (
             <motion.div 
               key={index + features.length}
               className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: (index + features.length) * 0.1 }}
             >
               <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center text-green-600 dark:text-green-400 mb-5 group-hover:scale-110 transition-transform">
                 <i class={`fa-solid ${feature.icon} text-2xl`}></i>
               </div>
               <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
               <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
             </motion.div>
           ))}
         </div>
         
          <motion.div 
          className="mt-20 bg-gradient-to-r from-[#c45332] to-[#a34328] rounded-3xl p-8 md:p-12 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-2/3">
               <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">产品核心特点</h3>
               <p className="text-blue-100 mb-6">
                 由9种成分配制而成，包含3大专利成分和日本益生菌双歧杆菌BB536，实现4合1功效。
              </p>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <div className="flex items-start gap-2 text-white">
                   <i class="fa-solid fa-check-circle mt-1"></i>
                   <span>3大专利成分: Nutriose®, Vitacel, DigeZyme®</span>
                 </div>
                 <div className="flex items-start gap-2 text-white">
                   <i class="fa-solid fa-check-circle mt-1"></i>
                   <span>添加日本益生菌双歧杆菌BB536</span>
                 </div>
                 <div className="flex items-start gap-2 text-white">
                   <i class="fa-solid fa-check-circle mt-1"></i>
                   <span>4合1功效:清肠排毒+肠胃健康+净化肝脏+保护细胞</span>
                 </div>
                 <div className="flex items-start gap-2 text-white">
                   <i class="fa-solid fa-check-circle mt-1"></i>
                   <span>成分源自德国、法国、日本等国际品牌</span>
                 </div>
               </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="bg-white p-4 rounded-xl shadow-lg">
                 <div className="font-bold text-[#c45332]">
                  <span className="text-xl">RM</span>
                  <span className="text-4xl">198</span>
                </div>
                <div className="text-gray-500 text-sm">起售价格</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}