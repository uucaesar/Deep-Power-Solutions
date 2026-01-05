
import React from 'react';
import { 
  GeneratorIcon, 
  SwitchgearIcon, 
  RotatingEquipmentIcon, 
  DesignIcon 
} from './SolutionsIcons';

interface ServicesProps {
  onNavigate: (page: string, id?: string | null) => void;
}

const servicesData = [
  {
    icon: <GeneratorIcon className="h-10 w-10 text-brand-blue" />,
    title: 'Power Generation',
    description: 'Diesel & gas gensets, hybrid solar/battery systems, and synchronization for prime and standby power.',
    link: '#power-generation'
  },
  {
    icon: <SwitchgearIcon className="h-10 w-10 text-brand-blue" />,
    title: 'Electrical Distribution',
    description: 'Medium & low voltage switchgear, MCCs, protection relays, and hazardous-area compliant systems.',
    link: '#distribution'
  },
  {
    icon: <RotatingEquipmentIcon className="h-10 w-10 text-brand-blue" />,
    title: 'Bearings & Rotating',
    description: 'Heavy-duty bearings for crushers, mills, and conveyors. OEM-equivalent brands and technical replacement support.',
    link: '#bearings'
  },
  {
    icon: <DesignIcon className="h-10 w-10 text-brand-blue" />,
    title: 'Engineering Services',
    description: 'Power system design, load studies, installation supervision, and long-term operation & maintenance (O&M).',
    link: '#engineering'
  },
];

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  return (
    <section className="bg-gray-50 py-20 lg:py-24 border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mb-12 lg:mb-16">
          <h2 className="text-brand-blue font-bold text-lg md:text-xl uppercase tracking-wide mb-2">
            Scope of Supply
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark-blue leading-tight mb-6">
            Comprehensive Power Solutions
          </h3>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl">
            We integrate world-class equipment with specialized engineering to deliver complete power ecosystems for critical industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              onClick={() => onNavigate('solutions', service.link.replace('#', ''))}
              className="bg-white rounded-xl shadow-md p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-gray-100 flex flex-col group cursor-pointer"
            >
              <div className="mb-6 p-4 bg-blue-50 rounded-lg w-16 h-16 flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                 <div className="text-brand-blue group-hover:text-white transition-colors duration-300">
                   {React.cloneElement(service.icon as React.ReactElement<{ className?: string }>, { className: "h-8 w-8" })}
                 </div>
              </div>
              <h3 className="font-bold text-xl text-brand-dark-blue mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                {service.description}
              </p>
              <span className="inline-flex items-center font-bold text-brand-blue group-hover:translate-x-2 transition-transform duration-300">
                View Details
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
