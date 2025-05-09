import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

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
    <section className="py-16 lg:py-24 bg-darker relative overflow-hidden">
      {/* Abstract background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-br from-primary to-secondary opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
              alt="Software development and API integration" 
              className="rounded-xl shadow-lg w-full h-auto" 
            />
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-lg font-medium text-secondary mb-3">Technical Excellence</h2>
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">Comprehensive Connector Support</h3>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                >
                  <div className="shrink-0 inline-flex justify-center items-center w-10 h-10 rounded-full bg-primary bg-opacity-20">
                    <FaCheck className="text-primary h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">{feature.title}</h4>
                    <p className="text-gray-300">{feature.description}</p>
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
