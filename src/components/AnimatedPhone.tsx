import { useEffect, useRef, useState } from "react";

interface AnimatedPhoneProps {
  className?: string;
}

const AnimatedPhone = ({ className = "" }: AnimatedPhoneProps) => {
  const phoneRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!phoneRef.current) return;
      
      const rect = phoneRef.current.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
      setIsInView(isVisible);
      
      // Calculate the scroll percentage (0-1) relative to viewport height
      // But cap it when the phone is in view to keep it in frame
      if (isVisible) {
        const scrollY = window.scrollY;
        const normalizedScrollPosition = Math.min(scrollY / (window.innerHeight * 0.8), 1);
        setScrollPosition(normalizedScrollPosition);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate rotation based on scroll - start at 30 degrees from 12 o'clock mark
  // 12 o'clock would be -90 degrees, so 30 degrees from that would be -60 degrees
  const initialRotation = -60;
  // Only rotate to a certain point and then stay fixed
  const maxRotation = -20;
  const rotation = isInView 
    ? Math.min(initialRotation + (scrollPosition * 60), maxRotation)
    : initialRotation;
  
  // Move right as we scroll, but cap the movement
  const maxTranslateX = 100;
  const translateX = isInView 
    ? Math.min(scrollPosition * 150, maxTranslateX)
    : 0;

  return (
    <div 
      ref={phoneRef}
      className={`relative transition-transform duration-100 ${className}`}
      style={{ 
        transform: `perspective(1000px) rotateZ(${rotation}deg) translateX(${translateX}px)`,
        transformOrigin: 'center center'
      }}
    >
      {/* Phone frame */}
      <div className="w-[280px] h-[550px] bg-black rounded-[36px] p-3 shadow-xl">
        {/* Phone screen */}
        <div className="w-full h-full bg-megdan-primary/10 rounded-[30px] overflow-hidden relative flex flex-col">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120px] h-[30px] bg-black rounded-b-xl z-10"></div>
          
          {/* App content */}
          <div className="flex-1 p-4 pt-10">
            {/* App header */}
            <div className="bg-megdan-primary rounded-lg p-3 mb-4 flex items-center">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <span className="text-megdan-primary font-bold text-sm">M</span>
              </div>
              <span className="text-white ml-2 font-bold">Megdan</span>
            </div>
            
            {/* App content */}
            <div className="space-y-3">
              <div className="h-24 bg-white rounded-lg shadow-sm p-3">
                <div className="text-sm font-bold text-megdan-primary mb-1">Student Forum</div>
                <div className="text-xs text-gray-500 mb-2">Latest discussions</div>
                <div className="flex items-center gap-1">
                  <div className="w-5 h-5 rounded-full bg-megdan-accent"></div>
                  <div className="w-5 h-5 rounded-full bg-megdan-secondary"></div>
                  <div className="w-5 h-5 rounded-full bg-megdan-light"></div>
                  <div className="text-xs text-gray-500 ml-1">+24 more</div>
                </div>
              </div>
              
              <div className="h-16 bg-white rounded-lg shadow-sm"></div>
              <div className="h-20 bg-white rounded-lg shadow-sm"></div>
              <div className="h-14 bg-white rounded-lg shadow-sm"></div>
            </div>
          </div>
          
          {/* Bottom nav */}
          <div className="h-16 bg-white border-t border-gray-200 flex justify-around items-center">
            <div className="w-10 h-10 rounded-full bg-megdan-light flex items-center justify-center">
              <div className="w-5 h-5 bg-megdan-primary rounded-md"></div>
            </div>
            <div className="w-10 h-10 rounded-full bg-megdan-light flex items-center justify-center">
              <div className="w-5 h-5 bg-megdan-primary rounded-full"></div>
            </div>
            <div className="w-10 h-10 rounded-full bg-megdan-light flex items-center justify-center">
              <div className="w-5 h-5 bg-megdan-accent rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedPhone;
