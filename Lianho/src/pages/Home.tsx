import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProductFeatures from '@/components/ProductFeatures';
import ProductGallery from '@/components/ProductGallery';
import Testimonials from '@/components/Testimonials';
import WhatsAppButton from '@/components/WhatsAppButton';
import ProductCertifications from '@/components/ProductCertifications';
import Footer from '@/components/Footer';

export default function Home() {
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
      <main>
         <HeroSection />
         <ProductFeatures />
         <ProductCertifications />
        <ProductGallery />
        <Testimonials />
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}