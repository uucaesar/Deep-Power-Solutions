
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-black text-brand-dark-blue leading-tight">
          More Than Just Equipment Supply.
        </h2>
        <p className="mt-8 text-lg md:text-xl text-gray-600 leading-relaxed">
          Deep Power Solutions supports clients operating in the most demanding
          environments. We go beyond simple equipment supply—we act as a
          technical partner, providing engineering, integration, and lifecycle support.
          Whether you need reliable power continuity, energy efficiency, or
          heavy-duty rotating equipment support, we ensure your operations
          never stop.
        </p>
      </div>
    </section>
  );
};

export default About;
