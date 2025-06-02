import React, { useState, useRef, useEffect } from 'react';
import * as THREE from 'three';
import useParticles from '../hooks/useParticles';
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const canvasRef = useParticles();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
   
      const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio');
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      
      const mailtoLink = `mailto:leankurtescano@gmail.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(''), 3000);
    }
  };

  return (
    <section id = "contact" className="relative min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-gray-900 overflow-hidden">
      {/* Three.js Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      />
      

      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
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
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
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
              </div>

              {/* Skills Preview */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30">
                <h4 className="text-lg font-semibold text-white mb-4">Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {['RAG Systems', 'LangChain', 'React', 'TypeScript', 'Three.js', 'AI Integration'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
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
                    placeholder="Project Discussion"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                  className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-purple-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-purple-500/25"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
              
              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-green-300 text-center">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-300 text-center">
                  Something went wrong. Please try again or email me directly.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;