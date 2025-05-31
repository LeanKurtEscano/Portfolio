import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

 
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create floating geometric shapes
    const geometries = [
      new THREE.OctahedronGeometry(0.5),
      new THREE.TetrahedronGeometry(0.6),
      new THREE.IcosahedronGeometry(0.4)
    ];

    const materials = [
      new THREE.MeshBasicMaterial({ color: 0x8b5cf6, wireframe: true, opacity: 0.3, transparent: true }),
      new THREE.MeshBasicMaterial({ color: 0x06b6d4, wireframe: true, opacity: 0.4, transparent: true }),
      new THREE.MeshBasicMaterial({ color: 0x10b981, wireframe: true, opacity: 0.2, transparent: true })
    ];

    const meshes = [];
    for (let i = 0; i < 8; i++) {
      const geometry = geometries[i % geometries.length];
      const material = materials[i % materials.length];
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

    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      meshes.forEach((mesh, index) => {
        mesh.rotation.x += 0.005 + index * 0.001;
        mesh.rotation.y += 0.003 + index * 0.0005;
        mesh.position.y += Math.sin(Date.now() * 0.001 + index) * 0.002;
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
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  const certifications = [
    {
      id: 1,
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2024",
      image: "https://via.placeholder.com/300x200/1f2937/8b5cf6?text=AWS+Certified",
      credentialId: "AWS-CSA-2024-001",
      verifyUrl: "#"
    },
    {
      id: 2,
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2023",
      image: "https://via.placeholder.com/300x200/1f2937/06b6d4?text=GCP+Developer",
      credentialId: "GCP-PD-2023-002",
      verifyUrl: "#"
    },
    {
      id: 3,
      title: "Microsoft Azure AI Engineer",
      issuer: "Microsoft",
      date: "2023",
      image: "https://via.placeholder.com/300x200/1f2937/10b981?text=Azure+AI",
      credentialId: "AZ-102-2023-003",
      verifyUrl: "#"
    },
    {
      id: 4,
      title: "Kubernetes Certified Developer",
      issuer: "Cloud Native Computing Foundation",
      date: "2024",
      image: "https://via.placeholder.com/300x200/1f2937/f59e0b?text=K8s+Developer",
      credentialId: "CKAD-2024-004",
      verifyUrl: "#"
    },
    {
      id: 5,
      title: "TensorFlow Developer Certificate",
      issuer: "TensorFlow",
      date: "2023",
      image: "https://via.placeholder.com/300x200/1f2937/ef4444?text=TF+Developer",
      credentialId: "TF-DEV-2023-005",
      verifyUrl: "#"
    },
    {
      id: 6,
      title: "React Advanced Patterns",
      issuer: "Meta",
      date: "2024",
      image: "https://via.placeholder.com/300x200/1f2937/8b5cf6?text=React+Advanced",
      credentialId: "META-REACT-2024-006",
      verifyUrl: "#"
    }
  ];

  return (
    <div id = "certifications" className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
      {/* Three.js Background */}
      <div ref={mountRef} className="absolute inset-0 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2 mb-6">
            <Award className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm font-medium">Professional Certifications</span>
          </div>
          
          <h1 className="text-5xl  md:text-6xl font-bold text-white mb-6">
            Certifications &
            <span className="bg-gradient-to-r pb-4 from-purple-400 to-cyan-400 bg-clip-text text-transparent block">
              Training
            </span>
          </h1>
          
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Continuously expanding my expertise through industry-recognized certifications 
            and specialized training programs in cutting-edge technologies.
          </p>
          
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105"
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: 'fadeInUp 0.8s ease-out forwards'
              }}
            >
              {/* Certificate Image */}
              <div className="relative overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                
                {/* Verify Button */}
                <button
                  onClick={() => window.open(cert.verifyUrl, '_blank')}
                  className="absolute top-4 right-4 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-purple-500/30"
                >
                  <ExternalLink className="w-4 h-4 text-purple-300" />
                </button>
              </div>

              {/* Certificate Details */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{cert.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                  {cert.title}
                </h3>
                
                <p className="text-gray-300 mb-3">
                  {cert.issuer}
                </p>
                
                <div className="text-xs text-gray-500 font-mono">
                  ID: {cert.credentialId}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300">
            <div className="text-4xl font-bold text-purple-400 mb-2">15+</div>
            <div className="text-gray-300">Professional Certifications</div>
          </div>
          
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300">
            <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
            <div className="text-gray-300">Hours of Training</div>
          </div>
          
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300">
            <div className="text-4xl font-bold text-green-400 mb-2">100%</div>
            <div className="text-gray-300">Pass Rate</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Certifications;