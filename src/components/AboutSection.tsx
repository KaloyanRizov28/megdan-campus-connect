
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BookOpen, Users, MessageCircle } from "lucide-react";

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

  const benefits = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Knowledge Sharing",
      description: "Exchange ideas and resources with peers at your university."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community Building",
      description: "Create lasting connections with classmates and alumni."
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Real-time Communication",
      description: "Stay connected with your university network anytime, anywhere."
    }
  ];

  return (
    <section className="py-20 bg-megdan-light min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-megdan-dark">
            Why Choose Megdan?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Megdan provides a dedicated space for university students to connect, collaborate, and grow together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-8 rounded-xl shadow-md text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-megdan-light text-megdan-primary rounded-full">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
