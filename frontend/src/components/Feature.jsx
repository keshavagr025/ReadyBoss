import React from "react";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import {
  FaRobot,
  FaKey,
  FaStream,
  FaFileAlt,
  FaLightbulb,
} from "react-icons/fa";

const features = [
  {
    title: "AI Resume Analysis",
    description:
      "Our advanced AI examines your resume’s structure, content, and formatting to ensure compatibility with Applicant Tracking Systems (ATS). It provides actionable insights on how to optimize each section for professionalism and clarity.",
    icon: <FaRobot className="text-red-500 text-2xl mr-3" />,
    animation: "https://lottie.host/65673587-ff0b-45c9-a5b2-2a8db526fe57/XXEMZNWmgI.lottie",
  },
  {
    title: "Smart Keyword Extraction",
    description:
      "Using cutting-edge NLP models, ResumeTracker extracts key qualifications, soft skills, and technical terms from job descriptions, helping you align your resume perfectly with each application.",
    icon: <FaKey className="text-red-500 text-2xl mr-3" />,
    animation: "https://lottie.host/75e24233-8b2d-4ff1-a347-535b34ffc824/koC2uBpqam.lottie",
  },
  {
    title: "Semantic Matching",
    description:
      "Goes beyond basic keyword matches. Our AI understands the meaning and intent of your experience and compares it with job requirements to find the best-fit opportunities.",
    icon: <FaStream className="text-red-500 text-2xl mr-3" />,
    animation: "https://lottie.host/93f41c43-284a-4085-83a3-c1be0601365d/kJ7DHXUSgZ.lottie",
  },
  {
    title: "Parses Resume",
    description:
      "Easily extract structured data from resumes, including PDFs and Word files. Our parser recognizes sections, organizes content, and prepares your resume for further insights and optimization.",
    icon: <FaFileAlt className="text-red-500 text-2xl mr-3" />,
    animation: "https://lottie.host/430d1c47-f57a-4786-b39a-5ccf1b075caf/OPlUFvsOEO.lottie",
  },
  {
    title: "Intelligent Suggestions",
    description:
      "Get personalized suggestions to improve resume content, tone, and formatting. Our AI ensures your resume stands out by providing real-time enhancement tips for every job you apply to.",
    icon: <FaLightbulb className="text-red-500 text-2xl mr-3" />,
    animation: "https://lottie.host/a7ab3291-554d-4272-ab7c-a8ee2c62e280/uRqt8ykrke.lottie",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Features = () => {
  return (
    <section 
    id="features"
    className=" py-20 px-6 ">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800"
        >
          <span className="text-indigo-500">Powerful</span> AI Features
        </motion.h2>

        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } items-center gap-10 mb-20`}
          >
            {/* Lottie Animation */}
            <div className="w-full md:w-1/2">
              <DotLottieReact
                src={feature.animation}
                autoplay
                loop
                style={{ height: "340px", width: "110%" }}
              />
            </div>

            {/* Feature Description */}
            <div className="w-full md:w-1/2 px-4">
              <div className="flex items-center mb-4">
                {feature.icon}
                <h3 className="text-2xl font-semibold text-red-600">
                  {feature.title}
                </h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
