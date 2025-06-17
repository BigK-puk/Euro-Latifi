import { Building, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Building className="h-8 w-8 text-orange-500" />
              <h3 className="text-2xl font-bold">Euro Latifi</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Partneri juaj i besuar për materiale ndërtimi në Puke dhe rrethinat.
            </p>
            <div className="flex space-x-4">
              <div className="bg-blue-600 hover:bg-blue-700 p-2 rounded-lg cursor-pointer transition-colors">
                <Phone className="h-5 w-5" />
              </div>
              <div className="bg-blue-600 hover:bg-blue-700 p-2 rounded-lg cursor-pointer transition-colors">
                <Mail className="h-5 w-5" />
              </div>
              <div className="bg-blue-600 hover:bg-blue-700 p-2 rounded-lg cursor-pointer transition-colors">
                <MapPin className="h-5 w-5" />
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-orange-500">Produktet</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer transition-colors">Çimento & Betoni</li>
              <li className="hover:text-white cursor-pointer transition-colors">Hekur & Çelik</li>
              <li className="hover:text-white cursor-pointer transition-colors">Tulla & Blloqe</li>
              <li className="hover:text-white cursor-pointer transition-colors">Tjegulla & Çati</li>
              <li className="hover:text-white cursor-pointer transition-colors">Izolimi</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-orange-500">Kontakti</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-orange-500" />
                <span>Rruga Kryesore, Puke 4601</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-orange-500" />
                <span>+355 69 XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-orange-500" />
                <span>info@ndertimpro.al</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Euro Latifi. Të gjitha të drejtat e rezervuara.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
