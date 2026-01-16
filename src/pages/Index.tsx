import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Amenities from "@/components/Amenities";
import RoomsPricing from "@/components/RoomsPricing";
import VideoShowcase from "@/components/VideoShowcase";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import NearbyServices from "@/components/NearbyServices"


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <NearbyServices />
      <Amenities />
      <RoomsPricing />
      <VideoShowcase />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
