import { useEffect } from "react";
import { updateMetaTags } from "@/lib/seo";

export default function Gallery() {
  useEffect(() => {
    window.scrollTo(0, 0);
    updateMetaTags({
      title: "Car Detailing Gallery Las Vegas | Before & After",
      description: "View our detailing gallery. Professional results from Las Vegas mobile detailing. Paint correction, ceramic coating, interior work photos.",
      keywords: "car detailing Las Vegas, detailing Las Vegas, paint correction Las Vegas, ceramic coating Las Vegas, headlight restoration Las Vegas, mobile detailing Las Vegas",
      ogTitle: "Car Detailing Gallery | Professional Results Las Vegas",
      ogDescription: "View professional car detailing results from AK Detailing Service in Las Vegas. Paint correction, ceramic coating, interior photos."
    });
  }, []);

  const galleryImages = [
    {
      src: "https://i.imgur.com/JVlYbjW.png",
      title: "Headlight Polishing",
      description: "Professional headlight restoration and polishing service"
    },
    {
      src: "https://i.imgur.com/rDRqzuP.png",
      title: "One Step Paint Correction",
      description: "Single-stage machine polishing for enhanced gloss"
    },
    {
      src: "https://i.imgur.com/shscgQ6.png",
      title: "Exterior Detailing",
      description: "Complete exterior detailing and protection"
    },
    {
      src: "https://i.imgur.com/bYAALxj.png",
      title: "Exterior Detailing",
      description: "Professional exterior cleaning and finishing"
    },
    {
      src: "https://i.imgur.com/PCNkOf9.png",
      title: "Two Step Paint Correction",
      description: "Advanced two-stage polishing for maximum clarity"
    },
    {
      src: "https://i.imgur.com/Q0JUCts.png",
      title: "Ceramic Coating",
      description: "Long-lasting ceramic coating application"
    },
    {
      src: "https://i.imgur.com/8JWgX1y.png",
      title: "Hand Washing",
      description: "Gentle hand washing using safe techniques"
    },
    {
      src: "https://i.imgur.com/yCXrpi2.png",
      title: "Towel Dry",
      description: "Professional drying to prevent water spots"
    },
    {
      src: "https://i.imgur.com/KYaaInj.png",
      title: "Compound Polishing",
      description: "Heavy cutting compound for paint correction"
    },
    {
      src: "https://i.imgur.com/NSzuDJr.png",
      title: "Step 1 Cutting",
      description: "First stage cutting for defect removal"
    },
    {
      src: "https://i.imgur.com/xO8iAv7.png",
      title: "Interior Detail",
      description: "Deep interior cleaning and restoration"
    },
    {
      src: "https://i.imgur.com/7ql8XNU.png",
      title: "Interior Detail",
      description: "Thorough interior detailing service"
    },
    {
      src: "https://i.imgur.com/TqSuURt.png",
      title: "Detailing on Your Driveway",
      description: "Convenient mobile detailing at your location"
    },
    {
      src: "https://i.imgur.com/nQVNlPN.png",
      title: "Wash and Wax",
      description: "Complete wash and wax protection"
    },
    {
      src: "https://i.imgur.com/jh6Zwm1.png",
      title: "Ceramic Coating Pro",
      description: "Professional-grade ceramic coating application"
    },
    {
      src: "https://i.imgur.com/HLuCoZn.png",
      title: "Ceramic Coating Pro",
      description: "Premium ceramic protection system"
    },
    {
      src: "https://i.imgur.com/47a47fq.png",
      title: "Protect Black Color",
      description: "Special protection for black paint finish"
    },
    {
      src: "https://i.imgur.com/7f5Ppl8.png",
      title: "Ceramic 3-5 Years Protect",
      description: "Long-term ceramic coating protection"
    },
    {
      src: "https://i.imgur.com/KP0iNME.png",
      title: "Wheels and Rims Detailing",
      description: "Professional wheel and rim cleaning"
    },
    {
      src: "https://i.imgur.com/Z1YwQsQ.png",
      title: "Delicate Body Washing",
      description: "Gentle washing for premium paint finishes"
    },
    {
      src: "https://i.imgur.com/yNHMJZh.png",
      title: "Premium Wash",
      description: "Swirl-free premium hand wash service"
    },
    {
      src: "https://i.imgur.com/PogvCWl.png",
      title: "Premium Care for Body Car",
      description: "Complete premium exterior care service"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Work Gallery</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            See the quality of our professional mobile detailing services in action
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-secondary mb-4">
              Professional Results
            </h2>
            <p className="text-gray-700 text-lg">
              See the transformation of vehicles through our professional detailing services
            </p>
          </div>
          
          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                data-testid={`gallery-item-${index}`}
              >
                <div className="aspect-video overflow-hidden bg-gray-100">
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                    data-testid={`gallery-image-${index}`}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                  <p className="text-gray-600">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-secondary mb-6">
            Ready for Professional Results?
          </h2>
          <p className="text-gray-700 text-lg mb-8">
            Contact us today to schedule your mobile detailing appointment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+17025186014">
              <button 
                className="bg-accent hover:bg-yellow-600 text-white px-8 py-3 rounded-md font-semibold transition-colors"
                data-testid="button-call"
              >
                Call (702) 518-6014
              </button>
            </a>
            <a href="/contact">
              <button 
                className="border border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-md font-semibold transition-colors"
                data-testid="button-get-quote"
              >
                Get Quote
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
