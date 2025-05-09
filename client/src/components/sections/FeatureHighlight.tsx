import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { FaArrowRight, FaCode } from 'react-icons/fa';
import architectureGif from '@assets/Aaryati CodeGen design -2.gif';

const FeatureHighlight = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-lg font-medium text-secondary mb-3">Revolutionize Code Transformation</h2>
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">Effortless Mulesoft Code Conversion</h3>
            <p className="text-gray-300 mb-8">
              Transform your MuleSoft applications to Spring Boot with our automated conversion platform. Our industry-leading solution ensures a smooth migration with minimal manual intervention and maximum accuracy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="group" asChild>
                <Link href="#request-demo">
                  <span>Request Demo</span>
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              src={architectureGif} 
              alt="Mulesoft to Spring Boot architecture transformation" 
              className="rounded-xl shadow-lg w-full h-auto object-cover" 
            />
            
            <motion.div 
              className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-lg hidden md:block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="flex items-center gap-3">
                <div className="inline-flex justify-center items-center w-10 h-10 rounded-full bg-primary bg-opacity-20">
                  <FaCode className="text-primary h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Spring Boot</p>
                  <p className="text-white font-medium">Conversion Ready</p>
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
