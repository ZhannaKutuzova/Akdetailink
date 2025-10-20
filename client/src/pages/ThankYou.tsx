import { useEffect } from "react";
import { Link } from "wouter";
import { CheckCircle, Phone, Mail, Instagram, MessageCircle } from "lucide-react";
import { updateMetaTags } from "@/lib/seo";

export default function ThankYou() {
  useEffect(() => {
    updateMetaTags({
      title: "Thank You | AK Detailing Service LLC",
      description: "Thank you for contacting AK Detailing Service! We'll respond within 24 hours to schedule your mobile car detailing in Las Vegas.",
      keywords: "thank you, contact confirmation, mobile detailing Las Vegas, car detailing booking"
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Thank You!
          </h1>
          
          <p className="text-xl text-gray-600 mb-6">
            Your message has been successfully sent
          </p>

          {/* Message Box */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <p className="text-gray-700 mb-4">
              We've received your request and will respond within <strong>24 hours</strong>.
            </p>
            <p className="text-gray-600 text-sm">
              Our team is reviewing your inquiry and will contact you soon to schedule your mobile detailing service.
            </p>
          </div>

          {/* Quick Contact Options */}
          <div className="border-t border-gray-200 pt-8 mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Need Immediate Assistance?
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a 
                href="tel:+17025186014"
                className="flex items-center justify-center gap-3 bg-primary hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                data-testid="button-call"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              
              <a 
                href="mailto:akdetailingservislv@gmail.com"
                className="flex items-center justify-center gap-3 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                data-testid="button-email"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="border-t border-gray-200 pt-8 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Follow Us on Social Media
            </h3>
            
            <div className="flex justify-center gap-4">
              <a 
                href="https://www.instagram.com/akdetailingservices/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-pink-100 hover:bg-pink-200 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
                data-testid="link-instagram"
              >
                <Instagram className="w-6 h-6 text-pink-600" />
              </a>
              
              <a 
                href="https://wa.me/17025186014"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-green-100 hover:bg-green-200 rounded-full flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
                data-testid="link-whatsapp"
              >
                <MessageCircle className="w-6 h-6 text-green-600" />
              </a>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/"
              className="inline-flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              data-testid="link-home"
            >
              Back to Home
            </Link>
            
            <Link 
              href="/pricing"
              className="inline-flex items-center justify-center border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              data-testid="link-pricing"
            >
              View Pricing
            </Link>
          </div>

          {/* Additional Info */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              <strong>Business Hours:</strong><br />
              Monday - Friday: 8:00 AM - 7:00 PM<br />
              Saturday - Sunday: 9:00 AM - 5:00 PM
            </p>
          </div>
        </div>

        {/* Services Preview */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Our Premium Services
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <Link 
              href="/wash-and-wax"
              className="bg-white hover:bg-blue-50 rounded-lg p-4 shadow-md transition-colors"
              data-testid="card-service-wash"
            >
              <div className="text-sm font-semibold text-gray-900">Wash & Wax</div>
            </Link>
            
            <Link 
              href="/interior-detail"
              className="bg-white hover:bg-blue-50 rounded-lg p-4 shadow-md transition-colors"
              data-testid="card-service-interior"
            >
              <div className="text-sm font-semibold text-gray-900">Interior Detail</div>
            </Link>
            
            <Link 
              href="/paint-correction"
              className="bg-white hover:bg-blue-50 rounded-lg p-4 shadow-md transition-colors"
              data-testid="card-service-paint"
            >
              <div className="text-sm font-semibold text-gray-900">Paint Correction</div>
            </Link>
            
            <Link 
              href="/ceramic-coating"
              className="bg-white hover:bg-blue-50 rounded-lg p-4 shadow-md transition-colors"
              data-testid="card-service-ceramic"
            >
              <div className="text-sm font-semibold text-gray-900">Ceramic Coating</div>
            </Link>
            
            <Link 
              href="/premium-wash"
              className="bg-white hover:bg-blue-50 rounded-lg p-4 shadow-md transition-colors"
              data-testid="card-service-premium"
            >
              <div className="text-sm font-semibold text-gray-900">Premium Wash</div>
            </Link>
            
            <Link 
              href="/pricing"
              className="bg-primary hover:bg-blue-700 text-white rounded-lg p-4 shadow-md transition-colors"
              data-testid="link-all-services"
            >
              <div className="text-sm font-semibold">View All Services</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
