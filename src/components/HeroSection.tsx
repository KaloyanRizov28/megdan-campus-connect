
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, MessageSquare, BookOpen } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mb-12 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-6">
              Your University, <span className="heading-gradient">Connected</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Join Megdan - the online campus built exclusively for your university.
              Connect with peers, share resources, and build your academic community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary flex items-center gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="btn-secondary">
                Learn More
              </Button>
            </div>
            
            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center">
                <div className="bg-megdan-light p-2 rounded-full mb-2">
                  <Users className="h-6 w-6 text-megdan-primary" />
                </div>
                <p className="text-sm text-center text-gray-600">5,000+ Students</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-megdan-light p-2 rounded-full mb-2">
                  <MessageSquare className="h-6 w-6 text-megdan-primary" />
                </div>
                <p className="text-sm text-center text-gray-600">Active Discussion</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-megdan-light p-2 rounded-full mb-2">
                  <BookOpen className="h-6 w-6 text-megdan-primary" />
                </div>
                <p className="text-sm text-center text-gray-600">Resource Sharing</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute top-4 -left-4 w-72 h-72 bg-megdan-accent rounded-full filter blur-3xl opacity-30 animate-float"></div>
            <div className="absolute bottom-4 -right-4 w-72 h-72 bg-megdan-primary rounded-full filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
            
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="aspect-w-4 aspect-h-3">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80" 
                  alt="Students collaborating" 
                  className="object-cover w-full h-full"
                />
              </div>
              
              <div className="p-6">
                <h3 className="font-heading font-bold text-lg mb-2">University Dashboard</h3>
                <p className="text-gray-600 text-sm">Access all your campus resources, discussion forums, and student groups in one place.</p>
                
                <div className="mt-4 flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-megdan-primary flex items-center justify-center text-white text-xs">JD</div>
                    <div className="w-8 h-8 rounded-full bg-megdan-secondary flex items-center justify-center text-white text-xs">SM</div>
                    <div className="w-8 h-8 rounded-full bg-megdan-dark flex items-center justify-center text-white text-xs">KL</div>
                  </div>
                  <p className="text-sm text-gray-500">89 online now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
