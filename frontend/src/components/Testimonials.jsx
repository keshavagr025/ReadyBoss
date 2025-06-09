import React from 'react';

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Software Engineer",
    message: "ResumeTracker ne meri job search ko bahut easy bana diya!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Pooja Singh",
    role: "Product Manager",
    message: "Is app ki wajah se mera resume bahut professional dikhta hai.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "Amit Verma",
    role: "UI/UX Designer",
    message: "User friendly aur simple design, mujhe bahut pasand aaya!",
    avatar: "https://randomuser.me/api/portraits/men/52.jpg"
  }
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="max-w-7xl mx-auto px-4 py-12 bg-gray-50 rounded-lg shadow-md mt-12"
    >
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">What Our Users Say</h2>
      <div className="flex flex-col md:flex-row gap-8">
        {testimonials.map(({ id, name, role, message, avatar }) => (
          <div
            key={id}
            className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={avatar}
              alt={name}
              className="w-20 h-20 rounded-full object-cover mb-4 md:mb-0 md:mr-6"
            />
            <div>
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="text-sm text-gray-500 mb-2">{role}</p>
              <p className="text-gray-700 italic">"{message}"</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
