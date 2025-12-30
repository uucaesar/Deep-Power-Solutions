
import React from 'react';
import { MailIcon, PhoneIcon, LocationIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark-blue text-white pt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-start">
             <div className="flex items-center space-x-3 mb-2">
               {/* Footer Logo Variant - Inverted colors */}
               <svg width="45" height="40" viewBox="0 0 45 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g transform="skewX(-15) translate(5,0)">
                  <rect width="32" height="40" rx="10" fill="white"/>
                  <rect x="16" y="4" width="12" height="32" rx="2" fill="#0d1c33"/>
                  <rect x="10" y="4" width="3" height="32" rx="1.5" fill="#0d1c33"/>
                </g>
              </svg>
               <div className="flex flex-col">
                 <span className="font-black text-2xl tracking-tight leading-none text-white">DEEP POWER</span>
                 <span className="font-black text-2xl tracking-tight leading-none -mt-1 text-white">SOLUTIONS</span>
               </div>
             </div>
             <p className="text-xs font-semibold text-gray-300 mb-8 ml-1">Engineered Solutions for Critical Industries</p>
             <p className="text-2xl font-medium">Let's Power Your Operations.</p>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-12">
            <h3 className="font-bold text-2xl mb-6">Quick Links</h3>
            <ul className="space-y-3 text-gray-300 text-lg">
              <li><a href="#" className="hover:text-brand-blue hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-brand-blue hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-brand-blue hover:text-white transition-colors">Bearings</a></li>
              <li><a href="#" className="hover:text-brand-blue hover:text-white transition-colors">Projects</a></li>
              <li><a href="#" className="hover:text-brand-blue hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-2xl mb-6">Contact</h3>
            <ul className="space-y-4 text-gray-300 text-lg">
              <li className="flex items-center">
                <MailIcon className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>info@deeppowersolutions.com</span>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>+27 11 123 4567</span>
              </li>
              <li className="flex items-start">
                <LocationIcon className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                <span>Johannesburg, South Africa</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-16 pt-8 text-center text-gray-400 text-sm">
          Copyright 2025 Deep Power Solutions | Privacy Policy.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
