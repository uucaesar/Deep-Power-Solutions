
import React from 'react';

export const TechnicalExpertiseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 64 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    {/* Blueprint Sheet */}
    <rect x="12" y="8" width="32" height="40" rx="2" fill="none" stroke="currentColor" strokeWidth="3"/>
    
    {/* Blueprint Lines */}
    <path d="M18 16h20" stroke="currentColor" strokeWidth="2" opacity="0.6"/>
    <path d="M18 22h20" stroke="currentColor" strokeWidth="2" opacity="0.6"/>
    <path d="M18 28h14" stroke="currentColor" strokeWidth="2" opacity="0.6"/>
    
    {/* Gear Overlay */}
    <g transform="translate(42, 42)">
        <circle cx="0" cy="0" r="14" fill="none" stroke="currentColor" strokeWidth="3"/>
        <circle cx="0" cy="0" r="5" fill="none" stroke="currentColor" strokeWidth="3"/>
        {/* Teeth */}
        <path d="M0 -18v5M0 13v5M13 0h5M-18 0h5" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
        <path d="M-12.7 -12.7l3.5 3.5M9.2 9.2l3.5 3.5M12.7 -12.7l-3.5 3.5M-9.2 9.2l-3.5 3.5" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
    </g>
  </svg>
);

export const ReliabilityIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 64 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    {/* Shield Shape */}
    <path d="M32 6L12 14v14c0 15.5 9.4 30.2 20 34 10.6-3.8 20-18.5 20-34V14L32 6z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
    
    {/* Inner Shield Detail */}
    <path d="M32 10L16 16.5V28c0 11 7 22 16 25 9-3 16-14 16-25V16.5L32 10z" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>

    {/* Checkmark */}
    <path d="M22 30l7 7 13-13" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const SustainabilityIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 64 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    {/* Leaf */}
    <path d="M32 18c0 0 10 0 14 8 6 10 0 22 0 22s-12 6-22 0c-8-4-8-14-8-14s0-8 8-12 6-4 8-4z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
    <path d="M32 48c0 0 2-10 14-22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    
    {/* Recycling Arrows */}
    {/* Right Arrow */}
    <path d="M36 8 A 26 26 0 0 1 58 32" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    <path d="M58 32 L54 26 M58 32 L62 26" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>

    {/* Left Arrow */}
    <path d="M28 56 A 26 26 0 0 1 6 32" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    <path d="M6 32 L2 38 M6 32 L10 38" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
