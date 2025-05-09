import React from 'react';
import { FaArrowRight, FaStar } from 'react-icons/fa';
import { Link } from 'wouter';

const AnnouncementBanner = () => {
  return (
    <Link href="#new-version" className="block w-full">
      <div className="w-full bg-[#111527] border-b border-accent/20">
        <div className="container mx-auto">
          <div className="flex items-center justify-between py-3 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center flex-1 overflow-hidden">
              <div className="flex items-center mr-3">
                <span className="bg-background rounded-full p-0.5">
                  <span className="inline-flex justify-center items-center w-7 h-7 rounded-full bg-gradient-to-r from-pink-500 to-violet-500">
                    <FaStar className="text-white h-3 w-3" />
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="bg-background text-white text-xs font-semibold px-2 py-1 rounded-md uppercase tracking-wide">New</span>
                <p className="text-white text-sm truncate">
                  <span className="hidden sm:inline">Mulesoft to Spring Boot Conversion v2.0 is here! Drive greater migration efficiency and code quality.</span>
                  <span className="inline sm:hidden">Mulesoft Converter v2.0 is here!</span>
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center w-8 h-8 text-white">
              <FaArrowRight className="h-3 w-3" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AnnouncementBanner;
