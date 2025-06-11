import React, { useState } from "react";
import { UploadCloud } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  { title: "Uploading resume", key: "upload" },
  { title: "Analyzing keywords", key: "keywords" },
  { title: "Comparing with job description", key: "compare" },
  { title: "Generating report", key: "report" },
];

const ResumeAnalyzer = () => {
  const [resumeFile, setResumeFile] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [currentStep, setCurrentStep] = useState(-1);
  const [analyzing, setAnalyzing] = useState(false);

  const handleFileChange = (e) => {
  const isLoggedIn = localStorage.getItem("user");
  if (!isLoggedIn) {
    alert("Please sign up or log in first to upload your resume.");
    return;
  }

  if (e.target.files.length > 0) {
    setResumeFile(e.target.files[0]);
  }
};

 const handleAnalyze = async () => {
  if (!resumeFile || !jobDescription.trim()) {
    return alert("Please upload a resume and paste the job description.");
  }

  setAnalyzing(true);
  for (let i = 0; i < steps.length; i++) {
    setCurrentStep(i);
    await new Promise((res) => setTimeout(res, 1500));
  }

  alert("✅ Resume analysis completed!");

  // 🔁 Reset states here:
  setResumeFile(null);
  setJobDescription("");
  setCurrentStep(-1);
  setAnalyzing(false);
};


  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-[#1c1b2f] rounded-2xl shadow-xl p-6 sm:p-8 space-y-8 text-white border border-blue-600/20"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-400">
          Resume Intelligence Analyzer
        </h2>

        {/* Upload Box */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="border-2 border-dashed border-purple-500 rounded-xl p-6 flex flex-col items-center text-center hover:bg-purple-500/10 transition cursor-pointer"
        >
          <UploadCloud size={40} className="text-purple-300" />
          <label className="font-semibold mt-3 cursor-pointer">
            <input
              type="file"
              className="hidden"
              accept=".pdf,.doc,.docx,.txt"
              onChange={handleFileChange}
            />
            <span className="underline">Click to upload</span> or drag and drop
          </label>
          <p className="text-sm text-gray-300 mt-1">PDF, DOCX or TXT (MAX. 5MB)</p>
          {resumeFile && (
            <p className="text-green-400 mt-2 font-medium text-sm">
              ✅ {resumeFile.name}
            </p>
          )}
        </motion.div>

        {/* Job Description Input */}
        <div>
          <label className="block text-sm font-semibold mb-2 text-blue-200">
            Paste Job Description
          </label>
          <textarea
            rows={6}
            className="w-full p-4 rounded-lg bg-[#2a2945] text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Paste the job description here..."
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
          />
        </div>

        {/* Analyze Button */}
        <motion.button
          whileTap={{ scale: 0.97 }}
          whileHover={{ scale: 1.01 }}
          onClick={handleAnalyze}
          disabled={analyzing}
          className={`w-full py-3 rounded-lg font-bold transition text-white ${
            analyzing
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-500 to-purple-600 hover:brightness-110"
          }`}
        >
          {analyzing ? "Analyzing..." : "Analyze Resume →"}
        </motion.button>

        {/* Step Progress UI */}
        {analyzing && (
          <div className="mt-8 space-y-6">
            {steps.map((step, index) => (
              <div key={step.key} className="flex items-start space-x-4">
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm shadow-md ${
                    index < currentStep
                      ? "bg-green-500 text-white"
                      : index === currentStep
                      ? "bg-purple-500 text-white animate-pulse"
                      : "bg-gray-700 text-gray-400"
                  }`}
                >
                  {index < currentStep ? "✔️" : index + 1}
                </div>
                <div>
                  <p
                    className={`font-semibold ${
                      index === currentStep
                        ? "text-white"
                        : index < currentStep
                        ? "text-green-400"
                        : "text-gray-400"
                    }`}
                  >
                    {step.title}
                  </p>
                  {index === currentStep && (
                    <motion.div
                      className="h-2 mt-1 w-40 bg-gradient-to-r from-blue-400 to-purple-500 rounded"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1.2 }}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ResumeAnalyzer;
