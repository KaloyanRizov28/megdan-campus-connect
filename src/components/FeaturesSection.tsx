
import { Shield, Zap, Users, BookOpen, MessageCircle, Calendar, ArrowDown } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedPhone from "./AnimatedPhone";

const FeatureItem = ({ icon, title, description, index }: { 
  icon: React.ReactNode, 
  title: string, 
  description: string,
  index: number
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  
  return (
    <motion.div 
      ref={ref}
      className="feature-item flex items-start space-x-4 mb-8"
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="text-megdan-primary flex-shrink-0 mt-1">{icon}</div>
      <div>
        <h3 className="text-xl font-heading font-semibold mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

const FeaturesSection = () => {
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

  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Exclusive Community",
      description: "Only verified students from your university can join, ensuring a trusted environment."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Real-time Collaboration",
      description: "Work together on projects, share notes, and study materials in real-time."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Student Groups",
      description: "Join or create student groups based on interests, courses, or extracurricular activities."
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Resource Hub",
      description: "Access and share lecture notes, past exams, and study materials with your peers."
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Discussion Forums",
      description: "Engage in course-specific discussions, ask questions, and share insights."
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Events Calendar",
      description: "Never miss campus events, club meetings, or important academic deadlines."
    }
  ];

  // Calculate visibility thresholds based on viewport height
  const vh = typeof window !== 'undefined' ? window.innerHeight : 0;
  const titleVisible = scrollY < vh * 0.3;
  const phoneStartVisible = scrollY >= vh * 0.2;
  
  // Calculate whether features should be visible based on scroll position
  const featuresVisible = scrollY >= vh * 0.5;
  
  // Phone animation calculations
  const phoneScrollY = Math.min((scrollY - vh * 0.2) * 0.6, vh * 1.5);
  const phoneOpacity = phoneStartVisible ? Math.min((scrollY - vh * 0.2) / (vh * 0.2), 1) : 0;

  return (
    <section 
      ref={sectionRef} 
      id="features"
      className="py-32 min-h-[200vh] relative bg-white"
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
        
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Left features column */}
            <div className="md:col-span-5 space-y-6">
              {features.slice(0, 3).map((feature, index) => (
                <div key={index} style={{ 
                  opacity: featuresVisible ? Math.min((scrollY - (vh * 0.5 + index * vh * 0.1)) / (vh * 0.1), 1) : 0,
                  transform: `translateY(${featuresVisible ? 0 : 20}px)`
                }} className="transition-all duration-500">
                  <FeatureItem
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    index={index}
                  />
                </div>
              ))}
            </div>
            
            {/* Phone container in the middle column */}
            <div className="md:col-span-2 flex justify-center">
              <motion.div 
                className="relative"
                style={{ 
                  opacity: phoneOpacity,
                  transform: `translateY(${phoneScrollY}px)`,
                  position: 'relative',
                  zIndex: 10
                }}
              >
                <AnimatedPhone />
              </motion.div>
            </div>
            
            {/* Right features column */}
            <div className="md:col-span-5 space-y-6 md:pt-48">
              {features.slice(3).map((feature, index) => (
                <div key={index + 3} style={{ 
                  opacity: featuresVisible ? Math.min((scrollY - (vh * 0.7 + index * vh * 0.1)) / (vh * 0.1), 1) : 0,
                  transform: `translateY(${featuresVisible ? 0 : 20}px)`
                }} className="transition-all duration-500">
                  <FeatureItem
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    index={index + 3}
                  />
                </div>
              ))}
            </div>
          </div>
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

export default FeaturesSection;
