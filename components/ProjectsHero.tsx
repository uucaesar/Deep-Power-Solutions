
import React from 'react';

const ProjectsHero: React.FC = () => {
  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?q=80&w=2545&auto=format&fit=crop"
          alt="Mining operation at night with floodlights"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay for Text Readability - Matching the dark blue theme */}
        <div className="absolute inset-0 bg-brand-dark-blue/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl">
          <p className="text-blue-400 font-bold tracking-widest uppercase mb-4 text-sm md:text-base">
            Projects
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg mb-6">
            Real-World Results:<br />
            Powering Critical Operations.
          </h1>
          <p className="text-xl md:text-2xl text-white font-medium leading-relaxed drop-shadow-md max-w-4xl">
            Explore our portfolio of delivered projects, from remote mining power
            plants to high-availability distribution systems for the oil & gas industry.
            See how we engineer certainty into every challenge.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsHero;
