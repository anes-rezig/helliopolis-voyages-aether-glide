
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-[#FFA100] bg-clip-text text-transparent">
            Helliopolis Voyages
          </h3>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Your gateway to extraordinary adventures across the cosmos. Follow us for the latest updates and exclusive offers.
          </p>
        </div>

        <div className="flex justify-center space-x-8 mb-12">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="group relative p-4 bg-white/10 rounded-full border border-white/20 hover:bg-[#FFA100] hover:border-[#FFA100] transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <IconComponent 
                  className="w-6 h-6 text-white group-hover:text-black transition-colors duration-300" 
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-[#FFA100] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </a>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h4 className="text-xl font-bold mb-4 text-[#FFA100]">Contact</h4>
            <p className="text-blue-200 mb-2">📧 bookings@helliopolisvoyages.com</p>
            <p className="text-blue-200 mb-2">📞 +1 (555) 123-TOUR</p>
            <p className="text-blue-200">🌍 Serving destinations across the galaxy</p>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4 text-[#FFA100]">Quick Links</h4>
            <ul className="space-y-2 text-blue-200">
              <li><a href="#tours" className="hover:text-[#FFA100] transition-colors duration-300">Tours</a></li>
              <li><a href="#booking" className="hover:text-[#FFA100] transition-colors duration-300">Booking</a></li>
              <li><a href="#partners" className="hover:text-[#FFA100] transition-colors duration-300">Partners</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4 text-[#FFA100]">Experience</h4>
            <p className="text-blue-200 mb-2">🚀 Cutting-edge technology</p>
            <p className="text-blue-200 mb-2">🛡️ Safety guaranteed</p>
            <p className="text-blue-200">⭐ Unforgettable memories</p>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-blue-300">
            © {new Date().getFullYear()} Helliopolis Voyages. All rights reserved. 
            <span className="ml-2">✨ Making the impossible possible since 2024 ✨</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
