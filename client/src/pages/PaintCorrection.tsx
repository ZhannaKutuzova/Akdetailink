import { useEffect } from "react";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "wouter";
import { SprayCan, Search, Cog, Sparkles, Shield, CheckCircle, Star, MapPin, Car, Droplets, Ban } from "lucide-react";
import { updateMetaTags } from "@/lib/seo";

const PaintCorrection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    updateMetaTags({
      title: "Paint Correction Las Vegas | Scratch Removal Service",
      description: "Paint correction in Las Vegas. Remove scratches, swirls, oxidation. 1-step & 2-step options. Mobile service. Call (702) 518-6014",
      keywords: "paint correction Las Vegas, scratch removal car Las Vegas, buffing and polishing car, machine polish car, two step paint correction, one step polish Las Vegas, swirl removal Las Vegas, paint correction services, mobile paint correction, car scratch removal near me, remove scratches from car, oxidation removal car paint, wet sanding car paint, black car paint correction, professional car polishing near me, car paint restoration, paint restoration",
      ogTitle: "Paint Correction Las Vegas | Scratch Removal Service",
      ogDescription: "Expert paint correction and scratch removal in Las Vegas. Mobile service for swirl removal, buffing, and polishing."
    });
  }, []);
  const processSteps = [
    {
      icon: <SprayCan className="w-8 h-8" />,
      title: "1. Preparation",
      description: "Clean wheels, wash vehicle, dry and blow out standing water from emblems, jambs, and seals."
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "2. Decontamination", 
      description: "Clay bar treatment and iron decontamination to remove embedded debris for smooth paint."
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "3. Inspection & Testing",
      description: "Paint inspection, thickness measurements, and test spots to determine optimal approach."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "4. Paint Polishing",
      description: "Machine polish paint to remove 50% to 90% of imperfections depending on clear coat condition."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "5. Protection",
      description: "Apply paint prep cleaner, remove residue, and apply sealant or ceramic coating."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "6. Final Touches",
      description: "Tire dressing, fender treatment, glass cleaning, and door jamb wiping for perfection."
    }
  ];

  const correctionLevels = [
    {
      title: "Touch Up Paint",
      description: "Professional chip and scratch touch-up painting to restore damaged areas.",
      price: "$120",
      features: ["Chip repair", "Scratch touch-up", "Color matching"],
      popular: false
    },
    {
      title: "One-Step Polish", 
      description: "Remove 50% to 70% of imperfections. Noticeable difference in paint clarity and gloss.",
      price: "$200 - $280",
      features: ["50-70% correction", "Single polish step", "4-6 hours"],
      popular: true
    },
    {
      title: "Two-Step Correction",
      description: "Remove 80% to 95% of imperfections. Maximum gloss and clarity restoration.",
      price: "$300 - $380", 
      features: ["80-95% correction", "Maximum results", "1-2 days"],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Lance Stafford",
      rating: 5,
      text: "Brett did an incredible job on ceramic coating our dark grey 2021 Range Rover. He has incredible attention to detail! The vehicle's color actually looks deeper after the paint correction and coating. It reflects like glass/mirror. I have a special order RR that will be arriving late July/early August - scheduling Brett to coat it will be the first call I make."
    },
    {
      name: "Ozzy TheKid",
      rating: 5, 
      text: "I don't write many reviews but after my experience with Steam Pro Mobile Detailing today I needed to get my typing fingers back to work to give Brett the credit he deserves. From the very beginning Brett was friendly, polite, and had the patience to answer all of my questions. The finished product was beyond my expectations. Can't say enough about how much of a pleasure it was to do business with a genuinely nice and honest business owner like Brett."
    }
  ];

  const serviceAreas = [
    "Summerlin", "Henderson", "Spring Valley", "Enterprise", 
    "Las Vegas Valley", "North Las Vegas"
  ];

  const additionalServices = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Ceramic Coating",
      description: "Long-lasting protective coating for ultimate paint protection and gloss."
    }
  ];

  return (
    <div>
      <Hero 
        title="Paint Correction Specialists Las Vegas Valley"
        subtitle="Remove the imperfections in your paint for maximum gloss and clarity"
        backgroundImage="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />

      {/* Paint Correction Experts Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-secondary mb-6">Paint Correction Experts in Las Vegas Valley</h2>
              <div className="text-gray-700 space-y-4 text-lg leading-relaxed">
                <p>Have you looked into your paint in the sun and seen a bunch of swirls marks, scratches, and even water spots? This is what can make your paint look dull and faded. Paint correction is when we remove those imperfections from your paint to reveal the ultimate gloss and clarity. And if you pair this with a <Link href="/ceramic-coating" className="text-primary hover:underline">ceramic coating</Link>, your car will look completely different.</p>
                <p>How do we do this? By machine polishing your paint with multiple polishers, pads, compounds, and towels. This is what separates us in Las Vegas Valley versus other detailers. We don't just grab a rotary buffer, give you a "quick buff" and call it a day.</p>
                <p>Instead, we inspect the paint, take a reading of your paint thickness, do multiple test spots to see what combination works best, and then carefully polish your paint.</p>
              </div>
            </div>
            <div>
              <img 
                src="https://i.imgur.com/mTcfHoX.jpeg" 
                alt="Car paint before and after correction"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Professional Detailer Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://i.imgur.com/k5qDA0F.jpg" 
                alt="Professional detailing work"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-secondary mb-6">Las Vegas Valley's Go-To Professional Detailer</h2>
              <div className="text-gray-700 space-y-4 text-lg leading-relaxed">
                <p>Hiring the right detailer in Las Vegas Valley makes a big difference to the results you'll get for your vehicle. With the right detailer, there will be no damage to your clear coat, no polish residue on your plastics, the intricate areas will be polished, and the paint will come out amazing.</p>
                <p>On the other hand, if you hire the wrong detailer, you can cause more harm than good to your paint or vehicle.</p>
                <p>Your car's paint is made up of three layers: the primer, basecoat, and clear coat. When we polish paint, we're actually removing and leveling out the clear coat. The flatter we get it, the more gloss and clarity we get. But when you take things too far and get too aggressive, you thin out the clear coat and can cause premature failure or you can even burn through the paint.</p>
                <p>How can you tell if the clear coat is burned through? There will be a very faded, dull looking spot. If this happens, the only solution is to repaint the panel because there's no more clear coat. On bumpers, where it's plastic instead of metal, you can even burn and warp the surface, causing even more permanent damage.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-secondary text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Our Paint Correction Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  index < 3 ? 'bg-primary' : 'bg-accent'
                }`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-xl mb-6 leading-relaxed">
              The first step is to clean the wheels and tires, wash the vehicle, then dry and blow out all the standing water in the emblems, jambs, and seals. And the great thing is we're mobile! So we're able to take care of your vehicle right at your home or office location.
            </p>
          </div>
        </div>
      </section>

      {/* Service Levels Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-secondary mb-12">Different Levels of Paint Correction To Choose From</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {correctionLevels.map((level, index) => (
              <Card key={index} className={`text-center ${level.popular ? 'border-2 border-primary' : ''}`}>
                <CardHeader>
                  {level.popular && (
                    <div className="bg-primary text-white text-sm font-bold py-1 px-3 rounded-full inline-block mb-4">
                      MOST POPULAR
                    </div>
                  )}
                  <CardTitle className="text-2xl">{level.title}</CardTitle>
                  <CardDescription className="mb-4">{level.description}</CardDescription>
                  <div className="text-3xl font-bold text-primary mb-4">{level.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="text-left space-y-2">
                    {level.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-700 mb-4">The price depends on the vehicle's size and condition. Contact us for a precise quote.</p>
            <Link href="/contact">
              <Button className="bg-primary hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">
                Get Your Quote
              </Button>
            </Link>
          </div>
          <div className="mt-8 text-gray-700 space-y-4">
            <p>We offer three different levels of paint correction options based on your vehicle's condition, budget, and desired results:</p>
            <p><strong>All-in-One:</strong> This is a quick and light polish we do to bring back some gloss into the paint. The goal is not to remove a majority of the swirls, but more so give the paint a refresh. This takes a few hours to complete but your car will look much better.</p>
            <p><strong>One-Step Polish:</strong> You'll start to see a noticeable difference where we remove 50% to 70% of the imperfections in your paint. This is highly dependent on the type of paint you have. Clear coats that are softer, which means easier to work on, will get closer to 70%. While harder clear coats, meaning more difficult to remove the swirls, can get around 50% removal.</p>
            <p><strong>Two-Step Correction:</strong> This is where we can aim to remove 80% to 95% of the imperfections in your paint. You'll see the biggest difference with the gloss and clarity. With this type of service, it can take one to two days to complete.</p>
            <p>There's no one-size fits all approach to our paint correction services. We're happy to work with you to meet your needs and goals. If you're interested in keeping your car looking great, you can book a <Link href="/premium-wash" className="text-primary hover:underline">Premium Wash</Link> or even get on our Maintenance Wash program.</p>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-secondary mb-12">What Our Customers Are Saying</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="flex text-accent mr-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                    <span className="text-gray-600">({testimonial.rating}/5)</span>
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-bold text-secondary">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Service Areas */}
      <section className="py-16 bg-secondary text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Offering Mobile Detailing Services</h2>
              <p className="text-xl mb-6 leading-relaxed">
                The convenient part of what we do is we bring the services to your home or office location. This makes the process much easier on our Las Vegas Valley customers. We service areas like Summerlin, Henderson, Spring Valley, Enterprise, Las Vegas Valley, and North Las Vegas.
              </p>
              <div className="grid grid-cols-2 gap-4 text-lg">
                {serviceAreas.map((area, index) => (
                  <div key={index}>
                    <MapPin className="w-5 h-5 text-accent inline mr-2" />
                    {area}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=600" 
                alt="Mobile detailing service van"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-secondary mb-12">Complete Automotive Care Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition duration-300">
                <CardHeader>
                  <div className="text-primary mx-auto mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 space-y-4 text-gray-700">
            <p><Link href="/interior-detail" className="text-primary hover:underline font-semibold">Interior Detail</Link>: This service deep cleans the carpets, floor mats, seats, headliner, plastic, and leather surfaces to a like-new condition. Get that new-car feel again for a more comfortable drive.</p>
            <p><Link href="/window-tint" className="text-primary hover:underline font-semibold">Window Tint</Link>: Enhance privacy, block harmful UV rays, and keep your interior cooler with ceramic window tint. It also gives you vehicle a more upgraded and sleek look after you get tint installed.</p>
            <p><Link href="/ppf" className="text-primary hover:underline font-semibold">Paint Protection Film (PPF)</Link>: PPF is a clear film that's installed to your car's paint to protect it from rock chips, scratches, and road debris. It preserves your vehicle's finish, maintaining its showroom look and resale value for years.</p>
            <p><Link href="/smoke-odor-removal" className="text-primary hover:underline font-semibold">Smoke Odor Removal</Link>: Our smoke odor removal service reduces and eliminates stubborn cigarette or tobacco smells. Using professional-grade treatments, we neutralize odor at the source—restoring a clean interior.</p>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-secondary mb-12">What Our Customers Say About Paint Correction</h2>
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

      {/* FAQ Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-secondary mb-12">Paint Correction FAQs</h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-gray-200 rounded-xl px-6">
              <AccordionTrigger className="text-left">
                <h3 className="text-xl font-bold text-secondary">How long does it last after I get my car polished?</h3>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pt-4">
                A majority of the swirls and scratches you get in your paint are caused by improper washing and drying. We always recommend our customers to be proactive and learn the proper way to maintain your vehicle. If you take it through a car wash where they use low quality brushes, towels, and cleaners, it'll get your paint back to square one.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border border-gray-200 rounded-xl px-6">
              <AccordionTrigger className="text-left">
                <h3 className="text-xl font-bold text-secondary">Do you come to me or do I drop off my car?</h3>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pt-4">
                We're mobile so we bring the services to you! This is one of the main advantages of choosing Steam Pro Mobile Detailing - convenience at your location.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-gray-200 rounded-xl px-6">
              <AccordionTrigger className="text-left">
                <h3 className="text-xl font-bold text-secondary">What's the difference between the correction levels?</h3>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pt-4">
                All-in-One is a light refresh taking a few hours. One-Step removes 50-70% of imperfections and is our most popular option. Two-Step removes 80-95% of imperfections and provides maximum results but takes 1-2 days to complete.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default PaintCorrection;
