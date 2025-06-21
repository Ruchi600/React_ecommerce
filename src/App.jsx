import React from 'react';
import { Routes, Route } from 'react-router-dom';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"; 
import Header from './Components/Header';
import Home from './pages/Home';
// import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductDetails from "./pages/ProductDetails";
import Footer from "./Components/Footer"; // 👈 import footer




const App = () => {
  // console.log("hii");
  return (
     <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> 
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
        <Footer />
    </>
  );
};

export default App;
