import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import conversionLogo from '@assets/springboot1.png';

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
      {/* Background gradient effects inspired by Kong */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 z-0"></div>
      <div className="absolute bottom-0 left-0 right-0 h-[400px] bg-gradient-to-t from-blue-900/20 via-background/5 to-transparent z-0"></div>
      <div className="absolute top-0 right-0 w-full h-96 bg-gradient-to-b from-blue-600/10 via-purple-600/10 to-transparent z-0"></div>
      <div className="absolute -top-[500px] -left-[300px] w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -right-[400px] top-[100px] w-[700px] h-[700px] bg-violet-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-left lg:pr-4">
            <div className="flex items-center mb-4">
              <span className="inline-block text-xs font-semibold bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">
                REVOLUTIONIZE CODE TRANSFORMATION
              </span>
            </div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Effortless Mulesoft Code Conversion
            </motion.h1>
            
            <motion.p 
              className="text-lg mb-8 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Transform your MuleSoft applications to Spring Boot with our automated conversion platform. Our industry-leading solution ensures a smooth migration with minimal manual intervention and maximum accuracy.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button className="h-12 px-6 text-sm font-medium rounded-md bg-blue-500 hover:bg-blue-600 group" asChild>
                <Link href="#request-demo">
                  <span>Request Demo</span>
                  <FaArrowRight className="ml-2 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" className="h-12 px-6 text-sm font-medium rounded-md border-slate-700 bg-slate-900/60 hover:bg-slate-800/80" asChild>
                <Link href="#contact-us">Contact Us</Link>
              </Button>
            </motion.div>
            
            <motion.div 
              className="mt-12 pt-8 border-t border-accent/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-gray-400 mb-6 text-sm">Trusted by leading enterprises worldwide</p>
              <div className="flex flex-wrap gap-x-10 gap-y-6 items-center">
                {clientLogos.map((logo, index) => (
                  <div key={index} className="flex">
                    <img src={logo} alt={`Tech client logo ${index + 1}`} 
                         className="h-5 md:h-6 opacity-70 grayscale hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative bg-gradient-to-br from-blue-900/30 to-slate-900/40 rounded-xl p-6 shadow-xl border border-blue-900/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-indigo-500/5 to-violet-500/5 z-0"></div>
              
              <div className="relative z-10 grid grid-cols-2 gap-4">
                <div className="bg-slate-900/90 p-6 rounded-xl border border-blue-900/30 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-slate-800 rounded-full flex items-center justify-center">
                      <span className="text-5xl">M</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <span className="text-xs text-gray-400">Mulesoft</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-900/90 p-6 rounded-xl border border-blue-900/30 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-2 w-full">
                    <div className="flex justify-center items-center text-blue-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14.5l2 2c1 1 4-1 4-1"/><path d="M8.5 8.5l7 7"/><path d="M16 9.5l.5-1.5 1.5.5"/><path d="M9.5 16l-1.5.5.5 1.5"/></svg>
                    </div>
                    <div className="flex justify-center items-center text-blue-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M14.5 9.5 19 4"/><path d="M5 19 9.5 14.5"/><path d="M7 9.7 5.89 7.25l2.46-1.13"/><path d="M17 14.95l1.11 2.45-2.46 1.13"/></svg>
                    </div>
                    <div className="flex justify-center items-center text-blue-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M13 2v8.4a1 1 0 0 1-1 1v0a1 1 0 0 1-1-1V2"/><path d="M9 19.2v-7.3a1 1 0 0 1 1-1v0a1 1 0 0 1 1 1v7.3"/><path d="M15 14.7V19"/><path d="M14.8 9H16a2 2 0 0 1 2 2v0c0 1.1-.9 2-2 2h-.8"/></svg>
                    </div>
                    <div className="flex justify-center items-center text-blue-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20"/><path d="M2 7h20"/><path d="M2 17h20"/></svg>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center items-center my-4">
                <div className="flex-1 h-px bg-blue-900/30"></div>
                <div className="px-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
                </div>
                <div className="flex-1 h-px bg-blue-900/30"></div>
              </div>
              
              <div className="relative mb-4">
                <div className="p-6 rounded-xl bg-slate-900/90 border border-blue-900/30">
                  <img 
                    src={conversionLogo} 
                    alt="Mulesoft to Spring Boot conversion" 
                    className="h-16 mx-auto object-contain"
                  />
                </div>
                
                <div className="absolute -bottom-3 right-6 bg-slate-900 border border-blue-500/20 rounded-lg px-3 py-1.5 text-xs font-medium text-blue-500">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    Spring Boot Conversion Ready
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
