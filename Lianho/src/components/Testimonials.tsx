import { motion } from 'framer-motion';

export default function Testimonials() {
   // 最佳评价（顶部3个）
   const topTestimonials = [
       {
       name: '何先生',
       avatar: 'https://lf-code-agent.coze.cn/obj/x-ai-cn/245488055042/attachment/DM_20250817124406_001_20250817124456.jpeg',
       role: '咖啡行业',
       content: '服用益排毒一个月后，明显感觉肠胃舒服多了，以前的便秘问题也解决了，整个人都轻松了不少。',
       rating: 5
     },
     {
       name: '李女士',
        avatar: 'https://lf-code-agent.coze.cn/obj/x-ai-cn/245488055042/attachment/图片_2025-08-18_161814_561_20250818162242.jpg',
       role: '瑜伽教练',
       content: '作为健身爱好者，我非常注重身体排毒。益排毒帮助我维持身体轻盈状态，训练效果也提升了。',
       rating: 5
     },
     {
       name: '王先生',
       avatar: 'https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=middle-aged%20Malaysian%20Chinese%20business%20executive%20avatar&sign=b9e7fd3a129922cc31893827338e5478',
       role: '企业高管',
       content: '经常应酬喝酒，服用益排毒后感觉肝脏负担减轻了，早晨起来不再口干口苦，睡眠质量也提高了。',
       rating: 4
     }
   ];
   
   // 滚动小评价（至少10个）
     const scrollingTestimonials = [
       { id: 1, name: '赵女士', role: '教师', content: '用了两周，皮肤状态明显改善，不再暗沉无光' },
       { id: 2, name: '孙先生', role: '医生', content: '作为医生，我推荐这款产品给需要排毒的患者' },
       { id: 3, name: '周女士', role: '设计师', content: '便秘问题解决了，整个人精神状态都变好了' },
       { id: 4, name: '吴先生', role: '工程师', content: '工作压力大，服用后睡眠质量明显提高' },
       { id: 5, name: '郑女士', role: '护士', content: '肠道通畅了，腹部胀气感消失' },
       { id: 6, name: '钱先生', role: '程序员', content: '每天久坐，这款产品帮助我维持肠道健康' },
       { id: 7, name: '冯女士', role: '会计', content: '体重减轻了3公斤，没有刻意节食' },
       { id: 8, name: '陈先生', role: '司机', content: '排毒效果很好，感觉身体轻盈了很多' },
       { id: 9, name: '褚女士', role: '销售', content: '口气问题改善了，与人交流更自信了' },
       { id: 10, name: '卫先生', role: '厨师', content: '吃油腻食物后不再有罪恶感，消化变好了' },
       { id: 11, name: '蒋女士', role: '编辑', content: '排便规律了，不再有腹胀感' },
       { id: 12, name: '沈先生', role: '建筑师', content: '推荐给了同事，大家都说效果不错' },
       { id: 13, name: '韩女士', role: '美容师', content: '顾客都说我皮肤变好了，这是最好的广告' },
       { id: 14, name: '杨先生', role: '律师', content: '工作忙碌经常熬夜，排毒后精力更充沛' },
       { id: 15, name: '朱女士', role: '家庭主妇', content: '全家都在用，孩子便秘问题也解决了' },
     ];
  
  return (
    <section id="testimonials" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            客户<span className="bg-gradient-to-r from-[#c45332] to-[#a34328] bg-clip-text text-transparent">评价</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            听听我们的用户怎么说，真实反馈来自各行各业的使用者。
          </motion.p>
        </div>
        
         {/* 最佳评价区域 */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {topTestimonials.map((testimonial, index) => (
             <motion.div 
               key={index}
               className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl border-2 border-green-500 dark:border-green-600 relative"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
             >
               <div className="absolute -top-3 left-6 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                 最佳评价
               </div>
               <div className="flex items-center gap-2 text-yellow-400 mb-4">
                 {[...Array(5)].map((_, i) => (
                   <i key={i} className={`fa-solid fa-star ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}></i>
                 ))}
               </div>
               <p className="text-gray-600 dark:text-gray-300 mb-6 italic">"{testimonial.content}"</p>
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-green-500">
                   <img 
                     src={testimonial.avatar} 
                     alt={testimonial.name} 
                     className="w-full h-full object-cover"
                   />
                 </div>
                 <div>
                   <div className="font-medium">{testimonial.name}</div>
                   <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</div>
                 </div>
               </div>
             </motion.div>
           ))}
         </div>
         
         {/* 滚动小评价区域 */}
         <div className="mt-16">
           <h3 className="text-2xl font-bold mb-6 text-center">用户真实评价</h3>
           <div className="relative overflow-hidden">
                <div className="flex animate-scroll whitespace-nowrap py-4 px-2 gap-4 transform-gpu">
                 {[...scrollingTestimonials, ...scrollingTestimonials].map((testimonial, index) => (
                   <div 
                     key={`${testimonial.id}-${index % scrollingTestimonials.length}`} 
                     className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow-md w-[280px] flex-shrink-0"
                   >
                     <div className="flex items-start gap-3">
                       <div className="text-green-500">
                         <i class="fa-solid fa-quote-left"></i>
                       </div>
                       <div>
                         <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">"{testimonial.content}"</p>
                         <div className="font-medium text-sm">{testimonial.name}</div>
                         <div className="text-xs text-gray-500 dark:text-gray-400">{testimonial.role}</div>
                       </div>
                     </div>
                   </div>
                 ))}
               </div>
             
             {/* 渐变遮罩 */}
             <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-white dark:from-gray-900 to-transparent pointer-events-none"></div>
             <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-white dark:from-gray-900 to-transparent pointer-events-none"></div>
           </div>
         </div>
        
        <div className="mt-16 bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 flex justify-center">
              <div className="text-5xl font-bold text-[#c45332] dark:text-[#c45332]">98%</div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-4">用户满意度</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
我们始终将用户体验放在首位，不断优化产品核心功效和服务质量，赢得了广大用户的信赖和好评。
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#c45332] dark:text-[#c45332]">1000+</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">活跃用户</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#c45332] dark:text-[#c45332]">50+</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">行业应用</div>
                  </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#c45332] dark:text-[#c45332]">12</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">产品奖项</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#c45332] dark:text-[#c45332]">3</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">版本迭代</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}