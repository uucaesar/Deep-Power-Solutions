
import React from 'react';
import { 
  MaintenanceStrategyIcon, 
  PartsIcon, 
  TechnicalSupportIcon, 
  ContractIcon, 
  RotatingEquipmentIcon 
} from './SolutionsIcons';

const SolutionsMaintenance: React.FC = () => {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Image - Left */}
          <div className="order-2 lg:order-1 relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="assets/support.jpeg" 
              alt="Technician performing maintenance on a large industrial generator" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content - Right */}
          <div className="order-1 lg:order-2">
            <h2 className="text-brand-blue font-bold text-lg md:text-xl uppercase tracking-wide mb-2">
              Operation, Maintenance & Support
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark-blue leading-tight mb-6">
              Lifecycle Support & Asset Care
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-10">
              We ensure the reliability and long-term performance of your equipment through comprehensive support services that extend well beyond installation.
            </p>

            <h4 className="text-2xl font-bold text-brand-dark-blue mb-6">
              Support Services:
            </h4>

            <div className="space-y-6">
              {/* Item 1 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <MaintenanceStrategyIcon className="h-7 w-7 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <span className="font-bold text-brand-dark-blue text-lg">Maintenance Strategies:</span>
                  <span className="text-gray-600 text-lg ml-1">Scheduled preventive and responsive corrective maintenance.</span>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <PartsIcon className="h-7 w-7 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <span className="font-bold text-brand-dark-blue text-lg">Parts Management:</span>
                  <span className="text-gray-600 text-lg ml-1">Strategic spare parts supply and logistics.</span>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <TechnicalSupportIcon className="h-7 w-7 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <span className="font-bold text-brand-dark-blue text-lg">Technical Assistance:</span>
                  <span className="text-gray-600 text-lg ml-1">Advanced troubleshooting and 24/7 technical support.</span>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <ContractIcon className="h-7 w-7 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <span className="font-bold text-brand-dark-blue text-lg">Service Contracts:</span>
                  <span className="text-gray-600 text-lg ml-1">Long-Term Service Agreements (LTSA) for operational peace of mind.</span>
                </div>
              </div>

              {/* Item 5 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <RotatingEquipmentIcon className="h-7 w-7 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <span className="font-bold text-brand-dark-blue text-lg">Mechanical Support:</span>
                  <span className="text-gray-600 text-lg ml-1">Specialized bearing replacement and rotating equipment maintenance.</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SolutionsMaintenance;
