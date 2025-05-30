import React from 'react';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

// Types
interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: Array<{
    name: string;
    icon: string;
    color: string;
  }>;
  liveUrl?: string;
  githubUrl?: string;
  features: string[];
  challenges: string[];
  gallery: string[];
}

interface ProjectDetailPageProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ project, onBack }) => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center text-purple-400 hover:text-cyan-400 transition-colors mb-8 group"
        >
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </button>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div className="relative">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-80 object-cover rounded-xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-xl"></div>
          </div>
          
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {project.title}
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {project.fullDescription}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              {project.liveUrl && (
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 group"
                >
                  <ExternalLink size={18} className="mr-2 group-hover:scale-110 transition-transform" />
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-8 py-3 border border-gray-600 rounded-lg font-semibold hover:border-purple-400 hover:bg-gray-800/50 transition-all duration-300 group"
                >
                  <Github size={18} className="mr-2 group-hover:rotate-12 transition-transform" />
                  View Code
                </a>
              )}
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gray-800/30 rounded-lg border border-gray-700">
                <div className="text-2xl font-bold text-purple-400">{project.technologies.length}</div>
                <div className="text-sm text-gray-400">Technologies</div>
              </div>
              <div className="text-center p-4 bg-gray-800/30 rounded-lg border border-gray-700">
                <div className="text-2xl font-bold text-cyan-400">{project.features.length}</div>
                <div className="text-sm text-gray-400">Features</div>
              </div>
              <div className="text-center p-4 bg-gray-800/30 rounded-lg border border-gray-700">
                <div className="text-2xl font-bold text-green-400">{project.gallery.length}</div>
                <div className="text-sm text-gray-400">Screenshots</div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Features & Challenges */}
          <div className="lg:col-span-2 space-y-8">
            {/* Features Section */}
            <div className="bg-gray-800/30 rounded-xl p-8 border border-gray-700">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg mr-3"></span>
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-150 transition-transform"></div>
                    <span className="text-gray-300 group-hover:text-white transition-colors">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges Section */}
            <div className="bg-gray-800/30 rounded-xl p-8 border border-gray-700">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg mr-3"></span>
                Technical Challenges
              </h2>
              <div className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start p-4 bg-gray-900/50 rounded-lg border border-gray-600 hover:border-cyan-400/50 transition-colors group">
                    <div className="w-6 h-6 flex items-center justify-center bg-cyan-400/20 rounded-full mr-3 flex-shrink-0 group-hover:bg-cyan-400/30 transition-colors">
                      <span className="text-cyan-400 text-sm font-bold">{index + 1}</span>
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technologies Sidebar */}
          <div className="space-y-6">
            <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700 sticky top-24">
              <h2 className="text-2xl font-bold mb-6">Technologies Used</h2>
              <div className="space-y-4">
                {project.technologies.map((tech, index) => (
                  <div 
                    key={tech.name}
                    className="flex items-center p-4 bg-gray-900/50 rounded-lg border border-gray-600 hover:border-purple-400/50 transition-all duration-300 group cursor-pointer"
                    style={{ 
                      animationDelay: `${index * 100}ms`,
                      animation: 'fadeInUp 0.6s ease-out forwards'
                    }}
                  >
                    <span className="text-3xl mr-4 group-hover:scale-110 transition-transform">{tech.icon}</span>
                    <div className="flex-1">
                      <div className="font-semibold text-white group-hover:text-purple-400 transition-colors">
                        {tech.name}
                      </div>
                      <div 
                        className="w-full h-1 bg-gray-700 rounded-full mt-2 overflow-hidden"
                      >
                        <div 
                          className="h-full rounded-full transition-all duration-1000 group-hover:w-full"
                          style={{ 
                            backgroundColor: tech.color,
                            width: '70%'
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Project Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((image, index) => (
                <div 
                  key={index}
                  className="relative group overflow-hidden rounded-xl border border-gray-700 hover:border-purple-400/50 transition-all duration-300"
                >
                  <img 
                    src={image} 
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-semibold">Screenshot {index + 1}</p>
                      <p className="text-gray-300 text-sm">Click to view full size</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-2xl p-12 border border-gray-700">
          <h3 className="text-2xl font-bold mb-4">Interested in Similar Projects?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            I'd love to discuss how I can help bring your ideas to life with cutting-edge technologies and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
              Get In Touch
            </button>
            <button 
              onClick={onBack}
              className="px-8 py-3 border border-gray-600 rounded-lg font-semibold hover:border-purple-400 transition-colors"
            >
              View More Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;