
import Hero from "@/components/Hero";
import ToursGallery from "@/components/ToursGallery";
import Partners from "@/components/Partners";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Hero />
      <ToursGallery />
      <Partners />
      <Booking />
      <Footer />
    </div>
  );
};

export default Index;
