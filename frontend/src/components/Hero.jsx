import React from "react";
import ResumeAnalyzer from "./UploadResume/ResumeAnalyzer";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-[#ffe5e5] via-[#d6f4ff] to-[#ffffff] text-gray-900 min-h-screen py-24 px-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-20">

        {/* LEFT CONTENT */}
        <div className="max-w-xl text-center lg:text-left space-y-6">
         <h1 className="text-5xl font-extrabold leading-tight">
  <span className="text-[#b30000] drop-shadow-md">AI-powered resume</span>
  <br />
  <span className="text-[#003366] drop-shadow-md">tracking & optimization</span>
</h1>


          <div className="flex items-center gap-12 mt-4 text-lg font-semibold">
            <div>
              <p className="text-3xl text-red-600 font-bold">90K+</p>
              <p className="text-gray-800 text-base mt-1">Successful Applications</p>
            </div>
            <div>
              <p className="text-3xl text-blue-600 font-bold">99%</p>
              <p className="text-gray-800 text-base mt-1">LLM Accuracy Rate</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-800">
              INTELLIGENT ANALYSIS <span className="text-red-500">*</span>
            </h3>
            <p className="text-gray-800 text-base leading-relaxed">
              Our advanced LLM-powered platform analyzes your resume against job descriptions with unmatched precision.
              Get personalized recommendations, keyword optimization, and intelligent insights to dramatically improve
              your chances of landing interviews and tracking application success.
            </p>
          </div>

          {/* Feature tags */}
          <div className="flex flex-wrap gap-3 pt-2">
            <span className="bg-red-500 px-4 py-1.5 text-sm rounded-full font-semibold text-white">LLM-Powered Analysis</span>
            <span className="bg-blue-500 px-4 py-1.5 text-sm rounded-full font-semibold text-white">NLP Keyword Matching</span>
            <span className="bg-purple-500 px-4 py-1.5 text-sm rounded-full font-semibold text-white">Smart Tracking System</span>
          </div>
        </div>

        {/* RIGHT: RESUME ANALYZER */}
        <div className="w-full max-w-2xl">
          <ResumeAnalyzer />
        </div>
      </div>
    </section>
  );
};

export default Hero;
