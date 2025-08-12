import { useEffect } from "react";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { CheckCircle, Star, Scissors, Wind, Sparkles } from "lucide-react";

const PetHairRemoval = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const testimonials = [
    {
      name: "Sarah M.",
      rating: 5,
      text: "Amazing pet hair removal service! My car was completely covered in dog hair and now it looks brand new. They have the right tools and expertise to handle even the worst pet hair situations."
    },
    {
      name: "Mike T.", 
      rating: 5,
      text: "I thought my car was a lost cause after my two cats made a mess. The team did an incredible job removing every single hair and the odor too. Highly recommend for pet owners!"
    }
  ];

  const tools = [
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Drill Brush Attachments",
      description: "Specialized rotating brushes that agitate and loosen embedded pet hair from fabric fibers"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Silicone Scrapers",
      description: "Anti-static tools designed to lift stubborn pet hair from upholstery and carpets"
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: "High-Power Vacuum",
      description: "Strong suction power to extract all loosened hair and debris before deep cleaning"
    }
  ];

  const process = [
    {
      step: 1,
      title: "Hair Loosening",
      description: "Use drill brush attachments and silicone scrapers with anti-static products to loosen embedded fur in fabric"
    },
    {
      step: 2,
      title: "Powerful Extraction",
      description: "Deploy strong vacuum with excellent suction power to remove all released pet hair and debris"
    },
    {
      step: 3,
      title: "Enzyme Cleaning",
      description: "Shampoo surfaces with specialized enzyme cleaners that break down pet odors at the molecular level"
    },
    {
      step: 4,
      title: "Steam Cleaning",
      description: "Finish with professional steam cleaning of upholstery and carpets for like-new results"
    }
  ];

  return (
    <div>
      <Hero 
        title="Interior Pet Hair Removal Las Vegas Valley"
        subtitle="Professional pet hair removal service. We handle the mess your pets leave behind!"
        backgroundImage="https://images.squarespace-cdn.com/content/v1/58a8d3c08419c2e78d6ddd15/a9ef9e71-5fa1-4e3a-8f6a-8be61af6f28d/IMG_0895.jpg?format=500w"
      />

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-secondary mb-8">Pet Hair Removal Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle className="text-xl">Sedan</CardTitle>
                <div className="text-3xl font-bold text-primary">$300</div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Standard interior + pet hair removal</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary bg-primary/5">
              <CardHeader>
                <CardTitle className="text-xl">SUV/Truck/Van</CardTitle>
                <div className="text-3xl font-bold text-primary">$350</div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Large interior + pet hair removal</p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle className="text-xl">Heavy Pet Hair</CardTitle>
                <div className="text-3xl font-bold text-primary">+$50</div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Extreme pet hair conditions</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-16 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-secondary mb-6">We Handle Pet Hair Like No One Else</h2>
              <div className="text-gray-700 space-y-4 text-lg leading-relaxed">
                <p>We all love our pets, but they sure make a mess! If you are feeling overwhelmed at the thought of cleaning up the mess left behind by your pets, don't worry we can handle it.</p>
                <p>Deep down inside, everyone dreads cleaning a car interior that has experienced the full wrath of a pet. Upholstery and carpet full of pet hair make it difficult to remove dirt, debris, and odors without the proper tools.</p>
                <p>Fortunately, we have a variety of pet hair removal tools needed for this very task. We ensure the interior looks and feels like new again.</p>
              </div>
            </div>
            <div>
              <img 
                src="https://i.imgur.com/JKCRKqb.jpg" 
                alt="Pet hair removal results - before and after transformation"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tools We Use */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-secondary mb-12">Professional Pet Hair Removal Tools</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition duration-300">
                <CardHeader>
                  <div className="text-primary mx-auto mb-4">
                    {tool.icon}
                  </div>
                  <CardTitle className="text-xl">{tool.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{tool.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Step by Step Process */}
      <section className="py-16 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-secondary mb-12">Step by Step Detail Process</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {process.map((step, index) => (
              <Card key={index} className="flex items-start space-x-6 p-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-secondary mb-12">Why Pet Owners Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Specialized Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We have the right equipment specifically designed for pet hair removal, not just regular cleaning tools.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Odor Elimination</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Our enzyme cleaners don't just mask pet odors - they eliminate them at the molecular level.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Star className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Like-New Results</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Your interior will look and feel completely refreshed, as if pets never set foot in your vehicle.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-secondary mb-12">What Pet Owners Are Saying</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-secondary">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Eliminate Pet Hair and Odors?</h2>
          <p className="text-xl mb-8">Don't let pet hair and odors overwhelm you. Let our professionals handle the mess and restore your car's interior to like-new condition.</p>
          <Link href="/contact">
            <Button className="bg-accent hover:bg-yellow-600 text-secondary font-bold py-3 px-8 rounded-lg text-lg">
              Schedule Pet Hair Removal
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PetHairRemoval;