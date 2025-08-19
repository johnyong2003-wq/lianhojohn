import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-900 dark:to-orange-950 -z-10"></div>
      
      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-orange-200 dark:bg-[#c45332]/30 rounded-full filter blur-3xl opacity-50 -z-10"></div>
      <div className="absolute bottom-1/3 left-10 w-80 h-80 bg-red-200 dark:bg-[#a34328]/30 rounded-full filter blur-3xl opacity-50 -z-10"></div>
      
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="md:w-1/2 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
             <div className="inline-block px-4 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium mb-2">
               四效合一 · 全面排毒
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              连何国际 · <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">益排毒</span>
            </h1>
             <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
               四大核心功效：清肠排毒、肠胃健康、净化肝脏、保护细胞，9种天然成分配制，3大专利成分，由内而外焕发健康活力。
            </p>
             <div className="flex flex-wrap gap-4 pt-4">
               <a 
                href="https://wa.me/message/TRUHQK5R7LVWI1"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-[#c45332] hover:bg-[#a34328] text-white font-medium rounded-full shadow-lg shadow-[#c45332]/20 hover:shadow-xl hover:shadow-[#c45332]/30 transition-all transform hover:-translate-y-1"
              >
                立即购买
              </a>
              <a 
                href="#features"
                className="px-8 py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1"
              >
                了解更多
              </a>
            </div>
            <div className="flex items-center gap-4 pt-6">
               <div className="flex -space-x-2">
                  {[
                    "https://lf-code-agent.coze.cn/obj/x-ai-cn/245488055042/attachment/TANG_PEI_TEE_20250819121328.jpg",
                    "https://lf-code-agent.coze.cn/obj/x-ai-cn/245488055042/attachment/图片_2025-08-19_121151_887_20250819121327.jpg",
                    "https://lf-code-agent.coze.cn/obj/x-ai-cn/245488055042/attachment/KWANG_KIM_LEONG_20250819121427.jpg"
                  ].map((imgUrl, index) => (
                    <div key={index} className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-900 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                      <img 
                        src={imgUrl} 
                        alt={`User ${index + 1}`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
              </div>
              <div className="text-sm">
                <span className="font-bold text-blue-600 dark:text-blue-400">500+</span> 位满意客户
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl shadow-blue-200 dark:shadow-blue-900/20">
                <img 
                 src="https://lf-code-agent.coze.cn/obj/x-ai-cn/245488055042/attachment/LH产品_(1)_pixian_ai_12_20250814130955.jpg" 
                alt="益排毒产品图" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60"></div>
              
              {/* Floating badges */}
              <div className="absolute top-6 left-6 bg-white dark:bg-gray-800 px-3 py-1 rounded-full shadow-lg">
                <span className="text-sm font-medium text-green-600 dark:text-green-400">
                  <i class="fa-solid fa-check-circle mr-1"></i> 品质保证
                </span>
              </div>
              <div className="absolute bottom-6 right-6 bg-white dark:bg-gray-800 px-3 py-1 rounded-full shadow-lg">
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  <i class="fa-solid fa-star mr-1"></i> 4.9/5 评分
                </span>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400">
                  <i class="fa-solid fa-rocket text-xl"></i>
                </div>
                <div>
                  <div className="text-sm font-medium">快速配送</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">24小时内发货</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}