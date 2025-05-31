import React, { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  technologies: string[];
  achievements?: string[];
}

const WorkExperience: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const timelineRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const experiences: Experience[] = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      duration: "2022 - Present",
      description: [
        "Led development of AI-powered web applications using RAG architecture",
        "Implemented LangChain workflows for intelligent document processing",
        "Built scalable microservices handling 1M+ daily requests"
      ],
      technologies: ["React", "Node.js", "Python", "LangChain", "PostgreSQL", "Docker"],
      achievements: [
        "Reduced processing time by 60% through AI optimization",
        "Led team of 5 developers on critical projects"
      ]
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "InnovateLab",
      location: "New York, NY",
      duration: "2020 - 2022",
      description: [
        "Developed responsive web applications with modern JavaScript frameworks",
        "Integrated third-party APIs and payment processing systems",
        "Collaborated with UX/UI designers to implement pixel-perfect designs"
      ],
      technologies: ["Vue.js", "Express.js", "MongoDB", "AWS", "TypeScript"],
      achievements: [
        "Delivered 15+ projects on time and under budget",
        "Improved application performance by 40%"
      ]
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "StartupXYZ",
      location: "Austin, TX",
      duration: "2018 - 2020",
      description: [
        "Built interactive user interfaces using React and modern CSS",
        "Implemented responsive designs for mobile and desktop platforms",
        "Collaborated with backend developers to integrate RESTful APIs"
      ],
      technologies: ["React", "JavaScript", "SCSS", "Redux", "Git"],
      achievements: [
        "Increased user engagement by 35%",
        "Mentored 3 junior developers"
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.getAttribute('data-id') || '0');
            setVisibleItems(prev => new Set([...prev, id]));
          }
        });
      },
      { threshold: 0.3 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 py-20 px-4 relative overflow-hidden">
     
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-purple-500 rotate-45"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 border border-cyan-400 rotate-12"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-600 opacity-20 blur-xl rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto relative">
       
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-purple-600 bg-opacity-20 rounded-full mb-4">
            <span className="text-purple-300 text-sm font-medium">Professional Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work Experience
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A journey through innovative projects and cutting-edge technologies
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mt-6"></div>
        </div>

      
        <div className="relative" ref={timelineRef}>
          
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-cyan-400 to-purple-500 opacity-50"></div>
          
        
          <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50" 
               style={{ top: '0px', animation: 'float 3s ease-in-out infinite' }}></div>

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              ref={el => itemRefs.current[index] = el}
              data-id={exp.id}
              className={`relative mb-16 transition-all duration-1000 ${
                visibleItems.has(exp.id) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
            >
           
              <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-slate-900 transition-all duration-500 ${
                visibleItems.has(exp.id) ? 'bg-cyan-400 shadow-lg shadow-cyan-400/50' : 'bg-gray-600'
              }`}></div>

              
              <div className={`flex ${index % 2 === 0 ? 'justify-start pr-8' : 'justify-end pl-8'}`}>
                <div className={`w-full max-w-lg ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                  <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-xl hover:shadow-purple-500/10 transition-all duration-300 hover:border-purple-500/30">
            
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-purple-600 bg-opacity-20 text-purple-300 text-sm rounded-full">
                        {exp.company}
                      </span>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.duration}
                      </div>
                    </div>

                  
                    <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                    
               
                    <div className="flex items-center text-gray-400 mb-4">
                      <MapPin className="w-4 h-4 mr-1" />
                      {exp.location}
                    </div>

                    <div className="mb-4">
                      {exp.description.map((desc, i) => (
                        <p key={i} className="text-gray-300 mb-2 text-sm leading-relaxed">
                          • {desc}
                        </p>
                      ))}
                    </div>

                    
                    {exp.achievements && (
                      <div className="mb-4">
                        <h4 className="text-purple-300 font-semibold mb-2 text-sm">Key Achievements:</h4>
                        {exp.achievements.map((achievement, i) => (
                          <p key={i} className="text-cyan-300 text-sm mb-1">
                            ★ {achievement}
                          </p>
                        ))}
                      </div>
                    )}

                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-slate-700 text-cyan-300 text-xs rounded border border-slate-600 hover:border-cyan-400 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full text-white font-medium hover:from-purple-700 hover:to-cyan-600 transition-all cursor-pointer group">
            <span>View Full Resume</span>
            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateX(-50%) translateY(0px); }
          50% { transform: translateX(-50%) translateY(-10px); }
        }
      `}</style>
    </section>
  );
};

export default WorkExperience;