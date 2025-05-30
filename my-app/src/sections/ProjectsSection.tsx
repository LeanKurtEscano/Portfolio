import React, { useState, useRef, useEffect } from 'react';
import * as THREE from 'three';

interface Technology {
  name: string;
  icon: string;
  color: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  technologies: Technology[];
  images: string[];
  demoUrl?: string;
  githubUrl?: string;
  features: string[];
  challenges: string;
  solution: string;
}

const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const frameRef = useRef<number>();

  const projects: Project[] = [
    {
      id: '1',
      title: 'AI-Powered E-Commerce Platform',
      shortDescription: 'Intelligent shopping experience with personalized recommendations using RAG architecture',
      description: 'A comprehensive e-commerce platform that leverages Retrieval-Augmented Generation (RAG) to provide personalized product recommendations, intelligent search capabilities, and AI-powered customer support. The platform analyzes user behavior, preferences, and purchase history to deliver highly targeted shopping experiences.',
      technologies: [
        { name: 'React', icon: '⚛️', color: '#61DAFB' },
        { name: 'TypeScript', icon: '🔷', color: '#3178C6' },
        { name: 'Python', icon: '🐍', color: '#3776AB' },
        { name: 'LangChain', icon: '🦜', color: '#00D4AA' },
        { name: 'PostgreSQL', icon: '🐘', color: '#336791' },
        { name: 'Docker', icon: '🐳', color: '#2496ED' }
      ],
      images: ['/api/placeholder/800/400', '/api/placeholder/800/400', '/api/placeholder/800/400'],
      demoUrl: 'https://demo-ecommerce.com',
      githubUrl: 'https://github.com/yourusername/ai-ecommerce',
      features: [
        'AI-powered product recommendations',
        'Intelligent search with semantic understanding',
        'Real-time inventory management',
        'Personalized user dashboards',
        'Advanced analytics and reporting'
      ],
      challenges: 'The main challenge was implementing real-time RAG systems that could process large product catalogs while maintaining sub-second response times for user queries.',
      solution: 'Implemented a hybrid architecture combining vector databases with traditional SQL, using Redis for caching and WebSockets for real-time updates.'
    },
    {
      id: '2',
      title: 'Smart Document Processing System',
      shortDescription: 'Automated document analysis and extraction using advanced NLP and computer vision',
      description: 'An enterprise-grade document processing system that automatically extracts, categorizes, and processes various document types. Uses advanced OCR, NLP, and machine learning to understand document structure and extract meaningful data with high accuracy.',
      technologies: [
        { name: 'Next.js', icon: '▲', color: '#000000' },
        { name: 'Python', icon: '🐍', color: '#3776AB' },
        { name: 'OpenCV', icon: '👁️', color: '#5C3EE8' },
        { name: 'TensorFlow', icon: '🧠', color: '#FF6F00' },
        { name: 'FastAPI', icon: '⚡', color: '#009688' },
        { name: 'MongoDB', icon: '🍃', color: '#47A248' }
      ],
      images: ['/api/placeholder/800/400', '/api/placeholder/800/400', '/api/placeholder/800/400'],
      demoUrl: 'https://demo-docprocessing.com',
      githubUrl: 'https://github.com/yourusername/smart-docs',
      features: [
        'Multi-format document support (PDF, images, scanned docs)',
        'Intelligent data extraction and categorization',
        'Batch processing capabilities',
        'RESTful API for integration',
        'Real-time processing status tracking'
      ],
      challenges: 'Handling various document formats and qualities while maintaining high accuracy in data extraction, especially with handwritten or low-quality scanned documents.',
      solution: 'Developed a multi-stage processing pipeline with preprocessing, multiple OCR engines, and post-processing validation using custom-trained models.'
    },
    {
      id: '3',
      title: 'Real-Time Collaboration Suite',
      shortDescription: 'Multi-user collaborative workspace with real-time synchronization and AI assistance',
      description: 'A comprehensive collaboration platform that enables teams to work together in real-time on documents, whiteboards, and projects. Features AI-powered suggestions, smart notifications, and seamless integration with popular productivity tools.',
      technologies: [
        { name: 'React', icon: '⚛️', color: '#61DAFB' },
        { name: 'Node.js', icon: '💚', color: '#339933' },
        { name: 'Socket.io', icon: '🔌', color: '#010101' },
        { name: 'Redis', icon: '🔴', color: '#DC382D' },
        { name: 'GraphQL', icon: '📡', color: '#E10098' },
        { name: 'AWS', icon: '☁️', color: '#FF9900' }
      ],
      images: ['/api/placeholder/800/400', '/api/placeholder/800/400', '/api/placeholder/800/400'],
      demoUrl: 'https://demo-collab.com',
      githubUrl: 'https://github.com/yourusername/collab-suite',
      features: [
        'Real-time collaborative editing',
        'Interactive whiteboard with drawing tools',
        'AI-powered content suggestions',
        'Team chat and video calls',
        'Project management tools'
      ],
      challenges: 'Ensuring data consistency across multiple concurrent users while maintaining real-time performance and handling network interruptions gracefully.',
      solution: 'Implemented operational transformation algorithms with conflict resolution, combined with optimistic UI updates and robust reconnection mechanisms.'
    }
  ];

  // Three.js background animation
  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create floating geometric shapes
    const geometry = new THREE.IcosahedronGeometry(1, 0);
    const material = new THREE.MeshBasicMaterial({ 
      color: 0x8B5CF6, 
      wireframe: true,
      transparent: true,
      opacity: 0.3
    });

    const shapes: THREE.Mesh[] = [];
    for (let i = 0; i < 8; i++) {
      const shape = new THREE.Mesh(geometry, material);
      shape.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );
      shape.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      shapes.push(shape);
      scene.add(shape);
    }

    camera.position.z = 10;
    sceneRef.current = scene;
    rendererRef.current = renderer;

    // Animation loop
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      
      shapes.forEach((shape, index) => {
        shape.rotation.x += 0.005 + index * 0.001;
        shape.rotation.y += 0.003 + index * 0.001;
        shape.position.y += Math.sin(Date.now() * 0.001 + index) * 0.002;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <div 
      onClick={() => setSelectedProject(project)}
      className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
      
      <div className="relative z-10">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-300 mb-4 leading-relaxed">
          {project.shortDescription}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-slate-700/50 text-sm rounded-full text-gray-300 border border-slate-600/50 hover:border-purple-500/50 transition-colors"
              style={{ color: tech.color }}
            >
              <span className="mr-1">{tech.icon}</span>
              {tech.name}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-3 py-1 bg-slate-700/50 text-sm rounded-full text-gray-400 border border-slate-600/50">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>
        
        <div className="flex items-center text-purple-400 text-sm font-medium group-hover:text-purple-300">
          View Details
          <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );

  const ProjectDetail: React.FC<{ project: Project }> = ({ project }) => (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-slate-900 border-b border-slate-700 p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">{project.title}</h2>
          <button 
            onClick={() => setSelectedProject(null)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          {/* Project Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.images.map((image, index) => (
              <div key={index} className="aspect-video bg-slate-800 rounded-lg border border-slate-700 flex items-center justify-center">
                <span className="text-gray-400">Project Image {index + 1}</span>
              </div>
            ))}
          </div>
          
          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Project Overview</h3>
            <p className="text-gray-300 leading-relaxed">{project.description}</p>
          </div>
          
          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Technologies Used</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {project.technologies.map((tech, index) => (
                <div key={index} className="bg-slate-800 border border-slate-700 rounded-lg p-3 text-center hover:border-purple-500/50 transition-colors">
                  <div className="text-2xl mb-1">{tech.icon}</div>
                  <div className="text-sm text-gray-300">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Key Features</h3>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start text-gray-300">
                  <svg className="w-5 h-5 text-purple-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Challenges & Solution */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Challenges</h3>
              <p className="text-gray-300 leading-relaxed">{project.challenges}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Solution</h3>
              <p className="text-gray-300 leading-relaxed">{project.solution}</p>
            </div>
          </div>
          
          {/* Links */}
          <div className="flex gap-4 pt-4 border-t border-slate-700">
            {project.demoUrl && (
              <a 
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-slate-800 border border-slate-700 text-white rounded-lg hover:bg-slate-700 hover:border-slate-600 transition-all duration-300 flex items-center"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
                View Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative min-h-screen bg-slate-900 py-20">
      {/* Three.js Background */}
      <div ref={mountRef} className="absolute inset-0 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-6">
            My Projects
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of innovative solutions combining cutting-edge AI technologies with modern web development practices
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* View More Projects Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 border border-purple-500/50 text-purple-300 rounded-lg hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300 font-medium">
            View All Projects
          </button>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && <ProjectDetail project={selectedProject} />}
    </section>
  );
};

export default ProjectsSection;