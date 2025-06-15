import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    setScrolled(scrollY > 20);
  }, []);

  useEffect(() => {
    setIsMounted(true);
    

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


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

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
    
    // Check if we're on the home page (/ or any path that doesn't contain /project/ or other routes)
    const currentPath = window.location.pathname;
    const isHomePage = currentPath === '/' || currentPath === '';
    
    if (isHomePage) {
    
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
    } else {
      // If on different route (like /project/:id), navigate to home page first
      // Store the section we want to scroll to
      sessionStorage.setItem('scrollToSection', sectionId);
      
    
      window.location.href = '/';
    }
    
    setIsOpen(false);
  };

  // Check if we need to scroll to a section after page load (for navigation from other routes)
  useEffect(() => {
    const sectionToScroll = sessionStorage.getItem('scrollToSection');
    if (sectionToScroll && window.location.pathname === '/') {
      // Wait a bit for the page to fully load
      setTimeout(() => {
        const element = document.getElementById(sectionToScroll);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
        sessionStorage.removeItem('scrollToSection');
      }, 500);
    }
  }, []);

  const handleLogoClick = (e) => {
    e.preventDefault();
    // Clear any pending section scroll
    sessionStorage.removeItem('scrollToSection');
    // Navigate to home page
    window.location.href = '/';
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
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
          scrolled 
            ? 'bg-black/20 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/5' 
            : 'bg-transparent'
        }`}
        style={{
          backdropFilter: scrolled ? 'blur(12px) saturate(150%)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(12px) saturate(150%)' : 'none',
        }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16 lg:h-18">
            
            {/* Logo - Adjusted alignment to match hero section "H" */}
            <div className="flex-shrink-0 z-10 ml-2 sm:ml-4 lg:ml-8 xl:ml-12">
              <a href="/" onClick={handleLogoClick} className="relative group cursor-pointer">
                <div className="text-lg md:pl-20 sm:text-xl lg:text-2xl xl:text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent transition-all duration-300 group-hover:scale-105 drop-shadow-lg">
                  <span className="font-mono tracking-tight">{"<Lean/>"}</span>
                </div>
                <div className="absolute md:pl-20W -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100 rounded-full"></div>
              </a>
            </div>

            {/* Desktop Navigation - Positioned towards the right */}
            <div className="hidden md:flex flex-1 justify-end">
              <div className="flex items-center space-x-1 lg:space-x-4 xl:space-x-8 mr-4 lg:mr-8">
                {navItems.map((item, index) => (
                  <a
                    key={item}
                    href={`/#${item.toLowerCase()}`}
                    onClick={(e) => handleNavClick(item, e)}
                    className="relative group px-2 lg:px-4 py-2 text-sm lg:text-base xl:text-lg text-white/90 hover:text-white transition-all duration-300 font-medium"
                    style={{
                      textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                    }}
                  >
                    <span className="relative z-10 tracking-wide">{item}</span>
                    <div className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-3/4 group-hover:left-1/8 transition-all duration-300 rounded-full"></div>
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile menu button - Enhanced with better touch targets */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="relative inline-flex items-center justify-center p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-transparent backdrop-blur-sm"
                style={{
                  textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                }}
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
          } bg-black/80 backdrop-blur-xl border-b border-white/20`}
        >
          <div className="px-4 py-6 space-y-2 max-h-[calc(100vh-4rem)] overflow-y-auto">
            {navItems.map((item, index) => (
              <a
                key={item}
                href={`/#${item.toLowerCase()}`}
                onClick={(e) => handleNavClick(item, e)}
                className={`block px-4 py-4 text-lg font-medium text-white/90 hover:text-white transition-all duration-300 transform hover:translate-x-2 hover:scale-105 ${
                  isOpen ? `animate-fade-in-up` : ''
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'both',
                  textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="tracking-wide">{item}</span>
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </a>
            ))}
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
          background: rgba(255, 255, 255, 0.1);
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