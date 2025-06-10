import React from "react";
import { Eye, Download, Trash } from "lucide-react";
import { motion } from "framer-motion";

const ResumeCard = ({
  fileName = "John_Doe_Resume.pdf",
  uploadDate = "2025-06-09",
  previewText = "Experienced software developer with expertise in React, Node.js and cloud technologies. Passionate about building scalable web applications.",
  fileSize = "150 KB",
  userName = "John Doe",
  userEmail = "johndoe@example.com",
  userContact = "+91 9876543210",
  onView,
  onDownload,
  onDelete,
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 flex items-center justify-center py-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full bg-white/60 backdrop-blur-xl border border-blue-300 rounded-3xl shadow-2xl p-8 space-y-6"
      >
        {/* User Info Section */}
        <div className="text-center space-y-1">
          <h2 className="text-2xl font-bold text-blue-800">{userName}</h2>
          <p className="text-sm text-gray-600">{userEmail}</p>
          <p className="text-sm text-gray-600">{userContact}</p>
        </div>

        {/* Resume Details */}
        <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 truncate" title={fileName}>
            {fileName}
          </h3>
          <p className="text-xs text-gray-500 mb-3">
            Uploaded on: <span className="font-medium">{uploadDate}</span> · {fileSize}
          </p>
          <p className="text-sm text-gray-700 mb-4 italic line-clamp-3">"{previewText}"</p>

          {/* Buttons */}
          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={onView}
              className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-bold shadow"
              aria-label="View Resume"
            >
              <Eye size={18} /> View
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={onDownload}
              className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-green-600 text-white rounded-xl hover:bg-green-700 font-bold shadow"
              aria-label="Download Resume"
            >
              <Download size={18} /> Download
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={onDelete}
              className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-red-600 text-white rounded-xl hover:bg-red-700 font-bold shadow"
              aria-label="Delete Resume"
            >
              <Trash size={18} /> Delete
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ResumeCard;
