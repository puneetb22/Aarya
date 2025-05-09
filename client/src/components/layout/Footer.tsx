import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Logo from '@/components/ui/Logo';
import { FaMapMarkerAlt, FaEnvelope, FaPaperPlane, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-darker pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-white text-lg font-medium mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <p className="text-gray-400 flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-secondary h-4 w-4" />
                <span>Kharadi, Pune - India</span>
              </p>
              <p className="text-gray-400 flex items-start">
                <FaEnvelope className="mt-1 mr-3 text-secondary h-4 w-4" />
                <span>contact@aaryati.com</span>
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-medium mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/"><a className="text-gray-400 hover:text-secondary">Home</a></Link></li>
              <li><Link href="#services"><a className="text-gray-400 hover:text-secondary">Our Services</a></Link></li>
              <li><Link href="#team"><a className="text-gray-400 hover:text-secondary">Meet The Team</a></Link></li>
              <li><Link href="#blog"><a className="text-gray-400 hover:text-secondary">Latest Blog</a></Link></li>
              <li><Link href="#contact"><a className="text-gray-400 hover:text-secondary">Contact Us</a></Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-medium mb-6">Solutions</h4>
            <ul className="space-y-3">
              <li><Link href="#mule-spring"><a className="text-gray-400 hover:text-secondary">Mule to Spring Boot</a></Link></li>
              <li><Link href="#api-migration"><a className="text-gray-400 hover:text-secondary">API Migration</a></Link></li>
              <li><Link href="#enterprise"><a className="text-gray-400 hover:text-secondary">Enterprise Integration</a></Link></li>
              <li><Link href="#connector"><a className="text-gray-400 hover:text-secondary">Connector Development</a></Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-medium mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4">Stay updated with our latest developments and industry insights.</p>
            <div className="flex mb-4">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="rounded-r-none bg-card border-0 text-white focus:outline-none focus:ring-2 focus:ring-primary" 
              />
              <Button className="rounded-l-none" size="icon">
                <FaPaperPlane className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex space-x-4">
              <Link href="#linkedin">
                <a className="text-gray-400 hover:text-secondary"><FaLinkedin className="h-5 w-5" /></a>
              </Link>
              <Link href="#twitter">
                <a className="text-gray-400 hover:text-secondary"><FaTwitter className="h-5 w-5" /></a>
              </Link>
              <Link href="#github">
                <a className="text-gray-400 hover:text-secondary"><FaGithub className="h-5 w-5" /></a>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-accent pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">© Aaryati Technologies. All Rights Reserved.</p>
            <div className="flex space-x-6">
              <Link href="#privacy">
                <a className="text-gray-400 text-sm hover:text-secondary">Privacy Policy</a>
              </Link>
              <Link href="#terms">
                <a className="text-gray-400 text-sm hover:text-secondary">Terms of Service</a>
              </Link>
              <Link href="#cookie">
                <a className="text-gray-400 text-sm hover:text-secondary">Cookie Policy</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
