
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Agron Dedaj",
      role: "Inxhinier Ndërtimi",
      content: "Euro Latifi është partneri më i besueshëm që kam punuar. Cilësia e materialeve është e shkëlqyer dhe shërbimi është gjithmonë profesional.",
      rating: 5,
      project: "Vila 2-katëshe në Puke"
    },
    {
      name: "Majlinda Krasniqi",
      role: "Arkitekte",
      content: "Çmimet janë shumë konkurruese dhe stafi është gjithmonë i gatshëm të ndihmojë. I rekomandoj për çdo projekt ndërtimi.",
      rating: 5,
      project: "Kompleks banimi"
    },
    {
      name: "Fatmir Gashi",
      role: "Kontraktor",
      content: "Punoj me Euro Latifi prej 5 vitesh. Dorëzimi është gjithmonë në kohë dhe cilësia e materialeve nuk zhgënjen kurrë.",
      rating: 5,
      project: "Shtëpi familjare"
    }
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-100 px-6 py-2 rounded-full mb-4">
            <span className="text-orange-600 font-semibold">Çfarë Thonë Klientët</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-800 mb-6">Besimi i Klientëve</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mijëra klientë të kënaqur që kanë zgjedhur cilësinë dhe shërbimin tonë profesional
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 relative">
              <Quote className="h-10 w-10 text-orange-500 mb-4" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 text-lg leading-relaxed italic">
                "{testimonial.content}"
              </p>

              <div className="border-t pt-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    <p className="text-orange-600 text-sm font-medium">{testimonial.project}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-white px-6 py-4 rounded-full shadow-lg">
            <div className="flex -space-x-2">
              {['A', 'M', 'F', 'G', 'E'].map((initial, index) => (
                <div key={index} className="w-10 h-10 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold border-2 border-white">
                  {initial}
                </div>
              ))}
            </div>
            <span className="text-gray-700 font-semibold">Mbi 500+ klientë të kënaqur</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
