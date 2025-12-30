
import React from 'react';
import { 
  DesignIcon, 
  AnalysisIcon, 
  ReliabilityShieldIcon, 
  IntegrationNetworkIcon, 
  ValidationIcon 
} from './SolutionsIcons';

const SolutionsEngineering: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content - Left */}
          <div>
            <h2 className="text-brand-blue font-bold text-lg md:text-xl uppercase tracking-wide mb-2">
              Engineered Power Systems
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark-blue leading-tight mb-6">
              Design, Analysis, and Integration
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-10">
              We provide the technical expertise required to build resilient power infrastructure. Our engineering services mitigate risk and ensure your system is right-sized for your operational needs.
            </p>

            <h4 className="text-2xl font-bold text-brand-dark-blue mb-6">
              Engineering Services:
            </h4>

            <div className="space-y-6">
              {/* Item 1 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <DesignIcon className="h-7 w-7 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <span className="font-bold text-brand-dark-blue text-lg">System Design:</span>
                  <span className="text-gray-600 text-lg ml-1">Comprehensive conceptual and detailed power system engineering.</span>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <AnalysisIcon className="h-7 w-7 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <span className="font-bold text-brand-dark-blue text-lg">Analysis & Sizing:</span>
                  <span className="text-gray-600 text-lg ml-1">Load studies, power sizing calculations, and power quality analysis.</span>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <ReliabilityShieldIcon className="h-7 w-7 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <span className="font-bold text-brand-dark-blue text-lg">Reliability:</span>
                  <span className="text-gray-600 text-lg ml-1">Redundancy planning and reliability studies to maximize uptime.</span>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <IntegrationNetworkIcon className="h-7 w-7 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <span className="font-bold text-brand-dark-blue text-lg">Integration:</span>
                  <span className="text-gray-600 text-lg ml-1">Seamless integration of multi-vendor equipment.</span>
                </div>
              </div>

              {/* Item 5 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <ValidationIcon className="h-7 w-7 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <span className="font-bold text-brand-dark-blue text-lg">Testing & Validation:</span>
                  <span className="text-gray-600 text-lg ml-1">Full support for Factory Acceptance Testing (FAT) and Site Acceptance Testing (SAT).</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image - Right */}
          <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop" 
              alt="Electrical Engineer designing system on laptop" 
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default SolutionsEngineering;
