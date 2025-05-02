
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Gallery3D from '@/components/Gallery3D';
import PhotoCarousel from '@/components/PhotoCarousel';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const Index = () => {
  useEffect(() => {
    document.title = 'LensCraft | 3D Photography Experience';
  }, []);

  return (
    <div className="min-h-screen bg-photo-dark text-white overflow-hidden">
      <Navbar />
      <Hero />
      <Gallery3D />
      <PhotoCarousel />
      
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">
                About Our <span className="text-gradient">Studio</span>
              </h2>
              <p className="text-gray-300 mb-4">
                Founded with a passion for visual storytelling, LensCraft has been at the forefront of innovative photography for over a decade. Our team of dedicated professionals brings together technical expertise and creative vision to capture moments that last a lifetime.
              </p>
              <p className="text-gray-300 mb-6">
                We believe photography is more than just taking pictures—it's about creating emotions, preserving memories, and sharing stories that resonate with viewers around the world. From breathtaking landscapes to intimate portraits, our work spans a variety of styles and subjects.
              </p>
              <ul className="space-y-4">
                {[
                  'Award-winning photography team',
                  'Latest high-end equipment',
                  'Stunning locations worldwide',
                  'Custom editing and post-production'
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-5 h-5 rounded-full bg-photo-purple flex-shrink-0 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-200">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2 perspective-1000"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative preserve-3d animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                  alt="Photography workspace" 
                  className="rounded-lg shadow-2xl z-10 relative"
                />
                
                <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-photo-purple/20 rounded-lg blur-xl -z-10"></div>
                <div className="absolute -top-6 -left-6 w-48 h-48 bg-photo-teal/20 rounded-lg blur-xl -z-10"></div>
                
                <div className="absolute -top-8 -right-8 w-32 h-32 rounded-lg border-2 border-photo-purple/30 z-0"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-lg border-2 border-photo-teal/30 z-0"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section id="services" className="py-20 bg-photo-gray/10">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-3">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              From concept to creation, we offer a wide range of photography services tailored to your specific needs.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Portrait Photography',
                description: 'Capture personalities and emotions in stunning portrait sessions designed to showcase the unique character of each subject.',
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: 'Landscape Photography',
                description: 'From majestic mountains to serene seascapes, our landscape photography brings the beauty of nature into focus with breathtaking detail.',
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
              },
              {
                title: 'Event Coverage',
                description: "Don't miss a moment with our comprehensive event coverage, capturing all the key moments and emotions from your special occasions.",
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
              },
              {
                title: 'Commercial Photography',
                description: 'Elevate your brand with professional commercial photography that showcases your products and services in the best possible light.',
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
              },
              {
                title: 'Aerial Photography',
                description: 'See the world from a new perspective with our drone and aerial photography services, offering unique views from above.',
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                ),
              },
              {
                title: 'Photo Editing & Retouching',
                description: 'Transform good photos into exceptional images with our professional editing and retouching services that enhance every detail.',
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                ),
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                className="bg-photo-gray/20 rounded-lg p-6 text-center hover:bg-photo-gray/30 transition-all hover:shadow-xl hover:-translate-y-1"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 mx-auto bg-photo-purple/20 rounded-full flex items-center justify-center text-photo-purple mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-3">
                Get in <span className="text-gradient">Touch</span>
              </h2>
              <p className="text-gray-300 mb-8 max-w-md">
                Ready to bring your vision to life? Contact us today to discuss your photography needs and how we can help.
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-gray-300 block text-sm font-medium">Name</label>
                    <input 
                      type="text" 
                      id="name"
                      className="w-full px-4 py-3 bg-photo-gray/20 border border-photo-gray/40 rounded-md focus:outline-none focus:ring-2 focus:ring-photo-purple/50 text-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-gray-300 block text-sm font-medium">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      className="w-full px-4 py-3 bg-photo-gray/20 border border-photo-gray/40 rounded-md focus:outline-none focus:ring-2 focus:ring-photo-purple/50 text-white"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-gray-300 block text-sm font-medium">Subject</label>
                  <input 
                    type="text" 
                    id="subject"
                    className="w-full px-4 py-3 bg-photo-gray/20 border border-photo-gray/40 rounded-md focus:outline-none focus:ring-2 focus:ring-photo-purple/50 text-white"
                    placeholder="How can we help?"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-gray-300 block text-sm font-medium">Message</label>
                  <textarea 
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-photo-gray/20 border border-photo-gray/40 rounded-md focus:outline-none focus:ring-2 focus:ring-photo-purple/50 text-white resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="px-8 py-3 bg-photo-purple text-white rounded-md hover:bg-photo-purple/90 transition-all shadow-md hover:shadow-lg hover:shadow-photo-purple/20"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2 flex flex-col justify-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-photo-gray/20 rounded-lg p-8 border border-photo-gray/30">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {[
                    { 
                      title: 'Email',
                      value: 'info@lenscraft.com',
                      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    },
                    { 
                      title: 'Phone',
                      value: '+1 (555) 123-4567',
                      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    },
                    { 
                      title: 'Address',
                      value: '123 Photography Lane, Creative District, NY 10001',
                      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    },
                    { 
                      title: 'Working Hours',
                      value: 'Monday - Friday: 9AM - 6PM',
                      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-photo-purple/20 rounded-full flex items-center justify-center text-photo-purple flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-gray-400 text-sm">{item.title}</h4>
                        <p className="text-white">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-photo-gray/30">
                  <h4 className="text-lg font-medium mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    {['facebook', 'twitter', 'instagram', 'youtube'].map((platform) => (
                      <a 
                        key={platform}
                        href={`#${platform}`}
                        className="w-10 h-10 bg-photo-gray/30 rounded-full flex items-center justify-center text-gray-300 hover:bg-photo-purple hover:text-white transition-all"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
