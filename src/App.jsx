import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ScentLabFlow from "./components/ScentLabFlow";
import SavedProfilePage from "./pages/SavedProfilePage";

import ContactPage from "./components/ContactPage";
import FAQPage from "./components/FAQPage";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/om-os" element={<AboutPage />} />
      <Route path="/produkter" element={<ProductsPage />} />
      <Route path="/produkter/:slug" element={<ProductDetailPage />} />
      <Route path="/lab" element={<ScentLabFlow />} />
      <Route path="/profil/:id" element={<SavedProfilePage />} />

      <Route path="/kontakt" element={<ContactPage />} />
      <Route path="/faq" element={<FAQPage />} />
    </Routes>
  );
}
