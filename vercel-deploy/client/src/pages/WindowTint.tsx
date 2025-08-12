import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { Sun, Shield, Eye, Thermometer } from "lucide-react";

const WindowTint = () => {
  return (
    <div>
      <Hero 
        title="Professional Window Tint Knoxville"
        subtitle="Enhance privacy, reduce heat, and protect your interior with premium ceramic window tint"
        backgroundImage="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />

      <section className="py-16 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-secondary mb-6">Premium Ceramic Window Tint</h2>
              <div className="text-gray-700 space-y-4 text-lg leading-relaxed">
                <p>Our ceramic window tint provides superior heat rejection, UV protection, and glare reduction while maintaining excellent visibility. Unlike cheaper dyed films, ceramic tint won't fade, bubble, or interfere with electronic devices.</p>
                <p>We offer various tint levels to meet your needs while staying compliant with Tennessee tint laws. Our professional installation ensures a perfect fit with no bubbles or peeling edges.</p>
                <p>Ceramic window tint also adds privacy and security while giving your vehicle a sleek, upgraded appearance.</p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=600" 
                alt="Car with professional window tint"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-secondary mb-12">Window Tint Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Sun className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>UV Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Blocks 99% of harmful UV rays that can damage your skin and fade your interior.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Thermometer className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Heat Reduction</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Reduces interior temperature by up to 40%, keeping you comfortable and reducing AC usage.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Eye className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Privacy & Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Provides privacy and makes it harder for thieves to see valuables inside your vehicle.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Glare Reduction</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Reduces eye strain and improves driving safety by minimizing harsh glare.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready for Professional Window Tint?</h2>
          <p className="text-xl mb-8">Contact us for a free window tint consultation and quote.</p>
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

export default WindowTint;
