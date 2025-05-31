import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';

// Mock project data
export const projectsData = [
  {
    id: 0,
    name: "AI-Powered Chat Application",
    description: "A real-time chat application with AI integration using RAG architecture for intelligent responses and context-aware conversations.",
    shortDescription: "Intelligent chat app with RAG integration for context-aware AI responses",
    technologies: [
      { name: "React", icon: "⚛️", color: "#61DAFB" },
      { name: "TypeScript", icon: "📘", color: "#3178C6" },
      { name: "Python", icon: "🐍", color: "#3776AB" },
      { name: "LangChain", icon: "🔗", color: "#00D4AA" },
      { name: "OpenAI", icon: "🤖", color: "#412991" },
      { name: "Node.js", icon: "🟢", color: "#339933" }
    ],
    image: "/api/placeholder/600/400",
    githubUrl: "https://github.com/yourusername/ai-chat-app",
    liveUrl: "https://ai-chat-app.vercel.app",
    category: "AI Integration",
    featured: true,
    completionDate: "2024",
    details: {
      overview: "This project demonstrates the integration of modern web technologies with AI capabilities, creating an intelligent chat application that can understand context and provide meaningful responses.",
      features: [
        "Real-time messaging with WebSocket integration",
        "RAG (Retrieval-Augmented Generation) for context-aware responses",
        "User authentication and session management",
        "Message history and conversation persistence",
        "Responsive design for mobile and desktop"
      ],
      challenges: [
        "Implementing efficient vector search for RAG",
        "Managing real-time state across multiple users",
        "Optimizing AI response times"
      ],
      learnings: [
        "Advanced React patterns for real-time applications",
        "Vector database integration and optimization",
        "AI model fine-tuning and prompt engineering"
      ]
    }
  },
  {
    id: 1,
    name: "E-Commerce Analytics Dashboard",
    description: "A comprehensive analytics dashboard for e-commerce platforms with real-time data visualization, performance metrics, and predictive analytics.",
    shortDescription: "Real-time analytics dashboard with predictive insights for e-commerce",
    technologies: [
      { name: "React", icon: "⚛️", color: "#61DAFB" },
      { name: "TypeScript", icon: "📘", color: "#3178C6" },
      { name: "Go", icon: "🔷", color: "#00ADD8" },
      { name: "PostgreSQL", icon: "🐘", color: "#336791" },
      { name: "Redis", icon: "🔴", color: "#DC382D" },
      { name: "Chart.js", icon: "📊", color: "#FF6384" }
    ],
    image: "/api/placeholder/600/400",
    githubUrl: "https://github.com/yourusername/ecommerce-dashboard",
    liveUrl: "https://ecommerce-dashboard.vercel.app",
    category: "Full Stack",
    featured: true,
    completionDate: "2024",
    details: {
      overview: "A powerful analytics platform that helps e-commerce businesses make data-driven decisions through comprehensive metrics, real-time monitoring, and predictive analytics.",
      features: [
        "Real-time sales and traffic monitoring",
        "Customer behavior analytics and segmentation",
        "Inventory management with predictive restocking",
        "Revenue forecasting using machine learning",
        "Customizable dashboard widgets"
      ],
      challenges: [
        "Handling large datasets with optimal performance",
        "Implementing real-time data streaming",
        "Creating intuitive data visualizations"
      ],
      learnings: [
        "Advanced data processing techniques in Go",
        "Real-time data streaming with WebSockets",
        "Performance optimization for large datasets"
      ]
    }
  }
];

const Projects: React.FC = () => {
  const navigate = useNavigate();

  const handleProjectClick = (projectId: number) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <section id="projects" className="min-h-screen  bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 px-6">
        <div className="absolute inset-0 pt-60 opacity-10 z-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        
        <div className="text-center mb-16">
          <div className="inline-block bg-purple-500/20 text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            My Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A showcase of intelligent web applications that bridge traditional development 
            with cutting-edge AI technologies
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mt-8"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden hover:border-purple-500/50 transition-all duration-500 cursor-pointer transform hover:scale-[1.02]"
              onClick={() => handleProjectClick(project.id)}
            >
              {/* Project Image/Preview */}
              <div className="relative h-64 bg-gradient-to-br from-purple-900/20 to-cyan-900/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-cyan-600/10"></div>
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                {/* Placeholder for project preview */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-20">🚀</div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <button 
                      className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.githubUrl, '_blank');
                      }}
                    >
                      <Github size={20} />
                    </button>
                    <button 
                      className="bg-cyan-600 hover:bg-cyan-700 text-white p-3 rounded-full transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.liveUrl, '_blank');
                      }}
                    >
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    {project.name}
                  </h3>
                  <span className="text-gray-500 text-sm">{project.completionDate}</span>
                </div>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="flex items-center space-x-2 bg-gray-700/50 px-3 py-2 rounded-lg border border-gray-600/50"
                      >
                        <span className="text-lg">{tech.icon}</span>
                        <span className="text-sm text-gray-300 font-medium">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* View Details Button */}
                <div className="flex items-center justify-between">
                  <button className="text-purple-400 hover:text-purple-300 font-medium flex items-center space-x-2 group-hover:translate-x-2 transition-transform">
                    <span>View Details</span>
                    <ExternalLink size={16} />
                  </button>
                  
                  {project.featured && (
                    <span className="bg-gradient-to-r from-purple-500 to-cyan-400 text-transparent bg-clip-text font-semibold text-sm">
                      Featured
                    </span>
                  )}
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            Want to see more projects or discuss a collaboration?
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;