import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { certifications } from '../constants/certification';
import useParticles from '../hooks/useParticles';
const Certifications = () => {
  const mountRef = useRef(null);
  const canvasRef = useParticles();
  
 
 
  return (
    <div id = "certifications" className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
      {/* Three.js Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      />
      

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