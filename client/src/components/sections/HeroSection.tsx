import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const clientLogos = [
  "https://cdn-icons-png.flaticon.com/512/5969/5969059.png",
  "https://cdn-icons-png.flaticon.com/512/5968/5968939.png",
  "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
  "https://cdn-icons-png.flaticon.com/512/5968/5968313.png",
  "https://cdn-icons-png.flaticon.com/512/882/882730.png"
];

const HeroSection = () => {
  return (
    <section className="py-16 lg:py-24 animated-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1 
            className="text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            There is no 
            <span className="text-secondary"> Transformation</span>
            <br />without Automation.
          </motion.h1>
          
          <motion.p 
            className="text-lg lg:text-xl mb-8 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            And there is no automation excellence without our conversion platform. Build yours with Aaryati.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button size="lg" asChild>
              <Link href="#demo">Get a Demo</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#free">Start for Free</Link>
            </Button>
          </motion.div>
          
          <motion.div 
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p className="text-gray-400 mb-8">Aaryati powers the world's best businesses and most disruptive technologies.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
              {clientLogos.map((logo, index) => (
                <motion.div 
                  key={index} 
                  className="flex justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  <img src={logo} alt={`Tech client logo ${index + 1}`} className="h-7 opacity-70 grayscale" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
