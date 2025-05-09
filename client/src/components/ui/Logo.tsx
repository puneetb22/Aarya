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
        className={`h-12 ${className}`}
      />
    );
  }
  
  return (
    <img 
      src={aaryatiIconPath}
      alt="Aaryati" 
      className={`h-14 w-14 ${className}`}
    />
  );
};

export default Logo;
