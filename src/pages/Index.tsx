
import Hero from "@/components/Hero";
import ToursGallery from "@/components/ToursGallery";
import Partners from "@/components/Partners";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";
import FlyingAirplanes from "@/components/FlyingAirplanes";
import SectionTransition from "@/components/SectionTransition";

const Index = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <FlyingAirplanes />
      <Hero />
      
      <SectionTransition direction="up">
        <ToursGallery />
      </SectionTransition>
      
      <SectionTransition direction="left">
        <Partners />
      </SectionTransition>
      
      <SectionTransition direction="right">
        <Booking />
      </SectionTransition>
      
      <SectionTransition direction="up">
        <Footer />
      </SectionTransition>
    </div>
  );
};

export default Index;
