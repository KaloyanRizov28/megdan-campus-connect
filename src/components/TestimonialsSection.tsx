
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

type Testimonial = {
  content: string;
  author: string;
  role: string;
  avatar: string;
  rating: number;
};

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      content: "Megdan completely transformed my university experience. I found study partners for difficult courses and built connections that will last beyond graduation.",
      author: "Sarah Johnson",
      role: "Computer Science, 3rd Year",
      avatar: "https://i.pravatar.cc/150?img=1",
      rating: 5
    },
    {
      content: "As a student club president, Megdan made it so much easier to organize events, recruit members, and keep everyone updated. It's become our central hub for everything.",
      author: "Michael Chen",
      role: "Business Administration, 4th Year",
      avatar: "https://i.pravatar.cc/150?img=2",
      rating: 5
    },
    {
      content: "Finding the right study groups used to be a challenge. Now with Megdan, I connect with classmates instantly and collaborate on projects seamlessly.",
      author: "Priya Patel",
      role: "Biomedical Engineering, 2nd Year",
      avatar: "https://i.pravatar.cc/150?img=3",
      rating: 4
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-16 bg-megdan-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Hear from Our Users
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real students sharing their experiences with Megdan
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i}
                  className={`h-5 w-5 ${i < currentTestimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                />
              ))}
            </div>
            
            <p className="text-xl md:text-2xl text-gray-800 mb-8 italic">
              "{currentTestimonial.content}"
            </p>
            
            <div className="flex items-center">
              <img
                src={currentTestimonial.avatar}
                alt={currentTestimonial.author}
                className="w-14 h-14 rounded-full mr-4"
              />
              <div className="text-left">
                <h4 className="font-heading font-semibold">{currentTestimonial.author}</h4>
                <p className="text-gray-600">{currentTestimonial.role}</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-10 gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handlePrev}
              className="rounded-full"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handleNext}
              className="rounded-full"
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
