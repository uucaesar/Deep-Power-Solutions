
import React from 'react';

const AboutHero: React.FC = () => {
  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1535498730771-e735b998cd64?q=80&w=2574&auto=format&fit=crop"
          alt="Refinery Night Lights"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark-blue/90 via-brand-dark-blue/70 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl">
          <p className="text-blue-400 font-bold tracking-widest uppercase mb-4 text-sm md:text-base">
            About Us
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
            Engineered for Reliability<br />
            Built for Critical Operations
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-white font-medium leading-relaxed drop-shadow-md max-w-3xl">
            Deep Power Solutions is your technical partner<br className="hidden md:block" />
            for intelligent power systems in the Mining and<br className="hidden md:block" />
            Oil & Gas sectors.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
