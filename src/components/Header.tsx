
import { Building, Phone, MapPin } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-blue-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Building className="h-8 w-8 text-orange-500" />
            <div>
              <h1 className="text-2xl font-bold">Euro Latifi</h1>
              <p className="text-blue-200 text-sm">Materiale Ndërtimi - Puke</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-orange-500" />
              <span className="text-sm">+355 69 XXX XXXX</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-orange-500" />
              <span className="text-sm">Puke, Shqipëri</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
