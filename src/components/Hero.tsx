
import { Hammer, Wrench, Building } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Materiale Cilësore për
            <span className="text-orange-500 block">Çdo Projekt Ndërtimi</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Dyqani juaj i besuar në Puke për të gjitha nevojat e ndërtimit
          </p>
          <div className="flex justify-center space-x-8 mb-8">
            <div className="flex items-center space-x-2">
              <Building className="h-6 w-6 text-orange-500" />
              <span>Materiale Cilësore</span>
            </div>
            <div className="flex items-center space-x-2">
              <Hammer className="h-6 w-6 text-orange-500" />
              <span>Çmimee Konkurruese</span>
            </div>
            <div className="flex items-center space-x-2">
              <Wrench className="h-6 w-6 text-orange-500" />
              <span>Shërbim Professional</span>
            </div>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Shiko Produktet
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
