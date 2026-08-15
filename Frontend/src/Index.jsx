import React from 'react'
import HomePage from "./Home/HomePage";
import Signup from "./Signup/Signup"
import AboutPage from "./About/AboutPage"
import ProductsPage from "./Products/ProductsPage"
import PricingPage from "./Pricing/PricingPage"
import SupportPage from "./Support/SupportPage"
import Navbar from "./Home/Navbar";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Index = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Products" element={<ProductsPage />} />
          <Route path="/Pricing" element={<PricingPage />} />
          <Route path="/Support" element={<SupportPage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default Index