import { useEffect } from "react";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { SprayCan, Droplets, Shield, Sparkles, Star } from "lucide-react";
import { updateMetaTags } from "@/lib/seo";

const WashAndWax = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    updateMetaTags({
      title: "Wash & Wax Las Vegas | Mobile Car Wash Service",
      description: "Professional wash and wax in Las Vegas. Hand car wash with premium wax protection. Mobile service to Summerlin, Henderson. Call today!",
      keywords: "wash and wax Las Vegas, hand car wash Las Vegas, mobile car wash Las Vegas, hand wash and wax, wax and seal Las Vegas, car wax for scratches, mobile wash and detail",
      ogTitle: "Wash & Wax Las Vegas | Mobile Car Wash Service",
      ogDescription: "Professional mobile wash and wax service in Las Vegas Valley. Premium car wax protection at your location."
    });
  }, []);
  return (
    <div>
      <Hero 
        title="Wash and Wax Services Las Vegas Valley"
        subtitle="Professional exterior detailing to cleanse and protect your vehicle's paint"
        backgroundImage="https://i.imgur.com/8srpR7X.jpeg"
      />

      <section className="py-16 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-secondary mb-6">Professional Wash and Wax Service</h2>
              <div className="text-gray-700 space-y-4 text-lg leading-relaxed">
                <p>Our wash and wax service provides a thorough exterior cleaning followed by a protective wax application that enhances your vehicle's shine and protects the paint from environmental contaminants.</p>
                <p>We use premium car shampoos and high-quality carnauba or synthetic wax to clean and protect your vehicle's exterior. This service is perfect for regular maintenance to keep your car looking its best.</p>
                <p>The wax creates a protective barrier against UV rays, dirt, and water while adding a beautiful glossy finish that makes your car look showroom fresh.</p>
              </div>
            </div>
            <div>
              <img 
                src="https://i.imgur.com/8srpR7X.jpeg" 
                alt="Car being washed and waxed"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-secondary mb-12">Wash and Wax Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <SprayCan className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Deep Cleaning</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Removes dirt, grime, and contaminants that regular washing can't eliminate.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Enhanced Shine</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Professional wax application creates a deep, glossy finish that looks amazing.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Paint Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Wax creates a protective barrier against UV rays and environmental damage.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Droplets className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Water Repellent</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Waxed surfaces repel water and make future washing easier and more effective.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-secondary mb-12">What Our Customers Say About Wash & Wax</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardContent>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"Amazing wash and wax service! My car looks brand new every time. The attention to detail is incredible and the convenience of mobile service is unbeatable. Highly recommend!"</p>
                <p className="font-semibold text-secondary">- David L.</p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"The wax protection is fantastic! Water beads perfectly and my car stays cleaner longer between washes. Professional results every time. Worth every penny."</p>
                <p className="font-semibold text-secondary">- Jennifer M.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready for Professional Wash and Wax?</h2>
          <p className="text-xl mb-8">Contact us to schedule your wash and wax service today.</p>
          <Link href="/contact">
            <Button className="bg-accent hover:bg-yellow-600 text-secondary font-bold py-3 px-8 rounded-lg text-lg">
              Get Quote
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WashAndWax;
