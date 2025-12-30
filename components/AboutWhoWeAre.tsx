
import React from 'react';

const AboutWhoWeAre: React.FC = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark-blue mb-8">
              Who We Are
            </h2>
            <div className="text-lg md:text-xl text-gray-700 leading-relaxed space-y-8 font-medium">
              <p>
                Deep Power Solutions delivers engineered, reliable, and intelligent power solutions for
                critical operations. We support clients operating in the most demanding
                environments by ensuring power continuity, safety, efficiency, and performance.
              </p>
              <p>
                We are not just a supplier; we are problem solvers. Whether it is a remote mining site
                requiring off-grid power or a processing plant needing high-voltage distribution, we bridge
                the gap between complex engineering challenges and reliable operational reality.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[400px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
             <img
              src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=2070&auto=format&fit=crop"
              alt="Engineers reviewing plans in front of industrial machinery"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWhoWeAre;
