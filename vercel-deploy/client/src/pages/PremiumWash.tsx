import { useEffect } from "react";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { SprayCan, CheckCircle, Clock, Star } from "lucide-react";

const PremiumWash = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Hero 
        title="Premium Wash Services Las Vegas Valley"
        subtitle="Swirl-free hand washing to keep your vehicle looking in top condition"
        backgroundImage="https://i.imgur.com/V06ekf0.jpeg"
      />

      <section className="py-16 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-secondary mb-6">Premium Hand Wash Service</h2>
              <div className="text-gray-700 space-y-4 text-lg leading-relaxed">
                <p>Our premium wash service is a meticulous hand washing process designed to maintain your vehicle's finish without introducing swirl marks or scratches that can occur with automated car washes.</p>
                <p>We use the two-bucket method with high-quality microfiber wash mitts and premium car shampoo to safely clean your vehicle. Every step is performed by hand to ensure your paint stays in perfect condition.</p>
                <p>This service is ideal for maintaining vehicles that have received paint correction or ceramic coating, or for any car owner who wants the safest possible washing method.</p>
              </div>
            </div>
            <div>
              <img 
                src="https://i.imgur.com/V06ekf0.jpeg" 
                alt="Premium hand washing of vehicle"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-secondary mb-12">Premium Wash Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <SprayCan className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Hand Washing</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Gentle hand washing using the two-bucket method to prevent contamination and swirls.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Safe Techniques</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Professional washing techniques that protect your paint from damage and scratches.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Maintenance Wash</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Perfect for regular maintenance of detailed vehicles and ceramic coated cars.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Star className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Premium Results</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Showroom-quality results that keep your vehicle looking its absolute best.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-secondary mb-12">What Our Customers Say About Premium Wash</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardContent>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"Perfect maintenance wash for my ceramic coated vehicle! The two-bucket method ensures no scratches and the hand washing is so gentle. My car's coating is still perfect after months of premium washes."</p>
                <p className="font-semibold text-secondary">- Robert T.</p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"The safest wash possible! No swirl marks, no scratches, just a perfectly clean car. This is the only way I'll wash my luxury vehicle now. Premium service at its finest."</p>
                <p className="font-semibold text-secondary">- Lisa H.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready for Premium Wash Service?</h2>
          <p className="text-xl mb-8">Contact us to schedule your premium hand wash service today.</p>
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

export default PremiumWash;
