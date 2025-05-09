import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { FaArrowRight, FaCode } from 'react-icons/fa';
import architectureGif from '@assets/Aaryati CodeGen design -2.gif';

const FeatureHighlight = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/90 z-0"></div>
      <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-blue-900/5 to-transparent z-0"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Revolutionize Code Transformation</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Effortless Mulesoft Code Conversion</h3>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Transform your MuleSoft applications to Spring Boot with our automated conversion platform. Our industry-leading solution ensures a smooth migration with minimal manual intervention and maximum accuracy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="group rounded-md h-11" asChild>
                <Link href="#request-demo">
                  <span>Request Demo</span>
                  <FaArrowRight className="ml-2 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" className="rounded-md h-11 border-accent/50 hover:border-accent" asChild>
                <Link href="#contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative overflow-hidden rounded-xl border border-accent/20 shadow-lg shadow-primary/5">
              <img 
                src={architectureGif} 
                alt="Mulesoft to Spring Boot architecture transformation" 
                className="w-full h-auto object-cover" 
              />
              
              {/* Animated glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-primary/10 via-transparent to-transparent opacity-60"></div>
            </div>
            
            <motion.div 
              className="absolute -bottom-6 -right-6 bg-card p-5 rounded-lg shadow-lg border border-accent/30 hidden md:block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="flex items-center gap-3">
                <div className="inline-flex justify-center items-center w-10 h-10 rounded-full bg-primary/10">
                  <FaCode className="text-primary h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Spring Boot</p>
                  <p className="text-white font-semibold">Conversion Ready</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlight;
