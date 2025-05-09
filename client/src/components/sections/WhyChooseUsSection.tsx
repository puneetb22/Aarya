import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaFingerprint, 
  FaCodeBranch, 
  FaHeadset, 
  FaChartLine 
} from 'react-icons/fa';

const features = [
  {
    icon: <FaFingerprint className="text-primary h-5 w-5" />,
    title: "One of Its Kind",
    description: "Our Mule to Spring Boot conversion utility is a unique solution tailored to simplify complex integration migrations. It's designed specifically to address the challenges of transitioning from MuleSoft to the scalable and flexible Spring Boot framework."
  },
  {
    icon: <FaCodeBranch className="text-primary h-5 w-5" />,
    title: "Tested on over 3,000 APIs",
    description: "With a proven track record, our tool has been rigorously tested on over 3,000 APIs to ensure accuracy, reliability, and seamless conversions, giving you peace of mind for all your projects."
  },
  {
    icon: <FaHeadset className="text-primary h-5 w-5" />,
    title: "24/7 Dedicated Support",
    description: "Migration made simple with our around-the-clock support. Our expert team is always ready to assist you, ensuring a smooth and hassle-free transition to Spring Boot."
  },
  {
    icon: <FaChartLine className="text-primary h-5 w-5" />,
    title: "Cost and Time Efficiency",
    description: "Our Mule to Spring Boot conversion utility significantly reduces both time and cost associated with manual migration. By automating key processes, we help you fast-track your projects, minimize errors, and maximize resource efficiency, making the transition smoother and more affordable."
  }
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-darker">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-lg font-medium text-secondary mb-3">Why Choose Us</h2>
          <h3 className="text-3xl lg:text-4xl font-bold">We Are Here to Grow Your Business Exponentially</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-card rounded-xl p-8 lg:p-10 hover:bg-accent transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="inline-flex justify-center items-center w-12 h-12 rounded-full bg-primary bg-opacity-20 mb-6">
                {feature.icon}
              </div>
              <h4 className="text-xl lg:text-2xl font-bold mb-4">{feature.title}</h4>
              <p className="text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
