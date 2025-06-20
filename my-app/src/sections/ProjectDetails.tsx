import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Calendar, Tag, Star, Code2, Layers, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import { projectsData } from '../constants';

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const projectId = parseInt(id || '0');
  const project = projectsData.find(p => p.id === projectId);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    if (!project) {
      navigate('/');
    }
  }, [project, navigate]);

  const handleBackClick = () => {
    navigate('/');
    // Use setTimeout to ensure navigation completes before scrolling
    setTimeout(() => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };


    const handleContact = () => {
    navigate('/');
    // Use setTimeout to ensure navigation completes before scrolling
    setTimeout(() => {
      const projectsSection = document.getElementById('contact');
      if (projectsSection) {
        projectsSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  if (!project) {
    return (
      <motion.div 
        className="min-h-screen bg-gray-900 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="text-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-white mb-4">Project Not Found</h2>
          <motion.button 
            onClick={() => navigate('/')}
            className="bg-purple-600 cursor-pointer hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to Projects
          </motion.button>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="min-h-screen bg-gray-900"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-purple-900/20 to-cyan-900/20 py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-cyan-600/5"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Back Button */}
          <motion.button
            onClick={handleBackClick}
            className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 mb-8 transition-colors group"
            variants={itemVariants}
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Projects</span>
          </motion.button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Project Info */}
            <motion.div variants={slideInLeft}>
              <motion.div 
                className="flex items-center space-x-4 mb-6"
                variants={itemVariants}
              >
                <motion.span 
                  className="bg-purple-500/20 text-purple-400 px-4 py-2 rounded-full text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                >
                  {project.category}
                </motion.span>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Calendar size={16} />
                  <span>{project.completionDate}</span>
                </div>
                {project.featured && (
                  <motion.div 
                    className="flex items-center space-x-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                  >
                    <Star size={14} />
                    <span>Featured</span>
                  </motion.div>
                )}
              </motion.div>

              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-white mb-6"
                variants={itemVariants}
              >
                {project.name}
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-300 mb-8 leading-relaxed"
                variants={itemVariants}
              >
                {project.shortDescription}
              </motion.p>

              {/* Action Buttons */}

             
              <motion.div 
                className="flex flex-wrap gap-4"
                variants={staggerContainer}
              >

                 {project.liveUrl !== "https://example.com" && (
                 <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={20} />
                  <span>View Live Demo</span>
                </motion.a>
              )}
               
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors border border-gray-600"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={20} />
                  <span>View Code</span>
                </motion.a>
              </motion.div>


            </motion.div>

            {/* Project Image/Preview */}
            <motion.div 
              className="relative"
              variants={slideInRight}
            >
              <motion.div 
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8 overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {project.img ? (
                  <motion.img 
                    src={project.img} 
                    alt={project.name}
                    className="w-full h-80 object-cover rounded-lg"
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                ) : (
                  <motion.div 
                    className="h-80 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="text-center">
                      <motion.div 
                        className="text-8xl mb-4 opacity-20"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                      >
                        🚀
                      </motion.div>
                      <p className="text-gray-400">Project Preview</p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
              
              {/* Decorative Elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              ></motion.div>
              <motion.div 
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl"
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              ></motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <motion.div 
        className="max-w-6xl mx-auto px-6 py-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <motion.div 
            className="lg:col-span-2 space-y-12"
            variants={staggerContainer}
          >
            {/* Project Description */}
            <motion.section variants={itemVariants}>
              <motion.h2 
                className="text-3xl font-bold text-white mb-6 flex items-center"
                whileHover={{ x: 5 }}
              >
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-lg mr-4 flex items-center justify-center">
                  <Layers size={20} className="text-white" />
                </div>
                Project Overview
              </motion.h2>
              <motion.div 
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
                whileHover={{ borderColor: 'rgba(168, 85, 247, 0.3)' }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-gray-300 text-lg leading-relaxed">
                  {project.shortDescription}
                </p>
              </motion.div>
            </motion.section>

            {/* Technology Stack Detailed */}
            <motion.section variants={itemVariants}>
              <motion.h2 
                className="text-3xl font-bold text-white mb-6 flex items-center"
                whileHover={{ x: 5 }}
              >
                <Code2 className="text-green-400 mr-4" size={32} />
                Technology Stack
              </motion.h2>
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                variants={staggerContainer}
              >
                {project.technologies.map((tech, index) => (
                  <motion.div 
                    key={index} 
                    className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 hover:border-purple-500/30 transition-colors"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center space-x-4">
                      <motion.img 
                        src={tech.icon} 
                        alt={tech.name}
                        className="w-10 h-10 object-contain"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      />
                      <div>
                        <h4 className="text-white font-semibold">{tech.name}</h4>
                        <p className="text-gray-400 text-sm">
                          {getTechDescription(tech.name)}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Project Highlights */}
            <motion.section variants={itemVariants}>
              <motion.h2 
                className="text-3xl font-bold text-white mb-6 flex items-center"
                whileHover={{ x: 5 }}
              >
                <Rocket className="text-yellow-400 mr-4" size={32} />
                Project Highlights
              </motion.h2>
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={staggerContainer}
              >
                {getProjectHighlights(project).map((highlight, index) => (
                  <motion.div 
                    key={index} 
                    className="bg-gradient-to-br from-gray-800/50 to-gray-700/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -2 }}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-start space-x-3">
                      <motion.div 
                        className="w-3 h-3 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mt-2 flex-shrink-0"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      ></motion.div>
                      <p className="text-gray-300 text-lg">{highlight}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>
          </motion.div>

          {/* Sidebar */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Technologies */}
            <motion.div 
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50"
              whileHover={{ borderColor: 'rgba(168, 85, 247, 0.3)' }}
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Tag className="text-purple-400 mr-2" size={20} />
                Technologies
              </h3>
              <motion.div 
                className="flex flex-wrap gap-2"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {project.technologies.map((tech, index) => (
                  <motion.span 
                    key={index} 
                    className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600/50"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(168, 85, 247, 0.2)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tech.name}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            {/* Project Stats */}
            <motion.div 
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50"
              whileHover={{ borderColor: 'rgba(168, 85, 247, 0.3)' }}
            >
              <h3 className="text-xl font-bold text-white mb-4">Project Details</h3>
              <motion.div 
                className="space-y-4"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <motion.div 
                  className="flex justify-between items-center"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <span className="text-gray-400">Category</span>
                  <span className="text-purple-400 font-semibold">{project.category}</span>
                </motion.div>
                <motion.div 
                  className="flex justify-between items-center"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <span className="text-gray-400">Completion</span>
                  <span className="text-green-400 font-semibold">{project.completionDate}</span>
                </motion.div>
                <motion.div 
                  className="flex justify-between items-center"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <span className="text-gray-400">Status</span>
                  <span className="text-cyan-400 font-semibold">Completed</span>
                </motion.div>
                {project.featured && (
                  <motion.div 
                    className="flex justify-between items-center"
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-gray-400">Featured</span>
                    <span className="bg-gradient-to-r from-purple-500 to-cyan-400 text-transparent bg-clip-text font-semibold">Yes</span>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>

            {/* CTA */}
            <motion.div 
              className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 rounded-2xl p-6 border border-purple-500/20"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold text-white mb-3">Interested in similar work?</h3>
              <p className="text-gray-300 mb-4 text-sm">
                Let's discuss how I can help bring your ideas to life with cutting-edge technology.
              </p>
              <motion.button 
              onClick={handleContact}
                className="w-full cursor-pointer bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white py-3 rounded-lg font-semibold transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Other Projects */}
      <motion.div 
        className="max-w-6xl mx-auto px-6 pb-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
          <motion.h3 
            className="text-2xl font-bold text-white mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Explore Other Projects
          </motion.h3>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {projectsData
              .filter(p => p.id !== projectId)
              .map((otherProject, index) => (
                <motion.div
                  key={otherProject.id}
                  onClick={() => navigate(`/project/${otherProject.id}`)}
                  className="bg-gray-700/30 rounded-xl p-6 cursor-pointer hover:bg-gray-700/50 transition-all duration-300 border border-gray-600/30 hover:border-purple-500/30"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  custom={index}
                >
                  {otherProject.img && (
                    <motion.img 
                      src={otherProject.img} 
                      alt={otherProject.name}
                      className="w-full h-32 object-cover rounded-lg mb-4"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {otherProject.name}
                  </h4>
                  <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                    {otherProject.shortDescription.substring(0, 100)}...
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-purple-400 text-sm font-medium">
                      {otherProject.category}
                    </span>
                    <motion.span 
                      className="text-cyan-400 text-sm"
                      whileHover={{ x: 5 }}
                    >
                      View Project →
                      
                    </motion.span>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Helper function to get technology descriptions
const getTechDescription = (techName: string): string => {
  const descriptions: { [key: string]: string } = {
    'React': 'Frontend Library',
    'React.Js': 'Frontend Library',
    'Next.js': 'React Framework',
    'Tailwind CSS': 'CSS Framework',
    'Typescript': 'Type-safe JavaScript',
    'Django': 'Python Web Framework',
    'FastAPI': 'Modern Python API',
    'Postgres': 'SQL Database',
    'Langchain': 'LLM Framework',
    'Pinecone': 'Vector Database',
    'Ollama': 'Local LLM Runtime',
    'HuggingFace': 'ML Model Hub',
    'Pandas': 'Data Analysis'
  };
  return descriptions[techName] || 'Technology';
};

// Helper function to generate project highlights based on the project
const getProjectHighlights = (project: any): string[] => {
  const highlights: string[] = [];
  
  // Add highlights based on project name and technologies
  if (project.name.includes('QualitySense')) {
    highlights.push(
      'AI-powered data quality detection and analysis',
      'Automated report generation with actionable insights',
      'Comprehensive missing value and outlier detection',
      'User-friendly interface for data professionals'
    );
  } else if (project.name.includes('Commision')) {
    highlights.push(
      'Real-time commission calculation and tracking',
      'Dynamic agent hierarchy management',
      'Automated commission distribution system',
      'Enhanced operational transparency'
    );
  } else if (project.name.includes('Tuloan')) {
    highlights.push(
      'Complete loan lifecycle management',
      'Real-time WebSocket notifications',
      'Automated interest and penalty calculations',
      'Comprehensive admin dashboard'
    );
  } else if (project.name.includes('Docubot')) {
    highlights.push(
      'Natural language PDF interaction',
      'Advanced RAG implementation',
      'Vector-based document search',
      'Intelligent content chunking and embedding'
    );
  } else {
    // Generic highlights
    highlights.push(
      'Modern and responsive user interface',
      'Scalable architecture and clean code',
      'Comprehensive feature implementation',
      'Production-ready deployment'
    );
  }
  
  return highlights;
};

export default ProjectDetails;