import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Phone, Mail, MapPin } from "lucide-react";
import { updateMetaTags } from "@/lib/seo";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    updateMetaTags({
      title: "Contact | Book Mobile Detailing Las Vegas",
      description: "Contact AK Detailing for mobile car detailing in Las Vegas. Same day service. Serving Summerlin, Henderson. Call (702) 518-6014",
      keywords: "book car detailing Las Vegas, mobile detailer near me, mobile detailing same day, same day mobile detailing, at home car detailing, on site car detailing, mobile detailer near Summerlin",
      ogTitle: "Contact AK Detailing | Mobile Car Detailing Las Vegas",
      ogDescription: "Book professional mobile car detailing in Las Vegas. Same day service available. Call (702) 518-6014 or request a quote."
    });
  }, []);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    vehicleType: "",
    vehicleMake: "",
    service: "",
    message: "",
    website: "" // Honeypot field
  });

  const submitContactForm = useMutation({
    mutationFn: async (data: typeof formData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your inquiry! We will contact you soon.",
      });
      setFormData({
        name: "",
        phone: "",
        email: "",
        vehicleType: "",
        vehicleMake: "",
        service: "",
        message: "",
        website: ""
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitContactForm.mutate(formData);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="py-16 bg-secondary text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Ready to Transform Your Vehicle?</h1>
          <p className="text-xl">Get a free quote for premium mobile detailing services in Las Vegas Valley</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white text-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Get Your Free Quote</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      data-testid="input-name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      data-testid="input-phone"
                      type="tel"
                      placeholder="Your phone number"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    data-testid="input-email"
                    type="email"
                    placeholder="Your email (optional)"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="vehicleType">Vehicle Type</Label>
                    <Select value={formData.vehicleType} onValueChange={(value) => handleChange("vehicleType", value)}>
                      <SelectTrigger data-testid="select-vehicle-type">
                        <SelectValue placeholder="Select vehicle type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="suv">SUV</SelectItem>
                        <SelectItem value="sedan">Sedan</SelectItem>
                        <SelectItem value="coupe">Coupe</SelectItem>
                        <SelectItem value="truck">Truck</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="vehicleMake">Vehicle Make (optional)</Label>
                    <Input
                      id="vehicleMake"
                      data-testid="input-vehicle-make"
                      type="text"
                      placeholder="e.g., Toyota, BMW, Tesla"
                      value={formData.vehicleMake}
                      onChange={(e) => handleChange("vehicleMake", e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="service">Service Interested In</Label>
                  <Select value={formData.service} onValueChange={(value) => handleChange("service", value)}>
                    <SelectTrigger data-testid="select-service">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wash-wax">Wash & Wax</SelectItem>
                      <SelectItem value="premium-wash">Premium Wash</SelectItem>
                      <SelectItem value="interior-detail">Interior Detail</SelectItem>
                      <SelectItem value="paint-correction">Paint Correction</SelectItem>
                      <SelectItem value="ceramic-coating">Ceramic Coating</SelectItem>
                      <SelectItem value="multiple">Multiple Services</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    data-testid="input-message"
                    placeholder="Tell us about your vehicle's condition and what you're looking to achieve..."
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    className="h-32"
                  />
                </div>

                {/* Honeypot field - hidden from users but visible to bots */}
                <div style={{ position: 'absolute', left: '-5000px', opacity: 0, height: 0, overflow: 'hidden' }}>
                  <Label htmlFor="website">Website (leave blank)</Label>
                  <Input
                    id="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.website}
                    onChange={(e) => handleChange("website", e.target.value)}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg"
                  disabled={submitContactForm.isPending}
                >
                  {submitContactForm.isPending ? "Sending..." : "Get My Free Quote"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-accent" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href="tel:+17025186014" className="text-accent hover:underline">
                      +1 (702) 518-6014
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-6 h-6 text-accent" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:akdetailingservislv@gmail.com" className="text-accent hover:underline">
                      akdetailingservislv@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-accent" />
                  <div>
                    <p className="font-semibold">Service Area</p>
                    <p>Las Vegas Valley Area</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-2xl">Service Areas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "Summerlin", "Henderson", "Spring Valley", "Enterprise",
                    "Las Vegas Valley", "North Las Vegas"
                  ].map((area) => (
                    <p key={area} className="text-sm">{area}</p>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-2xl">Business Hours</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>8:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday - Sunday</span>
                  <span>9:00 AM - 5:00 PM</span>
                </div>
                <div className="text-sm text-gray-300 mt-4">
                  <p>• Mobile on-site service</p>
                  <p>• Same-day completion</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
