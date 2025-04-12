
import { Shield, Zap, Users, BookOpen, MessageCircle, Calendar } from "lucide-react";

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="feature-card">
      <div className="mb-4 text-megdan-primary">{icon}</div>
      <h3 className="text-xl font-heading font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Exclusive Community",
      description: "Only verified students from your university can join, ensuring a trusted environment."
    },
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
      icon: <BookOpen className="h-10 w-10" />,
      title: "Resource Hub",
      description: "Access and share lecture notes, past exams, and study materials with your peers."
    },
    {
      icon: <MessageCircle className="h-10 w-10" />,
      title: "Discussion Forums",
      description: "Engage in course-specific discussions, ask questions, and share insights."
    },
    {
      icon: <Calendar className="h-10 w-10" />,
      title: "Events Calendar",
      description: "Never miss campus events, club meetings, or important academic deadlines."
    }
  ];

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Everything Your Campus Community Needs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Megdan brings your university experience online with these powerful features
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
