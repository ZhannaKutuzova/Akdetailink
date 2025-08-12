import { useEffect } from "react";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "wouter";
import { CheckCircle, Star, Clock, Shield } from "lucide-react";

const FullInteriorDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const testimonials = [
    {
      name: "Julie Feldmann",
      rating: 5,
      text: "Brett did a fabulous job on my mother's car which I was not even sure it could be cleaned. She got a NEW car, without getting a new car. It was an unbelievable transformation of the interior. He was scheduled to arrive at 8 am and he texted me at about 7:40 and said he would be 3 minutes late. Wow. What great communication. If you need a car detailed, don't bother going to anyone else. How great that he will come right to your home. Such a convenience!!"
    },
    {
      name: "Stephen Sullivan", 
      rating: 5,
      text: "Brett is remarkably professional and talented at what he does. He was able to clean the interior of my truck so well that it felt like a new car. I have personally seen him clean several other cars in my neighborhood and they were immaculate when he finished. I can't recommend Brett and Steam Pro Mobile Detailing enough!"
    }
  ];

  return (
    <div>
      <Hero 
        title="Full Interior Deep Clean Las Vegas Valley"
        subtitle="Premium interior car cleaning services. Turn your car from dirty to clean."
        backgroundImage="https://www.carendrive.si/assets/news/0282470001668613661.jpg"
      />

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-secondary mb-8">Interior Deep Clean Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle className="text-xl">Sedan</CardTitle>
                <div className="text-3xl font-bold text-primary">$250</div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Standard sized vehicles</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary bg-primary/5">
              <CardHeader>
                <CardTitle className="text-xl">SUV/Truck/Van</CardTitle>
                <div className="text-3xl font-bold text-primary">$300</div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Medium & large vehicles</p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle className="text-xl">Pet Hair/Stains</CardTitle>
                <div className="text-3xl font-bold text-primary">+$50</div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Additional fee for pet hair or stains</p>
              </CardContent>
            </Card>
          </div>
          <p className="mt-6 text-gray-600">*Final pricing determined based on vehicle condition and specific requirements</p>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-16 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-secondary mb-6">Refresh and Rejuvenate Your Car's Interior</h2>
              <div className="text-gray-700 space-y-4 text-lg leading-relaxed">
                <p>If your car's interior is looking a little bit too messy, then our Interior Deep Clean is the perfect solution to get your interior to like-new condition. Our goal is to effectively remove dirt, stains, grime, and blemishes from your carpets, plastics, and leather surfaces, giving your interior that new-car feel so you can drive around comfortably in Las Vegas Valley.</p>
                <p>A popular add-on with this service is our Premium Wash or Wash and Wax to get your exterior back up to standard as well.</p>
              </div>
            </div>
            <div>
              <img 
                src="https://www.carendrive.si/assets/news/0282470001668613661.jpg" 
                alt="Professional interior detailing"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6-Step Process */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-secondary mb-12">The Interior Cleaning Process</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">Every interior we clean will be handled slightly differently based on the condition. Here's an overview of our services:</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <CardTitle>Thorough Vacuuming</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">A simple but important first step, we remove debris from carpets, seams, nooks, and crannies with our air compressor, drill brush, brushes, and vacuum. This in itself greatly improves the appearance of your interior!</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <CardTitle>Shampooing Fabric Surfaces</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Next we'll tackle the cloth and fabric surfaces like your seats, floor mats, carpeting, upholstery, and even headliner. We'll spray our cleaner, agitate with a brush, and then using our extractor or steamer, we'll shampoo the surfaces.</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <CardTitle>Cleaning Plastic and Leather</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">From the door panels to dashboards and center console, we meticulously clean all the plastic and leather surfaces. If your seats are leather and not cloth, this is the step where we clean them.</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <CardTitle>Cleaning Door Jambs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Don't forget about the door jambs! We'll use a pressure washer, cleaner, and brushes to remove the built up dirt and grime (an often overlooked area).</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">5</span>
                </div>
                <CardTitle>Streak-Free Windows</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Every detail needs spotless, streak-free windows and mirrors to complete to bring it all together.</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">6</span>
                </div>
                <CardTitle>Final Touch-Ups</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Lastly, before handing your vehicle back, we inspect the interior once more to see if there's any areas that need our attention. We'll touch them up and then call you out to see the transformation.</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-secondary mb-4">Our Detailed Approach</h3>
            <p className="text-gray-700 leading-relaxed">There's no one-size fits all approach. Many interiors have their own unique features that we have to address and clean. For instance, some seats fold up, giving us more access to thoroughly clean the carpeting and rails. In other interiors, there might be three rows and we have to move the seats forward, backwards, and fold them to get into all the areas.</p>
            <p className="text-gray-700 leading-relaxed mt-4">This is a very detailed process that we do to deliver the best results we can to you. That's what separates us from other detailers in Las Vegas Valley. We really focus on the details to get amazing results.</p>
          </div>
        </div>
      </section>

      {/* Service Info Cards */}
      <section className="py-16 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Service Duration</CardTitle>
              </CardHeader>
              <CardContent>
                <p>3-5 hours average completion time. Duration depends on vehicle size and condition.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Drying Time</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Interior will be 80% dry upon completion, fully dry within a few hours. No mold or mildew issues.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Mobile Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We bring the services to you! Convenient at-home or office location service throughout Las Vegas Valley.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-secondary mb-12">What Our Customers Are Saying</h2>
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

      {/* Service Areas */}
      <section className="py-16 bg-secondary text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-8">Premium Mobile Detailing Services</h2>
          <p className="text-xl text-center mb-8">We bring the services to you! That's why a lot of our Las Vegas Valley customers enjoy our services. Instead of dealing with dropping off your vehicle or driving through traffic, you can be at home or work and get your vehicle detailed.</p>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div>Summerlin</div>
            <div>Henderson</div>
            <div>Spring Valley</div>
            <div>Enterprise</div>
            <div>Las Vegas Valley</div>
            <div>North Las Vegas</div>
          </div>
          <p className="text-center mt-8">Don't see your area? No problem! Please give us a call or submit a form and ask if we service your area.</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-secondary mb-12">Interior Cleaning FAQs</h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-gray-200 rounded-xl px-6">
              <AccordionTrigger className="text-left">
                <h3 className="text-xl font-bold text-secondary">How long does this service take?</h3>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pt-4">
                This greatly depends on the size of your vehicle and the condition that it's in. An average cleaning can take 3 to 5 hours. However, the dirtier the car, the longer it'll take.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border border-gray-200 rounded-xl px-6">
              <AccordionTrigger className="text-left">
                <h3 className="text-xl font-bold text-secondary">Will this process get rid of bad odors inside the car?</h3>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pt-4">
                Yes, it can definitely help reduce a bad odor in your interior. If it's really bad, we may need to perform an Ozone treatment to really target the odor. Please let us know so we can recommend the best course of action for you.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-gray-200 rounded-xl px-6">
              <AccordionTrigger className="text-left">
                <h3 className="text-xl font-bold text-secondary">Do all the stains come out?</h3>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pt-4">
                We try our best to remove the stains in your interior, but some might be too far gone to remove. It could be because of the type of stain or how long it's been there that it's "set" and basically bleached itself into the fabric.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-gray-200 rounded-xl px-6">
              <AccordionTrigger className="text-left">
                <h3 className="text-xl font-bold text-secondary">Is my interior going to be wet when you're done?</h3>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pt-4">
                By the time we complete the detail, your seats and carpeting should be 80% dry (if we're on a warm day). Then a few hours later, your interior will be completely dry. We never soak or drench your interior with cleaner or water. So you won't have any mold or mildew issues after the service.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Clean Your Car's Interior To Like-New Condition</h2>
          <p className="text-xl mb-8">This is a great service if your interior hasn't been cleaned in a while and you want to get it back to standard, if you recently purchased a new-to-you vehicle and you want to "reset" the interior.</p>
          <Link href="/contact">
            <Button className="bg-accent hover:bg-yellow-600 text-secondary font-bold py-3 px-8 rounded-lg text-lg">
              Get Your Quote Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FullInteriorDetail;