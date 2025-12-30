
import React from 'react';

// Helper component for Brand Logos (using SVG paths for a professional look without external images)
const BrandLogo: React.FC<{ name: string; className?: string }> = ({ name, className }) => {
  // Simple typographic/geometric representations of famous industrial brands
  const renderLogo = () => {
    switch (name) {
      case 'CAT':
        return (
          <svg viewBox="0 0 100 40" className="h-full w-full fill-current">
            <path d="M10 30 L20 10 L30 30 M15 22 H25" stroke="currentColor" strokeWidth="4" fill="none"/>
            <text x="35" y="30" fontSize="24" fontWeight="900" fontFamily="sans-serif">CAT</text>
            <rect x="0" y="35" width="100" height="5" fill="currentColor" />
          </svg>
        );
      case 'Cummins':
        return (
           <svg viewBox="0 0 120 40" className="h-full w-full fill-current">
            <rect x="0" y="0" width="30" height="30" rx="4" fill="currentColor" />
            <text x="35" y="25" fontSize="20" fontWeight="800" fontFamily="sans-serif">Cummins</text>
           </svg>
        );
      case 'Perkins':
        return (
          <svg viewBox="0 0 120 40" className="h-full w-full fill-current">
            <circle cx="15" cy="20" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
            <line x1="15" y1="10" x2="15" y2="30" stroke="currentColor" strokeWidth="4"/>
            <text x="35" y="28" fontSize="22" fontWeight="bold" fontFamily="serif">Perkins</text>
          </svg>
        );
      case 'SKF':
        return (
          <svg viewBox="0 0 80 40" className="h-full w-full fill-current">
             <text x="0" y="30" fontSize="28" fontWeight="900" fontFamily="sans-serif" letterSpacing="2">SKF</text>
          </svg>
        );
      case 'Timken':
        return (
          <svg viewBox="0 0 120 40" className="h-full w-full fill-current">
             <text x="0" y="28" fontSize="24" fontWeight="bold" fontFamily="serif" letterSpacing="1">TIMKEN</text>
             <line x1="0" y1="32" x2="100" y2="32" stroke="currentColor" strokeWidth="2"/>
          </svg>
        );
      case 'FAG':
        return (
           <svg viewBox="0 0 80 40" className="h-full w-full fill-current">
             <text x="0" y="30" fontSize="28" fontWeight="900" fontFamily="sans-serif" className="italic">FAG</text>
          </svg>
        );
       case 'Volvo':
        return (
           <svg viewBox="0 0 120 40" className="h-full w-full fill-current">
             <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="3" fill="none"/>
             <line x1="20" y1="20" x2="35" y2="5" stroke="currentColor" strokeWidth="3"/>
             <text x="45" y="28" fontSize="20" fontWeight="900" fontFamily="sans-serif">VOLVO</text>
          </svg>
        );
       case 'ABB':
        return (
           <svg viewBox="0 0 80 40" className="h-full w-full fill-current">
             <text x="0" y="30" fontSize="24" fontWeight="900" fontFamily="sans-serif">ABB</text>
             <path d="M10 10 L20 10 M40 10 L50 10" stroke="currentColor" strokeWidth="4"/>
          </svg>
        );
      default:
        return <span className="text-xl font-bold">{name}</span>;
    }
  };

  return (
    <div className={`flex items-center justify-center h-16 w-32 md:w-40 mx-8 md:mx-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 text-gray-800 cursor-pointer ${className}`}>
      {renderLogo()}
    </div>
  );
};

const Brands: React.FC = () => {
  const brands = [
    "Caterpillar", "Cummins", "Perkins", "Volvo", 
    "SKF", "Timken", "FAG", "ABB"
  ];

  // Duplicate the array to ensure seamless infinite scrolling
  const scrollingBrands = [...brands, ...brands, ...brands];

  return (
    <section className="bg-white py-16 border-t border-gray-100 overflow-hidden">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .brand-scroll {
          animation: scroll 30s linear infinite;
        }
        .brand-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h2 className="text-brand-blue font-bold text-lg md:text-xl uppercase tracking-wide mb-3">
          Our Network
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-brand-dark-blue leading-tight">
          Trusted Brands & Component Partners
        </h3>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
          We utilize and supply components from world-leading manufacturers to ensure your operations run on proven reliability.
        </p>
      </div>

      <div className="w-full relative">
        <div className="flex w-max brand-scroll items-center">
          {scrollingBrands.map((brand, index) => (
            <BrandLogo key={`${brand}-${index}`} name={brand} />
          ))}
        </div>
        
        {/* Gradient Fade Overlay for smooth edges */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
};

export default Brands;
