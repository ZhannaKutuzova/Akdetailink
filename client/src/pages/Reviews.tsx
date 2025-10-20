import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { updateMetaTags } from "@/lib/seo";

export default function Reviews() {
  useEffect(() => {
    window.scrollTo(0, 0);
    updateMetaTags({
      title: "Car Detailing Reviews Las Vegas | Testimonials",
      description: "Read customer reviews for AK Detailing in Las Vegas. 5-star reviews from Summerlin, Henderson. Ceramic coating & paint correction.",
      keywords: "car detailing Las Vegas, mobile detailing Las Vegas, ceramic coating Las Vegas, paint correction Las Vegas, best car detailing Las Vegas, auto detailing Summerlin",
      ogTitle: "Car Detailing Reviews Las Vegas | 5-Star Testimonials",
      ogDescription: "Read verified customer reviews for mobile car detailing in Las Vegas. Ceramic coating, paint correction testimonials."
    });
  }, []);
  const testimonials = [
    {
      name: "Dolly P",
      rating: 5,
      location: "Las Vegas Valley",
      service: "Ceramic Coating",
      text: "I purchased the 5-year ceramic coating and had Brett also do my tires and all the windows as well. All I can say is WOW!! It's worth every penny!! This is my first time doing a ceramic coating, and I have been loving it! My car is shiny all the time, and the water just beads off. Looks like a fresh wax daily. Brett was amazing to work with as well."
    },
    {
      name: "Gretchen Pardon", 
      rating: 5,
      location: "Henderson",
      service: "Ceramic Coating",
      text: "I purchased the 7-year ceramic coating service and Brett did such an amazing job! Almost everything on my car was double ceramic coated including the paint, plastic, headlights, taillights, and windshield. My car looks better than the day I bought it and was worth every penny! I definitely recommend!"
    },
    {
      name: "Michael Rodriguez",
      rating: 5,
      location: "Henderson",
      service: "Paint Correction",
      text: "AK Detailing Service transformed my car completely! The paint correction service removed years of swirl marks and scratches. My BMW looks brand new again. The mobile service was so convenient - they came right to my office in Henderson. Professional work and excellent customer service!"
    },
    {
      name: "David Chen",
      rating: 5,
      location: "Spring Valley",
      service: "Ceramic Coating",
      text: "Outstanding ceramic coating application! My Tesla Model S has never looked better. Water beads off perfectly and washing is so much easier now. The team was punctual, professional, and delivered exactly what they promised. Worth every dollar!"
    },
    {
      name: "Amanda Wilson",
      rating: 5,
      location: "Enterprise",
      service: "Paint Correction",
      text: "Paint correction on my luxury sedan was flawless. Years of parking garage scratches and swirl marks completely gone. The mobile service is so convenient - no need to drive anywhere or wait at a shop. Professional team and outstanding results!"
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Customer Reviews</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            See what our satisfied customers in Las Vegas Valley are saying about our premium mobile detailing services
          </p>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-secondary mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Real reviews from real customers across Las Vegas Valley. Every review represents our commitment to excellence in mobile auto detailing services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-accent">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                    <span className="text-gray-600 text-sm">({testimonial.rating}/5)</span>
                  </div>
                  
                  <div className="mb-4">
                    <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">
                      {testimonial.service}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 mb-4 italic text-sm leading-relaxed flex-grow">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="mt-auto">
                    <p className="font-bold text-secondary text-sm">- {testimonial.name}</p>
                    <p className="text-gray-500 text-xs">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Premium Mobile Detailing?</h2>
          <p className="text-lg mb-8 text-blue-100">
            Join our satisfied customers and see why we're Las Vegas Valley's top-rated mobile detailing service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+17025186014"
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call (702) 518-6014
            </a>
            <a 
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              Get Quote Online
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}