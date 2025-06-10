import React from 'react';

const testimonials = [
  {
    id: 1,
    name: "Khushal kumar sahu",
    role: "Software Engineer",
    message: "ResumeTracker ne meri job search ko bahut easy bana diya!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Keshav Aglarwal",
    role: "Product Manager",
    message: "Is app ki wajah se mera resume bahut professional dikhta hai.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "Khushi Algarwal",
    role: "UI/UX Designer",
    message: "User friendly aur simple design, mujhe bahut pasand aaya!",
    avatar: "https://randomuser.me/api/portraits/men/52.jpg"
  }
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="w-full py-20 px-4 bg-gradient-to-br from-purple-50 via-indigo-100 to-purple-200"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-purple-700 mb-6">
          What Our <span className="text-gray-800">Users Say</span>
        </h2>
        <p className="text-gray-600 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          Real feedback from real users who used ResumeTracker to boost their job search.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map(({ id, name, role, message, avatar }) => (
            <div
              key={id}
              className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition duration-300 border border-purple-200 hover:border-purple-400"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={avatar}
                  alt={name}
                  className="w-20 h-20 rounded-full object-cover shadow-md mb-4"
                />
                <h3 className="text-xl font-semibold text-purple-700">{name}</h3>
                <p className="text-sm text-gray-500 mb-2">{role}</p>
                <p className="text-gray-700 italic">“{message}”</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
