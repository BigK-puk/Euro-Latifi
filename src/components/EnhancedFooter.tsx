
import { Building, Phone, Mail, MapPin, Facebook, Instagram, ArrowUp, MessageCircle } from 'lucide-react';

const EnhancedFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const phoneNumber = "+355683100082";
  const whatsappNumber = "355683100082";

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Building className="h-10 w-10 text-orange-500" />
              <div>
                <h3 className="text-3xl font-bold">Euro Latifi</h3>
                <p className="text-gray-400">Materiale Ndërtimi - Puke</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Me mbi 15 vjet përvojë në tregun shqiptar, Euro Latifi është partneri juaj i besuar për të gjitha nevojat e ndërtimit. Ofrojmë vetëm produkte me cilësinë më të lartë dhe shërbim profesional.
            </p>
            <div className="flex space-x-4">
              <div className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg cursor-pointer transition-colors">
                <Facebook className="h-6 w-6" />
              </div>
              <div className="bg-pink-600 hover:bg-pink-700 p-3 rounded-lg cursor-pointer transition-colors">
                <Instagram className="h-6 w-6" />
              </div>
              <a 
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 p-3 rounded-lg cursor-pointer transition-colors"
              >
                <MessageCircle className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-orange-500">Produktet Kryesore</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white cursor-pointer transition-colors">Çimento & Betoni</li>
              <li className="hover:text-white cursor-pointer transition-colors">Hekur & Çelik Armaturi</li>
              <li className="hover:text-white cursor-pointer transition-colors">Tulla & Blloqe</li>
              <li className="hover:text-white cursor-pointer transition-colors">Tjegulla & Çati</li>
              <li className="hover:text-white cursor-pointer transition-colors">Izolime & Hidroizolime</li>
              <li className="hover:text-white cursor-pointer transition-colors">Kanalizime & Tubacione</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-orange-500">Na Kontaktoni</h4>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-500 mt-1" />
                <div>
                  <p className="font-semibold text-white">Adresa</p>
                  <p>Rruga Kryesore, Puke 4601</p>
                  <p>Shqipëri</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-500" />
                <div>
                  <p className="font-semibold text-white">Kontakti</p>
                  <div className="flex space-x-3 mt-2">
                    <a 
                      href={`tel:${phoneNumber}`} 
                      className="bg-blue-600 hover:bg-blue-500 p-2 rounded-lg transition-colors"
                      title="Telefono"
                    >
                      <Phone className="h-4 w-4" />
                    </a>
                    <a 
                      href={`https://wa.me/${whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 hover:bg-green-500 p-2 rounded-lg transition-colors"
                      title="WhatsApp"
                    >
                      <MessageCircle className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left">
              &copy; 2024 Euro Latifi. Të gjitha të drejtat e rezervuara. | Krijuar me kujdes për klientët tanë.
            </p>
            <button
              onClick={scrollToTop}
              className="mt-4 md:mt-0 bg-orange-500 hover:bg-orange-600 p-3 rounded-full transition-colors"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;
