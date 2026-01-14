
import React from 'react';
import { 
  TechnicalSupportIcon, 
  ReliabilityShieldIcon, 
  ESGIcon 
} from './SolutionsIcons';

const whyData = [
  {
    icon: <TechnicalSupportIcon className="h-10 w-10 text-brand-blue" />,
    title: 'Technical Expertise',
    description: 'We go beyond supply. Our in-house engineering team provides conceptual design, load studies, and full system integration to ensure your power infrastructure is right-sized and resilient.',
  },
  {
    icon: <ReliabilityShieldIcon className="h-10 w-10 text-brand-blue" />,
    title: 'Reliability Focused',
    description: 'Downtime is not an option. We design high-availability architectures with redundancy and protection systems specifically for harsh mining and industrial environments.',
  },
  {
    icon: <ESGIcon className="h-10 w-10 text-brand-blue" />,
    title: 'Sustainability Aligned',
    description: 'Future-proof your operations. We implement energy-efficient technologies and hybrid solar-battery systems to reduce fuel consumption and carbon footprint.',
  },
];

const Why: React.FC = () => {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
           <div className="max-w-2xl">
              <h2 className="text-brand-blue font-bold text-lg md:text-xl uppercase tracking-wide mb-2">
                Why Deep Power Solutions?
              </h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark-blue leading-tight">
                Engineered for Certainty in Critical Operations
              </h3>
           </div>
           <div className="flex items-end">
              <p className="text-lg text-gray-700 leading-relaxed">
                We bridge the gap between complex engineering challenges and reliable operational reality. Here is why industry leaders trust us with their power needs.
              </p>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyData.map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-brand-blue">
                 {item.icon}
              </div>
              <h3 className="font-bold text-xl text-brand-dark-blue mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why;
