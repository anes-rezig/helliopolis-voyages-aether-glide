
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = "Tour Booking Inquiry - Helliopolis Voyages";
    const body = `Hello Helliopolis Voyages,

I would like to inquire about booking a tour.

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

Please contact me with available tour options and pricing.

Best regards,
${formData.name}`;

    const mailtoUrl = `mailto:bookings@helliopolisvoyages.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoUrl;
    
    toast({
      title: "Booking Request Sent",
      description: "Your email client has been opened with your booking inquiry.",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="booking" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-[#FFA100] bg-clip-text text-transparent">
            Book Your Adventure
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to embark on an unforgettable journey? Fill out the form below and we'll get back to you with personalized tour recommendations.
          </p>
        </div>

        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-gray-800">
              Contact Information
            </CardTitle>
            <CardDescription className="text-gray-600">
              Provide your details and we'll craft the perfect adventure for you
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-700 font-medium">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="border-2 border-blue-200 focus:border-[#FFA100] transition-colors duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-700 font-medium">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="border-2 border-blue-200 focus:border-[#FFA100] transition-colors duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700 font-medium">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="border-2 border-blue-200 focus:border-[#FFA100] transition-colors duration-300"
                  placeholder="Enter your email address"
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-[#FFA100] hover:bg-[#FF8C00] text-black font-bold text-lg py-6 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#FFA100]/50"
              >
                Send Booking Inquiry
                <span className="ml-2">📧</span>
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Booking;
