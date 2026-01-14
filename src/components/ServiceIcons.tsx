
import React from 'react';

export const PowerGenerationIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 64 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    {/* Base Skid */}
    <path d="M4 52h56v4H4z" opacity="0.8"/>
    {/* Radiator / Fan Housing */}
    <path d="M8 24h10v28H8z" />
    <path d="M10 28h6v20h-6z" fill="white" fillOpacity="0.5"/>
    <path d="M10 32h6v2h-6zM10 36h6v2h-6zM10 40h6v2h-6zM10 44h6v2h-6z" fill="currentColor"/>
    {/* Engine Block */}
    <path d="M20 20h24v32H20z" />
    <path d="M24 24h16v8H24z" fill="white" fillOpacity="0.3"/>
    <circle cx="28" cy="40" r="2" fill="white" fillOpacity="0.3"/>
    <circle cx="36" cy="40" r="2" fill="white" fillOpacity="0.3"/>
    {/* Alternator */}
    <path d="M46 26h10v26H46z" />
    <path d="M56 30h4v18h-4z" opacity="0.8"/>
    {/* Exhaust */}
    <path d="M28 20V12h-4" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
    <path d="M22 8h8v6h-8z"/>
  </svg>
);

export const ElectricalDistributionIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 64 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    {/* Lightning Bolt */}
    <path d="M18 6L6 32h10l-4 26 24-28H22l8-24H18z" />
    
    {/* Electrical Panel */}
    <path d="M36 10h22v44H36z" opacity="0.8"/>
    <path d="M38 12h18v40H38z" fill="white" fillOpacity="0.2"/>
    
    {/* Switches/Meters on Panel */}
    <rect x="42" y="16" width="10" height="8" rx="1" fill="currentColor"/>
    <rect x="42" y="28" width="4" height="12" rx="1" fill="currentColor"/>
    <rect x="48" y="28" width="4" height="12" rx="1" fill="currentColor"/>
    <circle cx="47" cy="46" r="2" fill="currentColor"/>
  </svg>
);

export const BearingsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 64 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    {/* Gear */}
    <g transform="translate(32, 20)">
       <path d="M16.5 6.5L14.7 9.6C14.1 9.4 13.5 9.2 12.8 9.1L12.3 5.6C12.2 4.7 11.4 4 10.5 4H5.5C4.6 4 3.8 4.7 3.7 5.6L3.2 9.1C2.5 9.2 1.9 9.4 1.3 9.6L-0.5 6.5C-1.0 5.8 -2.0 5.6 -2.7 6.1L-6.7 9.1C-7.4 9.6 -7.6 10.6 -7.1 11.3L-5.3 14.4C-5.7 15.0 -6.0 15.6 -6.2 16.3L-9.7 16.8C-10.6 16.9 -11.3 17.7 -11.3 18.6V23.6C-11.3 24.5 -10.6 25.3 -9.7 25.4L-6.2 25.9C-6.0 26.6 -5.7 27.2 -5.3 27.8L-7.1 30.9C-7.6 31.6 -7.4 32.6 -6.7 33.1L-2.7 36.1C-2.0 36.6 -1.0 36.4 -0.5 35.7L1.3 32.6C1.9 32.8 2.5 33.0 3.2 33.1L3.7 36.6C3.8 37.5 4.6 38.2 5.5 38.2H10.5C11.4 38.2 12.2 37.5 12.3 36.6L12.8 33.1C13.5 33.0 14.1 32.8 14.7 32.6L16.5 35.7C17.0 36.4 18.0 36.6 18.7 36.1L22.7 33.1C23.4 32.6 23.6 31.6 23.1 30.9L21.3 27.8C21.7 27.2 22.0 26.6 22.2 25.9L25.7 25.4C26.6 25.3 27.3 24.5 27.3 23.6V18.6C27.3 17.7 26.6 16.9 25.7 16.8L22.2 16.3C22.0 15.6 21.7 15.0 21.3 14.4L23.1 11.3C23.6 10.6 23.4 9.6 22.7 9.1L18.7 6.1C18.0 5.6 17.0 5.8 16.5 6.5ZM8 27.1C4.7 27.1 2 24.4 2 21.1C2 17.8 4.7 15.1 8 15.1C11.3 15.1 14 17.8 14 21.1C14 24.4 11.3 27.1 8 27.1Z" opacity="0.5"/>
    </g>
    {/* Bearing */}
    <g transform="translate(8, 24)">
        <circle cx="16" cy="16" r="14" fill="none" stroke="currentColor" strokeWidth="4"/>
        <circle cx="16" cy="16" r="6" fill="none" stroke="currentColor" strokeWidth="4"/>
        {/* Balls */}
        <circle cx="16" cy="6" r="3" fill="currentColor"/>
        <circle cx="16" cy="26" r="3" fill="currentColor"/>
        <circle cx="6" cy="16" r="3" fill="currentColor"/>
        <circle cx="26" cy="16" r="3" fill="currentColor"/>
        <circle cx="23" cy="9" r="3" fill="currentColor"/>
        <circle cx="9" cy="23" r="3" fill="currentColor"/>
        <circle cx="23" cy="23" r="3" fill="currentColor"/>
        <circle cx="9" cy="9" r="3" fill="currentColor"/>
    </g>
  </svg>
);

export const EngineeringIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 64 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    {/* Blueprint Paper */}
    <path d="M10 8h36v48H10z" fill="none" stroke="currentColor" strokeWidth="2"/>
    <path d="M14 14h28M14 20h28M14 26h28M14 32h28M14 38h28M14 44h28" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5"/>
    <path d="M28 8v48" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5"/>
    
    {/* Gear on Blueprint */}
    <circle cx="46" cy="46" r="10" fill="white" stroke="currentColor" strokeWidth="2"/>
    <path d="M46 32v4M46 56v4M32 46h4M56 46h4" stroke="currentColor" strokeWidth="2"/>
    <circle cx="46" cy="46" r="4" fill="currentColor"/>

    {/* Wrench */}
    <path d="M42 22l14-14c1-1 2.5-1 3.5 0l2 2c1 1 1 2.5 0 3.5L47.5 27.5" fill="currentColor"/>
    <path d="M38 26l8-8 4 4-8 8z" fill="currentColor"/>
  </svg>
);
