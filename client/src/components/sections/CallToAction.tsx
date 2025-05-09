import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const CallToAction = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background with light color like Kong's design */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-blue-50 z-0"></div>
      <div className="absolute -left-[400px] top-0 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-3xl"></div>
      <div className="absolute -right-[400px] bottom-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/90 backdrop-blur-sm rounded-xl p-8 md:p-10 border border-blue-100 shadow-lg relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent rounded-xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Request Demo</h2>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight text-slate-900">See how it works</h3>
              <p className="text-slate-600 mb-8">
                Our team of experts will walk you through our MuleSoft to Spring Boot conversion platform and show you how it can transform your integration experience.
              </p>
              
              <Button className="group rounded-md h-11 w-full sm:w-auto" asChild>
                <Link href="#request-demo">
                  <span>Schedule a Demo</span>
                  <FaArrowRight className="ml-2 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/90 backdrop-blur-sm rounded-xl p-8 md:p-10 border border-blue-100 shadow-lg relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent rounded-xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Get Started</h2>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight text-slate-900">Ready to migrate?</h3>
              <p className="text-slate-600 mb-8">
                Begin your journey to Spring Boot today. Our streamlined onboarding process will have you up and running in no time.
              </p>
              
              <Button variant="outline" className="group rounded-md h-11 border-blue-200 hover:border-blue-400 text-blue-700 hover:text-blue-800 hover:bg-blue-50 w-full sm:w-auto" asChild>
                <Link href="#contact">
                  <span>Contact Us</span>
                  <FaArrowRight className="ml-2 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
