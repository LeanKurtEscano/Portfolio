import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { certifications } from '../constants/certification';
import useParticles from '../hooks/useParticles';

const Certifications = () => {
  const mountRef = useRef(null);
  const canvasRef = useParticles();

  
  const handleCardClick = (verifyUrl) => {
    window.open(verifyUrl, '_blank', 'noopener,noreferrer');
  };

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.2, // controls the cascade timing (adjust as needed)
      ease: "easeOut"
    }
  })
};




  // Animation variants
  const containerVariants = {
  hidden: {
    opacity: 0,
    x: -50,
    y: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    }
  }
};


 

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    }
  };

  return (
    <div id="certifications" className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
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
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={headerVariants}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2 mb-6"
            variants={badgeVariants}
          >
            <Award className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm font-medium">Professional Certifications</span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Certifications &
            <span className="bg-gradient-to-r pb-4 from-purple-400 to-cyan-400 bg-clip-text text-transparent block">
              Training
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Continuously expanding my expertise through industry-recognized certifications 
            and specialized training programs in cutting-edge technologies.
          </motion.p>
          
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </motion.div>

        {/* Certifications Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.2 }}
  variants={containerVariants}
        >
          {certifications.map((cert, index) => (
            <motion.div
                 key={cert.id}
    custom={index}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={cardVariants}
    className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 cursor-pointer"
    onClick={() => handleCardClick(cert.verifyUrl)}

            >
              {/* Certificate Image */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                
                {/* Verify Button */}
                <motion.button
                  className="absolute top-4 right-4 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full p-2"
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ 
                    opacity: 1, 
                    scale: 1,
                    backgroundColor: "rgba(168, 85, 247, 0.3)"
                  }}
                  transition={{ duration: 0.3 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCardClick(cert.verifyUrl);
                  }}
                >
                  <ExternalLink className="w-4 h-4 text-purple-300" />
                </motion.button>
              </div>

              {/* Certificate Details */}
              <div className="p-6">
                <motion.div 
                  className="flex items-center gap-2 text-sm text-gray-400 mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  <Calendar className="w-4 h-4" />
                  <span>{cert.date}</span>
                </motion.div>
                
                <motion.h3 
                  className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {cert.title}
                </motion.h3>
                
                <motion.p 
                  className="text-gray-300 mb-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  {cert.issuer}
                </motion.p>
                
                <motion.div 
                  className="text-xs text-gray-500 font-mono"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  ID: {cert.credentialId}
                </motion.div>

                {/* Hover Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              {/* Click indicator */}
              <motion.div
                className="absolute bottom-4 right-4 text-purple-400 opacity-0 group-hover:opacity-100"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                <ExternalLink className="w-5 h-5" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating action indicator */}
       
      </div>
    </div>
  );
};

export default Certifications;