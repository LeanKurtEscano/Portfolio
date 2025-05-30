import React from 'react';
import { Code, Database, Brain, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Building end-to-end web applications with modern frameworks and best practices"
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "Implementing RAG systems, LangChain workflows, and intelligent features"
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Designing scalable data pipelines and vector databases for AI applications"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Creating fast, responsive applications with optimal user experiences"
    }
  ];

  return (
    <section id="about" className="py-20  bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 rounded-full text-sm text-purple-300 backdrop-blur-sm">
              About Me
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              Crafting Intelligent Web Experiences
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                I'm a passionate full-stack developer who specializes in bridging the gap between 
                traditional web development and cutting-edge AI technologies. With expertise in 
                <span className="text-purple-400 font-semibold"> RAG (Retrieval-Augmented Generation)</span> and 
                <span className="text-cyan-400 font-semibold"> LangChain</span>, I create intelligent 
                applications that understand and interact with users in meaningful ways.
              </p>
              
              <p>
                My journey began with traditional web development, but I quickly became fascinated 
                by the potential of AI integration. Today, I build applications that not only look 
                great and perform well, but also leverage artificial intelligence to provide 
                personalized, context-aware experiences.
              </p>

              <p>
                Whether it's implementing semantic search, building chatbots with retrieval capabilities, 
                or creating data pipelines for ML models, I love solving complex problems at the 
                intersection of web development and artificial intelligence.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-700">
              {[
                { number: "50+", label: "Projects Completed" },
                { number: "3+", label: "Years Experience" },
                { number: "15+", label: "AI Integrations" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                    <item.icon className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-semibold text-white hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300">
              Let's Work Together
            </button>
            <button className="px-8 py-4 border-2 border-purple-500/50 text-white rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300">
              View Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;