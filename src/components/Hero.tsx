
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const cameraRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cameraRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate mouse position as a percentage
      const x = clientX / innerWidth - 0.5;
      const y = clientY / innerHeight - 0.5;
      
      // Apply rotation based on mouse position
      cameraRef.current.style.transform = `
        perspective(1000px)
        rotateY(${x * 10}deg)
        rotateX(${-y * 10}deg)
      `;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-photo-dark flex flex-col items-center justify-center py-20">
      {/* Background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-photo-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-photo-teal/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-between gap-10">
        <motion.div 
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Capture the <span className="text-gradient">Extraordinary</span>
          </motion.h1>
          
          <motion.p 
            className="text-gray-300 text-lg md:text-xl mb-8 max-w-xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Immerse yourself in a world of stunning visual storytelling through our lens. Where moments become memories and images speak volumes.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button className="px-8 py-3 bg-photo-purple text-white font-medium rounded-md hover:bg-photo-purple/90 transition-all shadow-md hover:shadow-lg hover:shadow-photo-purple/20">
              View Gallery
            </button>
            <button className="px-8 py-3 bg-transparent border border-photo-teal text-photo-teal font-medium rounded-md hover:bg-photo-teal/10 transition-all">
              Learn More
            </button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="flex-1 perspective-1000"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div ref={cameraRef} className="relative transition-all duration-200 ease-out preserve-3d">
            {/* Camera viewfinder frame */}
            <div className="w-full max-w-md mx-auto">
              <div className="relative rounded-lg border-8 border-photo-gray overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-black/20 z-10"></div>
                
                {/* Viewfinder grid lines */}
                <div className="absolute inset-0 z-20 pointer-events-none">
                  <div className="absolute left-1/3 top-0 bottom-0 w-px bg-white/30"></div>
                  <div className="absolute right-1/3 top-0 bottom-0 w-px bg-white/30"></div>
                  <div className="absolute top-1/3 left-0 right-0 h-px bg-white/30"></div>
                  <div className="absolute bottom-1/3 left-0 right-0 h-px bg-white/30"></div>
                  
                  <div className="absolute top-0 left-0 right-0 bottom-0 border-2 border-white/30 m-8 rounded"></div>
                </div>
                
                {/* Focus point */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 z-20">
                  <div className="w-full h-full border-2 border-photo-purple/70 rounded-full animate-pulse-soft"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-photo-purple/70 rounded-full"></div>
                </div>
                
                {/* Main image */}
                <img 
                  src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05" 
                  alt="Mountain landscape photography" 
                  className="w-full aspect-[4/3] object-cover"
                />
                
                {/* Camera UI elements */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between text-white text-xs z-20">
                  <div className="bg-black/50 px-2 py-1 rounded">ISO 100</div>
                  <div className="bg-black/50 px-2 py-1 rounded">f/2.8</div>
                  <div className="bg-black/50 px-2 py-1 rounded">1/125s</div>
                </div>
              </div>
              
              {/* Camera body suggestion */}
              <div className="h-16 bg-gradient-to-b from-photo-gray to-photo-dark rounded-b-lg shadow-lg relative">
                <div className="absolute right-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-photo-gray flex items-center justify-center border-2 border-photo-light-gray">
                  <div className="w-8 h-8 rounded-full bg-photo-dark"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <a 
          href="#gallery" 
          className="flex flex-col items-center text-gray-400 hover:text-white transition-colors"
        >
          <span className="mb-2">Scroll Down</span>
          <div className="animate-bounce w-6 h-6">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
