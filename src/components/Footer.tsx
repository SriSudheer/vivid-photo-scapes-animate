
import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-photo-dark dark:bg-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">
              <span className="text-gradient">LuminaLens</span>
            </h3>
            <p className="text-gray-300 dark:text-gray-400 mb-6">
              Capturing moments and emotions with precision and artistry. Where photography becomes an unforgettable visual experience.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#facebook"
                className="w-10 h-10 bg-photo-gray/30 dark:bg-gray-800/30 rounded-full flex items-center justify-center text-gray-300 hover:bg-photo-purple hover:text-white transition-all"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#instagram"
                className="w-10 h-10 bg-photo-gray/30 dark:bg-gray-800/30 rounded-full flex items-center justify-center text-gray-300 hover:bg-photo-purple hover:text-white transition-all"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#whatsapp"
                className="w-10 h-10 bg-photo-gray/30 dark:bg-gray-800/30 rounded-full flex items-center justify-center text-gray-300 hover:bg-photo-purple hover:text-white transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'Gallery', 'About', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-300 dark:text-gray-400 hover:text-photo-purple dark:hover:text-purple-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-4">
              {['Wedding Photography', 'Kids\' Birthday Shoots', 'Candid Portraits', 'Family Events', 'Photo Editing'].map((item) => (
                <li key={item}>
                  <a 
                    href="#services" 
                    className="text-gray-300 dark:text-gray-400 hover:text-photo-purple dark:hover:text-purple-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Subscribe</h4>
            <p className="text-gray-300 dark:text-gray-400 mb-4">
              Subscribe to our newsletter for photography tips and updates.
            </p>
            <form className="space-y-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-3 bg-photo-gray/30 dark:bg-gray-800/30 border border-photo-gray/50 dark:border-gray-700/50 rounded-md focus:outline-none focus:ring-2 focus:ring-photo-purple/50 dark:focus:ring-purple-500/50 text-white"
                required
              />
              <button 
                type="submit"
                className="w-full px-4 py-3 bg-photo-purple dark:bg-purple-600 text-white rounded-md hover:bg-photo-purple/90 dark:hover:bg-purple-700 transition-all"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-photo-gray/30 dark:border-gray-800/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 dark:text-gray-500 text-sm">
            © 2025 LuminaLens Photography. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm text-gray-400 dark:text-gray-500">
              <li><a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#cookies" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
