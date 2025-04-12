
import { Button } from "@/components/ui/button";

const CommunitySection = () => {
  const stats = [
    { value: "5,000+", label: "Active Students" },
    { value: "150+", label: "Study Groups" },
    { value: "35+", label: "Course Forums" },
    { value: "98%", label: "Satisfaction Rate" }
  ];

  return (
    <section id="community" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mb-12 lg:mb-0 order-2 lg:order-1">
            <div className="relative rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80"
                alt="Student using laptop"
                className="w-full h-auto rounded-xl object-cover"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-megdan-dark/80 to-transparent p-6">
                <div className="text-white">
                  <p className="text-sm font-medium mb-1">Campus Spotlight</p>
                  <h3 className="text-lg font-heading font-bold">How Megdan helped organize the largest student hackathon</h3>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Join a Thriving Student Community
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Megdan connects thousands of students across campus, fostering collaboration, friendship, and academic excellence.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-heading font-bold text-megdan-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <Button className="btn-primary w-full sm:w-auto">
              Join Our Community
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
