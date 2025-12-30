
import React from 'react';
import { 
  DesignIcon, 
  DocumentationIcon, 
  VendorSelectionIcon, 
  SiteSupervisionIcon, 
  HealthCheckIcon 
} from './SolutionsIcons';

const SolutionsTechnicalServices: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content - Left */}
          <div>
            <h2 className="text-brand-blue font-bold text-lg md:text-xl uppercase tracking-wide mb-2">
              Engineering & Technical Services
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark-blue leading-tight mb-6">
              Technical Consultancy & Project Execution
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-10">
              We act as your technical partner throughout the project lifecycle, ensuring that every design is viable, every vendor is vetted, and every installation is compliant.
            </p>

            <h4 className="text-2xl font-bold text-brand-dark-blue mb-6">
              Service Scope:
            </h4>

            <div className="space-y-6">
              {/* Item 1 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <DesignIcon className="h-7 w-7 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <span className="font-bold text-brand-dark-blue text-lg">Engineering Design:</span>
                  <span className="text-gray-600 text-lg ml-1">Full conceptual and detailed engineering packages.</span>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <DocumentationIcon className="h-7 w-7 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <span className="font-bold text-brand-dark-blue text-lg">Documentation:</span>
                  <span className="text-gray-600 text-lg ml-1">Preparation of robust technical specifications and datasheets.</span>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <VendorSelectionIcon className="h-7 w-7 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <span className="font-bold text-brand-dark-blue text-lg">Procurement Support:</span>
                  <span className="text-gray-600 text-lg ml-1">Expert vendor selection and technical bid evaluation.</span>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <SiteSupervisionIcon className="h-7 w-7 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <span className="font-bold text-brand-dark-blue text-lg">Site Services:</span>
                  <span className="text-gray-600 text-lg ml-1">On-site installation supervision and system commissioning.</span>
                </div>
              </div>

              {/* Item 5 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <HealthCheckIcon className="h-7 w-7 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <span className="font-bold text-brand-dark-blue text-lg">Health Checks:</span>
                  <span className="text-gray-600 text-lg ml-1">Comprehensive technical audits and system assessments.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image - Right */}
          <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2072&auto=format&fit=crop" 
              alt="Engineer with tablet inspecting industrial facility" 
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default SolutionsTechnicalServices;
