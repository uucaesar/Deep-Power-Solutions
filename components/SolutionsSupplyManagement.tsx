
import React from 'react';
import { 
  ProcurementIcon, 
  VendorSelectionIcon, 
  LogisticsIcon, 
  ProjectControlsIcon, 
  CompletionIcon 
} from './SolutionsIcons';

const SolutionsSupplyManagement: React.FC = () => {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Image - Left */}
          <div className="order-2 lg:order-1 relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" 
              alt="Heavy duty flatbed truck carrying containerized equipment on a dirt road" 
              className="w-full h-full object-cover"
            />
            {/* Optional Overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark-blue/20 to-transparent"></div>
          </div>

          {/* Text Content - Right */}
          <div className="order-1 lg:order-2">
            <h2 className="text-brand-blue font-bold text-lg md:text-xl uppercase tracking-wide mb-2">
              Supply & Project Management
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark-blue leading-tight mb-6">
              End-to-End Sourcing & Delivery
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-10">
              We handle the complexities of the supply chain, acting as a single point of contact for procurement, logistics, and project execution to ensure your equipment arrives on time.
            </p>

            <h4 className="text-2xl font-bold text-brand-dark-blue mb-6">
              Management Services:
            </h4>

            <div className="space-y-6">
              {/* Item 1 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <ProcurementIcon className="h-7 w-7 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <span className="font-bold text-brand-dark-blue text-lg">Procurement:</span>
                  <span className="text-gray-600 text-lg ml-1">Strategic equipment sourcing and global procurement.</span>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <VendorSelectionIcon className="h-7 w-7 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <span className="font-bold text-brand-dark-blue text-lg">Vendor Management:</span>
                  <span className="text-gray-600 text-lg ml-1">Coordination of multiple suppliers to ensure technical alignment.</span>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <LogisticsIcon className="h-7 w-7 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <span className="font-bold text-brand-dark-blue text-lg">Logistics:</span>
                  <span className="text-gray-600 text-lg ml-1">Freight management, delivery logistics, and site handling.</span>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <ProjectControlsIcon className="h-7 w-7 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <span className="font-bold text-brand-dark-blue text-lg">Project Controls:</span>
                  <span className="text-gray-600 text-lg ml-1">Strict adherence to project schedules and cost baselines.</span>
                </div>
              </div>

              {/* Item 5 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <CompletionIcon className="h-7 w-7 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <span className="font-bold text-brand-dark-blue text-lg">Completion:</span>
                  <span className="text-gray-600 text-lg ml-1">Full project documentation packages and formal site handover.</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SolutionsSupplyManagement;
