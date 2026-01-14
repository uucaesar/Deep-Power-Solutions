
import React from 'react';

const Industries: React.FC = () => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Mining Section */}
        <div className="relative h-[500px] lg:h-[600px] group overflow-hidden">
          {/* Background Image */}
          <img 
            src="https://images.unsplash.com/photo-1579547945413-497e1b99dac0?q=80&w=2070&auto=format&fit=crop" 
            alt="Mining Excavator" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-brand-dark-blue/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/40"></div>
          
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 sm:px-12 text-center">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 drop-shadow-md">
              Mining
            </h3>
            <p className="text-xl md:text-2xl text-white font-medium max-w-lg leading-relaxed drop-shadow-sm">
              Power for crushers, mills, and processing plants in remote areas.
            </p>
          </div>
        </div>

        {/* Oil & Gas Section */}
        <div className="relative h-[500px] lg:h-[600px] group overflow-hidden">
          {/* Background Image */}
          <img 
            src="https://images.unsplash.com/photo-1518391846015-55a9cc003b25?q=80&w=2070&auto=format&fit=crop" 
            alt="Oil and Gas Refinery" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-brand-dark-blue/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 sm:px-12 text-center">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 drop-shadow-md">
              Oil & Gas
            </h3>
            <p className="text-xl md:text-2xl text-white font-medium max-w-xl leading-relaxed drop-shadow-sm">
              Upstream, midstream, and downstream explosion-proof power systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
