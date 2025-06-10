import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-10 px-6 mt-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold mb-3">ReadyBoss</h2>
          <p className="text-sm">Revolutionizing recruitment with AI-powered automation.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#features" className="hover:underline">Features</a></li>
            <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
            <li><Link to="/signup" className="hover:underline">Signup</Link></li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
          <p className="text-sm">Email: support@aiats.com</p>
          <p className="text-sm">Phone: +91 9876543210</p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-yellow-300">LinkedIn</a>
            <a href="#" className="hover:text-yellow-300">Twitter</a>
            <a href="#" className="hover:text-yellow-300">GitHub</a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-300 mt-10">
        © {new Date().getFullYear()} ReadyBoss. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
