import { useEffect } from "react";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { Car, Sparkles, Clock, CheckCircle, Star } from "lucide-react";

const InteriorDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Hero 
        title="Interior Detail Services Las Vegas Valley"
        subtitle="Deep interior cleaning to restore your car's interior to like-new condition"
        backgroundImage="https://i.imgur.com/PL08W1D.jpeg"
      />

      <section className="py-16 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-secondary mb-6">Interior Detail Services</h2>
          <div className="text-gray-700 space-y-4 text-lg leading-relaxed max-w-4xl mx-auto">
            <p>Do not be concerned if you believe your interior is "too dirty" to clean. We have the products and tools required to manage the majority of circumstances. We have cleaned the inside of hundreds of vehicles, including all makes and models in every imaginable condition. To surprise us would be challenging.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Full Interior Deep Clean */}
            <Card className="overflow-hidden">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-secondary">Full Interior Deep Clean</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <img 
                  src="https://www.carendrive.si/assets/news/0282470001668613661.jpg" 
                  alt="Full interior deep clean service"
                  className="rounded-lg w-full h-48 object-cover"
                />
                <p className="text-gray-700">Is your car's interior beyond the point of a quick clean up? This package is designed to make your car feel brand new again!</p>
                <Link href="/full-interior-detail">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">Learn more</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Interior Pet Hair Removal */}
            <Card className="overflow-hidden">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-secondary">Interior Pet Hair Removal</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <img 
                  src="https://images.squarespace-cdn.com/content/v1/58a8d3c08419c2e78d6ddd15/a9ef9e71-5fa1-4e3a-8f6a-8be61af6f28d/IMG_0895.jpg?format=500w" 
                  alt="Pet hair removal service"
                  className="rounded-lg w-full h-48 object-cover"
                />
                <p className="text-gray-700">We all love our pets, but they sure make a mess! If you are feeling overwhelmed at the thought of cleaning up the mess left behind by your pets, don't worry we can handle it</p>
                <Link href="/pet-hair-removal">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">Learn more</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Interior Restoration Clean */}
            <Card className="overflow-hidden">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-secondary">Interior Restoration Clean</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <img 
                  src="https://images.squarespace-cdn.com/content/v1/58a8d3c08419c2e78d6ddd15/9f9cb67c-2e27-47ec-8af3-469d22268254/IMG_9626.JPG?format=500w" 
                  alt="Interior restoration cleaning service"
                  className="rounded-lg w-full h-48 object-cover"
                />
                <p className="text-gray-700">So you think your car's interior is too dirty to work on? No problem! We've tackled some pretty bad interiors with great results.</p>
                <Link href="/interior-restoration">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">Learn more</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Smoke Odor Removal */}
            <Card className="overflow-hidden">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-secondary">Smoke Odor Removal</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <img 
                  src="https://steamteamutah.com/wp-content/uploads/2024/02/Odor-Removal-Products-1.jpg" 
                  alt="Smoke odor removal service"
                  className="rounded-lg w-full h-48 object-cover"
                />
                <p className="text-gray-700">The goal of this service is not to mask the smoke odor with a fragrance or perfume. We aim to eliminate or heavily reduce the layer of nicotine, tobacco, or Cannabis that's left behind from smoking inside your vehicle.</p>
                <Link href="/smoke-odor-removal">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">Learn more</Button>
                </Link>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-secondary mb-12">What Our Customers Say About Interior Detailing</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardContent>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"Incredible interior restoration! My car's interior was in terrible condition with pet hair everywhere. Now it looks and smells brand new. The smoke odor removal was a miracle - completely eliminated the tobacco smell."</p>
                <p className="font-semibold text-secondary">- Mark S.</p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"Deep clean service exceeded expectations! Every surface was meticulously cleaned. The leather conditioning brought my seats back to life. It's like driving a new car again."</p>
                <p className="font-semibold text-secondary">- Amanda C.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready for a Like-New Interior?</h2>
          <p className="text-xl mb-8">Contact us for a consultation on interior detailing for your vehicle.</p>
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

export default InteriorDetail;
