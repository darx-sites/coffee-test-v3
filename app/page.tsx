'use client';

import { motion } from 'framer-motion';
import { Coffee, MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';
import { useEffect } from 'react';
import { Builder } from '@builder.io/react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmNzk1MzEiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Coffee className="w-20 h-20 mx-auto mb-6 text-amber-700" strokeWidth={1.5} />
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Test Coffee Shop
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 mb-4 font-light">
              Artisan Coffee & Fresh Pastries
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the perfect blend of quality, comfort, and community. Every cup tells a story.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <a
              href="#contact"
              className="px-8 py-4 bg-amber-700 text-white rounded-full font-semibold text-lg hover:bg-amber-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Visit Us Today
            </a>
            <a
              href="#menu"
              className="px-8 py-4 bg-white text-amber-700 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border-2 border-amber-700"
            >
              View Menu
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
              <div className="text-3xl font-bold text-amber-700 mb-2">100%</div>
              <div className="text-gray-600">Organic Beans</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
              <div className="text-3xl font-bold text-amber-700 mb-2">Fresh</div>
              <div className="text-gray-600">Daily Pastries</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
              <div className="text-3xl font-bold text-amber-700 mb-2">Cozy</div>
              <div className="text-gray-600">Atmosphere</div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-amber-700"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

const MenuSection = () => {
  const menuItems = [
    {
      category: 'Coffee',
      items: [
        { name: 'Espresso', price: '$3.50', description: 'Rich and bold single shot' },
        { name: 'Cappuccino', price: '$4.50', description: 'Espresso with steamed milk foam' },
        { name: 'Latte', price: '$4.75', description: 'Smooth espresso with steamed milk' },
        { name: 'Americano', price: '$3.75', description: 'Espresso with hot water' },
        { name: 'Mocha', price: '$5.25', description: 'Chocolate and espresso blend' },
        { name: 'Cold Brew', price: '$4.50', description: 'Smooth, refreshing cold coffee' },
      ]
    },
    {
      category: 'Pastries',
      items: [
        { name: 'Croissant', price: '$3.50', description: 'Buttery, flaky French pastry' },
        { name: 'Blueberry Muffin', price: '$3.75', description: 'Fresh baked with real blueberries' },
        { name: 'Chocolate Chip Cookie', price: '$2.50', description: 'Warm and gooey' },
        { name: 'Cinnamon Roll', price: '$4.25', description: 'Topped with cream cheese frosting' },
        { name: 'Banana Bread', price: '$3.25', description: 'Moist and delicious' },
        { name: 'Scone', price: '$3.50', description: 'Various flavors available' },
      ]
    }
  ];

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Our Menu</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Carefully crafted beverages and freshly baked goods
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {menuItems.map((section, idx) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-3xl shadow-lg"
            >
              <h3 className="text-3xl font-bold text-amber-800 mb-6 border-b-2 border-amber-300 pb-3">
                {section.category}
              </h3>
              <div className="space-y-4">
                {section.items.map((item) => (
                  <div key={item.name} className="flex justify-between items-start group">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 group-hover:text-amber-700 transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                    </div>
                    <span className="text-lg font-bold text-amber-700 ml-4">{item.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-amber-900 via-orange-900 to-amber-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Visit Us</h2>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            We'd love to serve you a perfect cup of coffee
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <MapPin className="w-8 h-8 text-amber-300 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p className="text-amber-100 leading-relaxed">
                  123 Coffee Street<br />
                  Downtown District<br />
                  City, State 12345
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock className="w-8 h-8 text-amber-300 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Hours</h3>
                <p className="text-amber-100 leading-relaxed">
                  Monday - Friday: 7:00 AM - 7:00 PM<br />
                  Saturday - Sunday: 8:00 AM - 8:00 PM
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="w-8 h-8 text-amber-300 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <a href="tel:+15551234567" className="text-amber-100 hover:text-white transition-colors">
                  (555) 123-4567
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="w-8 h-8 text-amber-300 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <a href="mailto:hello@testcoffeeshop.com" className="text-amber-100 hover:text-white transition-colors">
                  hello@testcoffeeshop.com
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl"
          >
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-amber-300 text-amber-900 rounded-lg font-semibold hover:bg-amber-200 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-16"
        >
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-amber-300 hover:text-white transition-colors transform hover:scale-110">
              <Instagram className="w-8 h-8" />
            </a>
            <a href="#" className="text-amber-300 hover:text-white transition-colors transform hover:scale-110">
              <Facebook className="w-8 h-8" />
            </a>
            <a href="#" className="text-amber-300 hover:text-white transition-colors transform hover:scale-110">
              <Twitter className="w-8 h-8" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Test Coffee Shop. All rights reserved.
        </p>
        <p className="text-xs mt-2 text-gray-500">
          Crafted with love and caffeine
        </p>
      </div>
    </footer>
  );
};

if (typeof window !== 'undefined') {
  Builder.registerComponent(Hero, {
    name: 'Hero Section',
    inputs: []
  });

  Builder.registerComponent(MenuSection, {
    name: 'Menu Section',
    inputs: []
  });

  Builder.registerComponent(ContactSection, {
    name: 'Contact Section',
    inputs: []
  });
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <MenuSection />
      <ContactSection />
      <Footer />
    </main>
  );
}