import { useEffect } from "react";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { CheckCircle, Star, Clock, Shield, Wind, AlertTriangle, Zap, Sparkles } from "lucide-react";

const SmokeOdorRemoval = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const testimonials = [
    {
      name: "Jessica R.",
      rating: 5,
      text: "I bought a used car that reeked of cigarette smoke. After the smoke odor removal service, my car smells fresh and clean! The ozone treatment made all the difference. I can finally drive with the windows up!"
    },
    {
      name: "Thomas M.", 
      rating: 5,
      text: "Incredible transformation! My truck was heavily smoked in for years. While they couldn't eliminate 100% of the odor, they reduced it by at least 90%. Much more comfortable to drive now. Professional service!"
    }
  ];

  const processSteps = [
    {
      icon: <Wind className="w-8 h-8" />,
      title: "1. Thorough Vacuum",
      description: "We thoroughly vacuum all surfaces, including the headliner, under the seats, carpets, and floor mats, ensuring every corner is removed of as much debris as possible."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "2. Deep Clean Fabric Surfaces",
      description: "With our hot water extractor, steamer, and tobacco-specific cleaner, we shampoo the seats, carpets, floor mats, seat belts, and, when possible, the headliner."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "3. Clean Plastic & Leather",
      description: "We use specific smoke odor cleaners to thoroughly clean all plastic, leather, and rubber surfaces like the center console, pillars, dashboard, cup holders, door panels, window seals and more."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "4. Window & Mirror Cleaning",
      description: "Two-level glass cleaning: first to remove smoke residue, then again for streak-free windows and mirrors."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "5. Complete Drying",
      description: "We place air movers across the interior to speed up drying time and prep for the ozone treatment."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "6. Ozone Treatment",
      description: "Commercial grade Ozone machine runs for 2-5 hours depending on condition, repeated as needed until satisfied with results. We also replace your cabin air filter."
    }
  ];

  return (
    <div>
      <Hero 
        title="Smoke Odor Removal Experts Las Vegas Valley"
        subtitle="Remove the smoke odor from your interior for a more comfortable ride"
        backgroundImage="https://steamteamutah.com/wp-content/uploads/2024/02/Odor-Removal-Products-1.jpg"
      />

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-secondary mb-8">Smoke Odor Removal Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle className="text-xl">Sedan</CardTitle>
                <div className="text-3xl font-bold text-primary">$349</div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Standard sized vehicles</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary bg-primary/5">
              <CardHeader>
                <CardTitle className="text-xl">Midsize SUV/Truck</CardTitle>
                <div className="text-3xl font-bold text-primary">$399</div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Medium sized vehicles</p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle className="text-xl">3-Row SUV</CardTitle>
                <div className="text-3xl font-bold text-primary">$449</div>
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
              <h2 className="text-4xl font-bold text-secondary mb-6">Removing Smoke Odor From Your Interior</h2>
              <div className="text-gray-700 space-y-4 text-lg leading-relaxed">
                <p>Smoke odor is one of the toughest smells to eliminate from an interior. Nicotine and tobacco particles spread and embed deeply into the cloth material like your seats, headliner, and carpeting.</p>
                <p>How long the vehicle was smoked in and the intensity of the smoking are two main factors we consider on how we're going to tackle the job and the expected results we can produce.</p>
                <p>The longer it's been smoked in and the more intense the smoking was, the more difficult it gets to remove the odor.</p>
              </div>
            </div>
            <div>
              <img 
                src="https://i.imgur.com/PO9HVFw.jpg" 
                alt="Smoke odor removal process in action"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16 bg-yellow-50 border-l-4 border-yellow-400">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start space-x-4">
            <AlertTriangle className="w-8 h-8 text-yellow-600 mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">Realistic Expectations</h2>
              <div className="text-gray-700 space-y-4 text-lg leading-relaxed">
                <p>In many instances, completely eliminating the odor is unlikely but we can at least significantly reduce it. In extreme conditions, it may be recommended you replace your headliner, carpeting, or floor mats to help reduce the odor.</p>
                <p>The goal of this service is not to mask the smoke odor with a fragrance or perfume. We aim to eliminate or heavily reduce the layer of nicotine, tobacco, or cannabis that's left behind from smoking inside your vehicle.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interior Cleaning vs Smoke Odor Removal */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-secondary mb-12">Interior Cleaning vs Smoke Odor Removal</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Interior Detail Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-lg leading-relaxed">
                  The goal of our interior detail service is to deep clean it to a like-new condition. We take it from really dirty to really clean.
                </p>
              </CardContent>
            </Card>
            <Card className="p-8 border-2 border-primary">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Smoke Odor Removal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-lg leading-relaxed">
                  With smoke odor removal, the process is very different. We still perform deep interior cleaning, but we really focus on finding all areas where there might be traces of nicotine or tobacco residue.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12 bg-gray-50 p-8 rounded-xl">
            <p className="text-gray-700 text-lg leading-relaxed">
              This is what separates us from many other detailers in Las Vegas Valley. This can be very tricky when you have an interior that isn't dirty but has a strong smoke odor to it. Because there may not be many stains on the seats or carpeting, but the smoke odor is present so that means the tobacco residue is setting across the fabric and plastic surfaces.
            </p>
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-16 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-secondary mb-12">The Smoke Odor Removal Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition duration-300">
                <CardHeader>
                  <div className="text-primary mx-auto mb-4">
                    {step.icon}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 bg-white p-8 rounded-xl border-l-4 border-primary">
            <h3 className="text-2xl font-bold text-secondary mb-4">Critical: Cabin Air Filter Replacement</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              During the process, we'll also replace your cabin air filter. This is an imperative step to complete because your current air filter could have a ton of tobacco or nicotine particles trapped in it. Even if we do the interior cleaning, ozone treatment, and all the right steps, once you turn on your AC while driving, you'll recirculate that odor back into the interior.
            </p>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-secondary mb-12">Success Stories</h2>
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
          <h2 className="text-4xl font-bold mb-8">Ready to Eliminate Smoke Odor?</h2>
          <p className="text-xl mb-8">Professional smoke odor removal with commercial-grade ozone treatment. Get your fresh, clean interior back.</p>
          <Link href="/contact">
            <Button className="bg-accent hover:bg-yellow-600 text-secondary font-bold py-3 px-8 rounded-lg text-lg">
              Schedule Odor Removal
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SmokeOdorRemoval;