
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, MessageSquare, BookOpen, CheckCircle2 } from "lucide-react";
import AnimatedPhone from "./AnimatedPhone";
import { useEffect, useState, useRef } from "react";

const HeroSection = () => {
  const [visiblePoints, setVisiblePoints] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  // Bullet points content
  const bulletPoints = [
    "Connect with classmates instantly",
    "Join study groups and events",
    "Share notes and resources",
    "Stay updated on campus life"
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      // Calculate scroll percentage within the section
      const scrollPercentage = Math.min(Math.max((windowHeight - sectionTop) / windowHeight, 0), 1);
      
      // Calculate how many bullet points should be visible based on scroll
      const pointsToShow = Math.ceil(scrollPercentage * bulletPoints.length);
      setVisiblePoints(pointsToShow);
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger once on load to set initial state
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [bulletPoints.length]);

  return (
    <section ref={sectionRef} className="pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-2">
            Megdan
          </h1>
          <p className="text-xl md:text-2xl text-megdan-secondary mb-8">
            Your University, <span className="heading-gradient">Connected</span>
          </p>
        </div>
        
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mb-12 lg:mb-0 order-2 lg:order-1">
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Join the online campus built exclusively for your university.
              Connect with peers, share resources, and build your academic community.
            </p>
            
            <div className="space-y-4 mb-8">
              {bulletPoints.map((point, index) => (
                <div 
                  key={index}
                  className={`flex items-center gap-3 transition-all duration-500 ${
                    index < visiblePoints 
                      ? "opacity-100 translate-x-0" 
                      : "opacity-0 -translate-x-10"
                  }`}
                >
                  <CheckCircle2 className="h-6 w-6 text-megdan-primary flex-shrink-0" />
                  <span className="text-lg">{point}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary flex items-center gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="btn-secondary">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2 mb-12 lg:mb-0">
            <div className="absolute top-4 -left-4 w-72 h-72 bg-megdan-accent rounded-full filter blur-3xl opacity-30 animate-float"></div>
            <div className="absolute bottom-4 -right-4 w-72 h-72 bg-megdan-primary rounded-full filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
            
            <div className="flex justify-center items-center h-full overflow-visible">
              <AnimatedPhone />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
