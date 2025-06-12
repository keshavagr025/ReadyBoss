import React from "react";
import ResumeAnalyzer from "./UploadResume/ResumeAnalyzer";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#ffe5e5] via-[#d6f4ff] to-[#ffffff] text-gray-900 min-h-screen py-24 px-6">
     {/* SOFT BACKGROUND BLOBS */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-pink-200 opacity-20 rounded-full blur-[150px] z-0 pointer-events-none"></div>
      <div className="absolute bottom-[-15%] right-[-10%] w-[500px] h-[500px] bg-blue-200 opacity-20 rounded-full blur-[150px] z-0 pointer-events-none"></div>
     

      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-20 relative z-10">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl text-center lg:text-left space-y-6"
        >
          <h1 className="text-5xl font-extrabold leading-tight">
            <span className="text-[#b30000] bg-gradient-to-r from-[#b30000] to-[#ff4d4d] bg-clip-text text-transparent">
              AI-powered resume
            </span>
            <br />
            <span className="text-[#003366] drop-shadow-md">
              tracking & optimization
            </span>
          </h1>

          <div className="flex items-center gap-12 mt-4 text-lg font-semibold">
            <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} glareEnable={true} glareMaxOpacity={0.15} scale={1.03}>
              <div className="bg-white bg-opacity-80 backdrop-blur-md rounded-xl shadow-lg px-6 py-4">
                <p className="text-3xl text-red-600 font-bold">90K+</p>
                <p className="text-gray-800 text-base mt-1">Successful Applications</p>
              </div>
            </Tilt>

            <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} glareEnable={true} glareMaxOpacity={0.15} scale={1.03}>
              <div className="bg-white bg-opacity-80 backdrop-blur-md rounded-xl shadow-lg px-6 py-4">
                <p className="text-3xl text-blue-600 font-bold">99%</p>
                <p className="text-gray-800 text-base mt-1">LLM Accuracy Rate</p>
              </div>
            </Tilt>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-800">
              INTELLIGENT ANALYSIS <span className="text-red-500">*</span>
            </h3>
            <p className="text-gray-800 text-base leading-relaxed font-sans">
              Our advanced LLM-powered platform analyzes your resume against job descriptions with unmatched precision.
              Get personalized recommendations, keyword optimization, and intelligent insights to dramatically improve
              your chances of landing interviews and tracking application success.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            {["LLM-Powered Analysis", "NLP Keyword Matching", "Smart Tracking System"].map((tag, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.2 }}
                className={`px-4 py-1.5 text-sm rounded-full font-semibold text-white ${
                  i === 0 ? "bg-gradient-to-r from-red-500 to-pink-400" :
                  i === 1 ? "bg-gradient-to-r from-blue-500 to-indigo-400" :
                  "bg-gradient-to-r from-purple-500 to-fuchsia-400"
                } shadow-md`}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="w-full max-w-2xl"
        >
          <div className="p-6 rounded-3xl  bg-opacity-90 backdrop-blur-lg">
            <ResumeAnalyzer />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
