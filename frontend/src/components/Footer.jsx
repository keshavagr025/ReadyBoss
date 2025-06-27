import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const quotes = [
  "Dream big. Start small. Act now.",
  "Discipline is the bridge between goals and accomplishment.",
  "Stay focused and never give up.",
  "Let your passion burn bright, and your strategy stay cool.",
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones."
];

const Footer = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, []);

  return (
    <footer className="bg-gradient-to-tr from-[#0f2027] via-[#4296b2] to-[#2c5364] text-white pt-20 px-8 relative overflow-hidden rounded-t-xl">

      {/* Rotating Ball Animation */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        className="absolute top-[-50px] left-[-50px] w-40 h-40 bg-cyan-300 opacity-10 rounded-full z-0"
      />

      {/* Grid Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-cyan-300 mb-4">ReadyBoss</h2>
          <p className="text-sm text-gray-200 leading-relaxed">
            Empowering your job hunt with confidence and clarity.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-cyan-200 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-red-400 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-red-400 transition">About</Link></li>
            <li><Link to="/signup" className="hover:text-red-400 transition">Sign Up</Link></li>
            <li><Link to="/login" className="hover:text-red-400 transition">Login</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-cyan-200 mb-4">Contact</h3>
          <div className="text-sm text-gray-200 space-y-2">
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-red-400" /> support@resumetracker.com
            </p>
            <p>Phone: +91 9876543210</p>
          </div>
        </div>

        {/* Email Subscription */}
        <div>
          <h3 className="text-lg font-semibold text-cyan-200 mb-4">Get Updates</h3>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 rounded-md bg-white text-gray-900 border-none shadow focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white py-2 rounded-md font-medium transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Motivational Quote */}
      <div className="mt-12 text-center font-medium italic text-cyan-100 text-lg">
        “{quote}”
      </div>

      {/* Bottom Note */}
      <div className="mt-6 text-center text-xs text-gray-300 border-t border-gray-600 pt-4">
        © {new Date().getFullYear()} ReadyBoss. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

