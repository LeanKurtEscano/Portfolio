import React from 'react';
import * as THREE from 'three';
import { ExternalLink, Github } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

// Mock project data for demonstration
const projectsData = [
  {
    id: 1,
    name: "AI-Powered Chat Platform",
    shortDescription: "A real-time chat application with intelligent message suggestions and sentiment analysis powered by machine learning algorithms.",
    category: "Full Stack",
    completionDate: "2024",
    featured: true,
    technologies: [
      { name: "React", icon: "⚛️" },
      { name: "Node.js", icon: "🟢" },
      { name: "WebSocket", icon: "🔌" },
      { name: "TensorFlow", icon: "🧠" }
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: 2,
    name: "Smart E-commerce Dashboard",
    shortDescription: "An analytics dashboard for e-commerce businesses with predictive insights, inventory management, and automated reporting features.",
    category: "Dashboard",
    completionDate: "2024",
    featured: false,
    technologies: [
      { name: "Vue.js", icon: "💚" },
      { name: "Python", icon: "🐍" },
      { name: "Chart.js", icon: "📊" },
      { name: "PostgreSQL", icon: "🐘" }
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: 3,
    name: "Blockchain Voting System",
    shortDescription: "A secure and transparent voting platform built on blockchain technology with smart contracts and real-time result verification.",
    category: "Blockchain",
    completionDate: "2023",
    featured: true,
    technologies: [
      { name: "Solidity", icon: "⛓️" },
      { name: "Web3.js", icon: "🌐" },
      { name: "React", icon: "⚛️" },
      { name: "Ethereum", icon: "💎" }
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: 4,
    name: "Neural Network Visualizer",
    shortDescription: "An interactive tool for visualizing and understanding neural network architectures with real-time training progress and layer analysis.",
    category: "AI/ML",
    completionDate: "2023",
    featured: false,
    technologies: [
      { name: "Three.js", icon: "🎮" },
      { name: "D3.js", icon: "📈" },
      { name: "Python", icon: "🐍" },
      { name: "FastAPI", icon: "⚡" }
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  }
];

const Projects: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationIdRef = useRef<number | null>(null);
  const [isInView, setIsInView] = useState(false);

  const handleProjectClick = (projectId: number) => {
    console.log(`Navigate to project ${projectId}`);
  };

  useEffect(() => {
    if (!mountRef.current || sceneRef.current) return;

    // Scene setup for 3D background
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.zIndex = '1';
    renderer.domElement.style.pointerEvents = 'none';
    
    mountRef.current.appendChild(renderer.domElement);

    // Create floating geometries with better positioning
    const geometries = [
      new THREE.BoxGeometry(0.8, 0.8, 0.8),
      new THREE.ConeGeometry(0.4, 1.2, 6),
      new THREE.CylinderGeometry(0.3, 0.5, 0.8, 8),
      new THREE.OctahedronGeometry(0.6),
      new THREE.TetrahedronGeometry(0.7)
    ];

    const materials = [
      new THREE.MeshBasicMaterial({
        color: 0x8b5cf6,
        wireframe: true,
        transparent: true,
        opacity: 0.4
      }),
      new THREE.MeshBasicMaterial({
        color: 0x06b6d4,
        wireframe: true,
        transparent: true,
        opacity: 0.35
      }),
      new THREE.MeshBasicMaterial({
        color: 0x10b981,
        wireframe: true,
        transparent: true,
        opacity: 0.3
      }),
      new THREE.MeshBasicMaterial({
        color: 0xf59e0b,
        wireframe: true,
        transparent: true,
        opacity: 0.25
      }),
      new THREE.MeshBasicMaterial({
        color: 0xef4444,
        wireframe: true,
        transparent: true,
        opacity: 0.2
      })
    ];

    const meshes: THREE.Mesh[] = [];
    const initialPositions: THREE.Vector3[] = [];

    // Create more distributed objects
    for (let i = 0; i < 12; i++) {
      const geometry = geometries[i % geometries.length];
      const material = materials[i % materials.length];
      const mesh = new THREE.Mesh(geometry, material);

      // Better distribution across the screen
      const angle = (i / 12) * Math.PI * 2;
      const radius = 8 + Math.random() * 6;
      const x = Math.cos(angle) * radius + (Math.random() - 0.5) * 4;
      const y = Math.sin(angle) * radius + (Math.random() - 0.5) * 4;
      const z = (Math.random() - 0.5) * 15;

      mesh.position.set(x, y, z);
      
      // Store initial position for floating animation
      initialPositions.push(mesh.position.clone());

      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      // Add random scale variation
      const scale = 0.7 + Math.random() * 0.6;
      mesh.scale.setScalar(scale);

      scene.add(mesh);
      meshes.push(mesh);
    }

    camera.position.z = 12;

    // Enhanced animation with smoother movement
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      const time = Date.now() * 0.001;

      meshes.forEach((mesh, index) => {
        // Smooth rotation
        mesh.rotation.x += 0.003 + (index * 0.0008);
        mesh.rotation.y += 0.005 + (index * 0.0006);
        mesh.rotation.z += 0.002 + (index * 0.0004);

        // Floating animation
        const initialPos = initialPositions[index];
        mesh.position.y = initialPos.y + Math.sin(time + index * 0.5) * 0.8;
        mesh.position.x = initialPos.x + Math.cos(time * 0.7 + index * 0.3) * 0.5;

        // Subtle pulsing effect
        const pulse = 1 + Math.sin(time * 2 + index) * 0.1;
        mesh.scale.setScalar((0.7 + (index % 3) * 0.2) * pulse);

        // Fade in/out based on z position
        const material = mesh.material as THREE.MeshBasicMaterial;
        const baseOpacity = [0.4, 0.35, 0.3, 0.25, 0.2][index % 5];
        material.opacity = baseOpacity * (0.7 + Math.sin(time + index) * 0.3);
      });

      renderer.render(scene, camera);
    };

    animate();
    sceneRef.current = scene;
    rendererRef.current = renderer;

    // Handle resize
    const handleResize = () => {
      if (!camera || !renderer) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Intersection Observer for performance
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (mountRef.current) {
      observer.observe(mountRef.current);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      // Cleanup Three.js resources
      meshes.forEach(mesh => {
        if (mesh.geometry) mesh.geometry.dispose();
        if (mesh.material) {
          if (Array.isArray(mesh.material)) {
            mesh.material.forEach(mat => mat.dispose());
          } else {
            mesh.material.dispose();
          }
        }
      });
      
      renderer.dispose();
      sceneRef.current = null;
      rendererRef.current = null;
    };
  }, []);

  // Pause animation when not in view for performance
  useEffect(() => {
    if (rendererRef.current) {
      rendererRef.current.domElement.style.display = isInView ? 'block' : 'none';
    }
  }, [isInView]);

  return (
    <section id="projects" className="min-h-screen  bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-20 px-6 relative overflow-hidden">
      <div ref={mountRef} className="absolute inset-0 z-0" />
      
      {/* Enhanced background gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl opacity-15 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-emerald-500 rounded-full filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-purple-500/20 text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-4 backdrop-blur-sm border border-purple-500/20">
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
              className="group relative bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden hover:border-purple-500/50 transition-all duration-500 cursor-pointer transform hover:scale-[1.02] hover:bg-gray-800/50"
              onClick={() => handleProjectClick(project.id)}
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              {/* Project Image/Preview */}
              <div className="relative h-64 bg-gradient-to-br from-purple-900/20 to-cyan-900/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-cyan-600/10"></div>
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm border border-purple-500/20">
                    {project.category}
                  </span>
                </div>
                
                {/* Enhanced project preview */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 group-hover:scale-110 transform transition-transform">
                    {project.category === 'Full Stack' ? '🚀' : 
                     project.category === 'Dashboard' ? '📊' : 
                     project.category === 'Blockchain' ? '⛓️' : '🧠'}
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                  <div className="flex space-x-4">
                    <button
                      className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.githubUrl, '_blank');
                      }}
                    >
                      <Github size={20} />
                    </button>
                    <button
                      className="bg-cyan-600 hover:bg-cyan-700 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
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
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                    {project.name}
                  </h3>
                  <span className="text-gray-500 text-sm">{project.completionDate}</span>
                </div>

                <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {project.shortDescription}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="flex items-center space-x-2 bg-gray-700/50 px-3 py-2 rounded-lg border border-gray-600/50 hover:border-gray-500/50 transition-colors duration-300"
                      >
                        <span className="text-lg">{tech.icon}</span>
                        <span className="text-sm text-gray-300 font-medium">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* View Details Button */}
                <div className="flex items-center justify-between">
                  <button className="text-purple-400 hover:text-purple-300 font-medium flex items-center space-x-2 group-hover:translate-x-2 transition-all duration-300">
                    <span>View Details</span>
                    <ExternalLink size={16} />
                  </button>

                  {project.featured && (
                    <span className="bg-gradient-to-r from-purple-500 to-cyan-400 text-transparent bg-clip-text font-semibold text-sm animate-pulse">
                      Featured
                    </span>
                  )}
                </div>
              </div>

              {/* Enhanced decorative elements */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            Want to see more projects or discuss a collaboration?
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm border border-purple-500/20">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;