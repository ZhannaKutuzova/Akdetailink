import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { Shield, Car, Clock, Star } from "lucide-react";

const PPF = () => {
  return (
    <div>
      <Hero 
        title="Paint Protection Film (PPF) Knoxville"
        subtitle="Ultimate protection against rock chips, scratches, and road debris with invisible clear film"
        backgroundImage="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />

      <section className="py-16 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-secondary mb-6">Premium Paint Protection Film</h2>
              <div className="text-gray-700 space-y-4 text-lg leading-relaxed">
                <p>Paint Protection Film (PPF) is a clear, virtually invisible urethane film that's applied to your vehicle's paint to protect it from rock chips, scratches, bug damage, and other road hazards that can damage your paint.</p>
                <p>Our premium PPF has self-healing properties, meaning minor scratches disappear with heat from the sun or warm water. The film is optically clear and won't affect your paint's appearance while providing years of protection.</p>
                <p>PPF is especially important for high-impact areas like the front bumper, hood, fenders, mirrors, and door edges where damage is most likely to occur.</p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=600" 
                alt="Car with paint protection film installation"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-secondary mb-12">PPF Protection Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Impact Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Protects against rock chips, road debris, and minor impacts that can damage your paint.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Car className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Self-Healing Technology</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Minor scratches and swirl marks heal themselves with heat, keeping the film looking new.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Long-Term Value</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Preserves your vehicle's resale value by maintaining perfect paint condition for years.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Protect Your Investment with PPF</h2>
          <p className="text-xl mb-8">Contact us for a consultation on paint protection film options for your vehicle.</p>
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

export default PPF;
