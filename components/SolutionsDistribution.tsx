
import React from 'react';
import { 
  SwitchgearIcon, 
  MotorControlIcon, 
  DistributionBoardIcon, 
  IntelligenceIcon, 
  UpsIcon, 
  SiteSafetyIcon 
} from './SolutionsIcons';

const SolutionsDistribution: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Text Content */}
          <div>
            <h2 className="text-brand-blue font-bold text-lg md:text-xl uppercase tracking-wide mb-2">
              Electrical Distribution & Control
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark-blue leading-tight mb-6">
              Safe, Efficient, and Intelligent Power Management
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-10">
              Power generation is only the first step. We supply and integrate the critical infrastructure required to safely distribute, control, and protect your electrical assets.
            </p>

            <h4 className="text-2xl font-bold text-brand-dark-blue mb-6">
              System Capabilities:
            </h4>

            <div className="space-y-6">
              {/* Item 1 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <SwitchgearIcon className="h-7 w-7 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <span className="font-bold text-brand-dark-blue text-lg">Switchgear:</span>
                  <span className="text-gray-600 text-lg ml-1">Medium and Low Voltage solutions for primary distribution.</span>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <MotorControlIcon className="h-7 w-7 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <span className="font-bold text-brand-dark-blue text-lg">Motor Control:</span>
                  <span className="text-gray-600 text-lg ml-1">Motor Control Centers (MCC) for industrial automation.</span>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <DistributionBoardIcon className="h-7 w-7 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <span className="font-bold text-brand-dark-blue text-lg">Distribution:</span>
                  <span className="text-gray-600 text-lg ml-1">Custom power distribution boards and panels.</span>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <IntelligenceIcon className="h-7 w-7 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <span className="font-bold text-brand-dark-blue text-lg">System Intelligence:</span>
                  <span className="text-gray-600 text-lg ml-1">Advanced protection, digital metering, and control systems.</span>
                </div>
              </div>

              {/* Item 5 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <UpsIcon className="h-7 w-7 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <span className="font-bold text-brand-dark-blue text-lg">Power Quality & Backup:</span>
                  <span className="text-gray-600 text-lg ml-1">Industrial UPS systems and Battery Energy Storage (BESS).</span>
                </div>
              </div>

              {/* Item 6 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <SiteSafetyIcon className="h-7 w-7 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <span className="font-bold text-brand-dark-blue text-lg">Site Safety:</span>
                  <span className="text-gray-600 text-lg ml-1">Comprehensive grounding and lightning protection systems.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="assets/electrical-distribution.jpeg" 
              alt="Electrical Switchgear Room" 
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default SolutionsDistribution;
