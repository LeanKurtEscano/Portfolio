import React, { useState } from 'react';
import * as THREE from 'three';
import useParticles from '../hooks/useParticles';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState as useReactState } from 'react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const canvasRef = useParticles();
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;  
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  console.log(serviceId)
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false });

  const [animationKey, setAnimationKey] = useReactState(0);

  useEffect(() => {
    if (isInView) {
      setAnimationKey(prev => prev + 1); 
    }
  }, [isInView]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        name: formData.name,           
        email: formData.email,        
        title: formData.subject || 'New Contact Form Message',
        message: formData.message,     
        time: new Date().toLocaleString()
      };

      const result = await emailjs.send(
        serviceId,
        templateId,      
        templateParams,
        publicKey
      );

      console.log('EmailJS result:', result);
      console.log('Email sent successfully:', result);
      setSubmitStatus('success');
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(''), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetToForm = () => {
    setIsSuccess(false);
    setSubmitStatus('');

  };

 
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        when: "beforeChildren",
      }
    },
  };

 
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  
  const SuccessMessage = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-12"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6"
      >
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </motion.div>
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-2xl font-semibold text-white mb-3"
      >
        Message Sent Successfully!
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-gray-300 mb-6"
      >
        Thank you for reaching out! I'll get back to you within 24 hours.
      </motion.p>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        onClick={resetToForm}
        className="px-6 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
      >
        Send Another Message
      </motion.button>
    </motion.div>
  );

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-gray-900 overflow-hidden"
    >
    
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      />

    
      <motion.div
        key={animationKey} 
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="relative z-10 container mx-auto px-6 py-20"
      >
        <motion.div variants={childVariants} className="max-w-4xl mx-auto">
      
          <motion.div variants={childVariants} className="text-center mb-16">
            <div className="inline-block">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text text-sm font-medium tracking-wider uppercase mb-4 block">
                Get In Touch
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Let's Build Something
              <span className="bg-gradient-to-r pb-11 from-purple-400 via-pink-400 to-cyan-400 text-transparent bg-clip-text block">
                Amazing Together
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Ready to bring your ideas to life with cutting-edge AI integration and modern web technologies? 
              I'm here to help you create intelligent, performant applications.
            </p>
          </motion.div>

          <motion.div variants={childVariants} className="grid md:grid-cols-2 gap-12 items-start">
          
            <motion.div variants={childVariants} className="space-y-8">
              <motion.div variants={childVariants} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
                <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <p className="text-white font-medium">leankurtescano@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Location</p>
                      <p className="text-white font-medium">Philippines</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Response Time</p>
                      <p className="text-white font-medium">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </motion.div>

          
              <motion.div variants={childVariants} className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30">
                <h4 className="text-lg font-semibold text-white mb-4">Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {['RAG Systems', 'LangChain', 'React', 'TypeScript', 'Three.js', 'AI Integration'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>

           
            <motion.div variants={childVariants} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300">
              {isSuccess ? (
                <SuccessMessage />
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                      placeholder="Subject"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                      placeholder="Write your message..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                    className={`w-full py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] ${
                      isSubmitting ? 'animate-pulse' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      'Send Message'
                    )}
                  </button>

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-red-500/20 border border-red-500/30 rounded-lg p-4"
                    >
                      <p className="text-red-400 text-center">Failed to send message. Please try again.</p>
                    </motion.div>
                  )}
                </form>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactSection;