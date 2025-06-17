
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
            className="md:hidden"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-blue-800 border-t border-blue-700">
            <div className="py-4 space-y-2">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-4 py-2 hover:bg-blue-700 transition-colors"
              >
                Kryefaqja
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="block w-full text-left px-4 py-2 hover:bg-blue-700 transition-colors"
              >
                Produktet
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-4 py-2 hover:bg-blue-700 transition-colors"
              >
                Rreth Nesh
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-4 py-2 hover:bg-blue-700 transition-colors"
              >
                Kontakti
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
