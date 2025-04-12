
import Navbar from "@/components/Navbar";
import FeaturesSection from "@/components/FeaturesSection";
import CommunitySection from "@/components/CommunitySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <main>
        <FeaturesSection />
        <div className="relative z-20 bg-gray-50">
          <CommunitySection />
          <TestimonialsSection />
          <CtaSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
