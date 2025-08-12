import { useEffect } from "react";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { AlertTriangle, CheckCircle, Star, Clock, Shield, Sparkles } from "lucide-react";

const InteriorRestoration = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const testimonials = [
    {
      name: "Jennifer L.",
      rating: 5,
      text: "I thought my car was beyond help after years of neglect. The Interior Restoration Clean worked miracles! They spent extra time on the heavily stained seats and now my car looks amazing. Worth every penny!"
    },
    {
      name: "Robert K.", 
      rating: 5,
      text: "My truck's interior was in terrible condition - food stains, pet damage, you name it. The restoration service got it cleaner than I ever imagined possible. Professional team with incredible results!"
    }
  ];

  const limitations = [
    "Surface condition affects cleaning potential",
    "Stain type and age determine results", 
    "Fabric integrity limits aggressive cleaning",
    "Some original damage may remain visible",
    "Sagging headliners require gentle approach"
  ];

  const included = [
    "Everything from Full Interior Deep Clean",
    "Double shampooing and extraction",
    "Multiple hot water extraction cycles",
    "Extended time for heavily soiled areas",
    "Specialized techniques for worst conditions",
    "Maximum effort restoration approach"
  ];

  return (
    <div>
      <Hero 
        title="Interior Restoration Clean Las Vegas Valley"
        subtitle="For the worst interiors that need more than a standard deep clean"
        backgroundImage="https://i.imgur.com/4u6sqLI.jpg"
      />

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-secondary mb-8">Interior Restoration Clean Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle className="text-xl">Sedan</CardTitle>
                <div className="text-3xl font-bold text-primary">$329</div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Standard sized vehicles</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary bg-primary/5">
              <CardHeader>
                <CardTitle className="text-xl">Midsize SUV/Truck</CardTitle>
                <div className="text-3xl font-bold text-primary">$349</div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Medium sized vehicles</p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle className="text-xl">3-Row SUV</CardTitle>
                <div className="text-3xl font-bold text-primary">$379</div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Large vehicles</p>
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
              <h2 className="text-4xl font-bold text-secondary mb-6">No Interior Too Dirty</h2>
              <div className="text-gray-700 space-y-4 text-lg leading-relaxed">
                <p>So you think your car's interior is too dirty to work on? No problem! We've tackled some pretty bad interiors with great results.</p>
                <p>90% of the time, our Full Interior Deep Clean service can get your car's interior back to a like-new condition. It's one of our most popular services.</p>
                <p>However, sometimes there's an interior that needs more work than the average vehicle. This is what we refer to as a restoration cleaning.</p>
              </div>
            </div>
            <div>
              <img 
                src="https://i.imgur.com/4u6sqLI.jpg" 
                alt="Interior restoration results - before and after transformation"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What's Different */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-secondary mb-12">What Makes This Different?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-secondary mb-6">Double the Effort</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                With the Interior Restoration Clean, we do everything that's included in the Full Interior Deep Clean, but twice as much (because the condition of the interior is that much worse).
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                If your seats or carpets are heavily soiled, we'll shampoo and extract multiple times with our hot water extractor to get as much of the gunk that we can.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-secondary mb-6">What's Included</h3>
              <div className="space-y-3">
                {included.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Limitations */}
      <section className="py-16 bg-yellow-50 border-l-4 border-yellow-400">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start space-x-4">
            <AlertTriangle className="w-8 h-8 text-yellow-600 mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">Important: Realistic Expectations</h2>
              <div className="text-gray-700 space-y-4 text-lg leading-relaxed">
                <p>Your interior will be greatly improved. However, it's important to note, even after all the extra time and energy we put into your interior, there will still be limitations on how much we can actually clean back to a "like-new" condition.</p>
                <p>Some of the stains or areas of the interior will simply not get back to its original condition. It depends on several factors:</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-4">Limiting Factors</h3>
                  <div className="space-y-2">
                    {limitations.map((limitation, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">{limitation}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-4">Special Considerations</h3>
                  <p className="text-gray-700 leading-relaxed">
                    If the fabric of the interior is less than ideal, we can't get aggressive with our cleanings as that will continue to damage the fabric. There might be a lot of stains on the headliner, but because it's already sagging and the fibers are already fraying, we can only clean so much or risk damaging the headliner even more.
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white rounded-lg border-l-4 border-primary">
                <p className="text-xl font-semibold text-secondary">What we can say is that if it can be cleaned, this package will get it clean!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-secondary mb-12">Restoration Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Maximum Effort</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We put in double the time and effort compared to standard cleaning for the best possible results.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Extended Process</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Multiple extraction cycles and extended cleaning time to tackle the worst interior conditions.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Gentle Yet Effective</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We balance aggressive cleaning with fabric protection to avoid further damage to delicate surfaces.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-secondary mb-12">Restoration Success Stories</h2>
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
          <h2 className="text-4xl font-bold mb-8">Ready for Interior Restoration?</h2>
          <p className="text-xl mb-8">For most vehicles, this will not be necessary. But for the small percentage of cars that really need the extra work, this will be your best bet.</p>
          <Link href="/contact">
            <Button className="bg-accent hover:bg-yellow-600 text-secondary font-bold py-3 px-8 rounded-lg text-lg">
              Schedule Restoration Clean
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default InteriorRestoration;