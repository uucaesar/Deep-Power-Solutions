
import React, { useState, useEffect } from 'react';
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
import LoadingOverlay from './components/LoadingOverlay';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoading, setIsLoading] = useState(false);
  const [targetId, setTargetId] = useState<string | null>(null);

  // Handle Initial Load Animation
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handlePageNavigation = (page: string, sectionId?: string | null) => {
    // If staying on same page and just scrolling to ID
    if (page === currentPage && sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }

    // If staying on same page and no ID (scroll top)
    if (page === currentPage && !sectionId) {
       window.scrollTo({ top: 0, behavior: 'smooth' });
       return;
    }

    // Trigger Loading Sequence
    setIsLoading(true);
    if (sectionId) setTargetId(sectionId); // Store target for after load
    else setTargetId(null);

    // Simulate Network/Transition Delay
    setTimeout(() => {
      setCurrentPage(page);
      
      // Allow DOM to update then remove loader
      setTimeout(() => {
        setIsLoading(false);
        // Handle scrolling after loader is removed
        if (sectionId) {
           const element = document.getElementById(sectionId);
           if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
           window.scrollTo(0, 0);
        }
      }, 50);

    }, 600); 
  };

  return (
    <div className="bg-white min-h-screen">
      {isLoading && <LoadingOverlay />}
      
      <Header onNavigate={handlePageNavigation} />
      <main className="pt-24 animate-fade-in">
        {currentPage === 'home' && (
          <div className="animate-fade-in">
            <Hero />
            <About />
            <Services />
            <Why />
            <Brands />
            <HomeMineImage />
          </div>
        )}
        {currentPage === 'about' && (
          <div className="animate-fade-in">
            <AboutHero />
            <AboutWhoWeAre />
            <AboutPhilosophy />
            <AboutWhyChooseUs />
            <AboutCoreCapabilities />
          </div>
        )}
        {currentPage === 'solutions' && (
          <div className="animate-fade-in">
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
          </div>
        )}
        {currentPage === 'projects' && (
          <div className="animate-fade-in">
            <ProjectsHero />
            {/* Placeholder for future project case studies */}
            <div className="py-20 text-center bg-gray-50">
               <div className="container mx-auto px-4">
                 <p className="text-xl text-gray-500">Detailed Project Case Studies coming soon.</p>
               </div>
            </div>
          </div>
        )}
        {currentPage === 'contact' && (
          <div className="animate-fade-in">
            <ContactHero />
            <ContactForm />
          </div>
        )}
        {(currentPage !== 'home' && currentPage !== 'about' && currentPage !== 'solutions' && currentPage !== 'projects' && currentPage !== 'contact') && (
           <div className="py-20 text-center animate-fade-in">
             <h2 className="text-3xl font-bold text-gray-400">Page under construction</h2>
           </div>
        )}
      </main>
      {!isLoading && <Footer />}
    </div>
  );
};

export default App;
