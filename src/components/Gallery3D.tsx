
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Photo {
  id: number;
  url: string;
  title: string;
  category: string;
}

const photos: Photo[] = [
  { 
    id: 1, 
    url: 'https://images.unsplash.com/photo-1458668383970-8ddd3927deed', 
    title: 'Mountain Alps', 
    category: 'Landscape'
  },
  { 
    id: 2, 
    url: 'https://images.unsplash.com/photo-1501854140801-50d01698950b', 
    title: 'Green Mountains', 
    category: 'Aerial'
  },
  { 
    id: 3, 
    url: 'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3', 
    title: 'Rocky Hillside', 
    category: 'Nature'
  },
  { 
    id: 4, 
    url: 'https://images.unsplash.com/photo-1486718448742-163732cd1544', 
    title: 'Minimalist Waves', 
    category: 'Abstract'
  },
  { 
    id: 5, 
    url: 'https://images.unsplash.com/photo-1466442929976-97f336a657be', 
    title: 'Architectural Beauty', 
    category: 'Architecture'
  },
  { 
    id: 6, 
    url: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc', 
    title: 'Drone Flight', 
    category: 'Technology'
  },
];

const categories = ["All", ...Array.from(new Set(photos.map(photo => photo.category)))];

const Gallery3D = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredPhotos = activeCategory === "All" 
    ? photos 
    : photos.filter(photo => photo.category === activeCategory);

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
    <section id="gallery" className="py-20 bg-photo-dark">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-3">
            Immersive <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Explore our collection of stunning photography from around the world, each with its own story to tell.
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
                  ? 'bg-photo-purple text-white' 
                  : 'bg-photo-gray/30 text-gray-300 hover:bg-photo-gray/50'
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
                <div className={`relative overflow-hidden rounded-lg shadow-2xl ${
                  hoveredIndex === index ? 'ring-2 ring-photo-purple' : ''
                }`}>
                  <img 
                    src={photo.url} 
                    alt={photo.title} 
                    className="w-full h-72 object-cover transition-transform duration-700 ease-out hover:scale-110"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90">
                    <div className="absolute bottom-0 left-0 p-6">
                      <span className="inline-block px-3 py-1 bg-photo-purple/90 text-white text-xs rounded-full mb-2">
                        {photo.category}
                      </span>
                      <h3 className="text-white text-xl font-medium">{photo.title}</h3>
                    </div>
                  </div>
                  
                  <div className={`absolute inset-0 bg-photo-purple/40 opacity-0 transition-opacity duration-300 flex items-center justify-center ${
                    hoveredIndex === index ? 'opacity-30' : ''
                  }`}>
                  </div>
                  
                  <div className={`absolute top-4 right-4 transition-transform duration-500 ${
                    hoveredIndex === index ? 'scale-100' : 'scale-0'
                  }`}>
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-photo-dark">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-transparent border-2 border-photo-purple text-photo-purple hover:bg-photo-purple hover:text-white transition-all duration-300 rounded-lg">
            Load More Photos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery3D;
