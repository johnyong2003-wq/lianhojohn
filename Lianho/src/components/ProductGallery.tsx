import { motion } from 'framer-motion';

export default function ProductGallery() {
  return (
    <section id="ingredients" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            产品<span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">成分与功效</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            精选9种优质成分，科学配比，协同作用，为您带来全面的健康益处。
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              id: 1,
              imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Nutriose%20soluble%20fiber%20ingredient&sign=b45a061f0f55ecfccc247e7688bfbb11",
              title: "Nutriose®可溶性纤维",
              subtitle: "专利膳食纤维",
              description: "法国罗盖特专利成分，85%高纯度水溶性膳食纤维，低血糖指数，促进肠道蠕动，帮助排毒。",
              features: ["法国专利", "85%纯度", "低GI值"]
            },
            {
              id: 2,
              imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Vitacel%20wheat%20fiber%20ingredient&sign=1a3807cbd5e570c8c0ac5245d8bf6782",
              title: "Vitacel小麦纤维",
              subtitle: "专利膳食纤维",
              description: "德国JRS公司专利产品，97%超高纯度纤维，具有良好吸水能力，增加粪便体积，促进肠道健康。",
              features: ["德国专利", "97%纯度", "吸水膨胀"]
            },
            {
              id: 3,
              imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=DigeZyme%20digestive%20enzymes&sign=d7601eb1f40a3b7dfd4152ed5ecbfdae",
              title: "DigeZyme®复合酶",
              subtitle: "专利消化酶",
              description: "含五种消化酶（淀粉酶、蛋白酶、脂肪酶、纤维素酶、乳糖酶），帮助分解碳水化合物、蛋白质和脂肪。",
              features: ["多种酶系", "促进消化", "提高吸收"]
            },
            {
              id: 4,
              imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Bifidobacterium%20BB536%20probiotic&sign=0d9ddc0796ae67319912207cdd49f5b8",
              title: "双歧杆菌BB536",
              subtitle: "益生菌",
              description: "日本进口活性益生菌，调节肠道菌群平衡，增强免疫力，改善消化吸收，40年安全使用历史。",
              features: ["日本专利", "活性稳定", "免疫调节"]
            },
            {
              id: 5,
              imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Psyllium%20seed%20husk%20powder&sign=53668086b78beca5055eb7b4afbd3e7b",
              title: "圆苞车前子壳粉",
              subtitle: "天然纤维",
              description: "优质水溶性纤维来源，吸水膨胀形成凝胶体，促进肠道蠕动，帮助维持正常排便功能。",
              features: ["高纤维", "吸水膨胀", "肠道健康"]
            },
            {
              id: 6,
              imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Wheatgrass%20powder%20ingredient&sign=1c45a2d41d5b18755c89172474e2f8b8",
              title: "小麦草粉",
              subtitle: "超级食物",
              description: "富含叶绿素、维生素、矿物质和抗氧化酶SOD，帮助净化血液，促进新陈代谢，增强身体活力。",
              features: ["叶绿素", "SOD酶", "净化血液"]
            },
            {
              id: 7,
              imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Cassia%20seed%20extract&sign=f6daeedc202e32a38d782ca32329dff8",
              title: "决明子提取物",
              subtitle: "传统草本",
              description: "传统草本精华，促进肠道蠕动，帮助维护肠道健康，缓解便秘，自古以来用于养生保健。",
              features: ["草本精华", "促进蠕动", "肠道调理"]
            },
            {
              id: 8,
              imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Passion%20fruit%20powder%20ingredient&sign=c4a831a935d08fcd7618b5ff47a74022",
              title: "百香果粉",
              subtitle: "天然水果",
              description: "富含维生素C、膳食纤维和抗氧化物质，提供天然果香，增强产品口感，同时补充营养。",
              features: ["天然香味", "维生素C", "抗氧化"]
            },
            {
              id: 9,
              imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Vitamin%20C%20ascorbic%20acid&sign=b9a5bf60fa314ff26c39acb947eb1769",
              title: "维生素C",
              subtitle: "抗氧化剂",
              description: "增强免疫力，促进胶原蛋白合成，抗氧化，帮助铁吸收，保护细胞免受自由基损伤。",
              features: ["免疫增强", "抗氧化", "促进吸收"]
            }
          ].map((item, index) => (
            <motion.div 
              key={item.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white w-full">
                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.subtitle}</p>
                  </div>
                </div>
              </div>
              <div className="p-5 flex-grow flex flex-col">
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{item.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {item.features.map((feature, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
         
      </div>
    </section>
  );
}