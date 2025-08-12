import { useEffect } from "react";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { Shield, Droplets, Clock, Star } from "lucide-react";

const CeramicCoating = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Hero 
        title="Ceramic Coating Protection Las Vegas Valley"
        subtitle="Durable multi-year protective coating for ultimate paint protection and gloss"
        backgroundImage="https://i.imgur.com/KlBJ914.jpg"
      />

      <section className="py-16 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-secondary mb-6">Professional Ceramic Coating Services</h2>
              <div className="text-gray-700 space-y-4 text-lg leading-relaxed">
                <p>Ceramic coating is a liquid polymer that chemically bonds with your vehicle's paint to create a permanent protective layer. This advanced protection shields your car from UV rays, dirt, water spots, and minor scratches while delivering an incredible gloss and depth to your paint.</p>
                <p>Our ceramic coatings last multiple years and make maintenance much easier. Water beads off the surface, dirt doesn't stick as easily, and your car stays cleaner longer between washes.</p>
                <p>We offer various ceramic coating packages from 3-year to 9-year protection, depending on your needs and budget.</p>
              </div>
            </div>
            <div>
              <img 
                src="https://i.imgur.com/KlBJ914.jpg" 
                alt="Car with ceramic coating showing water beading"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-secondary mb-12">Benefits of Ceramic Coating</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Ultimate Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Protects against UV rays, oxidation, bird droppings, tree sap, and other environmental contaminants.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Droplets className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Hydrophobic Properties</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Water beads and rolls off the surface, making washing easier and preventing water spots.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Long-Lasting</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Professional ceramic coatings last 3-9 years depending on the product and maintenance.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-secondary mb-12">What Our Customers Say About Ceramic Coating</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardContent>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"The ceramic coating on my Range Rover is incredible! The vehicle's color actually looks deeper after the paint correction and coating. It reflects like glass/mirror. Andrei has incredible attention to detail!"</p>
                <p className="font-semibold text-secondary">- Michael R.</p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"Best investment I made for my car! The ceramic coating makes washing so much easier and the shine lasts for months. Water just beads right off. Professional service from start to finish."</p>
                <p className="font-semibold text-secondary">- Sarah K.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Protect Your Investment?</h2>
          <p className="text-xl mb-8">Contact us today for a free ceramic coating consultation and quote.</p>
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

export default CeramicCoating;
