import React from 'react';
import aaryatiLogoPath from '@assets/Aaryati.png';
import aaryatiIconPath from '@assets/A.png';

interface LogoProps {
  variant?: 'icon' | 'full';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'icon', className = '' }) => {
  if (variant === 'full') {
    return (
      <img 
        src={aaryatiLogoPath}
        alt="Aaryati Technologies" 
        className={`h-10 ${className}`}
      />
    );
  }
  
  return (
    <img 
      src={aaryatiIconPath}
      alt="Aaryati" 
      className={`h-12 w-12 ${className}`}
    />
  );
};

export default Logo;
