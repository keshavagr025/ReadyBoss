import React, { useState, useEffect, useRef } from 'react';

const Feature = () => {
  const [visibleFeatures, setVisibleFeatures] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const sectionRef = useRef(null);

  const features = [
    {
      icon: '🧠',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
      title: 'AI Resume Analysis',
      description: 'Our LLM analyzes your resume structure, content, and formatting to ensure ATS compatibility and professional presentation.',
      stats: '99.7% Accuracy',
      delay: 0.1
    },
    {
      icon: '🎯',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
      title: 'Smart Keyword Extraction',
      description: 'Advanced NLP algorithms identify key skills and qualifications from job descriptions to help you tailor your resume for each application.',
      stats: '500K+ Keywords',
      delay: 0.2
    },
    {
      icon: '⚡',
      gradient: 'from-yellow-500 to-orange-500',
      bgGradient: 'from-yellow-50 to-orange-50',
      title: 'Real-time LLM Feedback',
      description: 'Get instant, AI-generated feedback on your resume with detailed scoring and personalized improvement suggestions.',
      stats: 'Instant Results',
      delay: 0.3
    },
    {
      icon: '🔮',
      gradient: 'from-indigo-500 to-purple-500',
      bgGradient: 'from-indigo-50 to-purple-50',
      title: 'Semantic Matching',
      description: 'Our AI goes beyond keyword matching to understand the semantic meaning of your experience and how it aligns with job requirements.',
      stats: 'Deep Learning',
      delay: 0.4
    },
    {
      icon: '📄',
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50',
      title: 'Smart Resume Parser',
      description: 'Extracts structured data from PDFs, DOCs, and raw text using intelligent parsing with 99.9% accuracy rate.',
      stats: '10+ Formats',
      delay: 0.5
    },
    {
      icon: '💡',
      gradient: 'from-pink-500 to-rose-500',
      bgGradient: 'from-pink-50 to-rose-50',
      title: 'Intelligent Suggestions',
      description: 'Get AI-generated, actionable suggestions to improve your resume\'s content, formatting, and impact for each specific job application.',
      stats: 'Personalized',
      delay: 0.6
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleFeatures(prev => [...new Set([...prev, entry.target.dataset.index])]);
            }, parseInt(entry.target.dataset.delay) * 1000);
          }
        });
      },
      { threshold: 0.1 }
    );

    const featureElements = document.querySelectorAll('[data-feature]');
    featureElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="features" 
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-24 px-6 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl rounded-full px-6 py-3 border border-white/20 mb-8">
            <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-white/90 font-medium">Next-Gen AI Technology</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            <span className="block">Revolutionary</span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              AI Features
            </span>
          </h2>

          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Experience the future of resume optimization with our cutting-edge AI that doesn't just analyze—
            <span className="text-cyan-400 font-semibold"> it transforms careers</span>.
          </p>

          {/* Stats Bar */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            {[
              { value: '2.3M+', label: 'Resumes Analyzed' },
              { value: '847%', label: 'Success Rate Boost' },
              { value: '0.3s', label: 'Processing Time' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              data-feature
              data-index={index}
              data-delay={feature.delay}
              className={`group relative transform transition-all duration-700 ${
                visibleFeatures.includes(index.toString()) 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-20 opacity-0'
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(-1)}
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${feature.gradient} rounded-3xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
              
              {/* Main Card */}
              <div className={`relative bg-white/5 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 h-full transform group-hover:scale-105 transition-all duration-500 overflow-hidden`}>
                
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                    backgroundSize: '20px 20px'
                  }}></div>
                </div>

                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-4xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-2xl`}>
                    {feature.icon}
                  </div>
                  
                  {/* Stats Badge */}
                  <div className="absolute -top-2 -right-2 px-3 py-1 bg-white/10 backdrop-blur-xl rounded-full border border-white/20">
                    <span className="text-xs text-white/80 font-semibold">{feature.stats}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Interactive Elements */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className={`h-1 bg-gradient-to-r ${feature.gradient} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                </div>

                {/* Hover Indicator */}
                {hoveredIndex === index && (
                  <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-ping"></div>
                )}

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-8 h-8">
                  <div className={`w-full h-full bg-gradient-to-br ${feature.gradient} opacity-20 transform rotate-45 -translate-x-4 -translate-y-4 group-hover:scale-150 transition-transform duration-500`}></div>
                </div>
                <div className="absolute bottom-0 right-0 w-8 h-8">
                  <div className={`w-full h-full bg-gradient-to-tl ${feature.gradient} opacity-20 transform rotate-45 translate-x-4 translate-y-4 group-hover:scale-150 transition-transform duration-500`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-2xl rounded-2xl p-6 border border-white/10">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`w-10 h-10 rounded-full bg-gradient-to-r ${features[i]?.gradient || 'from-purple-500 to-cyan-500'} border-2 border-white/20 flex items-center justify-center text-sm font-bold text-white`}
                >
                  {features[i]?.icon || '🚀'}
                </div>
              ))}
            </div>
            <div className="text-left">
              <p className="text-white font-semibold">All features work together seamlessly</p>
              <p className="text-white/60 text-sm">Powered by advanced machine learning algorithms</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
