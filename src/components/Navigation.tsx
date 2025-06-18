import { useState } from 'react';
import { Building, Menu, X, Phone, MapPin, MessageCircle } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const phoneNumber = "+355683100082";
  const whatsappNumber = "355683100082";

  return (
    <nav className="bg-blue-900 text-white shadow-xl sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <Building className="h-8 w-8 text-orange-500" />
            <div>
              <h1 className="text-xl font-bold">Euro Latifi</h1>
              <p className="text-blue-200 text-xs">Materiale Ndërtimi</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="hover:text-orange-500 transition-colors"
            >
              Kryefaqja
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="hover:text-orange-500 transition-colors"
            >
              Produktet
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="hover:text-orange-500 transition-colors"
            >
              Rreth Nesh
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="hover:text-orange-500 transition-colors"
            >
              Kontakti
            </button>
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
         
        <span>+355 68 310 0082</span>
          
            <div className="flex items-center space-x-2 text-sm">
              <MapPin className="h-4 w-4 text-orange-500" />
              <span>Puke, Shqipëri</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative z-50 flex items-center justify-center w-12 h-12 rounded-full bg-blue-800/80 backdrop-blur-lg shadow-lg transition-all duration-300 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className="sr-only">Open main menu</span>
            <span className="absolute inset-0 flex items-center justify-center">
              <span
                className={`block w-7 h-0.5 bg-white rounded transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-2'}`}
              ></span>
              <span
                className={`block w-7 h-0.5 bg-white rounded transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
              ></span>
              <span
                className={`block w-7 h-0.5 bg-white rounded transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-2'}`}
              ></span>
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}
        >
          <div
            className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
            onClick={() => setIsMenuOpen(false)}
          ></div>
          <div
            className={`absolute right-4 left-4 top-4 rounded-2xl bg-blue-800 shadow-2xl border border-blue-700 transition-all duration-300 ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}`}
          >
            <div className="py-6 space-y-2 flex flex-col">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
              >
                Kryefaqja
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="block w-full text-left px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
              >
                Produktet
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
              >
                Rreth Nesh
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
              >
                Kontakti
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
