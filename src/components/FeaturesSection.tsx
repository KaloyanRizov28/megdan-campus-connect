
import { Shield, Zap, Users, BookOpen, MessageCircle, Calendar } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const FeatureCard = ({ icon, title, description, delay, isLeft }: { 
  icon: React.ReactNode, 
  title: string, 
  description: string,
  delay: number,
  isLeft: boolean
}) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const element = document.getElementById(`feature-${title.replace(/\s+/g, '-').toLowerCase()}`);
      
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + scrollPosition;
        if (scrollPosition > elementPosition - windowHeight * 0.8) {
          setIsVisible(true);
        }
      }
    };
    
    handleScroll(); // Check on initial load
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [title]);
  
  return (
    <motion.div 
      id={`feature-${title.replace(/\s+/g, '-').toLowerCase()}`}
      className={`feature-card ${isLeft ? 'text-right pr-8' : 'text-left pl-8'} mb-16`}
      initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
      animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -30 : 30 }}
      transition={{ duration: 0.6, delay: delay * 0.1 }}
    >
      <div className={`mb-4 text-megdan-primary ${isLeft ? 'ml-auto' : 'mr-auto'}`}>{icon}</div>
      <h3 className="text-xl font-heading font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const leftFeatures = [
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Exclusive Community",
      description: "Only verified students from your university can join, ensuring a trusted environment."
    },
    {
      icon: <BookOpen className="h-10 w-10" />,
      title: "Resource Hub",
      description: "Access and share lecture notes, past exams, and study materials with your peers."
    },
    {
      icon: <Calendar className="h-10 w-10" />,
      title: "Events Calendar",
      description: "Never miss campus events, club meetings, or important academic deadlines."
    }
  ];

  const rightFeatures = [
    {
      icon: <Zap className="h-10 w-10" />,
      title: "Real-time Collaboration",
      description: "Work together on projects, share notes, and study materials in real-time."
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Student Groups",
      description: "Join or create student groups based on interests, courses, or extracurricular activities."
    },
    {
      icon: <MessageCircle className="h-10 w-10" />,
      title: "Discussion Forums",
      description: "Engage in course-specific discussions, ask questions, and share insights."
    }
  ];

  return (
    <section id="features" className="pt-16 pb-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Everything Your Campus Community Needs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Megdan brings your university experience online with these powerful features
          </p>
        </div>

        <div className="grid grid-cols-12 gap-4">
          {/* Left column - features */}
          <div className="col-span-12 md:col-span-5">
            {leftFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index}
                isLeft={true}
              />
            ))}
          </div>
          
          {/* Middle column - empty space for phone */}
          <div className="col-span-12 md:col-span-2">
            {/* This space is intentionally left empty to accommodate the fixed phone from HeroSection */}
          </div>
          
          {/* Right column - features */}
          <div className="col-span-12 md:col-span-5">
            {rightFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index}
                isLeft={false}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
