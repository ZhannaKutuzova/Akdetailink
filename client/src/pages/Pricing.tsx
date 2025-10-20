import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";
import { updateMetaTags } from "@/lib/seo";

export default function Pricing() {
  useEffect(() => {
    window.scrollTo(0, 0);
    updateMetaTags({
      title: "Car Detailing Prices Las Vegas | Service Pricing",
      description: "Transparent car detailing prices in Las Vegas. Paint correction, ceramic coating, interior detail pricing. Mobile service. Call today!",
      keywords: "car detailing prices Las Vegas, how much is car detailing Las Vegas, paint correction price, car detailing deals Las Vegas, detailing Las Vegas, full detail Las Vegas, car detailing pricing",
      ogTitle: "Car Detailing Prices Las Vegas | Service Pricing",
      ogDescription: "View transparent pricing for mobile car detailing in Las Vegas. Paint correction, ceramic coating, and interior detailing."
    });
  }, []);
  const services = [
    {
      name: "Wash & Wax",
      description: "Professional exterior cleaning with protective wax application",
      pricing: [
        { vehicle: "Coupe", price: 80 },
        { vehicle: "Sedan", price: 90, recommended: true },
        { vehicle: "Van", price: 100 },
        { vehicle: "Pickup", price: 100 },
        { vehicle: "CUV/SUV", price: 110 }
      ],
      features: [
        "Hand wash exterior",
        "Premium wax application",
        "Wheel & tire cleaning",
        "Paint protection"
      ]
    },
    {
      name: "Premium Wash",
      description: "Swirl-free hand washing using safe techniques",
      pricing: [
        { vehicle: "Coupe", price: 60 },
        { vehicle: "Sedan", price: 70, recommended: true },
        { vehicle: "Van", price: 80 },
        { vehicle: "Pickup", price: 80 },
        { vehicle: "CUV/SUV", price: 90 }
      ],
      features: [
        "Two-bucket method",
        "Microfiber wash mitts",
        "Safe hand washing",
        "Maintenance wash"
      ]
    },
    {
      name: "Interior Detail",
      description: "Deep interior cleaning and restoration",
      pricing: [
        { vehicle: "Coupe", price: 150 },
        { vehicle: "Sedan", price: 180, recommended: true },
        { vehicle: "Van", price: 220 },
        { vehicle: "Pickup", price: 200 },
        { vehicle: "CUV/SUV", price: 220 }
      ],
      features: [
        "Vacuum & deep clean",
        "Leather conditioning",
        "Stain removal",
        "Odor elimination"
      ]
    },
    {
      name: "Touch Up Paint",
      description: "Professional chip and scratch repair",
      basePrice: 120,
      note: "Price may vary based on complexity and number of chips",
      features: [
        "Stone chip repair",
        "Scratch touch-up",
        "Paint matching",
        "Professional finish"
      ]
    },
    {
      name: "1-Step Paint Correction",
      description: "Single-stage machine polishing for light swirl removal",
      pricing: [
        { vehicle: "Coupe", price: 200 },
        { vehicle: "Sedan", price: 250, recommended: true },
        { vehicle: "Van", price: 250 },
        { vehicle: "Pickup", price: 280 },
        { vehicle: "CUV/SUV", price: 280 }
      ],
      features: [
        "Light swirl removal",
        "Enhanced gloss",
        "Paint preparation",
        "UV protection boost"
      ]
    },
    {
      name: "2-Step Paint Correction",
      description: "Advanced two-stage polishing for maximum clarity and gloss",
      pricing: [
        { vehicle: "Coupe", price: 300 },
        { vehicle: "Sedan", price: 350, recommended: true },
        { vehicle: "Van", price: 380 },
        { vehicle: "Pickup", price: 380 },
        { vehicle: "CUV/SUV", price: 380 }
      ],
      features: [
        "Heavy swirl removal",
        "Deep scratch correction",
        "Maximum gloss restoration",
        "Paint defect elimination"
      ]
    },
    {
      name: "Ceramic Coating",
      description: "Long-lasting paint protection with hydrophobic properties",
      pricing: [
        { vehicle: "Coupe", price: 300 },
        { vehicle: "Sedan", price: 350, recommended: true },
        { vehicle: "Pickup", price: 360 },
        { vehicle: "Van", price: 390 },
        { vehicle: "CUV/SUV", price: 400 }
      ],
      features: [
        "Multi-year protection",
        "Hydrophobic coating",
        "Enhanced durability",
        "Easy maintenance"
      ]
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Service Pricing</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Transparent pricing for professional mobile detailing services in Las Vegas Valley
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-secondary mb-4">
              Professional Detailing Services
            </h2>
            <p className="text-gray-700 text-lg">
              All services include mobile convenience - we come to your location
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <CardHeader>
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                  <p className="text-gray-600">{service.description}</p>
                </CardHeader>
                <CardContent className="flex flex-col h-full">
                  {service.basePrice ? (
                    <div className="mb-4">
                      <div className="text-3xl font-bold text-primary">
                        ${service.basePrice}
                      </div>
                      {service.note && (
                        <p className="text-sm text-gray-500 mt-2">{service.note}</p>
                      )}
                    </div>
                  ) : (
                    <div className="mb-4">
                      <div className="space-y-2">
                        {service.pricing?.map((item, idx) => (
                          <div key={idx} className="flex justify-between items-center">
                            <span className="text-sm font-medium">
                              {item.vehicle}
                              {item.recommended && (
                                <Badge className="ml-2 bg-accent text-white">
                                  <Star className="w-3 h-3 mr-1" />
                                  Most Popular
                                </Badge>
                              )}
                            </span>
                            <span className="font-bold text-primary">${item.price}</span>
                          </div>
                        ))}
                      </div>
                      {service.note && (
                        <p className="text-sm text-gray-500 mt-3">{service.note}</p>
                      )}
                    </div>
                  )}
                  
                  <div className="flex-grow">
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-6">
                    <a href="/contact">
                      <Button className="w-full bg-primary hover:bg-blue-700">
                        Get Quote
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-secondary mb-6">
            Custom Pricing Available
          </h2>
          <p className="text-gray-700 text-lg mb-8">
            Pricing may be adjusted based on vehicle condition, complexity of work, and specific requirements. 
            Contact us for a personalized quote tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+17025186014">
              <Button className="bg-accent hover:bg-yellow-600 text-white px-8 py-3">
                Call (702) 518-6014
              </Button>
            </a>
            <a href="/contact">
              <Button variant="outline" className="px-8 py-3">
                Request Quote Online
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}