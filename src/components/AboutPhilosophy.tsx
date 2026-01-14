
import React from 'react';

const AboutPhilosophy: React.FC = () => {
  return (
    <section className="bg-white pb-20">
      

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark-blue mb-4">
          Our Philosophy
        </h2>
        <h3 className="text-xl md:text-2xl font-bold text-brand-dark-blue mb-8">
          More Than Equipment Supply
        </h3>

        <p className="text-lg md:text-xl text-gray-700 mb-12 leading-relaxed max-w-4xl mx-auto">
          Our approach goes beyond the transaction. We act as a specialized Technical Partner, providing engineering, integration, and lifecycle support for your power systems. From the initial load study and conceptual design to the final installation and long-term maintenance, Deep Power Solutions takes ownership of the outcome. We believe in:
        </p>

        {/* List Container - Centered block, but text left-aligned for readability */}
        <div className="inline-block text-left max-w-3xl mx-auto">
          <ul className="space-y-6 text-lg md:text-xl text-gray-700 list-disc list-outside pl-6 marker:text-brand-dark-blue">
            <li className="pl-2">
              <strong className="text-brand-dark-blue">Engineering Depth:</strong> Comprehensive technical specifications, redundancy studies, and power quality analysis.
            </li>
            <li className="pl-2">
              <strong className="text-brand-dark-blue">Reliability First:</strong> Systems designed to withstand harsh environments and hazardous areas.
            </li>
            <li className="pl-2">
              <strong className="text-brand-dark-blue">Lifecycle Support:</strong> We don’t walk away after commissioning. We offer spare parts, troubleshooting, and bearing replacement support to keep you running.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutPhilosophy;
