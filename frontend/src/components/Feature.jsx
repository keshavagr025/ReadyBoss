import React from 'react';
import { FaUpload, FaChartLine, FaUserCheck } from 'react-icons/fa';

const Feature = () => {
  return (
    <section
      id="features"
      className="bg-white py-16 px-6 md:px-12 flex flex-col items-center justify-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6 text-center">
        Powerful <span className="text-gray-800">Features</span>
      </h2>
      <p className="text-gray-600 text-lg md:text-xl max-w-2xl text-center mb-12">
        ResumeTracker brings everything you need to manage your job applications efficiently in one place.
      </p>

      <div className="grid gap-10 grid-cols-1 md:grid-cols-3 w-full max-w-6xl">
        <div className="bg-blue-50 p-6 rounded-2xl shadow hover:shadow-lg transition duration-300 text-center">
          <FaUpload className="text-4xl text-blue-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Resume Upload</h3>
          <p className="text-gray-600">
            Quickly upload your resume files and keep them organized.
          </p>
        </div>

        <div className="bg-blue-50 p-6 rounded-2xl shadow hover:shadow-lg transition duration-300 text-center">
          <FaChartLine className="text-4xl text-blue-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
          <p className="text-gray-600">
            Monitor your application statuses and get performance insights.
          </p>
        </div>

        <div className="bg-blue-50 p-6 rounded-2xl shadow hover:shadow-lg transition duration-300 text-center">
          <FaUserCheck className="text-4xl text-blue-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Smart Recommendations</h3>
          <p className="text-gray-600">
            Receive tailored tips to enhance your resume and applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Feature;
