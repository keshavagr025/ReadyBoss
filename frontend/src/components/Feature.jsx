import React from 'react';
import {
  FaUpload,
  FaChartLine,
  FaUserCheck,
  FaMagic,
  FaClipboardCheck,
  FaLightbulb,
} from 'react-icons/fa';

const Feature = () => {
  const features = [
    {
      icon: <FaUpload className="text-4xl text-red-500 mx-auto mb-4 drop-shadow" />,
      title: 'Resume Upload',
      description: 'Quickly upload and manage multiple resume versions in one place.',
    },
    {
      icon: <FaChartLine className="text-4xl text-red-500 mx-auto mb-4 drop-shadow" />,
      title: 'Track Progress',
      description: 'Visualize your application journey and job status in real-time.',
    },
    {
      icon: <FaUserCheck className="text-4xl text-red-500 mx-auto mb-4 drop-shadow" />,
      title: 'Smart Recommendations',
      description: 'AI-driven tips to tailor your resume for each job posting.',
    },
    {
      icon: <FaMagic className="text-4xl text-red-500 mx-auto mb-4 drop-shadow" />,
      title: 'One-Click Enhancement',
      description: 'Instantly improve your resume formatting and keyword alignment.',
    },
    {
      icon: <FaClipboardCheck className="text-4xl text-red-500 mx-auto mb-4 drop-shadow" />,
      title: 'Job Matching',
      description: 'Find jobs that match your skills and experience automatically.',
    },
    {
      icon: <FaLightbulb className="text-4xl text-red-500 mx-auto mb-4 drop-shadow" />,
      title: 'AI Career Insights',
      description: 'Get personalized career growth suggestions based on your goals.',
    },
  ];

  return (
    <section
      id="features"
      className="bg-gradient-to-br from-[#e7f3ff] via-[#f0faff] to-[#d9ecff] py-20 px-6 md:px-12 text-gray-800"
    >
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-4xl md:text-5xl font-bold text-red-600 mb-4 text-center">
          Powerful <span className="text-blue-800">Features</span>
        </h2>
        <p className="text-blue-700 text-lg md:text-xl max-w-3xl text-center mb-12">
          ResumeTracker gives you an intelligent job application workflow—streamlined, smart, and ready to scale your career.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white hover:bg-blue-50 p-6 rounded-2xl border border-blue-200 shadow-md hover:shadow-lg transition duration-300 text-center"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold text-red-600 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
