import React, { useState } from "react";
import ResumeCard from "../ResumeCard/ResumeCard";

const UploadResume = () => {
  const [resumeFile, setResumeFile] = useState(null);
  const [uploadedResumes, setUploadedResumes] = useState([]);

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!resumeFile) return alert("Please select a file first");

    const newResume = {
      fileName: resumeFile.name,
      uploadDate: new Date().toLocaleDateString(),
      fileSize: `${(resumeFile.size / 1024).toFixed(1)} KB`,
      previewText:
        "This is a sample summary of the resume. Later, this can be replaced by extracted content.",
      userName: "John Doe",
      userEmail: "johndoe@example.com",
      userContact: "+91 9876543210",
    };

    setUploadedResumes([newResume, ...uploadedResumes]);
    setResumeFile(null);
    alert("Resume uploaded successfully!");
  };

  const handleDelete = (index) => {
    const updated = [...uploadedResumes];
    updated.splice(index, 1);
    setUploadedResumes(updated);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 py-12 px-4 sm:px-8">
      <h2 className="text-4xl font-bold text-center text-blue-700 mb-10">
        Upload Your Resume
      </h2>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          className="w-full sm:w-auto border border-blue-300 rounded-lg px-5 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
        <button
          onClick={handleUpload}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300"
        >
          Upload
        </button>
      </div>

      <div className="mt-12">
        <h3 className="text-3xl font-semibold mb-6 text-gray-800 text-center">
          Uploaded Resumes
        </h3>
        {uploadedResumes.length === 0 ? (
          <p className="text-gray-500 text-center">No resumes uploaded yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {uploadedResumes.map((resume, index) => (
              <ResumeCard
                key={index}
                fileName={resume.fileName}
                uploadDate={resume.uploadDate}
                fileSize={resume.fileSize}
                previewText={resume.previewText}
                userName={resume.userName}
                userEmail={resume.userEmail}
                userContact={resume.userContact}
                onView={() => alert(`Viewing ${resume.fileName}`)}
                onDownload={() => alert(`Downloading ${resume.fileName}`)}
                onDelete={() => handleDelete(index)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadResume;
