
import React from 'react';

const SolutionsHero: React.FC = () => {
  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="assets/solutions-hero.jpeg"
          alt="Engineering Power Lines Structure"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark-blue/90 via-brand-dark-blue/70 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl">
          <p className="text-blue-400 font-bold tracking-widest uppercase mb-4 text-sm md:text-base">
            Solutions
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
            Beyond Equipment Supply:<br />
            Your Integrated Power Partner.
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-white font-medium leading-relaxed drop-shadow-md max-w-3xl">
            We don't just deliver machinery; we deliver engineered certainty. From conceptual design to lifecycle support, we provide the technical expertise required to keep critical operations running.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutionsHero;
