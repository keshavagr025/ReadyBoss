<<<<<<< HEAD
import React, { useState, useEffect } from "react";

// Method 1: Static real testimonials (most common approach)
const realTestimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Senior Software Engineer at Google",
    message: "ResumeTracker helped me organize my job applications and land my dream role. The tracking features are incredibly useful!",
    avatar: "/images/testimonials/sarah.jpg", // Use actual photos
    company: "Google",
    linkedinUrl: "https://linkedin.com/in/sarahjohnson"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager at Microsoft",
    message: "The resume builder and application tracking made my job search 10x more efficient. Highly recommended!",
    avatar: "/images/testimonials/michael.jpg",
    company: "Microsoft",
    linkedinUrl: "https://linkedin.com/in/michaelchen"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "UX Designer at Airbnb",
    message: "Clean interface, powerful features. ResumeTracker is a game-changer for job seekers!",
    avatar: "/images/testimonials/emily.jpg",
    company: "Airbnb",
    linkedinUrl: "https://linkedin.com/in/emilyrodriguez"
  }
];

// Method 2: Component that fetches from API
const TestimonialsWithAPI = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await fetch('/api/testimonials');
        if (!response.ok) throw new Error('Failed to fetch testimonials');
        
        const data = await response.json();
        setTestimonials(data);
      } catch (err) {
        setError(err.message);
        // Fallback to static data
        setTestimonials(realTestimonials);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) {
    return (
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading testimonials...</p>
          </div>
        </div>
      </div>
    );
  }

  return <TestimonialsDisplay testimonials={testimonials} error={error} />;
};

// Method 3: Component with form to collect new testimonials
const TestimonialsWithSubmission = () => {
  const [testimonials, setTestimonials] = useState(realTestimonials);
  const [showForm, setShowForm] = useState(false);
  const [newTestimonial, setNewTestimonial] = useState({
    name: '',
    role: '',
    company: '',
    message: '',
    email: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // In real implementation, send to your backend
      const response = await fetch('/api/testimonials', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTestimonial),
      });

      if (response.ok) {
        alert('Thank you for your testimonial! It will be reviewed and published soon.');
        setNewTestimonial({ name: '', role: '', company: '', message: '', email: '' });
        setShowForm(false);
      }
    } catch (error) {
      alert('Failed to submit testimonial. Please try again.');
    }
  };

  return (
    <div>
      <TestimonialsDisplay testimonials={testimonials} />
      
      {/* Add testimonial section */}
      <div className="py-8 bg-white border-t">
        <div className="max-w-3xl mx-auto px-4 text-center">
          {!showForm ? (
            <div>
              <h3 className="text-xl font-semibold mb-4">Share Your Success Story</h3>
              <button
                onClick={() => setShowForm(true)}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Add Your Testimonial
              </button>
            </div>
          ) : (
            <div className="space-y-4 text-left">
              <h3 className="text-xl font-semibold text-center mb-6">Share Your Experience</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={newTestimonial.name}
                  onChange={(e) => setNewTestimonial({...newTestimonial, name: e.target.value})}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={newTestimonial.email}
                  onChange={(e) => setNewTestimonial({...newTestimonial, email: e.target.value})}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Role"
                  value={newTestimonial.role}
                  onChange={(e) => setNewTestimonial({...newTestimonial, role: e.target.value})}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <input
                  type="text"
                  placeholder="Company"
                  value={newTestimonial.company}
                  onChange={(e) => setNewTestimonial({...newTestimonial, company: e.target.value})}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <textarea
                placeholder="Share your experience with ResumeTracker..."
                value={newTestimonial.message}
                onChange={(e) => setNewTestimonial({...newTestimonial, message: e.target.value})}
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              
              <div className="flex gap-4 justify-center">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Submit Testimonial
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Main display component
const TestimonialsDisplay = ({ testimonials, error }) => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            What Our Users Say
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Hear from professionals who've used ResumeTracker to upgrade their job hunt.
          </p>
          {error && (
            <p className="mt-2 text-sm text-amber-600">
              Note: Using fallback testimonials due to connection issues.
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=3b82f6&color=fff`}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  onError={(e) => {
                    // Fallback to generated avatar if image fails
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=3b82f6&color=fff`;
                  }}
                />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {testimonial.linkedinUrl ? (
                      <a 
                        href={testimonial.linkedinUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 transition-colors"
                      >
                        {testimonial.name}
                      </a>
                    ) : (
                      testimonial.name
                    )}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {testimonial.role}
                    {testimonial.company && ` at ${testimonial.company}`}
                  </p>
                </div>
              </div>
              <blockquote className="text-gray-700 italic">
                "{testimonial.message}"
              </blockquote>
              
              {/* Star rating if available */}
              {testimonial.rating && (
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 mb-4">Trusted by professionals at</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <span className="font-semibold">Google</span>
            <span className="font-semibold">Microsoft</span>
            <span className="font-semibold">Airbnb</span>
            <span className="font-semibold">Netflix</span>
            <span className="font-semibold">Amazon</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the version you want to use
export default TestimonialsWithSubmission;
=======
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
      className="w-full py-24 px-4 "
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-purple-300 mb-6">
          What Our <span className="text-black">Users Say</span>
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
>>>>>>> f29dba8b725a275fbfeb367dbabdad54ae888872
