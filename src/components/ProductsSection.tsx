
import { Package, Truck, Shield, Star } from 'lucide-react';

const ProductsSection = () => {
  const products = [
    {
      name: "Çimento & Betoni",
      description: "Çimento cilësor për të gjitha llojet e punimeve",
      icon: Package,
      features: ["Cilësi e lartë", "Çmim optimal", "Dorëzim i shpejtë"]
    },
    {
      name: "Hekur & Çelik",
      description: "Hekur armaturi dhe materiale çeliku",
      icon: Shield,
      features: ["Rezistencë e lartë", "Standarde evropiane", "Dimensione të ndryshme"]
    },
    {
      name: "Tulla & Blloqe",
      description: "Tulla dhe blloqe për ndërtim",
      icon: Truck,
      features: ["Varieté e gjerë", "Dorëzim në kohë", "Cilësi e garantuar"]
    },
    {
      name: "Tjegulla & Çati",
      description: "Materiale për çati dhe izolim",
      icon: Star,
      features: ["Rezistente ndaj motit", "Instalim i lehtë", "Garanci afatgjatë"]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Produktet Tona</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ofrojmë një gamë të plotë materialesh ndërtimi me cilësinë më të lartë
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <product.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <ul className="space-y-2">
                {product.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
