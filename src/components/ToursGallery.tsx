
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ToursGallery = () => {
  const tours = [
    {
      id: 1,
      title: "Aether Sky Expedition",
      description: "Soar through the clouds in our luxury sky vessels",
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=500&h=300&fit=crop",
      price: "From $2,999"
    },
    {
      id: 2,
      title: "Mountain Summit Adventure",
      description: "Conquer the highest peaks with cutting-edge equipment",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&h=300&fit=crop",
      price: "From $1,899"
    },
    {
      id: 3,
      title: "Ocean Depths Discovery",
      description: "Explore underwater worlds with advanced submarines",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=500&h=300&fit=crop",
      price: "From $3,499"
    },
    {
      id: 4,
      title: "River Canyon Odyssey",
      description: "Navigate through mystical canyons and hidden valleys",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=500&h=300&fit=crop",
      price: "From $2,299"
    },
    {
      id: 5,
      title: "Desert Mirage Safari",
      description: "Journey across endless dunes with exotic companions",
      image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=500&h=300&fit=crop",
      price: "From $2,799"
    },
    {
      id: 6,
      title: "Arctic Aurora Expedition",
      description: "Witness the northern lights from exclusive viewing pods",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&h=300&fit=crop",
      price: "From $4,199"
    }
  ];

  return (
    <section id="tours" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-[#FFA100] bg-clip-text text-transparent">
            Featured Tours
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Embark on extraordinary journeys that transcend the ordinary. Each tour is crafted to deliver memories that last a lifetime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <Card 
              key={tour.id} 
              className="group hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 border-0 bg-white/80 backdrop-blur-sm overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={tour.image} 
                  alt={tour.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-[#FFA100] text-black px-3 py-1 rounded-full font-bold text-sm">
                  {tour.price}
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {tour.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {tour.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <Button 
                  className="w-full bg-blue-600 hover:bg-[#FFA100] hover:text-black transition-all duration-300 font-medium"
                  onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Book This Adventure
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToursGallery;
