
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[600px] md:h-[700px] text-white">
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jfif"
          alt="Industrial power solutions background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      <div className="relative h-full flex items-center">
        <div className="bg-brand-dark-blue/80 backdrop-blur-sm w-full lg:w-3/5 xl:w-1/2 p-8 md:p-16 lg:p-24">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight uppercase">
                Engineered, Reliable, and Intelligent Power Solutions for Critical Operations.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl">
                From concept to commissioning, we go beyond supply to act as your technical partner. We ensure power continuity, safety, and efficiency in demanding Mining, Oil & Gas, and remote industrial environments.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                    href="#"
                    className="px-8 py-4 bg-brand-blue text-white font-semibold rounded-md hover:bg-blue-800 transition-colors duration-200 text-center"
                >
                    View Our Projects
                </a>
                <a
                    href="#"
                    className="px-8 py-4 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-brand-dark-blue transition-colors duration-200 text-center"
                >
                    Explore Solutions
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
