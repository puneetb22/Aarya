import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCalendarAlt, FaDownload, FaFileAlt, FaGraduationCap, FaPlayCircle, FaYoutube } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

const ResourceCard = ({ 
  type, 
  title, 
  description, 
  imageSrc, 
  link, 
  date 
}: { 
  type: string; 
  title: string; 
  description: string; 
  imageSrc?: string; 
  link: string;
  date?: string;
}) => {
  const getIcon = () => {
    switch (type.toLowerCase()) {
      case 'video': return <FaYoutube className="w-5 h-5 text-red-500" />;
      case 'webinar': return <FaPlayCircle className="w-5 h-5 text-blue-500" />;
      case 'guide': return <FaFileAlt className="w-5 h-5 text-green-500" />;
      case 'whitepaper': return <FaDownload className="w-5 h-5 text-purple-500" />;
      default: return <FaFileAlt className="w-5 h-5 text-gray-500" />;
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden h-full flex flex-col">
        {imageSrc && (
          <div className="h-48 overflow-hidden">
            <img src={imageSrc} alt={title} className="w-full h-full object-cover transition-transform hover:scale-105" />
          </div>
        )}
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            {getIcon()}
            <span className="text-sm font-medium text-gray-500">{type}</span>
            {date && (
              <>
                <span className="mx-1">•</span>
                <span className="flex items-center text-sm text-gray-500">
                  <FaCalendarAlt className="mr-1 h-3 w-3" /> {date}
                </span>
              </>
            )}
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-gray-600">{description}</p>
        </CardContent>
        <CardFooter className="pt-0">
          <Button variant="link" className="p-0 h-auto text-blue-600 hover:text-blue-800 font-medium group" asChild>
            <Link href={link}>
              <span>Learn more</span>
              <FaArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const guides = [
  {
    type: "Guide",
    title: "Getting Started with Mulesoft Migration",
    description: "A comprehensive guide to planning your Mulesoft to Spring Boot migration project from start to finish.",
    imageSrc: "https://images.unsplash.com/photo-1606166325995-25c3da9fde39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80",
    link: "#guide-mulesoft-migration",
    date: "May 5, 2025"
  },
  {
    type: "Whitepaper",
    title: "The Business Case for Mulesoft Migration",
    description: "Learn about the ROI and business benefits of migrating from Mulesoft to Spring Boot for enterprise integration.",
    imageSrc: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80",
    link: "#whitepaper-business-case",
    date: "April 16, 2025"
  },
  {
    type: "Guide",
    title: "Best Practices for API Migration",
    description: "Technical best practices and patterns for ensuring seamless API migration from Mulesoft to Spring Boot.",
    imageSrc: "https://images.unsplash.com/photo-1633216616257-b0f4e1a24c32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80",
    link: "#guide-api-migration",
    date: "March 22, 2025"
  }
];

const videos = [
  {
    type: "Video",
    title: "Introduction to Aaryati's Conversion Platform",
    description: "A walkthrough of our automated Mulesoft to Spring Boot conversion platform and its key features.",
    imageSrc: "https://images.unsplash.com/photo-1610128114197-485d933885c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80",
    link: "#video-intro-platform",
    date: "May 10, 2025"
  },
  {
    type: "Webinar",
    title: "Migration Case Study: Financial Services",
    description: "Learn how a major bank successfully migrated their entire Mulesoft infrastructure to Spring Boot.",
    imageSrc: "https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80",
    link: "#webinar-financial-case-study",
    date: "April 28, 2025"
  },
  {
    type: "Video",
    title: "Technical Deep Dive: Connector Migration",
    description: "A technical session on how our platform handles complex connector migration between Mulesoft and Spring Boot.",
    imageSrc: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80",
    link: "#video-connector-migration",
    date: "March 15, 2025"
  }
];

const Resources = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950 z-0"></div>
        <div className="absolute -right-[400px] -bottom-[200px] w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block text-xs font-semibold bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full mb-6">
              RESOURCES & LEARNING
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Knowledge Center
            </h1>
            <p className="text-xl text-gray-300 mb-10">
              Explore our collection of guides, videos, and resources to master Mulesoft to Spring Boot migration.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="h-12 px-6 text-sm font-medium rounded-md bg-blue-500 hover:bg-blue-600" asChild>
                <Link href="#latest-resources">Browse Latest Resources</Link>
              </Button>
              <Button variant="outline" className="h-12 px-6 text-sm font-medium rounded-md border-slate-700 bg-slate-900/60 hover:bg-slate-800/80 text-white" asChild>
                <Link href="#resource-library">View Full Library</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resource */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-block text-xs font-semibold bg-green-100 text-green-800 px-3 py-1 rounded-full">
                  FEATURED RESOURCE
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-gray-900">The Complete Mulesoft Migration Handbook</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our comprehensive 45-page handbook covers everything you need to know about migrating from Mulesoft to Spring Boot, from planning to execution and beyond.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Step-by-step migration planning framework",
                  "Technical considerations and best practices",
                  "Common challenges and how to overcome them",
                  "Post-migration optimization strategies",
                  "Real-world case studies with measured outcomes"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="h-12 px-6 text-sm font-medium rounded-md bg-blue-600 hover:bg-blue-700 group" asChild>
                <Link href="#download-handbook">
                  <span>Download Free Handbook</span>
                  <FaArrowRight className="ml-2 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-tr from-gray-100 to-white p-6 rounded-2xl border border-gray-200 shadow-xl relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600 text-white flex flex-col items-center justify-center rounded-bl-2xl rounded-tr-2xl font-bold -mt-1 -mr-1 shadow-lg">
                  <span className="text-sm">FREE</span>
                  <span className="text-xs">DOWNLOAD</span>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Mulesoft Migration Handbook" 
                  className="w-full h-auto rounded-xl shadow-md"
                />
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Mulesoft Migration Handbook</h3>
                    <p className="text-gray-500">PDF • 45 pages • Updated May 2025</p>
                  </div>
                  <div className="flex items-center gap-2 text-blue-600">
                    <FaDownload className="w-5 h-5" />
                    <span className="font-semibold">5.2K+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Library */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">RESOURCE LIBRARY</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-gray-900">Browse Our Resources</h3>
            <p className="text-lg text-gray-600">
              Explore our comprehensive collection of guides, videos, whitepapers, and webinars
            </p>
          </div>
          
          <Tabs defaultValue="guides" className="w-full">
            <div className="flex justify-center mb-10">
              <TabsList className="grid grid-cols-2 w-full max-w-md">
                <TabsTrigger value="guides">Guides & Whitepapers</TabsTrigger>
                <TabsTrigger value="videos">Videos & Webinars</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="guides">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {guides.map((resource, index) => (
                  <ResourceCard 
                    key={index}
                    type={resource.type}
                    title={resource.title}
                    description={resource.description}
                    imageSrc={resource.imageSrc}
                    link={resource.link}
                    date={resource.date}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="videos">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {videos.map((resource, index) => (
                  <ResourceCard 
                    key={index}
                    type={resource.type}
                    title={resource.title}
                    description={resource.description}
                    imageSrc={resource.imageSrc}
                    link={resource.link}
                    date={resource.date}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="text-center mt-12">
            <Button variant="outline" className="h-12 px-6 text-sm font-medium rounded-md border-blue-200 text-blue-700 hover:bg-blue-50" asChild>
              <Link href="#view-all">View All Resources</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">LEARN WITH EXPERTS</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-gray-900">Upcoming Webinars</h3>
            <p className="text-lg text-gray-600">
              Join our live sessions with migration experts and learn about the latest best practices
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Enterprise Migration Strategies",
                date: "May 25, 2025",
                time: "11:00 AM EDT",
                presenter: "Sarah Johnson, Director of Enterprise Solutions",
                description: "Learn how to plan and execute large-scale migrations for enterprise environments."
              },
              {
                title: "Handling Complex Dataweave Transformations",
                date: "June 8, 2025",
                time: "2:00 PM EDT",
                presenter: "Michael Chen, Lead Architect",
                description: "Technical deep dive into converting complex Dataweave transformations to Spring Boot equivalents."
              }
            ].map((webinar, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 text-blue-800 rounded-lg p-3">
                    <FaCalendarAlt className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">{webinar.date}</div>
                    <div className="font-semibold">{webinar.time}</div>
                  </div>
                </div>
                
                <h4 className="text-xl font-bold mb-3 text-gray-900">{webinar.title}</h4>
                <p className="text-gray-600 mb-4">{webinar.description}</p>
                <div className="mb-6 font-medium text-blue-600">{webinar.presenter}</div>
                
                <Button className="w-full h-11 rounded-md bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200" asChild>
                  <Link href="#register-webinar">Register Now</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white mb-6">
              <FaGraduationCap className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold mb-6 text-white">Stay Updated with Migration Insights</h2>
            <p className="text-lg mb-8 text-blue-100">
              Subscribe to our newsletter for the latest Mulesoft to Spring Boot migration resources, tips, and industry news.
            </p>
            <div className="max-w-lg mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-800"
                />
                <Button className="h-12 px-6 text-sm font-medium rounded-md bg-slate-900 hover:bg-slate-800">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm mt-4 text-blue-100 opacity-80">
                We respect your privacy. You can unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;