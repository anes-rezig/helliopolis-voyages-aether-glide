
import { useEffect, useState } from "react";

const Partners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const partners = [
    { name: "Qatar Airways", logo: "🇶🇦" },
    { name: "Air Algérie", logo: "🇩🇿" },
    { name: "Emirates", logo: "🇦🇪" },
    { name: "Air France", logo: "🇫🇷" },
    { name: "Lufthansa", logo: "🇩🇪" },
    { name: "Turkish Airlines", logo: "🇹🇷" },
    { name: "British Airways", logo: "🇬🇧" },
    { name: "Singapore Airlines", logo: "🇸🇬" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % partners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [partners.length]);

  return (
    <section id="partners" className="py-20 bg-gradient-to-r from-blue-900 via-slate-800 to-blue-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-white">
            Trusted Partners
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            We collaborate with the world's leading airlines to ensure your journey is seamless and luxurious.
          </p>
        </div>

        <div className="relative h-64 flex items-center justify-center">
          <div className="relative w-full max-w-4xl">
            {partners.map((partner, index) => {
              const angle = (index - currentIndex) * (360 / partners.length);
              const isActive = index === currentIndex;
              
              return (
                <div
                  key={partner.name}
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 transform ${
                    isActive ? 'scale-125 z-10' : 'scale-75 opacity-40'
                  }`}
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(200px) ${isActive ? 'scale(1.25)' : 'scale(0.75)'}`
                  }}
                >
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center min-w-64 hover:bg-white/20 transition-all duration-300">
                    <div className="text-6xl mb-4">{partner.logo}</div>
                    <h3 className="text-xl font-bold text-white">{partner.name}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {partners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-[#FFA100] scale-125' : 'bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
