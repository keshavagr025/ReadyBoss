import React from 'react';
import { motion } from "framer-motion";
import Tilt from 'react-parallax-tilt';
import {
  FaUpload, FaChartLine, FaUserCheck, FaMagic, FaClipboardCheck, FaLightbulb
} from 'react-icons/fa';

const Feature = () => {
  const features = [
    {
      icon: <FaUpload className="text-4xl text-red-500 mx-auto mb-4 drop-shadow" />,
      title: 'AI Resume Analysis',
      description: 'Our LLM analyzes your resume structure, content, and formatting to ensure ATS compatibility and professional presentation.',
    },
    {
      icon: <FaChartLine className="text-4xl text-red-500 mx-auto mb-4 drop-shadow" />,
      title: 'Smart Keyword Extraction',
      description: 'Advanced NLP algorithms identify key skills and qualifications from job descriptions to help you tailor your resume for each application.',
    },
    {
      icon: <FaUserCheck className="text-4xl text-red-500 mx-auto mb-4 drop-shadow" />,
      title: 'Real-time LLM Feedback',
      description: 'Get instant, AI-generated feedback on your resume with detailed scoring and personalized improvement suggestions.',
    },
    {
      icon: <FaMagic className="text-4xl text-red-500 mx-auto mb-4 drop-shadow" />,
      title: 'Semantic Matching',
      description: 'Our AI goes beyond keyword matching to understand the semantic meaning of your experience and how it aligns with job requirements.',
    },
    {
      icon: <FaClipboardCheck className="text-4xl text-red-500 mx-auto mb-4 drop-shadow" />,
      title: 'Parses Resume',
      description: 'Extracts structured data from PDFs, DOCs, and raw text using intelligent parsing.',
    },
    {
      icon: <FaLightbulb className="text-4xl text-red-500 mx-auto mb-4 drop-shadow" />,
      title: 'Intelligent Suggestions',
      description: 'Get AI-generated, actionable suggestions to improve your resume’s content, formatting, and impact for each specific job application.',
    },
  ];

  return (
    <section id="features" className="bg-gradient-to-br from-[#f0f5ff] via-[#f9fcff] to-[#e9f0ff] py-20 px-6 md:px-12 text-gray-800">
      <div className="flex flex-col items-center justify-center">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-red-600 mb-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
        
          Powerful <span className="text-blue-800">AI Features</span>
        </motion.h2>

        <motion.p 
          className="text-blue-700 text-lg md:text-xl max-w-3xl text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          ResumeTracker gives you an intelligent job application workflow—streamlined, smart, and ready to scale your career.
        </motion.p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.7 }}
            >
              <Tilt glareEnable={true} glareMaxOpacity={0.2} scale={1.05} transitionSpeed={1000}>
                <div className="bg-white bg-opacity-80 backdrop-blur-lg p-6 rounded-2xl border border-blue-200 shadow-2xl hover:shadow-blue-300 transition duration-300 text-center">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-red-600 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
