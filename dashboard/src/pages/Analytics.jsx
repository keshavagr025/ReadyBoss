// ✅ Todo
// Resume upload + real parsing (using Papaparse, pdf-parse, or OpenAI API)

// Auto-update ATS score based on selected job role

// Skill Gap Analyzer & Course Recommender

// Color-coded alerts (e.g. 🟢 Good Score, 🔴 Needs Improvement)



import React, { useState } from 'react';
import { FileText, Star, Target, Lightbulb, Briefcase } from 'lucide-react';

export default function Analytics  ()  {
  const [resumeData, setResumeData] = useState({
    atsScore: 72,
    extractedSkills: ['React', 'Node.js', 'MongoDB', 'Express', 'HTML', 'CSS'],
    matchedKeywords: ['Frontend', 'Web Developer', 'REST API', 'Teamwork'],
    suggestions: [
      'Add more project management keywords',
      'Include certifications like AWS/DevOps',
      'Mention version control tools (Git)',
    ],
  });

  const [selectedRole, setSelectedRole] = useState('Frontend Developer');

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Resume Analytics</h1>

      {/* Job Role Selector */}
      <div className="mb-6">
        <label className="text-sm font-semibold text-gray-700 mr-2">Select Job Role:</label>
        <select
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg"
        >
          <option>Frontend Developer</option>
          <option>Backend Developer</option>
          <option>Full Stack Developer</option>
          <option>Data Scientist</option>
          <option>DevOps Engineer</option>
        </select>
      </div>

      {/* ATS Score Card */}
      <div className="bg-white rounded-lg shadow p-6 mb-6 border border-gray-200">
        <div className="flex items-center space-x-4">
          <Target className="text-purple-600 w-6 h-6" />
          <h2 className="text-xl font-semibold text-gray-800">ATS Score</h2>
        </div>
        <p className="text-4xl font-bold mt-4 text-purple-700">{resumeData.atsScore}%</p>
        <p className="text-gray-500 text-sm mt-1">
          Aim for a score above 80% to increase your job shortlisting chances.
        </p>
      </div>

      {/* Extracted Skills */}
      <div className="bg-white rounded-lg shadow p-6 mb-6 border border-gray-200">
        <div className="flex items-center space-x-4">
          <Star className="text-yellow-500 w-6 h-6" />
          <h2 className="text-xl font-semibold text-gray-800">Extracted Skills</h2>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {resumeData.extractedSkills.map((skill, index) => (
            <span
              key={index}
              className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Matched Keywords */}
      <div className="bg-white rounded-lg shadow p-6 mb-6 border border-gray-200">
        <div className="flex items-center space-x-4">
          <FileText className="text-blue-600 w-6 h-6" />
          <h2 className="text-xl font-semibold text-gray-800">Matched Keywords</h2>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {resumeData.matchedKeywords.map((keyword, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full"
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>

      {/* Suggestions */}
      <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
        <div className="flex items-center space-x-4">
          <Lightbulb className="text-green-600 w-6 h-6" />
          <h2 className="text-xl font-semibold text-gray-800">Suggestions for {selectedRole}</h2>
        </div>
        <ul className="list-disc mt-4 pl-6 text-gray-700 space-y-2">
          {resumeData.suggestions.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
