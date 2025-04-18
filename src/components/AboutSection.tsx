
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      
      if (scrollPosition > viewportHeight * 0.7) {
        setIsVisible(true);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-20 bg-white h-[80vh] flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Container with fixed height to ensure proper spacing before footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full h-full"
        />
      </div>
    </section>
  );
};

export default AboutSection;
