
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const images = [
  {
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    title: "Foggy Mountains",
  },
  {
    src: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed",
    title: "Mountain Alps",
  },
  {
    src: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    title: "Aerial Landscape",
  },
  {
    src: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3",
    title: "Rocky Hillside",
  },
  {
    src: "https://images.unsplash.com/photo-1486718448742-163732cd1544",
    title: "Wave Formation",
  },
];

const AUTOPLAY_INTERVAL = 3000;

const PhotoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, AUTOPLAY_INTERVAL);

    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  const goToSlide = (index: number) => {
    resetTimeout();
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    resetTimeout();
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    resetTimeout();
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // 3D parallax effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      
      const mouseX = ((e.clientX - left) / width) - 0.5;
      const mouseY = ((e.clientY - top) / height) - 0.5;
      
      const carousel = containerRef.current.querySelector('.carousel-3d') as HTMLElement;
      if (carousel) {
        carousel.style.transform = `
          perspective(1000px)
          rotateY(${mouseX * 15}deg)
          rotateX(${-mouseY * 15}deg)
        `;
      }
    };
    
    const containerElement = containerRef.current;
    if (containerElement) {
      containerElement.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        containerElement.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-photo-dark to-photo-gray/30">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-3">
            Featured <span className="text-gradient">Collection</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Discover our most captivating shots in an immersive 3D carousel experience.
          </p>
        </motion.div>

        <div 
          className="max-w-5xl mx-auto"
          ref={containerRef}
        >
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="carousel-3d transition-transform duration-300 ease-out relative">
              <div className="relative h-[500px] rounded-lg shadow-2xl overflow-hidden">
                {images.map((image, index) => (
                  <motion.div
                    key={index}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: index === currentIndex ? 1 : 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                      <div className="absolute bottom-0 left-0 p-8">
                        <motion.h3
                          className="text-white text-3xl font-bold mb-2"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ 
                            opacity: index === currentIndex ? 1 : 0,
                            y: index === currentIndex ? 0 : 20,
                          }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                        >
                          {image.title}
                        </motion.h3>
                        <motion.div
                          className="w-16 h-1 bg-photo-purple rounded-full"
                          initial={{ width: 0 }}
                          animate={{ 
                            width: index === currentIndex ? 64 : 0 
                          }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Progress bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                  <motion.div 
                    className="h-full bg-photo-purple" 
                    initial={{ width: "0%" }}
                    animate={{ width: `${((currentIndex + 1) / images.length) * 100}%` }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                </div>
              </div>
              
              {/* Navigation buttons */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm hover:bg-black/60 transition-all flex items-center justify-center text-white z-10"
                aria-label="Previous image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm hover:bg-black/60 transition-all flex items-center justify-center text-white z-10"
                aria-label="Next image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Dots indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentIndex === index 
                      ? "bg-photo-purple w-8" 
                      : "bg-gray-500 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PhotoCarousel;
