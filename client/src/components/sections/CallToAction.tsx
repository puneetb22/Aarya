import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-lg font-medium text-secondary mb-3">Request Demo</h2>
          <h3 className="text-3xl lg:text-4xl font-bold mb-8">Please Feel Free to Contact Us</h3>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
            <Button size="lg" className="px-8" asChild>
              <Link href="#request-demo">Request Call</Link>
            </Button>
            <Button size="lg" variant="outline" className="px-8" asChild>
              <Link href="#contact">Contact Us</Link>
            </Button>
          </div>
          
          <p className="text-gray-400 italic">
            Join the growing list of organizations who have successfully migrated from MuleSoft to Spring Boot
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
