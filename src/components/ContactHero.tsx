
import React from 'react';

const ContactHero: React.FC = () => {
  return (
    <section className="relative h-[500px] md:h-[600px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
          alt="Modern corporate building glass facade"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-brand-dark-blue/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <p className="text-blue-400 font-bold tracking-widest uppercase mb-4 text-sm md:text-base">
            Contact Us
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg mb-6">
            Ready to Engineer Your Solution?
          </h1>
          <p className="text-xl md:text-2xl text-white font-medium leading-relaxed drop-shadow-md">
            Get in touch with our technical team to discuss your project requirements, 
            request a consultation, or inquire about our services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
