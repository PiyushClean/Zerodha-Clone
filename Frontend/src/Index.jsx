import React ,  { useState , useEffect } from 'react'
import axios from 'axios'

import HomePage from "./Home/HomePage"
import Signup from "./Signup/Signup"
import Login from "./Signup/Login"
import AboutPage from "./About/AboutPage"
import ProductsPage from "./Products/ProductsPage"
import PricingPage from "./Pricing/PricingPage"
import SupportPage from "./Support/SupportPage"
import Navbar from "./Home/Navbar";
import Footer from "./Footer";
import NotFound from "./NotFound"
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Index = () => {

  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/check-auth", {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.authenticated) {
          window.location.href = "http://localhost:3001/";
        } else {
          setCheckingAuth(false);
        }
      })
      .catch(() => {
        setCheckingAuth(false);
      });
  }, []);

  if (checkingAuth) {
    return <div>Loading...</div>
  }


  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Products" element={<ProductsPage />} />
          <Route path="/Pricing" element={<PricingPage />} />
          <Route path="/Support" element={<SupportPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default Index