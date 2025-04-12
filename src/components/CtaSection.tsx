
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

const CtaSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    toast.success("Thanks for signing up! We'll be in touch soon.");
    setEmail("");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-megdan-primary to-megdan-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Transform Your Campus Experience?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Be the first to know when Megdan launches at your university. Sign up for early access.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Your university email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/30 text-white placeholder:text-white/60"
                required
              />
              <Button type="submit" className="bg-white text-megdan-primary hover:bg-white/90 font-medium">
                Get Early Access
              </Button>
            </div>
            <p className="text-sm mt-3 opacity-80">
              Only university email addresses will be accepted
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
