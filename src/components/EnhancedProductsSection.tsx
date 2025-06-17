import { Package, Truck, Shield, Star, Euro, ArrowRight, Paintbrush, TreePine, Wrench } from 'lucide-react';

const EnhancedProductsSection = () => {
  const products = [
    {
      name: "Çimento & Beton",
      description: "Çimento cilësor nga prodhuesit më të mirë evropianë",
      icon: Package,
      image: "🏗️",
      price: "Nga €8/sak",
      features: ["Cilësi e lartë", "Rezistencë maksimale"],
      
    },
    {
      name: "Hekur & Armatur Çeliku ",
      description: "Armatur hekuri  dhe materiale çeliku me standarde ndërkombëtare",
      icon: Shield,
      image: "🔩",
      price: "Nga €650/ton",
      features: ["Çelik i fortë", "Dimensione të ndryshme", "Garanci cilësie"],
      popular: false
    },
    {
      name: "Tulla & Blloqe Ndërtimi",
      description: "Tulla dhe blloqe për ndërtim me izolim të shkëlqyer",
      icon: Truck,
      image: "🧱",
      price: "Nga €0.25/copë",
      features: ["Varietet i gjerë", "Izolim termik", "Instalim i lehtë"],
      popular: false
    },
    {
      name: "Tjegulla & Materiale Çati",
      description: "Tjegulla cilësore dhe sisteme të plota për çati",
      icon: Star,
      image: "🏠",
      price: "Nga €12/m²",
      features: ["Rezistente ndaj motit", "20 vjet garanci", "Varietet ngjyrash"],
     
    },
    {
      name: "Izolime & Hidroizolime",
      description: "Materiale izoluese për mure, çati dhe themel",
      icon: Shield,
      image: "🛡️",
      price: "Nga €15/m²",
      features: ["Efikasitet energjetik", "Rezistencë ndaj lagështirës", "Instalim profesional"],
      popular: false
    },
    {
      name: "Kanalizime & Tubacione",
      description: "Sisteme të plota kanalizimi dhe furnizimi me ujë",
      icon: Package,
      image: "🚰",
      price: "Nga €5/metër",
      features: ["Materiale PVC/PE", "Gjatësi të ndryshme", "Bashkues të sigurt"],
      popular: false
    },
    {
      name: "Bojra me Kompjuter",
      description: "Bojra të përziera me kompjuter për ngjyra të sakta dhe cilësi të lartë",
      icon: Paintbrush,
      image: "🎨",
      price: "Nga €20/litër",
      features: ["Ngjyra të sakta", "Cilësi e lartë", "Rezistencë ndaj motit"],
      popular: false
    },
    {
      name: "Lëndë Drusore",
      description: "Lëndë drusore të ndryshme për ndërtim dhe dekorim",
      icon: TreePine,
      image: "🪵",
      price: "Nga €30/m²",
      features: ["Drurë të ndryshme", "Cilësi e lartë", "Tratime speciale"],
      popular: false
    },
    {
      name: "Vegla Pune",
      description: "Vegla profesionale për ndërtim dhe riparime",
      icon: Wrench,
      image: "🔧",
      price: "Nga €15/copë",
      features: ["Vegla profesionale", "Garanci 2 vjet", "Shërbim pas shitjes"],
      popular: false
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 px-6 py-2 rounded-full mb-4">
            <span className="text-blue-600 font-semibold">Produktet Tona</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-800 mb-6">Gamma e Plotë Materialesh</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ofrojmë të gjitha materialet që ju nevojiten për projektin tuaj të ndërtimit, nga themeli deri tek çatia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <div key={index} className={`relative bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border-2 ${product.popular ? 'border-orange-500' : 'border-transparent'} flex flex-col h-full`}>
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{product.image}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
              </div>

              <ul className="space-y-3 mb-6 flex-grow">
                {product.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <button
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Kërko Ofertë</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Nuk gjeni atë që kërkoni?</h3>
            <p className="text-xl mb-6">Na kontaktoni dhe ne do t'ju ndihmojmë të gjeni produktin e duhur</p>
            <button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300"
            >
              Kontaktoni Specialistët Tanë
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedProductsSection;
