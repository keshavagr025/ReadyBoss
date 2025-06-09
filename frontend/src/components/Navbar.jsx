import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollItems = [
    {
      label: (
        <motion.h1
          className="text-3xl font-semibold text-blue-600 cursor-default"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
            textShadow: "0 0 6px #3b82f6, 0 0 12px #60a5fa",
          }}
          transition={{ duration: 1 }}
          whileHover={{
            scale: 1.05,
            textShadow: "0 0 10px #2563eb, 0 0 18px #3b82f6",
          }}
        >
          About
        </motion.h1>
      ),
      id: "about",
    },
    {
      label: (
        <motion.h1
          className="text-3xl font-semibold text-blue-600 cursor-default"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
            textShadow: "0 0 6px #3b82f6, 0 0 12px #60a5fa",
          }}
          transition={{ duration: 1 }}
          whileHover={{
            scale: 1.05,
            textShadow: "0 0 10px #2563eb, 0 0 18px #3b82f6",
          }}
        >
          Feature
        </motion.h1>
      ),
      id: "features",
    },
    {
      label: (
        <motion.h1
          className="text-3xl font-semibold text-blue-600 cursor-default"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
            textShadow: "0 0 6px #3b82f6, 0 0 12px #60a5fa",
          }}
          transition={{ duration: 1 }}
          whileHover={{
            scale: 1.05,
            textShadow: "0 0 10px #2563eb, 0 0 18px #3b82f6",
          }}
        >
          Testimonials
        </motion.h1>
      ),
      id: "testimonials",
    },
  ];

  return (
    <nav
      className="bg-white shadow-md fixed w-full z-50 top-0 left-0 font-sans"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.h1
          className="text-3xl font-semibold text-red-600 cursor-default"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            textShadow: "0 0 8px #f87171, 0 0 15px #f87171",
          }}
          transition={{ duration: 0.8 }}
          whileHover={{
            scale: 1.1,
            textShadow: "0 0 12px #ef4444, 0 0 20px #ef4444",
          }}
        >
          ReadyBoss
        </motion.h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-10 text-gray-700 font-medium items-center">
          {scrollItems.map((item) => (
            <li key={item.label}>
              <ScrollLink
                to={item.id}
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer text-gray-700 hover:text-primary-dark transition-colors font-semibold"
              >
                {item.label}
              </ScrollLink>
            </li>
          ))}
          <li>
            <RouterLink
              to="/signup"
              className="text-primary-dark hover:text-primary-light transition-colors font-semibold"
            >
              <motion.h1
                className="text-3xl font-semibold text-blue-600 cursor-default"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  textShadow: "0 0 6px #3b82f6, 0 0 12px #60a5fa",
                }}
                transition={{ duration: 1 }}
                whileHover={{
                  scale: 1.05,
                  textShadow: "0 0 10px #2563eb, 0 0 18px #3b82f6",
                }}
              >
                Sign Up
              </motion.h1>
            </RouterLink>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="p-2 rounded-md text-primary-dark hover:bg-primary-light hover:text-white transition"
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

      {/* Mobile Menu Dropdown */}
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
                key={item.label}
                className="px-6 py-3 hover:bg-primary-light hover:text-white rounded-md transition cursor-pointer"
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
            <li className="px-6 py-3 hover:bg-primary-light hover:text-white rounded-md transition cursor-pointer">
              <RouterLink
                to="/signup"
                className="block font-semibold"
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
