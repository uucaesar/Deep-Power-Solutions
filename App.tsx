
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Why from './components/Why';
import Footer from './components/Footer';
import Brands from './components/Brands';
import HomeMineImage from './components/HomeMineImage';
import AboutHero from './components/AboutHero';
import AboutWhoWeAre from './components/AboutWhoWeAre';
import AboutPhilosophy from './components/AboutPhilosophy';
import AboutWhyChooseUs from './components/AboutWhyChooseUs';
import AboutCoreCapabilities from './components/AboutCoreCapabilities';
import SolutionsHero from './components/SolutionsHero';
import SolutionsPowerGeneration from './components/SolutionsPowerGeneration';
import SolutionsDistribution from './components/SolutionsDistribution';
import SolutionsBearings from './components/SolutionsBearings';
import SolutionsEngineering from './components/SolutionsEngineering';
import SolutionsMiningOilGas from './components/SolutionsMiningOilGas';
import SolutionsTechnicalServices from './components/SolutionsTechnicalServices';
import SolutionsMaintenance from './components/SolutionsMaintenance';
import SolutionsSustainability from './components/SolutionsSustainability';
import SolutionsSupplyManagement from './components/SolutionsSupplyManagement';
import ProjectsHero from './components/ProjectsHero';
import ContactHero from './components/ContactHero';
import ContactForm from './components/ContactForm';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('about'); // Defaulting to 'about' as per user request context, but commonly 'home'

  return (
    <div className="bg-white min-h-screen">
      <Header onNavigate={setCurrentPage} />
      <main className="pt-24">
        {currentPage === 'home' && (
          <>
            <Hero />
            <About />
            <Services />
            <Why />
            <Brands />
            <HomeMineImage />
          </>
        )}
        {currentPage === 'about' && (
          <>
            <AboutHero />
            <AboutWhoWeAre />
            <AboutPhilosophy />
            <AboutWhyChooseUs />
            <AboutCoreCapabilities />
          </>
        )}
        {currentPage === 'solutions' && (
          <>
            <SolutionsHero />
            <div id="power-generation"><SolutionsPowerGeneration /></div>
            <div id="distribution"><SolutionsDistribution /></div>
            <div id="bearings"><SolutionsBearings /></div>
            <div id="engineering"><SolutionsEngineering /></div>
            <div id="mining-oil-gas"><SolutionsMiningOilGas /></div>
            <div id="technical-services"><SolutionsTechnicalServices /></div>
            <div id="maintenance"><SolutionsMaintenance /></div>
            <div id="sustainability"><SolutionsSustainability /></div>
            <div id="supply-management"><SolutionsSupplyManagement /></div>
          </>
        )}
        {currentPage === 'projects' && (
          <>
            <ProjectsHero />
            {/* Placeholder for future project case studies */}
            <div className="py-20 text-center bg-gray-50">
               <div className="container mx-auto px-4">
                 <p className="text-xl text-gray-500">Detailed Project Case Studies coming soon.</p>
               </div>
            </div>
          </>
        )}
        {currentPage === 'contact' && (
          <>
            <ContactHero />
            <ContactForm />
          </>
        )}
        {(currentPage !== 'home' && currentPage !== 'about' && currentPage !== 'solutions' && currentPage !== 'projects' && currentPage !== 'contact') && (
           <div className="py-20 text-center">
             <h2 className="text-3xl font-bold text-gray-400">Page under construction</h2>
           </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
