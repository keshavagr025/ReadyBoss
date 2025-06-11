import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-br from-blue-50 via-[#eaf6ff] to-red-50 flex items-center justify-center px-6 py-24 text-gray-800"
    >
      <div className="max-w-6xl w-full">
        {/* Heading */}
        <div className="text-center mb-16 px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-red-600 leading-tight mb-4">
            About <span className="text-blue-700">ResumeTracker</span>
          </h2>
          <p className="text-blue-700 text-lg md:text-xl max-w-3xl mx-auto">
            ResumeTracker is your intelligent companion for tracking, managing, and optimizing job applications.
            Whether you're a student, a working professional, or a recruiter — we simplify your resume journey with impact.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-4">
          {/* Card 1 */}
          <div className="p-6 bg-white shadow-md hover:shadow-xl border border-blue-200 hover:border-red-400 transition transform hover:-translate-y-1 duration-300 text-center rounded-2xl">
            <div className="text-4xl mb-3 animate-bounce">💡</div>
            <h3 className="text-xl font-semibold text-red-600 mb-2">
              Intuitive UI
            </h3>
            <p className="text-blue-700 text-sm">
              Clean, elegant interface focused on delivering speed and clarity without distractions.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-white shadow-md hover:shadow-xl border border-blue-200 hover:border-red-400 transition transform hover:-translate-y-1 duration-300 text-center rounded-2xl">
            <div className="text-4xl mb-3 animate-bounce">📤</div>
            <h3 className="text-xl font-semibold text-red-600 mb-2">
              Seamless Upload
            </h3>
            <p className="text-blue-700 text-sm">
              Upload, edit, and manage multiple resume versions — all in one place.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 bg-white shadow-md hover:shadow-xl border border-blue-200 hover:border-red-400 transition transform hover:-translate-y-1 duration-300 text-center rounded-2xl">
            <div className="text-4xl mb-3 animate-bounce">📈</div>
            <h3 className="text-xl font-semibold text-red-600 mb-2">
              AI Insights
            </h3>
            <p className="text-blue-700 text-sm">
              Smart analysis, suggestions, and tracking powered by advanced AI to improve your job success rate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
