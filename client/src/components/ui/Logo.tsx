import React from 'react';

interface LogoProps {
  variant?: 'icon' | 'full';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'icon', className = '' }) => {
  if (variant === 'full') {
    return (
      <img 
        src="/src/assets/aaryati-logo.png" 
        alt="Aaryati Technologies" 
        className={`h-8 ${className}`}
      />
    );
  }
  
  return (
    <svg 
      width="48" 
      height="48" 
      viewBox="0 0 500 500" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="250" cy="250" r="250" fill="#0B1524"/>
      <circle cx="250" cy="145" r="45" fill="#00C9D0"/>
      <path d="M353 375H250L148 375L192 250H309L353 375Z" fill="white"/>
      <path d="M250 195L282 250H219L250 195Z" fill="white"/>
    </svg>
  );
};

export default Logo;
