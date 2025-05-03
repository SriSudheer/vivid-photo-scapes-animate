
import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, MessageCircle } from 'lucide-react';

const socialProfiles = [
  {
    platform: 'Facebook',
    icon: Facebook,
    handle: '@LuminaLensStudio',
    bio: 'Capturing life\'s most precious moments with artistry and emotion. Professional photography for weddings, birthdays, portraits, and family events.',
    color: 'bg-blue-600',
    lightColor: 'bg-blue-500/10',
    url: '#facebook'
  },
  {
    platform: 'Instagram',
    icon: Instagram,
    handle: '@luminalens',
    bio: '✨ Where moments become memories ✨\n📸 Wedding | Birthday | Portrait | Family\n📍 Based in [Your City]\n📱 DM for bookings and inquiries',
    color: 'bg-pink-600',
    lightColor: 'bg-pink-500/10',
    url: '#instagram'
  },
  {
    platform: 'WhatsApp',
    icon: MessageCircle,
    handle: '+91 XXXXXXXXXX',
    bio: 'Thank you for contacting LuminaLens Studio! We\'re excited to help capture your special moments. Please share details about your event, and we\'ll get back to you within 24 hours.',
    color: 'bg-green-600',
    lightColor: 'bg-green-500/10',
    url: '#whatsapp'
  }
];

const samplePosts = [
  {
    platform: 'Facebook',
    type: 'Wedding',
    caption: 'Priya and Raj\'s wedding was a beautiful celebration of love and tradition. Swipe to see some of our favorite moments from their special day! #WeddingPhotography #LuminaLensStudio'
  },
  {
    platform: 'Instagram',
    type: 'Kids\' Birthday',
    caption: 'Little Aarav turned 5 in style! It was all smiles, balloons, and cake at this superhero-themed birthday party. Capturing children\'s joy is always a highlight of our work! ✨ #KidsPhotography #BirthdayMagic #LuminaLens'
  },
  {
    platform: 'Instagram',
    type: 'Couple Portrait',
    caption: 'Behind the scenes from today\'s sunset couple shoot with Neha and Vikram. The golden hour light was absolutely perfect! 💫 #CouplePhotography #GoldenHour #LuminaLensStudio'
  },
  {
    platform: 'WhatsApp',
    type: 'Auto-reply',
    caption: 'Hello! Thank you for reaching out to LuminaLens Studio. We\'re currently capturing beautiful moments but will respond to your message as soon as possible (within 24 hours). For immediate booking inquiries, please visit our website at www.luminalens.com'
  }
];

const SocialMediaSection = () => {
  return (
    <section id="social-media" className="py-20 bg-photo-dark dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-3">
            Connect <span className="text-gradient">With Us</span>
          </h2>
          <p className="text-gray-300 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Follow our social media for the latest updates, behind-the-scenes content, and photography inspiration.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {socialProfiles.map((profile, index) => (
            <motion.div
              key={profile.platform}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-card rounded-xl overflow-hidden"
            >
              <div className={`h-4 ${profile.color} w-full`}></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`w-14 h-14 rounded-full ${profile.lightColor} flex items-center justify-center mr-4`}>
                    <profile.icon className="w-7 h-7 text-gray-100" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{profile.platform}</h3>
                    <a href={profile.url} className="text-gray-400 hover:text-white transition-colors">{profile.handle}</a>
                  </div>
                </div>
                
                <p className="text-gray-300 dark:text-gray-300 whitespace-pre-line">{profile.bio}</p>
                
                <a
                  href={profile.url}
                  className={`mt-6 inline-block px-6 py-2 rounded-full text-white ${profile.color} hover:opacity-90 transition-opacity`}
                >
                  Follow Us
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-white text-center mb-8">Sample Post Captions</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {samplePosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="p-5 rounded-lg bg-photo-gray/20 dark:bg-gray-800/40 border border-photo-gray/30 dark:border-gray-700/40"
              >
                <div className="flex items-center mb-3">
                  <span className={`inline-block w-3 h-3 rounded-full mr-2 ${
                    post.platform === 'Facebook' ? 'bg-blue-500' : 
                    post.platform === 'Instagram' ? 'bg-pink-500' : 'bg-green-500'
                  }`}></span>
                  <span className="text-sm font-medium text-gray-400">{post.platform} · {post.type}</span>
                </div>
                <p className="text-gray-300 dark:text-gray-300">{post.caption}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
