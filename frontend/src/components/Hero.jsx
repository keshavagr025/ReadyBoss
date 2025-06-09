import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-100 to-white py-20" id="hero">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-700 leading-tight mb-6">
          Build Your Professional Resume in Minutes
        </h1>
        <p className="text-gray-600 text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
          ResumeTracker helps you create stunning, ATS-friendly resumes with AI-powered suggestions and easy tracking tools.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/signup"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-100 transition duration-300"
          >
            Already have an account?
          </Link>
        </div>
      </div>

      {/* Optional: Hero Image */}
      <div className="mt-12 flex justify-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
          alt="Resume Illustration"
          className="w-80 sm:w-[400px]"
        />
      </div>
    </section>
  );
};

export default Hero;
