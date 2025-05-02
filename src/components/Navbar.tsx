
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <motion.header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 p-4 md:px-8",
        scrolled ? "bg-photo-dark/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto flex items-center justify-between">
        <motion.div 
          className="text-2xl md:text-3xl font-bold"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-gradient">LensCraft</span>
        </motion.div>
        
        <nav className="hidden md:flex items-center space-x-8">
          {["Gallery", "About", "Services", "Contact"].map((item, index) => (
            <motion.a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-white transition-colors relative py-2"
              whileHover={{ y: -2 }}
              custom={index}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.3 + index * 0.1,
                ease: "easeOut"
              }}
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-photo-purple transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </nav>
        
        <div className="flex md:hidden">
          <button 
            className="p-2 text-gray-300 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
            onClick={toggleMobileMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-photo-dark/95 backdrop-blur-md mt-4 rounded-lg shadow-lg overflow-hidden"
          >
            <div className="container mx-auto py-4 px-4">
              <nav className="flex flex-col space-y-4">
                {["Gallery", "About", "Services", "Contact"].map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-white transition-colors py-2 px-4 rounded-md hover:bg-photo-gray/20"
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    {item}
                  </motion.a>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
