
import React from 'react';
import { 
  GeneratorIcon, 
  HybridIcon, 
  PackagedPowerIcon, 
  GridControlIcon, 
  EmergencyIcon 
} from './SolutionsIcons';

const SolutionsPowerGeneration: React.FC = () => {
  return (
    <section className="bg-white py-20 lg:py-24 border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Headings */}
        <div className="max-w-4xl mb-12 lg:mb-16">
          <h2 className="text-brand-blue font-bold text-lg md:text-xl uppercase tracking-wide mb-2">
            Power Generation Solutions
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark-blue leading-tight mb-6">
            Reliable Energy for Critical Operations
          </h3>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl">
            We deliver engineered power systems designed to perform in the harshest environments. 
            From temporary backup to full-scale off-grid power plants, we provide:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Column 1: System Capabilities (5 columns width) */}
          <div className="lg:col-span-5">
            <div className="space-y-6">
              {/* Item 1 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <GeneratorIcon className="h-8 w-8 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <h5 className="font-bold text-brand-dark-blue text-lg">Diesel & Gas Generator Sets:</h5>
                  <p className="text-gray-600">Prime, continuous, and standby power.</p>
                </div>
              </div>
              {/* Item 2 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                   <HybridIcon className="h-8 w-8 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <h5 className="font-bold text-brand-dark-blue text-lg">Hybrid Solutions:</h5>
                  <p className="text-gray-600">Integrated Diesel / Solar / Battery systems for fuel efficiency.</p>
                </div>
              </div>
              {/* Item 3 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <PackagedPowerIcon className="h-8 w-8 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <h5 className="font-bold text-brand-dark-blue text-lg">Packaged Power:</h5>
                  <p className="text-gray-600">Containerized and skid-mounted plants for rapid deployment.</p>
                </div>
              </div>
              {/* Item 4 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <GridControlIcon className="h-8 w-8 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <h5 className="font-bold text-brand-dark-blue text-lg">Grid Control:</h5>
                  <p className="text-gray-600">Advanced generator synchronization and load-sharing systems.</p>
                </div>
              </div>
              {/* Item 5 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <EmergencyIcon className="h-8 w-8 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <h5 className="font-bold text-brand-dark-blue text-lg">Emergency Power:</h5>
                  <p className="text-gray-600">Critical backup systems for safety and compliance.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Key Applications (3 columns width) */}
          <div className="lg:col-span-3">
            <h4 className="text-2xl font-bold text-brand-dark-blue mb-6">
              Key Applications
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 h-2 w-2 rounded-full bg-brand-blue mt-2.5 mr-3"></span>
                <span className="text-lg text-gray-700">Mining Sites & Processing Plants</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-2 w-2 rounded-full bg-brand-blue mt-2.5 mr-3"></span>
                <span className="text-lg text-gray-700">Oil & Gas Facilities (Upstream/Downstream)</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-2 w-2 rounded-full bg-brand-blue mt-2.5 mr-3"></span>
                <span className="text-lg text-gray-700">Remote & Off-Grid Operations</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Images (4 columns width) */}
          <div className="lg:col-span-4">
            <div className="grid grid-cols-2 gap-4 h-full">
              <div className="col-span-1 row-span-1 rounded-xl overflow-hidden h-40 lg:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1563289069-42b4742f1d53?q=80&w=1934&auto=format&fit=crop" 
                  alt="Industrial Generator Container" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-1 row-span-1 rounded-xl overflow-hidden h-40 lg:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop" 
                  alt="Solar Panels Farm" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-1 row-span-1 rounded-xl overflow-hidden h-40 lg:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2058&auto=format&fit=crop" 
                  alt="Close up of Solar Panels" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-1 row-span-1 rounded-xl overflow-hidden h-40 lg:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1581093583449-ed25213444e9?q=80&w=2070&auto=format&fit=crop" 
                  alt="HMI Control Panel" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SolutionsPowerGeneration;
