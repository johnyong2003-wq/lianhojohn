export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 text-xl font-bold text-white mb-4">
              <img src="https://lf-code-agent.coze.cn/obj/x-ai-cn/245488055042/attachment/未命名(1)(5)_20250814121305.png" alt="连何国际集团" className="h-8 w-auto" />
              连何国际集团
            </div>
            <p className="text-sm text-gray-400 mb-4">
              创新科技，品质生活。我们致力于为您提供最优质的产品和服务。
            </p>
             <div className="flex space-x-4">
               <a href="https://www.facebook.com/iamjohn.3022/" className="text-gray-400 hover:text-white transition-colors">
                <i class="fa-brands fa-facebook"></i>
              </a>

            </div>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">快速链接</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">关于我们</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">产品特性</a></li>
               <li><a href="#ingredients" className="text-gray-400 hover:text-white transition-colors">产品成分与功效</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">客户评价</a></li>
               <li><a href="/contact-us" className="text-gray-400 hover:text-white transition-colors">联系我们</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">支持</h4>
             <ul className="space-y-2 text-sm">
              <li><a href="/help-center" className="text-gray-400 hover:text-white transition-colors">帮助中心</a></li>
              <li><a href="/faq" className="text-gray-400 hover:text-white transition-colors">常见问题</a></li>
              <li><a href="/after-sales" className="text-gray-400 hover:text-white transition-colors">售后服务</a></li>
              <li><a href="/warranty-policy" className="text-gray-400 hover:text-white transition-colors">保修政策</a></li>
              <li><a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">隐私政策</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">联系我们</h4>
            <ul className="space-y-2 text-sm">

              <li className="flex items-center gap-2">
                <i class="fa-solid fa-phone"></i>
                 <span className="text-gray-400">+60102491818</span>
              </li>
              <li className="flex items-center gap-2">
                <i class="fa-solid fa-envelope"></i>
                 <span className="text-gray-400">johnyong2003@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} 连何国际集团. 保留所有权利。</p>
        </div>
      </div>
    </footer>
  );
}