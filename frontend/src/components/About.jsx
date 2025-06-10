import React from 'react';

const About = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0a1128] via-[#1e2a48] to-[#122c91] flex items-center justify-center px-6 py-20 text-white">
      <div className="max-w-6xl w-full">
        {/* Heading */}
        <div className="text-center mb-14 px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-300 leading-tight mb-4">
            About <span className="text-white">ResumeTracker</span>
          </h2>
          <p className="text-blue-100 text-lg md:text-xl max-w-3xl mx-auto">
            ResumeTracker is your smart assistant for tracking, managing, and optimizing job applications.
            Whether you're a student, working professional, or recruiter — we make your resume journey simple, smart, and successful.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-4">
          {/* Card 1 */}
          <div className="p-6 bg-[#1b2540] rounded-3xl shadow-md hover:shadow-2xl transition duration-300 text-center border border-blue-900 hover:border-blue-500">
            <div className="text-blue-400 text-3xl font-bold mb-2">🎯</div>
            <h3 className="text-xl font-semibold text-blue-200 mb-2">Simple UI</h3>
            <p className="text-blue-100 text-sm">
              Clean, minimal interface focused on making your experience fast and frustration-free.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-[#1b2540] rounded-3xl shadow-md hover:shadow-2xl transition duration-300 text-center border border-blue-900 hover:border-blue-500">
            <div className="text-blue-400 text-3xl font-bold mb-2">📄</div>
            <h3 className="text-xl font-semibold text-blue-200 mb-2">Resume Upload</h3>
            <p className="text-blue-100 text-sm">
              Upload and manage multiple resume versions with ease and flexibility.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 bg-[#1b2540] rounded-3xl shadow-md hover:shadow-2xl transition duration-300 text-center border border-blue-900 hover:border-blue-500">
            <div className="text-blue-400 text-3xl font-bold mb-2">📊</div>
            <h3 className="text-xl font-semibold text-blue-200 mb-2">Smart Insights</h3>
            <p className="text-blue-100 text-sm">
              AI-powered suggestions and analytics to boost your success rate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
