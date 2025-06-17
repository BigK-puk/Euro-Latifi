
import { Hammer, Wrench, Building, Phone, ArrowRight } from 'lucide-react';

const EnhancedHero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-24 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-8xl transform rotate-12">🏗️</div>
        <div className="absolute top-40 right-20 text-6xl transform -rotate-12">🧱</div>
        <div className="absolute bottom-20 left-1/4 text-7xl transform rotate-45">⚒️</div>
      </div>

      <div className="relative container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto">
          
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Euro Latifi
            </span>
            <br />
            <span className="text-orange-500 text-4xl md:text-5xl">
              Materiale Cilësore për Çdo Projekt
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Dyqani më i besuar në Puke për materiale ndërtimi. Ofrojmë cilësinë më të lartë me çmime konkurruese dhe shërbim profesional 24/7.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Building className="h-10 w-10 text-orange-500 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Cilësi e Garantuar</h3>
              <p className="text-blue-200">Vetëm produkte me certifikatë evropiane</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Hammer className="h-10 w-10 text-orange-500 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Çmime Konkurruese</h3>
              <p className="text-blue-200">Ofertat më të mira në treg</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Wrench className="h-10 w-10 text-orange-500 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Shërbim Professional</h3>
              <p className="text-blue-200">Konsulencë falas dhe dorëzim i shpejtë</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={scrollToProducts}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center space-x-2"
            >
              <span>Shiko Produktet</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button 
              onClick={scrollToContact}
              className="border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 flex items-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Na Kontaktoni</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedHero;
