import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Feature from "./components/Feature";
import Testimonials from "./components/Testimonials";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Hero from "./components/Hero";

const Home = () => (
  <>
    <Navbar />
    <Hero />
    <About />
    <Feature />
    <Testimonials />

  </>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        
      </Routes>
    </Router>
  );
};

export default App;
