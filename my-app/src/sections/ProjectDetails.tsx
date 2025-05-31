import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Calendar, Tag, CheckCircle, Lightbulb, Target } from 'lucide-react';

import { projectsData } from './Projects';

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const projectId = parseInt(id || '0');
  const project = projectsData.find(p => p.id === projectId);

  useEffect(() => {
    if (!project) {
      navigate('/');
    }
  }, [project, navigate]);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Project Not Found</h2>
          <button 
            onClick={() => navigate('/')}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
   
      <div className="relative bg-gradient-to-br from-purple-900/20 to-cyan-900/20 py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-cyan-600/5"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
         
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 mb-8 transition-colors group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Projects</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <span className="bg-purple-500/20 text-purple-400 px-4 py-2 rounded-full text-sm font-medium">
                  {project.category}
                </span>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Calendar size={16} />
                  <span>{project.completionDate}</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {project.name}
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {project.description}
              </p>

         
              <div className="flex flex-wrap gap-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  <ExternalLink size={20} />
                  <span>View Live Demo</span>
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors border border-gray-600"
                >
                  <Github size={20} />
                  <span>View Code</span>
                </a>
              </div>
            </div>

         
            <div className="relative">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8 h-80 flex items-center justify-center">
             
                <div className="text-center">
                  <div className="text-8xl mb-4 opacity-20">🚀</div>
                  <p className="text-gray-400">Project Preview</p>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>


      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
         
          <div className="lg:col-span-2 space-y-12">
          
            <section>
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-lg mr-4"></div>
                Project Overview
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                {project.details.overview}
              </p>
            </section>

       
            <section>
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <CheckCircle className="text-green-400 mr-4" size={32} />
                Key Features
              </h2>
              <div className="space-y-4">
                {project.details.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-300 text-lg">{feature}</p>
                  </div>
                ))}
              </div>
            </section>

          
            <section>
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Target className="text-orange-400 mr-4" size={32} />
                Challenges & Solutions
              </h2>
              <div className="space-y-4">
                {project.details.challenges.map((challenge, index) => (
                  <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-300 text-lg">{challenge}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

     
            <section>
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Lightbulb className="text-yellow-400 mr-4" size={32} />
                Key Learnings
              </h2>
              <div className="space-y-4">
                {project.details.learnings.map((learning, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-300 text-lg">{learning}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

     
          <div className="space-y-8">
          
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Tag className="text-purple-400 mr-2" size={20} />
                Technologies
              </h3>
              <div className="space-y-3">
                {project.technologies.map((tech, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-700/30 rounded-lg">
                    <span className="text-2xl">{tech.icon}</span>
                    <span className="text-gray-300 font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

        
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-bold text-white mb-4">Project Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Category</span>
                  <span className="text-purple-400 font-semibold">{project.category}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Completion</span>
                  <span className="text-green-400 font-semibold">{project.completionDate}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Status</span>
                  <span className="text-cyan-400 font-semibold">Live</span>
                </div>
                {project.featured && (
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Featured</span>
                    <span className="bg-gradient-to-r from-purple-500 to-cyan-400 text-transparent bg-clip-text font-semibold">Yes</span>
                  </div>
                )}
              </div>
            </div>

         
            <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 rounded-2xl p-6 border border-purple-500/20">
              <h3 className="text-xl font-bold text-white mb-3">Interested in similar work?</h3>
              <p className="text-gray-300 mb-4 text-sm">
                Let's discuss how I can help bring your ideas to life with cutting-edge technology.
              </p>
              <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>

     
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Explore Other Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectsData
              .filter(p => p.id !== projectId)
              .map(otherProject => (
                <div
                  key={otherProject.id}
                  onClick={() => navigate(`/project/${otherProject.id}`)}
                  className="bg-gray-700/30 rounded-xl p-6 cursor-pointer hover:bg-gray-700/50 transition-colors border border-gray-600/30 hover:border-purple-500/30"
                >
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {otherProject.name}
                  </h4>
                  <p className="text-gray-400 text-sm mb-3">
                    {otherProject.shortDescription}
                  </p>
                  <span className="text-purple-400 text-sm font-medium">
                    View Project →
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;