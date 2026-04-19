import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'contact', label: 'Contact' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={clsx(
        "fixed top-0 w-full z-50 transition-all duration-300", 
        hasScrolled ? 'bg-[#111111]/80 backdrop-blur-lg border-b border-slate-700' : 'bg-transparent'
    )}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-xl text-emerald-400">Alamin Hossain</div> 
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="font-medium text-slate-300 hover:text-emerald-400 transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="p-2 rounded-lg text-slate-300 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden absolute top-[64px] left-0 w-full bg-[#111111]/95 backdrop-blur-lg rounded-b-lg shadow-xl overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="flex flex-col items-center space-y-2 py-4">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="block w-full text-center py-2 text-lg text-slate-300"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}