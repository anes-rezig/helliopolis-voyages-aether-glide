
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTours = () => {
    document.getElementById("tours")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div 
          className="absolute top-40 right-20 w-6 h-6 bg-[#FFA100] rounded-full animate-pulse delay-1000"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        <div 
          className="absolute bottom-40 left-1/4 w-8 h-8 bg-blue-300 rounded-full animate-pulse delay-500"
          style={{ transform: `translateY(${scrollY * 0.7}px)` }}
        />
      </div>

      {/* Futuristic Grid Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent transform skew-y-12"></div>
      </div>

      {/* Header with Logo Placeholder */}
      <header className="absolute top-0 left-0 right-0 z-50 p-6">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="w-16 h-16 bg-gradient-to-br from-[#FFA100] to-blue-500 rounded-lg flex items-center justify-center border-2 border-white/20 backdrop-blur-sm">
            <span className="text-white font-bold text-xl">HV</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#tours" className="text-white hover:text-[#FFA100] transition-colors duration-300 font-medium">Tours</a>
            <a href="#booking" className="text-white hover:text-[#FFA100] transition-colors duration-300 font-medium">Booking</a>
            <a href="#partners" className="text-white hover:text-[#FFA100] transition-colors duration-300 font-medium">Partners</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="text-center z-10 px-4 max-w-6xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-[#FFA100] bg-clip-text text-transparent animate-fade-in">
          Helliopolis
        </h1>
        <h2 className="text-4xl md:text-6xl font-light mb-8 text-blue-100 animate-fade-in delay-300">
          Voyages
        </h2>
        <p className="text-xl md:text-2xl text-blue-200 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-500">
          Experience unforgettable journeys through time and space. Where every destination becomes an extraordinary adventure.
        </p>
        
        <Button 
          onClick={scrollToTours}
          className="bg-[#FFA100] hover:bg-[#FF8C00] text-black font-bold text-lg px-12 py-6 rounded-full transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-[#FFA100]/50 animate-fade-in delay-700"
        >
          Check Available Tours
          <span className="ml-2 text-2xl">🚀</span>
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
