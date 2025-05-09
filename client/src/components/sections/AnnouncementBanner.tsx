import React from 'react';
import { FaBolt, FaArrowRight } from 'react-icons/fa';
import { Link } from 'wouter';

const AnnouncementBanner = () => {
  return (
    <div className="bg-accent py-3 px-4 lg:px-0">
      <div className="container mx-auto">
        <div className="flex justify-between items-center bg-card rounded-lg px-4 py-3 lg:px-6">
          <div className="flex items-center">
            <div className="mr-3 hidden sm:block">
              <span className="inline-flex justify-center items-center w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary">
                <FaBolt className="text-white h-3 w-3" />
              </span>
            </div>
            <div className="flex items-center">
              <span className="bg-primary text-white text-xs font-medium px-2 py-1 rounded mr-3">New</span>
              <p className="text-white text-sm lg:text-base">
                Mulesoft to Spring Boot Conversion v2.0 is here! Drive greater migration efficiency and code quality.
              </p>
            </div>
          </div>
          <div className="ml-4">
            <div className="text-white hover:text-secondary cursor-pointer">
              <Link href="#new-version">
                <FaArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
