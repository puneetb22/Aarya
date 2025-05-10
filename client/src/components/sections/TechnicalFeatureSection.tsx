import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaCode, FaJava } from 'react-icons/fa';

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
              {/* Code editor interface */}
              <div className="bg-slate-900 w-full">
                {/* Editor header */}
                <div className="h-10 bg-slate-800 border-b border-slate-700 flex items-center px-4 text-xs text-gray-400">
                  <div className="flex space-x-1.5 mr-4">
                    <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
                  </div>
                  <div className="flex space-x-2">
                    <span className="bg-blue-600/20 px-2 py-1 rounded text-blue-400">muleflow.xml</span>
                    <span className="bg-green-600/20 px-2 py-1 rounded text-green-400">RestController.java</span>
                  </div>
                </div>
                
                {/* Code content */}
                <div className="grid grid-cols-2 h-full">
                  {/* Left side - Mulesoft code */}
                  <div className="p-5 bg-slate-900 border-r border-slate-700 text-sm font-mono">
                    <div className="mb-2 text-slate-500">// Mulesoft XML Flow</div>
                    <div className="text-blue-400">&lt;flow</div>
                    <div className="text-blue-400 ml-4">name=<span className="text-green-400">"api-main"</span>&gt;</div>
                    <div className="text-blue-400 ml-4">&lt;http:listener</div>
                    <div className="text-blue-400 ml-8">path=<span className="text-green-400">"/api/data"</span></div>
                    <div className="text-blue-400 ml-8">config-ref=<span className="text-green-400">"HTTP_Config"</span>/&gt;</div>
                    <div className="text-blue-400 ml-4">&lt;db:select</div>
                    <div className="text-blue-400 ml-8">config-ref=<span className="text-green-400">"Database_Config"</span>&gt;</div>
                    <div className="text-green-400 ml-12">"SELECT * FROM users"</div>
                    <div className="text-blue-400 ml-8">&lt;/db:select&gt;</div>
                    <div className="text-blue-400 ml-4">&lt;transform&gt;</div>
                    <div className="text-purple-400 ml-8">%dw 2.0</div>
                    <div className="text-blue-400 ml-4">&lt;/transform&gt;</div>
                    <div className="text-blue-400">&lt;/flow&gt;</div>
                  </div>
                  
                  {/* Right side - Spring Boot code */}
                  <div className="p-5 bg-slate-950 text-sm font-mono">
                    <div className="mb-2 text-slate-500">// Spring Boot Controller</div>
                    <div className="text-blue-400">@RestController</div>
                    <div className="text-blue-400">@RequestMapping(<span className="text-green-400">"/api"</span>)</div>
                    <div className="text-purple-400">public class <span className="text-yellow-400">DataController</span> {'{'}</div>
                    <div className="ml-4 text-slate-400">@Autowired</div>
                    <div className="ml-4 text-purple-400">private <span className="text-yellow-400">UserService</span> userServ;</div>
                    <div className="text-blue-400 ml-4">@GetMapping(<span className="text-green-400">"/data"</span>)</div>
                    <div className="text-purple-400 ml-4">public <span className="text-yellow-400">List&lt;User&gt;</span> getData() {'{'}</div>
                    <div className="text-yellow-400 ml-8">return <span className="text-white">userServ.findAll();</span></div>
                    <div className="text-purple-400 ml-4">{'}'}</div>
                    <div className="text-purple-400">{'}'}</div>
                  </div>
                </div>
                
                {/* Conversion indicators */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="bg-blue-600/30 backdrop-blur-sm border border-blue-500/30 rounded-full p-3">
                    <FaCode className="text-blue-400 h-5 w-5" />
                  </div>
                </div>
                
                <div className="h-10 bg-slate-800 border-t border-slate-700 flex items-center justify-between px-4 text-xs text-gray-400">
                  <div className="flex items-center">
                    <FaJava className="text-orange-400 mr-2" />
                    <span>Spring Boot 3.0</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-400">Conversion Complete</span>
                    <span className="ml-2 w-2 h-2 bg-green-500 rounded-full"></span>
                  </div>
                </div>
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
