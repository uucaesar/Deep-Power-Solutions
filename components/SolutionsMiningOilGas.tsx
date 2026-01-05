
import React from 'react';
import {
  GeneratorIcon,
  HeavyDutyIcon,
  ReliabilityShieldIcon,
  SectorFocusIcon,
  SiteSafetyIcon,
  UpsIcon
} from './SolutionsIcons';

const SolutionsMiningOilGas: React.FC = () => {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image Column - Left (Zig-zag pattern to alternate with Engineering section) */}
          <div className="order-2 lg:order-1 flex flex-col space-y-6">
             <div className="relative h-[280px] md:h-[350px] w-full rounded-2xl overflow-hidden shadow-xl group">
                <img
                  src="assets/mining-capabilities.jpeg"
                  alt="Open Pit Mine"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-6">
                  <p className="text-white font-bold text-lg uppercase tracking-wider"></p>
                </div>
             </div>
             <div className="relative h-[280px] md:h-[350px] w-full rounded-2xl overflow-hidden shadow-xl group">
                <img
                  src="assets/oil-capabilities.jpeg"
                  alt="Oil Refinery"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                 <div className="absolute bottom-4 left-6">
                  <p className="text-white font-bold text-lg uppercase tracking-wider"></p>
                </div>
             </div>
          </div>

          {/* Text Content - Right */}
          <div className="order-1 lg:order-2">
            <h2 className="text-brand-blue font-bold text-lg md:text-xl uppercase tracking-wide mb-2">
              Mining & Oil & Gas Solutions
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark-blue leading-tight mb-6">
              Specialized Power for Extractive Industries
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              We understand the unique challenges of remote sites and hazardous locations. Our solutions are engineered to ensure safety and continuity where downtime is not an option.
            </p>

            <div className="space-y-10">
              
              {/* Mining Section */}
              <div>
                <h4 className="text-2xl font-bold text-brand-dark-blue mb-4 pb-2 border-b border-gray-200">
                  Mining Capabilities
                </h4>
                <div className="space-y-4">
                    <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <GeneratorIcon className="h-6 w-6 text-brand-blue" />
                        </div>
                        <div className="ml-4">
                            <span className="font-bold text-brand-dark-blue block text-lg">Remote Power</span>
                            <span className="text-gray-600">Reliable generation for off-grid and harsh environments.</span>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <HeavyDutyIcon className="h-6 w-6 text-brand-blue" />
                        </div>
                        <div className="ml-4">
                            <span className="font-bold text-brand-dark-blue block text-lg">Processing Power</span>
                            <span className="text-gray-600">Heavy-duty energy systems for crushers, mills, and concentrators.</span>
                        </div>
                    </div>
                     <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <ReliabilityShieldIcon className="h-6 w-6 text-brand-blue" />
                        </div>
                        <div className="ml-4">
                            <span className="font-bold text-brand-dark-blue block text-lg">Operational Continuity</span>
                            <span className="text-gray-600">Robust architectures designed for 24/7 continuous production.</span>
                        </div>
                    </div>
                </div>
              </div>

              {/* Oil & Gas Section */}
              <div>
                <h4 className="text-2xl font-bold text-brand-dark-blue mb-4 pb-2 border-b border-gray-200">
                  Oil & Gas Capabilities
                </h4>
                 <div className="space-y-4">
                    <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <SectorFocusIcon className="h-6 w-6 text-brand-blue" />
                        </div>
                        <div className="ml-4">
                            <span className="font-bold text-brand-dark-blue block text-lg">Full-Stream Support</span>
                            <span className="text-gray-600">Power systems for Upstream, Midstream, and Downstream facilities.</span>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <SiteSafetyIcon className="h-6 w-6 text-brand-blue" />
                        </div>
                        <div className="ml-4">
                            <span className="font-bold text-brand-dark-blue block text-lg">Hazardous Areas</span>
                            <span className="text-gray-600">Explosion-proof and ATEX/IECEx compliant solutions.</span>
                        </div>
                    </div>
                     <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <UpsIcon className="h-6 w-6 text-brand-blue" />
                        </div>
                        <div className="ml-4">
                            <span className="font-bold text-brand-dark-blue block text-lg">High Availability</span>
                            <span className="text-gray-600">Redundant power configurations to prevent critical system tripping.</span>
                        </div>
                    </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SolutionsMiningOilGas;
