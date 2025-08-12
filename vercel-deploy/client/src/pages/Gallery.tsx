import { useEffect } from "react";

export default function Gallery() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://i.imgur.com/gyz3AEz.jpg" 
                  alt="Professional car detailing - exterior wash and wax"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Premium Exterior Detail</h3>
                <p className="text-gray-600">Complete wash, wax, and paint protection treatment</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://i.imgur.com/T4sYz4A.jpg" 
                  alt="Professional car polishing service"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Paint Polishing</h3>
                <p className="text-gray-600">Professional automotive paint polishing service</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://i.imgur.com/F8cPf8W.jpg" 
                  alt="Paint correction and ceramic coating"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Paint Correction</h3>
                <p className="text-gray-600">Professional paint correction and restoration</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://i.imgur.com/eBnqASf.jpg" 
                  alt="Deep interior cleaning and restoration"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Deep Interior Cleaning</h3>
                <p className="text-gray-600">Thorough deep cleaning of vehicle interior</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://i.imgur.com/3fVkOcS.jpg" 
                  alt="Smoke odor removal and deep interior cleaning"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Odor Removal</h3>
                <p className="text-gray-600">Removed cigarette odors and deep interior cleaning</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://i.imgur.com/MesvNqA.jpg" 
                  alt="Wheel and tire detailing"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Wheel & Tire Detail</h3>
                <p className="text-gray-600">Professional wheel cleaning and tire dressing</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://i.imgur.com/aZt1hUX.jpg" 
                  alt="Headlight restoration"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Headlight Restoration</h3>
                <p className="text-gray-600">Crystal clear headlight restoration service</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://i.imgur.com/Ww1slKe.jpg" 
                  alt="Convertible soft top preparation and restoration"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Convertible Restoration</h3>
                <p className="text-gray-600">Convertible soft top preparation and restoration</p>
              </div>
            </div>
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
              <button className="bg-accent hover:bg-yellow-600 text-white px-8 py-3 rounded-md font-semibold transition-colors">
                Call (702) 518-6014
              </button>
            </a>
            <a href="/contact">
              <button className="border border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-md font-semibold transition-colors">
                Get Quote
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}