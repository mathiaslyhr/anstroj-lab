import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
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


    </Routes>
  )
}
