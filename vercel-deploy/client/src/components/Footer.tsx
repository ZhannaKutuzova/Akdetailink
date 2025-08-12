import { Link } from "wouter";
import { Facebook, Instagram, MessageCircle, Send } from "lucide-react";

const Footer = () => {
  const services = [
    { name: "Paint Correction", href: "/paint-correction" },
    { name: "Ceramic Coating", href: "/ceramic-coating" },
    { name: "Interior Detail", href: "/interior-detail" },
    { name: "Smoke Odor Removal", href: "/smoke-odor-removal" },
    { name: "Wash & Wax", href: "/wash-and-wax" },
    { name: "Premium Wash", href: "/premium-wash" },
  ];

  const serviceAreas = [
    "Summerlin",
    "Henderson", 
    "Spring Valley",
    "Enterprise",
    "Las Vegas Valley",
    "North Las Vegas"
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">AK Detailing Service LLC</h3>
            <p className="text-gray-400 mb-4">
              Premium mobile paint correction & detailing services serving Las Vegas Valley.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61578551596333" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/andreitreasures" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://wa.me/18184239022" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-6 h-6" />
              </a>
              <a href="https://t.me/andreitreasures" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                <Send className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              {services.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="hover:text-white transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Service Areas</h4>
            <ul className="space-y-2 text-gray-400">
              {serviceAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p>
                <span className="inline-block w-4 mr-2">📞</span>
                +1 (702) 518-6014
              </p>
              <p>
                <span className="inline-block w-4 mr-2">✉️</span>
                akdetailingservislv@gmail.com
              </p>
              <p>
                <span className="inline-block w-4 mr-2">📍</span>
                Serving Las Vegas Valley Area
              </p>
              <p>
                <span className="inline-block w-4 mr-2">🕐</span>
                Mon-Fri: 8AM-7PM, Sat-Sun: 9AM-5PM
              </p>
            </div>
          </div>
        </div>
        
        {/* Google Maps Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <h4 className="text-lg font-bold mb-4 text-center">Our Service Area - Las Vegas Valley</h4>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d411543.0580458659!2d-115.48728688906252!3d36.10888008679577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80beb782a4f57dd1%3A0x3accd5e6d5b379a3!2sLas%20Vegas%20Valley%2C%20NV!5e0!3m2!1sen!2sus!4v1641234567890!5m2!1sen!2sus"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="AK Detailing Service Areas - Las Vegas Valley"
            ></iframe>
          </div>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4 text-center text-gray-400">
            <div className="bg-gray-800 rounded-lg p-3">
              <div className="text-primary font-semibold">📍 Summerlin</div>
              <div className="text-sm">Full Service Area</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-3">
              <div className="text-primary font-semibold">📍 Henderson</div>
              <div className="text-sm">Full Service Area</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-3">
              <div className="text-primary font-semibold">📍 Spring Valley</div>
              <div className="text-sm">Full Service Area</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-3">
              <div className="text-primary font-semibold">📍 Enterprise</div>
              <div className="text-sm">Full Service Area</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-3">
              <div className="text-primary font-semibold">📍 North Las Vegas</div>
              <div className="text-sm">Full Service Area</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-3">
              <div className="text-primary font-semibold">📍 Las Vegas Valley</div>
              <div className="text-sm">All Areas Covered</div>
            </div>
          </div>
          <p className="text-center text-gray-400 mt-4 text-sm">
            Mobile detailing services brought directly to your location
          </p>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 AK Detailing Service LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
