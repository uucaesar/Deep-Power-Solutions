
import React from 'react';

const GearIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 00.12-.61l-1.92-3.32a.488.488 0 00-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 00-.48-.41h-3.84a.484.484 0 00-.48.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.488.488 0 00-.59.22L2.85 8.94a.49.49 0 00.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58a.49.49 0 00-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.48-.41l.36-2.54c.59-.24 1.13-.57 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
  </svg>
);

const TruckIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
  </svg>
);

const UserIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
  </svg>
);

const AboutWhyChooseUs: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-brand-dark-blue text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop"
          alt="Handshake background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-brand-dark-blue/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark-blue/90 via-brand-dark-blue/80 to-brand-dark-blue/70"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-xl md:text-2xl text-gray-200 font-medium">Proven Experience in Critical Environments</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
        
          {/* Right Column: CTA */}
          <div className="lg:pl-8 flex flex-col items-start justify-center">
            <h3 className="text-2xl md:text-4xl font-bold leading-tight mb-8 drop-shadow-lg">
              Let’s Power Your Operations.<br />
              <span className="text-gray-200 text-xl md:text-3xl font-normal mt-4 block">
                From concept to operation, we are ready to support your project.
              </span>
            </h3>
            <a href="#" className="inline-block px-10 py-4 bg-[#FF5722] hover:bg-[#E64A19] text-white font-bold rounded-md transition-colors text-lg shadow-lg uppercase tracking-wide">
              Contact Our Team
            </a>
          </div>
        
          {/* Left Column: List */}
          <div className="space-y-10">
            <div className="flex items-start">
              <GearIcon className="h-10 w-10 text-white mt-1 flex-shrink-0" />
              <div className="ml-6">
                <p className="text-lg md:text-xl leading-relaxed">
                  <span className="font-bold text-white block mb-1 text-xl">Strong Technical Expertise:</span>
                  <span className="text-gray-200">We know the engineering behind the equipment.</span>
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <TruckIcon className="h-10 w-10 text-white mt-1 flex-shrink-0" />
              <div className="ml-6">
                 <p className="text-lg md:text-xl leading-relaxed">
                  <span className="font-bold text-white block mb-1 text-xl">Delivery Commitment:</span>
                  <span className="text-gray-200">Logistics and project management you can trust.</span>
                </p>
              </div>
            </div>

            <div className="flex items-start">
               <UserIcon className="h-10 w-10 text-white mt-1 flex-shrink-0" />
               <div className="ml-6">
                 <p className="text-lg md:text-xl leading-relaxed">
                  <span className="font-bold text-white block mb-1 text-xl">Customer-Driven:</span>
                  <span className="text-gray-200">A single point of accountability for your power needs.</span>
                </p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWhyChooseUs;
