
import React from 'react';

const AboutCoreCapabilities: React.FC = () => {
  return (
    <section className="bg-white py-20 lg:py-24 border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-blue mb-4">
            Core Capabilities
          </h2>
          <p className="text-lg md:text-xl text-gray-700">
            We integrate multiple disciplines to deliver a complete power ecosystem:
          </p>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Power Generation */}
          <div className="flex flex-col">
            <div className="h-64 w-full rounded-lg overflow-hidden mb-6 shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1583569527772-56360c49fa6b?q=80&w=2070&auto=format&fit=crop" 
                alt="Containerized power generator" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-brand-dark-blue mb-4">
              Power Generation
            </h3>
            <ul className="space-y-2 text-gray-700 list-disc pl-5 marker:text-black text-lg">
              <li>Diesel/Gas generators</li>
              <li>Hybrid solar/battery solutions</li>
              <li>Containerized power plants</li>
            </ul>
          </div>

          {/* Electrical Distribution */}
          <div className="flex flex-col">
            <div className="h-64 w-full rounded-lg overflow-hidden mb-6 shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1621255562767-33e387198758?q=80&w=2070&auto=format&fit=crop" 
                alt="Electrical distribution switchgear panel" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-brand-dark-blue mb-4">
              Electrical Distribution
            </h3>
            <ul className="space-y-2 text-gray-700 list-disc pl-5 marker:text-black text-lg">
              <li>MV/LV switchgear</li>
              <li>MCCs</li>
              <li>Protection systems</li>
            </ul>
          </div>

          {/* Rotating Equipment */}
          <div className="flex flex-col">
            <div className="h-64 w-full rounded-lg overflow-hidden mb-6 shadow-md bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1564619757656-7813a3424168?q=80&w=2070&auto=format&fit=crop" 
                alt="Large industrial metal bearing" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-brand-dark-blue mb-4">
              Rotating Equipment Components
            </h3>
            <ul className="space-y-2 text-gray-700 list-disc pl-5 marker:text-black text-lg">
              <li>Premium bearings for motors</li>
              <li>Crushers, pumps, and conveyors</li>
            </ul>
          </div>

        </div>

        {/* Footer Note */}
        <div className="mt-16 pt-8 border-t border-gray-100">
           <p className="text-lg md:text-xl text-brand-dark-blue font-medium text-center">
             Service & Maintenance: Preventive maintenance, installation supervision, and technical audits.
           </p>
        </div>

      </div>
    </section>
  );
};

export default AboutCoreCapabilities;
