
import React from 'react';
import { 
  RotatingEquipmentIcon, 
  HeavyDutyIcon, 
  SectorFocusIcon, 
  QualitySupplyIcon, 
  TechnicalSupportIcon 
} from './SolutionsIcons';

const SolutionsBearings: React.FC = () => {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Image (Zig-zag layout) */}
          <div className="order-2 lg:order-1 relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1565514020120-b79e7c3e34b8?q=80&w=2070&auto=format&fit=crop" 
              alt="Precision Industrial Ball Bearing" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Column: Text Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-brand-blue font-bold text-lg md:text-xl uppercase tracking-wide mb-2">
              Bearings & Rotating Equipment
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark-blue leading-tight mb-6">
              Premium Components for Critical Assets
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-10">
              We supply high-performance bearings designed to withstand the extreme loads and harsh environments of the mining and energy sectors.
            </p>

            <h4 className="text-2xl font-bold text-brand-dark-blue mb-6">
              Product & Service Range:
            </h4>

            <div className="space-y-6">
              {/* Item 1 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <RotatingEquipmentIcon className="h-7 w-7 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <span className="font-bold text-brand-dark-blue text-lg">General Rotating Equipment:</span>
                  <span className="text-gray-600 text-lg ml-1">Precision bearings for electric motors, pumps, and compressors.</span>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <HeavyDutyIcon className="h-7 w-7 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <span className="font-bold text-brand-dark-blue text-lg">Heavy-Duty Applications:</span>
                  <span className="text-gray-600 text-lg ml-1">Robust solutions specifically for crushers, mills, and conveyors.</span>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <SectorFocusIcon className="h-7 w-7 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <span className="font-bold text-brand-dark-blue text-lg">Sector Focus:</span>
                  <span className="text-gray-600 text-lg ml-1">Engineered for Mining and Oil & Gas operating conditions.</span>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <QualitySupplyIcon className="h-7 w-7 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <span className="font-bold text-brand-dark-blue text-lg">Quality Supply:</span>
                  <span className="text-gray-600 text-lg ml-1">Access to top-tier OEM and equivalent premium brands.</span>
                </div>
              </div>

              {/* Item 5 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <TechnicalSupportIcon className="h-7 w-7 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <span className="font-bold text-brand-dark-blue text-lg">Technical Support:</span>
                  <span className="text-gray-600 text-lg ml-1">Expert guidance on bearing selection, sizing, and replacement strategies.</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsBearings;
