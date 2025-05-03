
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import ImageSkeleton from './ui/ImageSkeleton';
import useImageProtection from '@/hooks/useImageProtection';

interface Photo {
  id: number;
  url: string;
  title: string;
  category: string;
}

// Sample photos for each category
const allPhotos: Photo[] = [
  // Weddings
  { 
    id: 1, 
    url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6', 
    title: 'Wedding Ceremony', 
    category: 'Weddings'
  },
  { 
    id: 2, 
    url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc', 
    title: 'First Dance', 
    category: 'Weddings'
  },
  { 
    id: 3, 
    url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed', 
    title: 'Wedding Rings', 
    category: 'Weddings'
  },
  
  // Kids' Birthdays
  { 
    id: 4, 
    url: 'https://images.unsplash.com/photo-1532947974358-a218d18d8d14', 
    title: 'Birthday Cake', 
    category: 'Birthdays'
  },
  { 
    id: 5, 
    url: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d', 
    title: 'Party Decorations', 
    category: 'Birthdays'
  },
  { 
    id: 6, 
    url: 'https://images.unsplash.com/photo-1602631985686-1bb0e6a8696e', 
    title: 'Birthday Celebration', 
    category: 'Birthdays'
  },
  
  // Candid Portraits
  { 
    id: 7, 
    url: 'https://images.unsplash.com/photo-1488161628813-04466f872be2', 
    title: 'Couple Portrait', 
    category: 'Portraits'
  },
  { 
    id: 8, 
    url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9', 
    title: 'Urban Portrait', 
    category: 'Portraits'
  },
  { 
    id: 9, 
    url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1', 
    title: 'Natural Light Portrait', 
    category: 'Portraits'
  },
  
  // Family Events
  { 
    id: 10, 
    url: 'https://images.unsplash.com/photo-1511895426328-dc8714191300', 
    title: 'Family Gathering', 
    category: 'Family'
  },
  { 
    id: 11, 
    url: 'https://images.unsplash.com/photo-1542037179721-7235fcc5b54f', 
    title: 'Family Celebration', 
    category: 'Family'
  },
  { 
    id: 12, 
    url: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a', 
    title: 'Family Outdoors', 
    category: 'Family'
  },
];

const categories = ["All", "Weddings", "Birthdays", "Portraits", "Family"];

const Gallery3D = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // Apply image protection
  useImageProtection();

  const filteredPhotos = activeCategory === "All" 
    ? allPhotos 
    : allPhotos.filter(photo => photo.category === activeCategory);

  useEffect(() => {
    // Simulate loading images
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [activeCategory]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const images = containerRef.current.querySelectorAll('.gallery-item');
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      
      const mouseX = ((e.clientX - left) / width) - 0.5;
      const mouseY = ((e.clientY - top) / height) - 0.5;
      
      images.forEach((img) => {
        const imgElement = img as HTMLElement;
        // Calculate a unique rotation for each image based on its position
        const dataIndex = Number(imgElement.getAttribute('data-index'));
        const rotationFactor = (dataIndex % 3 - 1) * 2; // -2, 0, or 2
        
        imgElement.style.transform = `
          perspective(1000px)
          rotateY(${mouseX * 10 * rotationFactor}deg)
          rotateX(${-mouseY * 10 * rotationFactor}deg)
          translateZ(0)
        `;
      });
    };

    const containerElement = containerRef.current;
    if (containerElement) {
      containerElement.addEventListener('mousemove', handleMouseMove);
    
      return () => {
        containerElement.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, [activeCategory]);

  return (
    <section id="gallery" className="py-20 bg-photo-dark dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-3 dark:text-white">
            Photo <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-gray-300 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Browse our collection of stunning photography capturing life's most precious moments.
          </p>
        </motion.div>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <button 
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === category 
                  ? 'bg-photo-purple text-white dark:bg-purple-700' 
                  : 'bg-photo-gray/30 text-gray-300 hover:bg-photo-gray/50 dark:bg-gray-800 dark:text-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
        
        <div 
          ref={containerRef} 
          className="perspective-1000 preserve-3d"
        >
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                className="gallery-item transition-all duration-500 ease-out preserve-3d"
                data-index={index}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {isLoading ? (
                  <ImageSkeleton />
                ) : (
                  <div className={`relative overflow-hidden rounded-lg shadow-2xl protected-image ${
                    hoveredIndex === index ? 'ring-2 ring-photo-purple dark:ring-purple-500' : ''
                  }`}>
                    <img 
                      src={photo.url} 
                      alt={photo.title} 
                      className="w-full h-72 object-cover transition-transform duration-700 ease-out hover:scale-110"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90">
                      <div className="absolute bottom-0 left-0 p-6">
                        <span className="inline-block px-3 py-1 bg-photo-purple/90 text-white text-xs rounded-full mb-2 dark:bg-purple-700">
                          {photo.category}
                        </span>
                        <h3 className="text-white text-xl font-medium">{photo.title}</h3>
                      </div>
                    </div>
                    
                    <div className={`absolute inset-0 bg-photo-purple/40 dark:bg-purple-700/40 opacity-0 transition-opacity duration-300 flex items-center justify-center ${
                      hoveredIndex === index ? 'opacity-30' : ''
                    }`}>
                    </div>
                    
                    <div className={`absolute top-4 right-4 transition-transform duration-500 ${
                      hoveredIndex === index ? 'scale-100' : 'scale-0'
                    }`}>
                      <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-photo-dark dark:text-gray-800">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-transparent border-2 border-photo-purple text-photo-purple hover:bg-photo-purple hover:text-white transition-all duration-300 rounded-lg dark:border-purple-500 dark:text-purple-400 dark:hover:bg-purple-700 dark:hover:text-white">
            View More Photos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery3D;
