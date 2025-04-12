
import { Shield, Zap, Users, BookOpen, MessageCircle, Calendar } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

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

  return (
    <section id="features" className="py-32 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Everything Your Campus Community Needs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Megdan brings your university experience online with these powerful features
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Features appear on the left side */}
          <div className="md:col-span-5 space-y-6">
            {features.slice(0, 3).map((feature, index) => (
              <FeatureItem
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
          
          {/* Empty middle column for phone to go through */}
          <div className="md:col-span-2 hidden md:block">
            {/* This space is intentionally left blank for the phone animation */}
          </div>
          
          {/* Features appear on the right side */}
          <div className="md:col-span-5 space-y-6 md:pt-48">
            {features.slice(3).map((feature, index) => (
              <FeatureItem
                key={index + 3}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index + 3}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
