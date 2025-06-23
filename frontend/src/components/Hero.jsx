import React, { useState, useEffect } from "react";

// Mock ResumeAnalyzer component since we don't have the original
const ResumeAnalyzer = () => (
  <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
    <div className="text-center space-y-6">
      <div className="w-16 h-16 mx-auto bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      </div>
      <h3 className="text-xl font-bold text-white">Upload Your Resume</h3>
      <div className="border-2 border-dashed border-white/30 rounded-xl p-8 hover:border-white/50 transition-colors cursor-pointer">
        <p className="text-white/80">Drag & drop your resume here</p>
        <p className="text-sm text-white/60 mt-2">PDF, DOC, DOCX supported</p>
      </div>
    </div>
  </div>
);

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Animated Background Orbs */}
      <div className="absolute top-10 -left-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute top-1/2 -right-32 w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-pink-500 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Mouse Trail Effect */}
      <div 
        className="absolute pointer-events-none z-10 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur-sm opacity-30 transition-all duration-100"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)'
        }}
      ></div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">
          
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl rounded-full px-4 py-2 border border-white/20 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-white/90 font-medium">AI-Powered • Live Analysis</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-black leading-tight">
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-default">
                  Future-Ready
                </span>
                <span className="block text-white drop-shadow-2xl hover:scale-105 transition-transform duration-300 cursor-default">
                  Resume Intelligence
                </span>
              </h1>
              
              <p className="text-xl text-white/80 leading-relaxed max-w-xl">
                Revolutionary AI that doesn't just analyze—it transforms your career trajectory with 
                <span className="text-cyan-400 font-semibold"> quantum-level precision</span>.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="flex flex-wrap gap-6">
              {[
                { value: "2.3M+", label: "Resumes Optimized", gradient: "from-cyan-500 to-blue-500", icon: "📊" },
                { value: "847%", label: "Interview Rate Boost", gradient: "from-purple-500 to-pink-500", icon: "🚀" },
                { value: "99.7%", label: "AI Accuracy", gradient: "from-green-500 to-emerald-500", icon: "🎯" }
              ].map((stat, i) => (
                <div
                  key={i}
                  className={`bg-gradient-to-r ${stat.gradient} p-6 rounded-2xl backdrop-blur-xl border border-white/20 min-w-[160px] cursor-pointer hover:scale-110 hover:rotate-1 transition-all duration-300 animate-bounce`}
                  style={{ 
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: '4s'
                  }}
                >
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/90">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Feature Tags */}
            <div className="flex flex-wrap gap-3">
              {[
                { text: "Quantum Analysis", gradient: "from-cyan-500 to-teal-500" },
                { text: "Neural Matching", gradient: "from-purple-500 to-indigo-500" },
                { text: "Predictive Analytics", gradient: "from-pink-500 to-rose-500" },
                { text: "Real-time Optimization", gradient: "from-orange-500 to-amber-500" }
              ].map((pill, i) => (
                <span
                  key={i}
                  className={`px-6 py-3 rounded-full bg-gradient-to-r ${pill.gradient} text-white font-semibold text-sm shadow-lg cursor-pointer border border-white/20 hover:scale-110 hover:rotate-2 transition-all duration-300 opacity-0 animate-fadeIn`}
                  style={{ 
                    animationDelay: `${0.8 + i * 0.1}s`,
                    animationFillMode: 'forwards'
                  }}
                >
                  {pill.text}
                </span>
              ))}
            </div>

            {/* CTA Button */}
            <button className="group relative px-12 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl text-white font-bold text-lg overflow-hidden border border-white/20 hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <span className="relative z-10 flex items-center gap-3">
                Start Your Transformation
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </button>
          </div>

          {/* Right Side - Resume Analyzer */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative animate-bounce" style={{ animationDuration: '6s' }}>
              {/* Glowing Border Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-30 hover:opacity-50 transition duration-1000"></div>
              
              <div className="relative bg-black/40 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 hover:scale-105 transition-transform duration-300">
                <ResumeAnalyzer />
              </div>
            </div>

            {/* Floating Accent Elements */}
            <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-2xl animate-bounce" style={{ animationDelay: '2s', animationDuration: '4s' }}>
              <span className="text-2xl">⚡</span>
            </div>

            <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-gradient-to-r from-green-400 to-teal-500 rounded-xl flex items-center justify-center shadow-2xl animate-bounce" style={{ animationDelay: '3s', animationDuration: '5s' }}>
              <span className="text-xl">✨</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none"></div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;