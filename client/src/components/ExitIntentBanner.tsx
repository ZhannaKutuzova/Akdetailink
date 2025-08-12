import { useState, useEffect } from "react";
import { X, Gift, Phone, Mail } from "lucide-react";

const ExitIntentBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    if (hasShown) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if cursor moves to top of viewport (attempt to close tab/browser)
      if (e.clientY <= 0 && e.relatedTarget === null) {
        setShowBanner(true);
        setHasShown(true);
      }
    };

    const handleBeforeUnload = () => {
      if (!hasShown) {
        setShowBanner(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [hasShown]);

  const closeBanner = () => {
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-md w-full relative animate-in slide-in-from-top-4 duration-300">
        <button
          onClick={closeBanner}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8 text-center">
          {/* Gift Icon */}
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Gift className="w-8 h-8 text-red-600" />
          </div>

          {/* Headline */}
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Wait! Don't Leave Yet!
          </h2>
          
          {/* Offer */}
          <div className="bg-red-50 rounded-lg p-4 mb-6">
            <div className="text-3xl font-bold text-red-600 mb-1">15% OFF</div>
            <div className="text-lg text-gray-700 mb-2">Your First Detail Service</div>
            <div className="text-sm text-gray-600">
              Book today and save on premium mobile detailing
            </div>
          </div>

          {/* Benefits */}
          <div className="text-left mb-6 space-y-2">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
              <span className="text-gray-700">Mobile service - we come to you</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
              <span className="text-gray-700">Same-day service available</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
              <span className="text-gray-700">Professional premium results</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3">
            <a 
              href="tel:+17025186014"
              className="w-full bg-primary hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now - (702) 518-6014
            </a>
            
            <a 
              href="/contact"
              className="w-full border border-primary text-primary hover:bg-primary hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
              onClick={closeBanner}
            >
              <Mail className="w-5 h-5" />
              Get Quote Online
            </a>
          </div>

          {/* Urgency */}
          <p className="text-sm text-gray-500 mt-4">
            Limited time offer - mention code "SAVE15" when calling
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentBanner;