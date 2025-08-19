import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import FAQ from "@/pages/FAQ";
import AfterSales from "@/pages/AfterSales";
import WarrantyPolicy from "@/pages/WarrantyPolicy";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import ContactUs from "@/pages/ContactUs";
import HelpCenter from "@/pages/HelpCenter";
import { useState } from "react";
import { AuthContext } from '@/contexts/authContext';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, logout }}
    >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/after-sales" element={<AfterSales />} />
          <Route path="/warranty-policy" element={<WarrantyPolicy />} />
           <Route path="/privacy-policy" element={<PrivacyPolicy />} />
           <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/other" element={<div className="text-center text-xl">Other Page - Coming Soon</div>} />
        </Routes>
    </AuthContext.Provider>
  );
}
