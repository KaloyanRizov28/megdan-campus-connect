
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
