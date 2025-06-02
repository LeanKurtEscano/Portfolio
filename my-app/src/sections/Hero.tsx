import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import puge from '../assets/puge.jpg'; 

import { handleNavClick } from '../utils/nav';
const Hero = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // Reset animation when out of view to allow re-triggering
          setIsVisible(false);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!mountRef.current || sceneRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create floating geometric shapes
    const geometry1 = new THREE.OctahedronGeometry(1);
    const geometry2 = new THREE.TetrahedronGeometry(0.8);
    const geometry3 = new THREE.IcosahedronGeometry(0.6);

    const material1 = new THREE.MeshBasicMaterial({ 
      color: 0x8b5cf6, 
      wireframe: true,
      transparent: true,
      opacity: 0.6
    });
    const material2 = new THREE.MeshBasicMaterial({ 
      color: 0x06b6d4, 
      wireframe: true,
      transparent: true,
      opacity: 0.4
    });
    const material3 = new THREE.MeshBasicMaterial({ 
      color: 0x10b981, 
      wireframe: true,
      transparent: true,
      opacity: 0.5
    });

    const mesh1 = new THREE.Mesh(geometry1, material1);
    const mesh2 = new THREE.Mesh(geometry2, material2);
    const mesh3 = new THREE.Mesh(geometry3, material3);

    mesh1.position.set(-3, 2, -2);
    mesh2.position.set(3, -1, -3);
    mesh3.position.set(-2, -2, -1);

    scene.add(mesh1, mesh2, mesh3);

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 100;
    const posArray = new Float32Array(particlesCount * 3);

    for(let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 20;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.03,
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.8
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 5;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      mesh1.rotation.x += 0.01;
      mesh1.rotation.y += 0.01;
      mesh2.rotation.x += 0.008;
      mesh2.rotation.z += 0.01;
      mesh3.rotation.y += 0.012;
      mesh3.rotation.z += 0.008;

      particlesMesh.rotation.y += 0.002;

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

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-purple-900"
    >
      {/* Three.js Canvas */}
      <div ref={mountRef} className="absolute inset-0 z-0" />
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center min-h-[80vh] max-w-6xl mx-auto">
          {/* Text Content */}
          <div 
            className={`space-y-8 text-center lg:text-left order-2 lg:order-1 transition-all duration-1000 ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0 translate-x-0' 
                : 'opacity-0 translate-y-10 lg:translate-y-0 lg:-translate-x-10'
            }`}
          >
            <div className="space-y-6">
              <div 
                className={`inline-block transition-all duration-700 delay-200 ease-out ${
                  isVisible 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-95'
                }`}
              >
                <span className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 rounded-full text-sm text-purple-300 backdrop-blur-sm">
                  Full Stack Developer + AI Integration Specialist
                </span>
              </div>
              
              <h1 
                className={`text-4xl md:text-5xl xl:text-6xl font-bold leading-tight transition-all duration-1000 delay-300 ease-out ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <span className="block text-white mb-2">Hello, I'm</span>
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Lean Kurt Escano
                </span>
              </h1>
              
              <p 
                className={`text-lg md:text-xl text-gray-300 leading-relaxed transition-all duration-1000 delay-500 ease-out ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-6'
                }`}
              >
                Building intelligent web applications with{' '}
                <span className="text-purple-400 font-semibold">RAG</span>,{' '}
                <span className="text-cyan-400 font-semibold">LangChain</span>, and modern web technologies
              </p>
            </div>

            {/* CTA Buttons */}
            <div 
              className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-1000 delay-700 ease-out ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <button onClick={e => handleNavClick("projects",e)} className="group cursor-pointer relative px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105">
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-cyan-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="px-8 py-4 border-2 border-purple-500/50 text-white rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300 backdrop-blur-sm hover:scale-105">
                Download Resume
              </button>
            </div>

            {/* Social Links */}
            <div 
              className={`flex gap-6 justify-center lg:justify-start transition-all duration-1000 delay-900 ease-out ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-6'
              }`}
            >
              {[
                { icon: Github, href: 'https://github.com/LeanKurtEscano' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/leankurtescano/' },
                { icon: Mail, href: '#' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full border border-gray-700 text-gray-400 hover:text-white hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300 hover:scale-110 hover:rotate-12 ${
                    isVisible 
                      ? 'animate-fade-in-up' 
                      : ''
                  }`}
                  style={{ animationDelay: `${1000 + index * 100}ms` }}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Image Container */}
          <div 
            className={`flex justify-center lg:justify-end order-1 lg:order-2 transition-all duration-1000 delay-400 ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0 translate-x-0 scale-100' 
                : 'opacity-0 translate-y-10 lg:translate-y-0 lg:translate-x-10 scale-95'
            }`}
          >
            <div className="relative pb-5 w-full max-w-sm lg:max-w-md">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/30 backdrop-blur-sm p-6 hover:scale-105 transition-transform duration-500">
                <div className="w-full h-full bg-gray-800/50 rounded-xl overflow-hidden">
                  {/* Placeholder for image - replace with your actual image */}
                  
                  {/* Uncomment and use this when you have your image */}
                   <img src={puge} alt="Lean Kurt Escano" className="w-full h-full object-cover" /> 
                </div>
              </div>
              
              {/* Floating Elements */}
              <div 
                className={`absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full opacity-20 animate-pulse transition-all duration-1000 delay-600 ${
                  isVisible 
                    ? 'scale-100 opacity-20' 
                    : 'scale-0 opacity-0'
                }`}
              ></div>
              <div 
                className={`absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-cyan-500 to-green-500 rounded-full opacity-20 animate-pulse delay-1000 transition-all duration-1000 delay-800 ${
                  isVisible 
                    ? 'scale-100 opacity-20' 
                    : 'scale-0 opacity-0'
                }`}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 transition-all duration-1000 delay-1100 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="flex flex-col items-center space-y-2 text-gray-400">
          <span className="text-sm">Scroll to explore</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-5"></div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Hero;