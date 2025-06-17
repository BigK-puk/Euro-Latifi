
import { MapPin, Clock, Users, Award } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 px-6 py-2 rounded-full mb-4">
            <span className="text-blue-600 font-semibold">Rreth Nesh</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-800 mb-6">Euro Latifi - Partneri Juaj i Besuar</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Me vite përvojë në tregun e materialeve të ndërtimit në Puke, jemi partneri juaj i besuar për çdo projekt ndërtimi.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Pse Na Zgjidhni Ne?</h3>
            <p className="text-lg text-gray-600 mb-8">
              Euro Latifi ka qenë në shërbim të komunitetit të Pukës për vite me radhë, duke ofruar materiale cilësore ndërtimi dhe shërbim të shkëlqyer klientësh. Ne krenohemi me cilësinë e produkteve tona dhe përkushtimin ndaj kënaqësisë së klientëve.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Shërbim Profesional</h4>
                  <p className="text-gray-600 text-sm">Gjithmonë në dispozicionin tuaj</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Ekspertë të Fushës</h4>
                  <p className="text-gray-600 text-sm">Këshilla profesionale falas</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Cilësi e Garantuar</h4>
                  <p className="text-gray-600 text-sm">Vetëm produkte me certifikatë</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Lokacion Strategjik</h4>
                  <p className="text-gray-600 text-sm">Në zemër të Pukës</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
            <h4 className="text-2xl font-bold mb-6">Informacione Kontakti</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-orange-400" />
                <span>Rruga Kryesore, Puke 4601, Shqipëri</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-orange-400" />
                <span>Hënë - Shtunë: 8:00 - 18:00</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-orange-400" />
                <span>E Diel: 9:00 - 14:00</span>
              </div>
            </div>
            <a href="#contact" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg mt-6 transition-all duration-300 inline-block">
              Na Kontaktoni
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
