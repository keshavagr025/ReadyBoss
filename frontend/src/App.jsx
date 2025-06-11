
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Feature from "./components/Feature";
import Testimonials from "./components/Testimonials";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const Home = ({ isLoggedIn }) => (
  <>
    <Navbar />
    <Hero />
    <About />
    <Feature />
    <Testimonials />
    <Footer/>

  </>
);

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Ye function signup/login success ke baad call hoga to update login state
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
