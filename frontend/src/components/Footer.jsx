import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#ffe5e5] via-[#e0f7ff] to-[#ffffff] text-gray-900 pt-20 px-8 relative overflow-hidden">

      {/* Rotating Ball (Icy Blue) */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="absolute top-[-40px] right-[-40px] w-36 h-36 bg-blue-300 opacity-10 rounded-full z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10">

        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-red-700 mb-4">ResumeTracker</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            A perfect blend of power and calm — manage your resumes confidently and smoothly.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold text-blue-700 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-red-600 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-red-600 transition">About</Link></li>
            <li><Link to="/signup" className="hover:text-red-600 transition">Sign Up</Link></li>
            <li><Link to="/login" className="hover:text-red-600 transition">Login</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-blue-700 mb-4">Contact</h3>
          <div className="text-sm text-gray-700 space-y-2">
            <p className="flex items-center gap-2"><FaEnvelope className="text-red-600" /> support@resumetracker.com</p>
            <p>Phone: +91 9876543210</p>
          </div>
        </div>

        {/* Email Subscription */}
        <div>
          <h3 className="text-lg font-semibold text-blue-700 mb-4">Get Updates</h3>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md border border-blue-300 focus:ring-2 focus:ring-red-400 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-red-600 text-white py-2 rounded-md font-medium hover:bg-red-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Quote */}
      <div className="mt-12 text-center font-medium italic text-lg text-blue-800">
        “Let your passion burn bright, and your strategy stay cool.” 
      </div>

      {/* Bottom Line */}
      <div className="mt-8 text-center text-sm text-gray-600 border-t border-red-200 pt-6">
        © {new Date().getFullYear()} ResumeTracker. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
