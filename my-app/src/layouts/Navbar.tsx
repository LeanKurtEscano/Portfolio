import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Throttled scroll handler for better performance
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    setScrolled(scrollY > 20);
  }, []);

  useEffect(() => {
    setIsMounted(true);
    
    // Throttle scroll events for performance
    let timeoutId = null;
    const throttledScroll = () => {
      if (timeoutId === null) {
        timeoutId = setTimeout(() => {
          handleScroll();
          timeoutId = null;
        }, 10);
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [handleScroll]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navItems = ['Home', 'About', 'Projects', 'Certifications', 'Contact'];

  const handleNavClick = (item, e) => {
    e.preventDefault();
    const sectionId = item.toLowerCase();
    const element = document.getElementById(sectionId);
    
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  // Prevent render flash
  if (!isMounted) {
    return null;
  }

  return (
    <>
      {/* Backdrop overlay for mobile menu */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
          scrolled 
            ? 'bg-black/95 backdrop-blur-xl border-b border-purple-500/30 shadow-2xl shadow-purple-500/10' 
            : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16 lg:h-18">
            
            {/* Logo - Responsive sizing and positioning */}
            <div className="flex-shrink-0 z-10">
              <div className="relative group cursor-pointer">
                <div className="text-lg  sm:text-xl lg:text-2xl xl:text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent transition-all duration-300 group-hover:scale-105">
                  <span className="font-mono tracking-tight">{"<Lean />"}</span>
                </div>
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100 rounded-full"></div>
              </div>
            </div>

            {/* Desktop Navigation - Positioned towards the right */}
            <div className="hidden md:flex flex-1 justify-end">
              <div className="flex items-center space-x-1 lg:space-x-4 xl:space-x-8 mr-4 lg:mr-8">
                {navItems.map((item, index) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => handleNavClick(item, e)}
                    className="relative group px-2 lg:px-4 py-2 text-sm lg:text-base xl:text-lg text-gray-300 hover:text-white transition-all duration-300 font-medium rounded-lg"
                  >
                    <span className="relative z-10 tracking-wide">{item}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/20 to-cyan-600/0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105"></div>
                    <div className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-3/4 group-hover:left-1/8 transition-all duration-300 rounded-full"></div>
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile menu button - Enhanced with better touch targets */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="relative inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-white hover:bg-purple-600/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                aria-expanded={isOpen}
                aria-label="Toggle navigation menu"
              >
                <div className="relative w-6 h-6">
                  <Menu 
                    className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                      isOpen ? 'opacity-0 rotate-180 scale-75' : 'opacity-100 rotate-0 scale-100'
                    }`} 
                  />
                  <X 
                    className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                      isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-75'
                    }`} 
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation - Full-screen overlay design */}
        <div 
          className={`md:hidden fixed top-14 sm:top-16 left-0 right-0 transition-all duration-500 ease-out transform ${
            isOpen 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-4 pointer-events-none'
          } bg-black/98 backdrop-blur-xl border-b border-purple-500/30`}
        >
          <div className="px-4 py-6 space-y-2 max-h-[calc(100vh-4rem)] overflow-y-auto">
            {navItems.map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleNavClick(item, e)}
                className={`block px-4 py-4 text-lg font-medium text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-600/30 hover:to-cyan-600/30 rounded-xl transition-all duration-300 transform hover:translate-x-2 hover:scale-105 ${
                  isOpen ? `animate-fade-in-up` : ''
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'both'
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="tracking-wide">{item}</span>
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </a>
            ))}
            
            {/* Mobile CTA - Removed */}
            
          </div>
        </div>
      </nav>

      {/* Add custom animations */}
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
          animation: fade-in-up 0.6s ease-out;
        }
        
        /* Smooth scrolling for the entire page */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar for mobile menu */
        .max-h-\\[calc\\(100vh-4rem\\)\\]::-webkit-scrollbar {
          width: 4px;
        }
        
        .max-h-\\[calc\\(100vh-4rem\\)\\]::-webkit-scrollbar-track {
          background: rgba(139, 92, 246, 0.1);
        }
        
        .max-h-\\[calc\\(100vh-4rem\\)\\]::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #8b5cf6, #06b6d4);
          border-radius: 2px;
        }
      `}</style>
    </>
  );
};

export default Navbar;