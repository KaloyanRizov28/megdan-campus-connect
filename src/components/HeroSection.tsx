
import { useEffect, useState, useRef } from "react";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate visibility thresholds based on viewport height
  const vh = typeof window !== 'undefined' ? window.innerHeight : 0;
  const titleVisible = scrollY < vh * 0.3;
  const firstLineVisible = scrollY >= vh * 0.2;
  const secondLineVisible = scrollY >= vh * 0.4;
  const thirdLineVisible = scrollY >= vh * 0.6;
  const ctaVisible = scrollY >= vh * 0.8;

  return (
    <section 
      ref={sectionRef} 
      className="min-h-[300vh] relative bg-white"
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-4">
        {/* Main title - fades out as user scrolls */}
        <motion.h1 
          className="text-6xl md:text-8xl font-bold text-center"
          style={{ 
            opacity: titleVisible ? 1 - (scrollY / (vh * 0.3)) : 0,
            filter: `blur(${scrollY / vh * 5}px)`
          }}
        >
          Megdan
        </motion.h1>

        {/* Content that appears as user scrolls */}
        <div className="max-w-2xl mx-auto mt-8 space-y-12 text-center">
          <motion.p 
            className="text-2xl md:text-3xl"
            style={{ 
              opacity: firstLineVisible ? Math.min((scrollY - vh * 0.2) / (vh * 0.1), 1) : 0,
              transform: `translateY(${firstLineVisible ? 0 : 20}px)`
            }}
          >
            Connect with your university
          </motion.p>
          
          <motion.p 
            className="text-2xl md:text-3xl"
            style={{ 
              opacity: secondLineVisible ? Math.min((scrollY - vh * 0.4) / (vh * 0.1), 1) : 0,
              transform: `translateY(${secondLineVisible ? 0 : 20}px)`
            }}
          >
            Build your network
          </motion.p>
          
          <motion.p 
            className="text-2xl md:text-3xl"
            style={{ 
              opacity: thirdLineVisible ? Math.min((scrollY - vh * 0.6) / (vh * 0.1), 1) : 0,
              transform: `translateY(${thirdLineVisible ? 0 : 20}px)`
            }}
          >
            Shape your future
          </motion.p>
          
          <motion.button
            className="bg-black text-white px-8 py-4 rounded-full text-xl"
            style={{ 
              opacity: ctaVisible ? Math.min((scrollY - vh * 0.8) / (vh * 0.1), 1) : 0,
              transform: `translateY(${ctaVisible ? 0 : 20}px)`
            }}
          >
            Get Started
          </motion.button>
        </div>
        
        {/* Scroll indicator - only visible at the top */}
        {scrollY < vh * 0.1 && (
          <div className="absolute bottom-8 animate-bounce">
            <ArrowDown size={32} />
            <span className="sr-only">Scroll down</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
