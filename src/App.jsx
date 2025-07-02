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
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import Dashboard from "./pages/Dashboard";


const App = () => {
  // console.log("hii");
  return (
    <div className="page-wrapper">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-success" element={<OrderSuccess />} />
\         <Route path="/dashboard" element={<Dashboard />} />

        </Routes>
      </main>
      <Footer />
    </div>
  );
};
export default App;
