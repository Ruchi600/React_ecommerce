import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  // console.log("hii");
  return (
     <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> 
      </Routes>
    </>
  );
};

export default App;
