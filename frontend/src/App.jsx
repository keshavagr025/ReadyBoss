// App.jsx
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
import UploadResume from "./components/UploadResume/UploadResume";
import ResumeAnalyzer from "./components/UploadResume/ResumeAnalyzer";
import ChatBot from "./components/ChatBot";

// Home Page Component
const Home = ({ isLoggedIn }) => (
  <>
    <Navbar />
    <Hero />
    <About />
    <Feature />
    <Testimonials />
    <Footer />
    <ChatBot/>
    {isLoggedIn && <UploadResume />}
  </>
);

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Call this after successful login/signup to set login state
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <Routes>
        {/* 🛠️ Pass the isLoggedIn prop here */}
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />

        {/* You can pass handleLogin as prop if SignUp/Login need it */}
        <Route path="/signup" element={<SignUp onLogin={handleLogin} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
         <Route path="/upload-resume" element={<UploadResume />} />
         <Route path="/chatbot"element={<ChatBot/>}/>
         
{/* <Route path="/upload-resume-analyzer" element={<ResumeAnalyzer />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
