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
              <li className="text-gray-400 hover:text-secondary"><Link href="/">Home</Link></li>
              <li className="text-gray-400 hover:text-secondary"><Link href="#services">Our Services</Link></li>
              <li className="text-gray-400 hover:text-secondary"><Link href="#team">Meet The Team</Link></li>
              <li className="text-gray-400 hover:text-secondary"><Link href="#blog">Latest Blog</Link></li>
              <li className="text-gray-400 hover:text-secondary"><Link href="#contact">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-medium mb-6">Solutions</h4>
            <ul className="space-y-3">
              <li className="text-gray-400 hover:text-secondary"><Link href="#mule-spring">Mule to Spring Boot</Link></li>
              <li className="text-gray-400 hover:text-secondary"><Link href="#api-migration">API Migration</Link></li>
              <li className="text-gray-400 hover:text-secondary"><Link href="#enterprise">Enterprise Integration</Link></li>
              <li className="text-gray-400 hover:text-secondary"><Link href="#connector">Connector Development</Link></li>
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
              <div className="text-gray-400 hover:text-secondary">
                <Link href="#linkedin">
                  <FaLinkedin className="h-5 w-5 cursor-pointer" />
                </Link>
              </div>
              <div className="text-gray-400 hover:text-secondary">
                <Link href="#twitter">
                  <FaTwitter className="h-5 w-5 cursor-pointer" />
                </Link>
              </div>
              <div className="text-gray-400 hover:text-secondary">
                <Link href="#github">
                  <FaGithub className="h-5 w-5 cursor-pointer" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-accent pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">© Aaryati Technologies. All Rights Reserved.</p>
            <div className="flex space-x-6">
              <div className="text-gray-400 text-sm hover:text-secondary">
                <Link href="#privacy">Privacy Policy</Link>
              </div>
              <div className="text-gray-400 text-sm hover:text-secondary">
                <Link href="#terms">Terms of Service</Link>
              </div>
              <div className="text-gray-400 text-sm hover:text-secondary">
                <Link href="#cookie">Cookie Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
