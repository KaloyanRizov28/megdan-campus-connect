import { useEffect, useState, useRef } from "react";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [windowHeight, setWindowHeight] = useState(0);
  
  // Track scroll position and window height
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };
    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    
    // Initial setup
    handleResize();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Calculate visibility thresholds based on viewport height
  const vh = windowHeight;
  const titleVisible = scrollY < vh * 0.3;
  const phoneVisible = scrollY >= vh * 0.2;
  const firstLineVisible = scrollY >= vh * 0.4;
  const secondLineVisible = scrollY >= vh * 0.6;
  const thirdLineVisible = scrollY >= vh * 0.8;

  // Calculate phone position based on scroll, but stop before footer
  const footerHeight = 300; // Approximate footer height
  const maxPhoneScrollY = vh * 1.2 - footerHeight;
  const phoneScrollY = thirdLineVisible 
    ? Math.min((scrollY - vh * 0.8) * 0.6, maxPhoneScrollY) 
    : 0;
  
  // Calculate horizontal position to move phone to right side after all bullet points appear
  const moveToRight = thirdLineVisible ? Math.min((scrollY - vh * 0.8) / (vh * 0.2), 1) : 0;

  return (
    <section 
      ref={sectionRef} 
      className="min-h-[200vh] relative bg-white"
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

        {/* Phone with iframe */}
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between mt-8">
          {/* Content that appears as user scrolls - on the left */}
          <div className={`max-w-md space-y-12 text-left transition-all duration-300`} style={{
            width: thirdLineVisible ? '50%' : '100%'
          }}>
            <motion.p 
              className="text-2xl md:text-3xl"
              style={{ 
                opacity: firstLineVisible ? Math.min((scrollY - vh * 0.4) / (vh * 0.1), 1) : 0,
                transform: `translateX(${firstLineVisible ? 0 : -20}px)`
              }}
            >
              Connect with your university
            </motion.p>
            
            <motion.p 
              className="text-2xl md:text-3xl"
              style={{ 
                opacity: secondLineVisible ? Math.min((scrollY - vh * 0.6) / (vh * 0.1), 1) : 0,
                transform: `translateX(${secondLineVisible ? 0 : -20}px)`
              }}
            >
              Build your network
            </motion.p>
            
            <motion.p 
              className="text-2xl md:text-3xl"
              style={{ 
                opacity: thirdLineVisible ? Math.min((scrollY - vh * 0.8) / (vh * 0.1), 1) : 0,
                transform: `translateX(${thirdLineVisible ? 0 : -20}px)`
              }}
            >
              Shape your future
            </motion.p>
          </div>
          
          {/* Phone container - moves down with scroll and transitions to right position */}
          <motion.div 
            className="relative mt-12 md:mt-0 transition-all duration-500"
            style={{ 
              opacity: phoneVisible ? Math.min((scrollY - vh * 0.2) / (vh * 0.2), 1) : 0,
              transform: `
                translateX(${phoneVisible ? (moveToRight ? 'calc(50% - 150px)' : '0') : '50px'}) 
                translateY(${phoneScrollY}px) 
                rotate(${5 - (moveToRight * 5)}deg)
              `,
              position: thirdLineVisible && scrollY > vh * 1.2 ? 'fixed' : 'relative',
              top: thirdLineVisible && scrollY > vh * 1.2 ? '20%' : 'auto',
              right: thirdLineVisible && scrollY > vh * 1.2 ? '5%' : 'auto',
              zIndex: 10
            }}
          >
            <div className="w-[300px] h-[600px] bg-black rounded-[40px] p-3 shadow-xl">
              <div className="w-full h-full bg-white rounded-[36px] overflow-hidden relative">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120px] h-[30px] bg-black rounded-b-xl z-10"></div>
                
                {/* Iframe content */}
                <div className="pt-8 h-full">
                  <iframe
                    src="https://megdan.vercel.app" 
                    title="Megdan Preview"
                    className="w-full h-full border-none"
                    style={{ pointerEvents: 'none' }} // Disable interaction with iframe
                  />
                </div>
              </div>
            </div>
          </motion.div>
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
