import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Khushal Kumar Sahu",
    role: "Software Engineer",
    message: "ResumeTracker ne meri job search ko bahut easy bana diya!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Keshav Agarwal",
    role: "Product Manager",
    message: "Is app ki wajah se mera resume bahut professional dikhta hai.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Khushi Agarwal",
    role: "UI/UX Designer",
    message: "User-friendly aur simple design, mujhe bahut pasand aaya!",
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="w-full py-24 px-4 bg-gradient-to-br from-blue-50 via-[#eaf6ff] to-red-50"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-6">
          What Our <span className="text-blue-700">Users Say</span>
        </h2>
        <p className="text-blue-800 text-lg md:text-xl mb-16 max-w-2xl mx-auto">
          Hear from professionals who've used ResumeTracker to upgrade their job hunt.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map(({ id, name, role, message, avatar }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: id * 0.1 }}
              className="bg-white hover:bg-blue-50 p-6 rounded-2xl border border-blue-200 shadow-md hover:shadow-lg transition duration-300 text-center"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <img
                  src={avatar}
                  alt={name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-red-200 shadow-md"
                />
                <h3 className="text-xl font-semibold text-red-600">{name}</h3>
                <p className="text-sm text-blue-700">{role}</p>
                <p className="text-gray-700 italic leading-relaxed px-2">“{message}”</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
