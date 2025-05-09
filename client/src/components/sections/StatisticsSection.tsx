import React from 'react';
import { motion } from 'framer-motion';

const statistics = [
  {
    value: "80%",
    label: "Automation Achieved"
  },
  {
    value: "3+",
    label: "Projects Completed"
  },
  {
    value: "438",
    label: "Connectors Covered"
  }
];

const StatisticsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-lg font-medium text-secondary mb-3">Mulesoft to Springboot code conversion automation %</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {statistics.map((stat, index) => (
            <motion.div 
              key={index}
              className="bg-card rounded-xl p-8 text-center transition-transform hover:transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="statistic-value text-5xl lg:text-6xl font-bold mb-3">{stat.value}</h3>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
