import React from 'react';

const About = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 flex items-center justify-center px-6 py-16">
      <div className="max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-6">
          About <span className="text-gray-800">ResumeTracker</span>
        </h2>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
          ResumeTracker is your smart assistant for tracking, managing, and optimizing your job applications. 
          Whether you're a student, a working professional, or a recruiter, we simplify the resume journey for you.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white shadow rounded-2xl hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-blue-500 mb-2">Simple UI</h3>
            <p className="text-gray-600">Clean and intuitive design focused on ease of use.</p>
          </div>

          <div className="p-6 bg-white shadow rounded-2xl hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-blue-500 mb-2">Resume Upload</h3>
            <p className="text-gray-600">Easily upload, track, and edit your resumes in one place.</p>
          </div>

          <div className="p-6 bg-white shadow rounded-2xl hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-blue-500 mb-2">Smart Insights</h3>
            <p className="text-gray-600">Get suggestions and analytics to improve your chances.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
