
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-3">
      <svg width="45" height="40" viewBox="0 0 45 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="skewX(-15) translate(5,0)">
          <rect width="32" height="40" rx="10" fill="black"/>
          <rect x="16" y="4" width="12" height="32" rx="2" fill="#1e3a8a"/>
          <rect x="10" y="4" width="3" height="32" rx="1.5" fill="white"/>
        </g>
      </svg>
      <div className="flex flex-col">
        <span className="font-black text-xl tracking-tight text-black">DEEP POWER</span>
        <span className="font-black text-xl tracking-tight text-black -mt-1">SOLUTIONS</span>
        <span className="text-xs text-black font-semibold">Engineered Solutions for Critical Industries</span>
      </div>
    </div>
  );
};

export default Logo;
