import { useEffect } from "react";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { Car, Shield, Ban, Sparkles, SprayCan, Star } from "lucide-react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const services = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Paint Correction",
      description: "Removes swirl, scratches, and water spots with machine polishing to restore clarity and gloss in your paint.",
      href: "/paint-correction"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Ceramic Coating", 
      description: "A durable, multi-year protective layer that shields your paint from dirt and water while delivering an ultra-glossy, easy-to-clean finish",
      href: "/ceramic-coating"
    },

    {
      icon: <Ban className="w-8 h-8" />,
      title: "Smoke Odor Removal",
      description: "Remove lingering smoke odor in your interior without specialized cleaning methods that target the source.",
      href: "/smoke-odor-removal"
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Interior Detail",
      description: "A deep interior cleaning of the carpets, seats, plastics, and leather surfaces to eliminate stains and spills for a like-new interior.",
      href: "/interior-detail"
    },
    {
      icon: <SprayCan className="w-8 h-8" />,
      title: "Wash and Wax",
      description: "An exterior detail to cleanse your paint while adding a layer of shine and protection.",
      href: "/wash-and-wax"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Premium Wash",
      description: "A swirl-free hand wash to keep your vehicle looking in top-shape shape.",
      href: "/premium-wash"
    }
  ];



  return (
    <div>
      <Hero 
        title="Premium Mobile Paint Correction & Detailing"
        subtitle="Professional auto detailing services at your location in Las Vegas Valley"
        backgroundImage="https://i.imgur.com/8srpR7X.jpg"
      />

      {/* Services Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-secondary mb-12">
            Premium Detailing Services in Las Vegas Valley
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto text-primary mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center mb-4">
                    {service.description}
                  </CardDescription>
                  <Link href={service.href}>
                    <Button variant="outline" className="w-full">
                      Read More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Service Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-secondary mb-6">
                Premium Mobile Detailing Services For Las Vegas Valley
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                AK Detailing Service LLC offers convenient detailing services directly to your home or office location. Instead of driving through traffic, waiting at a shop, or taking time away from your errands, we can detail your car on-site. Since we're mobile, we travel to Summerlin, Henderson, Spring Valley, Enterprise, Las Vegas Valley, and North Las Vegas.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=600" 
                alt="Professional car detailing"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Call to Action */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-secondary mb-6">
            See What Our Customers Say
          </h2>
          <p className="text-gray-700 text-lg mb-8">
            Don't just take our word for it. Read real reviews from satisfied customers across Las Vegas Valley who trust AK Detailing Service for their mobile auto detailing needs.
          </p>
          <Link href="/reviews">
            <Button size="lg" className="bg-primary hover:bg-blue-700 text-white px-8 py-4 text-lg">
              View All Reviews
            </Button>
          </Link>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-secondary text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose AK Detailing Service LLC?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Customer-Focused</h3>
              <p>We treat every vehicle with care, as if it were our own. From deep interior cleans to flawless exterior details, we make sure the job is done right the first time.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality-Driven</h3>
              <p>AK Detailing Service was built on the idea of raising the bar for detailing in Las Vegas Valley. We're not a rushed car wash—we deliver premium, professional results.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Convenience</h3>
              <p>Life gets busy. That's why we come to you, whether you're at home or work. You get high-end detailing on your schedule.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/contact">
              <Button className="bg-accent hover:bg-yellow-600 text-secondary font-bold py-3 px-8 rounded-lg text-lg">
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
