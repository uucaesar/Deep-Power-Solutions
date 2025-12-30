
import React from 'react';

const HomeMineImage: React.FC = () => {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1579547945413-497e1b99dac0?q=80&w=2070&auto=format&fit=crop"
        alt="Large scale open pit mining operation"
        className="w-full h-full object-cover"
      />
      {/* subtle overlay to harmonize with brand colors */}
      <div className="absolute inset-0 bg-brand-dark-blue/20 mix-blend-multiply"></div>
    </section>
  );
};

export default HomeMineImage;
