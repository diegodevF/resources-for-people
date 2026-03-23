import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ResourcesSection from "@/components/ResourcesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen scroll-smooth">
    <Navbar />
    <HeroSection />
    <ResourcesSection />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
