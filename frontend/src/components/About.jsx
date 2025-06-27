import React from "react";
import { motion } from "framer-motion";
import { 
  Brain, 
  Upload, 
  TrendingUp, 
  Target, 
  Zap, 
  Shield,
  Users,
  Award,
  Rocket
} from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced LLM technology analyzes your resume against job descriptions with precision and intelligence.",
      color: "from-purple-500 to-pink-500",
      delay: 0.1
    },
    {
      icon: Upload,
      title: "Seamless Integration",
      description: "Upload, edit, and manage multiple resume versions with our intuitive drag-and-drop interface.",
      color: "from-blue-500 to-cyan-500",
      delay: 0.2
    },
    {
      icon: TrendingUp,
      title: "Smart Optimization",
      description: "Get personalized recommendations and keyword optimization to boost your application success rate.",
      color: "from-green-500 to-emerald-500",
      delay: 0.3
    },
    {
      icon: Target,
      title: "Precision Matching",
      description: "Our NLP algorithms ensure your resume perfectly aligns with job requirements and ATS systems.",
      color: "from-red-500 to-orange-500",
      delay: 0.4
    },
    {
      icon: Zap,
      title: "Real-time Insights",
      description: "Instant feedback and actionable insights to continuously improve your resume performance.",
      color: "from-yellow-500 to-orange-500",
      delay: 0.5
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your data is protected with enterprise-grade security while maintaining complete privacy.",
      color: "from-indigo-500 to-purple-500",
      delay: 0.6
    }
  ];

  const stats = [
    { number: "90K+", label: "Successful Applications", icon: Users },
    { number: "99%", label: "LLM Accuracy Rate", icon: Award },
    { number: "500+", label: "Companies Matched", icon: Rocket },
    { number: "4.9/5", label: "User Satisfaction", icon: Target }
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Geometric Shapes */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 opacity-10 rounded-full blur-xl"
        />
        
        <motion.div
          animate={{
            y: [0, 40, 0],
            rotate: [360, 0],
            x: [0, 20, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 right-20 w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-400 opacity-10"
          style={{
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
          }}
        />

        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-br from-green-400 to-emerald-400 opacity-10 rounded-lg blur-xl transform rotate-45"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="relative inline-block mb-6">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              About ReadyBoss
            </h2>
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 opacity-20 blur-2xl rounded-lg transform -skew-y-1"></div>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
          >
            Revolutionizing career success with AI-powered resume optimization, intelligent job tracking, 
            and precision matching technology that transforms how professionals approach their job search.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                z: 50
              }}
              className="relative bg-white/70 backdrop-blur-lg rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/20 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full mb-3">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: feature.delay }}
              whileHover={{ 
                scale: 1.02,
                rotateX: 5,
                rotateY: 5,
                z: 50
              }}
              className="group relative bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/30 overflow-hidden"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Animated Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Floating Icon Background */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br ${feature.color} opacity-10 rounded-full blur-xl`}
              />

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotateY: 180, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl mb-6 shadow-lg`}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {feature.description}
                </p>

                {/* Hover Line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                  className={`h-1 bg-gradient-to-r ${feature.color} rounded-full mt-4`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-20"
        >
          <div className="relative inline-block">
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(168, 85, 247, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform-gpu"
            >
              Start Your Journey Today
            </motion.button>
            
            {/* Animated Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-blue-600 opacity-20 rounded-2xl blur-md"
            />
          </div>
          
          <p className="text-gray-600 mt-4 text-lg">
            Join thousands of professionals who've transformed their careers with ReadyBoss
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
