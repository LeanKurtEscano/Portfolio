import React from 'react';
import { Code, Database, Brain, Zap } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const highlights = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Building end-to-end web applications with modern frameworks"
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "Implementing RAG systems and LangChain workflows"
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Optimizing and managing structured data for data-driven applications"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Creating fast, responsive applications with optimal UX"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9,
      y: 30
    },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    }),
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const textRevealVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    })
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9,
      y: 20
    },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 1.0 + index * 0.2,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    }),
    hover: {
      scale: 1.05,
      y: -3,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  };

  const glowVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: [0, 0.6, 0],
      scale: [0.8, 1.2, 0.8],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section ref={ref} id="about" className="py-16 px-8 md:px-12 lg:px-16 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <motion.div 
        className="relative z-10 max-w-7xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.div 
            className="inline-block mb-6 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, ease: [0.25, 0.25, 0.25, 0.75], delay: 0.2 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600/40 to-cyan-600/40 rounded-full blur-sm"
              variants={glowVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
            />
            <span className="relative px-6 py-3 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 rounded-full text-sm text-purple-300 backdrop-blur-sm font-medium">
              About Me
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          >
            <motion.span 
              className="block bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent"
              variants={textRevealVariants}
              custom={0}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              Crafting Intelligent
            </motion.span>
            <motion.span 
              className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
              variants={textRevealVariants}
              custom={1}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              Web Experiences
            </motion.span>
          </motion.h2>
          
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"
            initial={{ width: 0, opacity: 0 }}
            animate={isInView ? { width: 128, opacity: 1 } : { width: 0, opacity: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Content */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <motion.div 
              className="space-y-6 text-gray-300 text-lg leading-relaxed"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.p 
                variants={textRevealVariants}
                custom={2}
                className="overflow-hidden"
              >
                I'm a passionate full-stack developer specializing in bridging traditional web development 
                and cutting-edge AI technologies. I create intelligent 
                applications that understand and interact meaningfully.
              </motion.p>
              
              <motion.p 
                variants={textRevealVariants}
                custom={3}
                className="overflow-hidden"
              >
              My journey began with traditional web development, but I quickly became fascinated by the potential of AI integration. With a strong focus on backend development, I have developed a keen interest in Retrieval-Augmented Generation (RAG) and autonomous agents, exploring how these technologies can transform traditional applications into smart, context-aware systems.
              </motion.p>

              <motion.p 
                variants={textRevealVariants}
                custom={4}
                className="overflow-hidden"
              >
               Whether building efficient web applications, integrating AI-powered retrieval agents, or creating intelligent automation workflows, I enjoy solving complex challenges that combine backend development and AI.


              </motion.p>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {[
                { number: "50+", label: "Projects" },
                { number: "3+", label: "Years Exp" },
                { number: "15+", label: "AI Apps" }
              ].map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center group cursor-pointer"
                  initial={{ opacity: 0, scale: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0, y: 20 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.8 + index * 0.1,
                    ease: [0.25, 0.25, 0.25, 0.75]
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div 
                    className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2"
                    whileHover={{ 
                      backgroundImage: "linear-gradient(to right, #a855f7, #06b6d4, #f59e0b)",
                      transition: { duration: 0.3 }
                    }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className="group p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-500 cursor-pointer relative overflow-hidden"
                variants={cardVariants}
                custom={index}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                {/* Animated background glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-cyan-500/0 to-purple-500/0 rounded-2xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ 
                    opacity: 0.1, 
                    scale: 1.05,
                    backgroundImage: "linear-gradient(45deg, rgba(139, 92, 246, 0.1), rgba(6, 182, 212, 0.1), rgba(139, 92, 246, 0.1))"
                  }}
                  transition={{ duration: 0.5 }}
                />
                
                <motion.div 
                  className="mb-4 relative"
                  whileHover={{ 
                    scale: 1.1
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-cyan-500/30 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-purple-500/20"
                    whileHover={{
                      boxShadow: "0 0 25px rgba(139, 92, 246, 0.4), 0 0 50px rgba(6, 182, 212, 0.2)"
                    }}
                  >
                    <item.icon className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                  </motion.div>
                </motion.div>
                
                <motion.h3 
                  className="text-xl font-semibold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ delay: 0.5 + index * 0.15 }}
                >
                  {item.title}
                </motion.h3>
                
                <motion.p 
                  className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed"
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 0.9, y: 0 } : { opacity: 0, y: 15 }}
                  transition={{ delay: 0.6 + index * 0.15 }}
                  whileHover={{ opacity: 1 }}
                >
                  {item.description}
                </motion.p>

                {/* Animated border pulse */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-transparent"
                  whileHover={{
                    borderColor: "rgba(139, 92, 246, 0.5)",
                    transition: { duration: 0.3 }
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        >
          <motion.div 
            className="inline-flex items-center gap-6 flex-wrap justify-center"
          >
            <motion.button 
              className="relative px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl font-semibold text-white shadow-lg overflow-hidden group"
              variants={buttonVariants}
              custom={0}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover="hover"
              whileTap="tap"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute inset-0 bg-white/20 rounded-xl opacity-0"
                whileHover={{ 
                  opacity: [0, 0.2, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10">Let's Work Together</span>
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl blur opacity-30 group-hover:opacity-50"
              />
            </motion.button>
            
            <motion.button 
              className="relative px-8 py-4 border-2 border-purple-500/50 text-white rounded-xl font-semibold group overflow-hidden"
              variants={buttonVariants}
              custom={1}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover="hover"
              whileTap="tap"
            >
              <motion.div
                className="absolute inset-0 bg-purple-500/20 opacity-0 group-hover:opacity-100"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute inset-0 border-2 border-purple-400/0 rounded-xl"
                whileHover={{ 
                  borderColor: "rgba(168, 85, 247, 0.8)",
                  boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)"
                }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">View Resume</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;