
import React, { useState } from 'react';
import Logo from './Logo';
import { ChevronDownIcon, MenuIcon, XIcon } from './Icons';

interface HeaderProps {
  onNavigate: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState<string | null>(null);

  const handleNavClick = (page: string, id: string | null = null, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(page);
    setIsMenuOpen(false); // Close mobile menu if open

    if (id) {
      // Small timeout to allow the new page to render before scrolling
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  };

  const toggleMobileSubMenu = (name: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setMobileSubMenuOpen(mobileSubMenuOpen === name ? null : name);
  };

  const navItems = [
    { name: 'Home', page: 'home' },
    { name: 'About Us', page: 'about' },
    { 
      name: 'Solutions', 
      page: 'solutions', 
      hasDropdown: true,
      subItems: [
        { name: 'Power Generation', id: 'power-generation' },
        { name: 'Electrical Distribution', id: 'distribution' },
        { name: 'Bearings & Rotating', id: 'bearings' },
        { name: 'Engineering Services', id: 'engineering' },
        { name: 'Mining & Oil & Gas', id: 'mining-oil-gas' },
        { name: 'Technical Services', id: 'technical-services' },
        { name: 'Operation & Maintenance', id: 'maintenance' },
        { name: 'Energy Efficiency & Sustainability', id: 'sustainability' },
        { name: 'Supply & Project Management', id: 'supply-management' },
      ]
    },
    { name: 'Projects', page: 'projects' },
    { name: 'Contact', page: 'contact' },
  ];

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 w-full z-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex-shrink-0 cursor-pointer" onClick={(e) => handleNavClick('home', null, e)}>
            <Logo />
          </div>
          
          <nav className="hidden lg:flex lg:items-center lg:space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href="#"
                  onClick={(e) => handleNavClick(item.page, null, e)}
                  className="font-semibold text-brand-dark-blue hover:text-brand-blue transition-colors duration-200 flex items-center py-6"
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDownIcon className="ml-1 group-hover:rotate-180 transition-transform duration-200" />}
                </a>

                {/* Desktop Dropdown */}
                {item.hasDropdown && item.subItems && (
                  <div className="absolute left-0 top-full w-72 bg-white shadow-xl rounded-b-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border-t-4 border-brand-blue transform translate-y-2 group-hover:translate-y-0">
                    <div className="py-2">
                      {item.subItems.map((sub) => (
                        <a
                          key={sub.name}
                          href="#"
                          onClick={(e) => handleNavClick(item.page, sub.id, e)}
                          className="block px-6 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-blue border-b border-gray-100 last:border-0 transition-colors"
                        >
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href="#"
              className="px-6 py-3 bg-brand-blue text-white font-semibold rounded-md hover:bg-blue-800 transition-colors duration-200"
            >
              Request Consultation
            </a>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="text-brand-dark-blue p-2"
            >
              {isMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-y-auto bg-white border-t border-gray-100 shadow-inner`}
      >
        <div className="px-4 pt-4 pb-6 space-y-2">
          {navItems.map((item) => (
            <div key={item.name} className="border-b border-gray-50 last:border-0 pb-2">
              <div className="flex items-center justify-between">
                <a
                  href="#"
                  onClick={(e) => handleNavClick(item.page, null, e)}
                  className="block py-3 text-lg font-medium text-brand-dark-blue hover:text-brand-blue flex-grow"
                >
                  {item.name}
                </a>
                {item.hasDropdown && item.subItems && (
                  <button 
                    onClick={(e) => toggleMobileSubMenu(item.name, e)}
                    className="p-3 text-brand-dark-blue focus:outline-none"
                  >
                    <ChevronDownIcon className={`transform transition-transform duration-200 ${mobileSubMenuOpen === item.name ? 'rotate-180' : ''}`} />
                  </button>
                )}
              </div>

              {/* Mobile Submenu */}
              {item.hasDropdown && item.subItems && (
                 <div className={`pl-4 space-y-2 overflow-hidden transition-all duration-300 ${mobileSubMenuOpen === item.name ? 'max-h-96 opacity-100 mt-1' : 'max-h-0 opacity-0'}`}>
                    {item.subItems.map((sub) => (
                      <a
                        key={sub.name}
                        href="#"
                        onClick={(e) => handleNavClick(item.page, sub.id, e)}
                        className="block py-2 text-base text-gray-600 hover:text-brand-blue"
                      >
                        {sub.name}
                      </a>
                    ))}
                 </div>
              )}
            </div>
          ))}
          <div className="pt-6">
            <a
              href="#"
              className="w-full text-center block px-6 py-4 bg-brand-blue text-white font-semibold rounded-md hover:bg-blue-800 transition-colors duration-200 text-lg shadow-md"
            >
              Request Consultation
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
