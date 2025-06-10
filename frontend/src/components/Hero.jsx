import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { UploadCloud } from "lucide-react";

const Hero = () => {
  const navigate = useNavigate();

  const handleUploadClick = () => {
    navigate("/upload-resume");
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-purple-100 py-20 px-4" id="hero">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-700 leading-tight mb-4">
            Supercharge Your Career with <span className="text-purple-600">ReadyBoss</span>
          </h1>
          <p className="text-gray-700 text-lg sm:text-xl mb-8">
            Upload your resume and let AI handle the rest — instant enhancements, job targeting, and professional formatting made easy.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <button
              onClick={handleUploadClick}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg rounded-xl font-semibold shadow-lg hover:shadow-xl hover:brightness-110 active:scale-[0.98] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              <UploadCloud size={20} className="mb-0.5" />
              Upload Resume
            </button>

            <Link
              to="/signup"
              className="px-6 py-3 text-lg bg-white border border-blue-600 text-blue-600 rounded-xl shadow hover:bg-blue-50 transition"
            >
              Create Account
            </Link>

            <Link
              to="/login"
              className="px-6 py-3 text-lg text-gray-600 hover:underline"
            >
              Already have an account?
            </Link>
          </div>
        </div>

        {/* Right Hero Image */}
        <div className="relative w-full max-w-md mx-auto">
          <div className="bg-white p-4 rounded-3xl shadow-xl border border-blue-100">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
              alt="Resume Illustration"
              className="w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
