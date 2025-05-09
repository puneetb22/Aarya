import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const clientLogos = [
  "https://cdn-icons-png.flaticon.com/512/5969/5969059.png", // IBM
  "https://cdn-icons-png.flaticon.com/512/5968/5968939.png", // Oracle
  "https://cdn-icons-png.flaticon.com/512/5968/5968705.png", // SAP
  "https://cdn-icons-png.flaticon.com/512/5968/5968313.png", // Microsoft
  "https://cdn-icons-png.flaticon.com/512/882/882730.png"    // Salesforce
];

const HeroSection = () => {
  return (
    <section className="pt-14 pb-24 md:pt-20 md:pb-32 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-background bg-opacity-90 z-0"></div>
      <div className="absolute bottom-0 left-0 right-0 h-[400px] bg-gradient-to-t from-blue-900/10 via-background/5 to-transparent z-0"></div>
      <div className="absolute -top-[500px] -left-[300px] w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute -right-[400px] top-[100px] w-[700px] h-[700px] bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            There is no 
            <span className="text-primary block sm:inline"> Transformation</span>
            <br className="hidden sm:block" />without Automation.
          </motion.h1>
          
          <motion.p 
            className="text-lg lg:text-xl mb-8 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            And there is no automation excellence without our conversion platform. Build yours with Aaryati.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button size="lg" className="h-12 px-6 text-sm font-medium rounded-md" asChild>
              <Link href="#demo">Get a Demo</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-6 text-sm font-medium rounded-md border-accent/50 hover:border-accent" asChild>
              <Link href="#free">Start for Free</Link>
            </Button>
          </motion.div>
          
          <motion.div 
            className="mt-20 pt-8 border-t border-accent/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-gray-400 mb-8 text-sm">Aaryati powers the world's best businesses and most disruptive technologies.</p>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 items-center">
              {clientLogos.map((logo, index) => (
                <div key={index} className="flex justify-center">
                  <img src={logo} alt={`Tech client logo ${index + 1}`} 
                       className="h-5 md:h-6 opacity-70 grayscale hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
