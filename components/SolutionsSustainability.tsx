
import React from 'react';
import { 
  OptimizationIcon, 
  HybridIcon, 
  CostReductionIcon, 
  ESGIcon 
} from './SolutionsIcons';

const SolutionsSustainability: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content - Left */}
          <div>
            <h2 className="text-brand-blue font-bold text-lg md:text-xl uppercase tracking-wide mb-2">
              Energy Efficiency & Sustainability
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark-blue leading-tight mb-6">
              Sustainable Power & Optimization
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-10">
              We help industries transition toward cleaner energy profiles. Our solutions are designed to reduce fuel consumption and operational costs while meeting modern environmental standards.
            </p>

            <h4 className="text-2xl font-bold text-brand-dark-blue mb-6">
              Sustainability Services:
            </h4>

            <div className="space-y-6">
              {/* Item 1 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <OptimizationIcon className="h-7 w-7 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <span className="font-bold text-brand-dark-blue text-lg">Optimization:</span>
                  <span className="text-gray-600 text-lg ml-1">Comprehensive energy audits and system optimization strategies.</span>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <HybridIcon className="h-7 w-7 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <span className="font-bold text-brand-dark-blue text-lg">Hybrid Systems:</span>
                  <span className="text-gray-600 text-lg ml-1">Integration of low-emission technologies (Solar PV / Battery) with traditional generation.</span>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <CostReductionIcon className="h-7 w-7 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <span className="font-bold text-brand-dark-blue text-lg">Cost Reduction:</span>
                  <span className="text-gray-600 text-lg ml-1">Strategic implementation of fuel-saving technologies.</span>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <ESGIcon className="h-7 w-7 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <span className="font-bold text-brand-dark-blue text-lg">ESG Alignment:</span>
                  <span className="text-gray-600 text-lg ml-1">Power solutions designed to support your corporate Environmental, Social, and Governance (ESG) goals.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image - Right */}
          <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://i.ibb.co/hRkZycFs/energy-image.jpg" 
              alt="Containerized power unit with solar panels in background" 
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default SolutionsSustainability;
