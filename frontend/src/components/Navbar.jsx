import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollItems = [
    {
      label: "ABOUT",
      id: "about",
    },
    {
      label: "FEATURES",
      id: "features",
    },
    {
      label: "TESTIMONIALS",
      id: "testimonials",
    },
  ];

  return (
    <nav
      className="bg-blue-50 shadow-md fixed w-full z-50 top-0 left-0 font-sans"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between "> 
        {/* Logo */}
        <motion.img
          src={logo}
          alt="Logo"
          className="h-10 "
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />

        {/* Desktop Nav */}
          {/* Center Links */}
        <ul className="hidden md:flex space-x-10 items-center mx-auto">
          {scrollItems.map((item) => (
            <li key={item.id}>
              <ScrollLink
                to={item.id}
                smooth={true}
                duration={500}
                offset={-80}
                className="text-lg text-purple-700 hover:text-black font-sans transition-colors cursor-pointer"
              >
                {item.label}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Right Side Sign Up */}
        <div className="hidden md:flex items-center">
          <RouterLink to="/signup">
            <motion.button
              className="px-4 py-2 rounded-lg bg-purple-500 text-white font-semibold shadow-md hover:bg-purple-600 hover:shadow-lg transition"
              whileHover={{ scale: 1.05 }}
            >
              Sign Up
            </motion.button>
          </RouterLink>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="p-2 rounded-md text-purple-700 hover:bg-purple-100 hover:text-purple-900 transition"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Backdrop Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-20 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="md:hidden fixed top-16 right-4 w-56 bg-white rounded-lg shadow-lg z-50 flex flex-col py-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {scrollItems.map((item) => (
              <li
                key={item.id}
                className="px-3 py-3 hover:bg-purple-100 text-purple-700 hover:text-purple-900 rounded-md transition cursor-pointer"
              >
                <ScrollLink
                  to={item.id}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="block font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </ScrollLink>
              </li>
            ))}
            <li className="px-6 py-3">
              <RouterLink
                to="/signup"
                className="block text-center bg-purple-500 text-white px-4 py-2 rounded-md font-semibold shadow hover:bg-purple-600 transition"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </RouterLink>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
