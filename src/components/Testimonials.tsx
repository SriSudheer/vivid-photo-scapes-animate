
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Priya & Raj",
    event: "Wedding Photography",
    text: "LuminaLens captured our wedding day perfectly. Every emotion, every smile, every tear - they didn't miss a single moment. The photographs are absolutely breathtaking!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    id: 2,
    name: "Anita Sharma",
    event: "Kids' Birthday",
    text: "The birthday photoshoot for my daughter was amazing! The photographer was so patient with the children and captured such beautiful candid moments. We'll cherish these photos forever.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
  },
  {
    id: 3,
    name: "Vikram & Neha",
    event: "Couple Portrait",
    text: "Our pre-wedding shoot was an incredible experience. The team made us feel so comfortable, and the locations they suggested were perfect. The photos turned out even better than we imagined!",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6"
  },
  {
    id: 4,
    name: "The Khanna Family",
    event: "Family Function",
    text: "We hired LuminaLens for our family reunion, and they did an outstanding job! They captured every generation of our family so beautifully. The group shots and candid moments are priceless.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-photo-gray/10 dark:bg-gray-800/30">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-3">
            Client <span className="text-gradient">Stories</span>
          </h2>
          <p className="text-gray-300 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Hear what our clients have to say about their experience with LuminaLens Studio.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-xl p-6 relative"
            >
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-photo-purple dark:border-purple-500 mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white">{testimonial.name}</h3>
                  <p className="text-photo-purple dark:text-purple-400 text-sm">{testimonial.event}</p>
                </div>
              </div>
              
              <p className="text-gray-300 dark:text-gray-300 relative pl-6">
                <span className="absolute left-0 top-0 text-4xl text-photo-purple/40 dark:text-purple-500/40">"</span>
                {testimonial.text}
                <span className="absolute text-4xl text-photo-purple/40 dark:text-purple-500/40">"</span>
              </p>
              
              <div className="absolute -bottom-3 -right-3 w-20 h-20 text-6xl text-photo-purple/10 dark:text-purple-500/10 z-0">
                "
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a 
            href="#contact" 
            className="px-8 py-3 bg-photo-purple text-white rounded-md hover:bg-photo-purple/90 transition-all shadow-md hover:shadow-lg hover:shadow-photo-purple/20 dark:bg-purple-600 dark:hover:bg-purple-700 dark:hover:shadow-purple-700/20"
          >
            Share Your Story
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
