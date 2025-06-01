
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Code, Layers, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import { programmingLanguages, toolsPlatforms, aitools, frameworksLibraries } from '../constants/skills';
const Skills = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current || sceneRef.current) return;

    // Scene setup for 3D background
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create floating code-like geometries
    const geometry1 = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const geometry2 = new THREE.ConeGeometry(0.3, 0.8, 6);
    const geometry3 = new THREE.CylinderGeometry(0.2, 0.4, 0.6, 8);

    const material1 = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.3
    });
    const material2 = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.25
    });
    const material3 = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      wireframe: true,
      transparent: true,
      opacity: 0.2
    });

    const meshes = [];
    for (let i = 0; i < 8; i++) {
      const geometry = [geometry1, geometry2, geometry3][i % 3];
      const material = [material1, material2, material3][i % 3];
      const mesh = new THREE.Mesh(geometry, material);

      mesh.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10
      );

      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      scene.add(mesh);
      meshes.push(mesh);
    }

    camera.position.z = 8;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      meshes.forEach((mesh, index) => {
        mesh.rotation.x += 0.005 + (index * 0.001);
        mesh.rotation.y += 0.007 + (index * 0.0005);
        mesh.position.y += Math.sin(Date.now() * 0.001 + index) * 0.001;
      });

      renderer.render(scene, camera);
    };

    animate();
    sceneRef.current = scene;

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Default data arrays for each category
 

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: programmingLanguages,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-500/10 to-pink-500/10'
    },
    {
      title: 'Frameworks & Libraries',
      icon: Layers,
      skills: frameworksLibraries,
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'from-cyan-500/10 to-blue-500/10'
    },
    {
      title: 'AI Tools & Platforms',
      icon: Layers,
      skills: aitools,
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'from-cyan-500/10 to-blue-500/10'
    },
    {
      title: 'Tools & Platforms',
      icon: Settings,
      skills: toolsPlatforms,
      color: 'from-green-500 to-teal-500',
      bgColor: 'from-green-500/10 to-teal-500/10'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-black via-gray-900 to-purple-900 relative overflow-hidden">

      <div ref={mountRef} className="absolute inset-0 z-0" />

      <div className="absolute inset-0 pt-60 opacity-10 z-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >

          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 rounded-full text-sm text-purple-300 backdrop-blur-sm">
              Technical Skills
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              My Technical Arsenal
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit spanning full-stack development, AI integration,
            and modern deployment technologies
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="space-y-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              {/* Category Header */}
              <div className="text-center">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${category.bgColor}`}>
                    <category.icon className={`w-6 h-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="group relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    {/* 3D Card Effect */}
                    <div className="relative transform-gpu transition-all duration-300 hover:scale-110 hover:-translate-y-2 perspective-1000">
                      <div className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50 backdrop-blur-md hover:border-purple-500/50 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-purple-500/20">
                        {/* Skill Icon */}
                        <div className="text-center space-y-4">
                          <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-gray-700/50 to-gray-800/50 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300 group-hover:rotate-6">
                            <img
                              src={skill.image}
                              alt={skill.name}
                              className="w-12 h-12 object-contain"
                            />
                          </div>

                          <h4 className="text-lg font-semibold text-white group-hover:text-purple-200 transition-colors duration-300">
                            {skill.name}
                          </h4>
                        </div>

                        {/* Hover Glow Effect */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${category.bgColor} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}></div>

                        {/* 3D Shadow */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 rounded-2xl transform translate-y-1 group-hover:translate-y-2 transition-transform duration-300 -z-20"></div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-8 p-6 rounded-2xl bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm">
            <div className="text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {programmingLanguages.length + frameworksLibraries.length + toolsPlatforms.length}+
              </div>
              <div className="text-gray-400 text-sm">Technologies</div>
            </div>
            <div className="w-px h-12 bg-gray-600"></div>
            <div className="text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                AI/ML
              </div>
              <div className="text-gray-400 text-sm">Integration</div>
            </div>
            <div className="w-px h-12 bg-gray-600"></div>
            <div className="text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Full-Stack
              </div>
              <div className="text-gray-400 text-sm">Development</div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .group:hover .floating {
          animation: float 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;