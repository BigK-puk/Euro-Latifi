
import { MapPin, Clock, Phone, Mail, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  const phoneNumber = "+355683100082";
  const whatsappNumber = "355683100082";

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 px-6 py-2 rounded-full mb-4">
            <span className="text-blue-600 font-semibold">Na Kontaktoni</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-800 mb-6">Jemi Këtu për Ju</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kemi një ekip të dedikuar gati t'ju ndihmojë me çdo pyetje apo nevojë që keni
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="bg-gray-200 rounded-2xl overflow-hidden h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95346.78744912283!2d19.898394!3d42.044167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350b1b0d5b1b0d5%3A0x1b1b0d5b1b0d5b1b!2sPuke%2C%20Albania!5e0!3m2!1sen!2sus!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Euro Latifi Location in Puke"
            ></iframe>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-6">Informacione Kontakti</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 p-3 rounded-lg">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Adresa</h4>
                    <p className="text-blue-100">Rruga Kryesore, Puke 4601, Shqipëri</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 p-3 rounded-lg">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Kontakti</h4>
                    <div className="flex space-x-4 mt-2">
                      <a 
                        href={`tel:${phoneNumber}`} 
                        className="bg-blue-500 hover:bg-blue-400 p-2 rounded-lg transition-colors"
                        title="Telefono"
                      >
                        <Phone className="h-5 w-5" />
                      </a>
                      <a 
                        href={`https://wa.me/${whatsappNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 hover:bg-green-400 p-2 rounded-lg transition-colors"
                        title="WhatsApp"
                      >
                        <MessageCircle className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
                
                
                
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 p-3 rounded-lg">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Orari i Punës</h4>
                    <p className="text-blue-100">Hënë - Shtunë: 7:00 - 19:00</p>
                    <p className="text-blue-100">E Diel: 8:00 - 15:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 rounded-2xl p-8 border-2 border-orange-200">
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Vizitoni Magazinën Tonë!</h4>
              <p className="text-gray-700 mb-4">
                Gjeni të gjitha materialet e ndërtimit që ju nevojiten në magazinën tonë në Puke.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Konsulencë teknike falas
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Stok i gjerë produktesh
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Çmime konkurruese
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
