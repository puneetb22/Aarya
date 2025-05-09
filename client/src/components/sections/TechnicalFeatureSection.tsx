import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaTerminal } from 'react-icons/fa';
import architectureGif from '@assets/Aaryati CodeGen design -2.gif';

const features = [
  {
    title: "Database Connectors",
    description: "Support for all major database systems including Oracle, MySQL, PostgreSQL, and MongoDB"
  },
  {
    title: "HTTP & REST",
    description: "Complete support for REST APIs, webhooks, and HTTP listeners"
  },
  {
    title: "Enterprise Systems",
    description: "Seamless migration of SAP, Salesforce, and other enterprise integrations"
  },
  {
    title: "Messaging Systems",
    description: "Full support for JMS, Kafka, RabbitMQ, and other messaging platforms"
  }
];

const TechnicalFeatureSection = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-blue-900/20 to-background z-0"></div>
      <div className="absolute top-0 -right-[400px] w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-blue-500/10 to-transparent z-0"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-xl overflow-hidden border border-accent/20 shadow-xl shadow-primary/5">
              <div className="absolute inset-0 bg-gradient-to-tr from-background via-background/70 to-transparent opacity-20 z-10"></div>
              
              <img 
                src={architectureGif} 
                alt="Mulesoft to Spring Boot architecture transformation" 
                className="w-full h-auto object-cover" 
              />
              
              {/* Code editor style overlay */}
              <div className="absolute top-0 left-0 right-0 h-8 bg-card/80 backdrop-blur-sm border-b border-accent/20 flex items-center px-3 text-xs text-gray-400 z-20">
                <div className="flex space-x-1.5 mr-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/70"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/70"></div>
                </div>
                <span>mulesoft-to-springboot-converter.ts</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Technical Excellence</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Comprehensive Connector Support</h3>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Our platform supports the entire ecosystem of MuleSoft connectors, ensuring your migration covers all integration points.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                >
                  <div className="shrink-0 inline-flex justify-center items-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                    <FaCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">{feature.title}</h4>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalFeatureSection;
