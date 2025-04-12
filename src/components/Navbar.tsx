
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-sm fixed w-full top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-heading font-bold text-megdan-primary">Megdan</span>
            </a>
          </div>
          
          {/* Desktop nav links */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a href="#features" className="text-gray-700 hover:text-megdan-primary transition-colors">
              Features
            </a>
            <a href="#community" className="text-gray-700 hover:text-megdan-primary transition-colors">
              Community
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-megdan-primary transition-colors">
              Testimonials
            </a>
            <Button variant="outline" className="ml-4">
              Log in
            </Button>
            <Button className="bg-megdan-primary hover:bg-megdan-secondary">
              Sign up
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-megdan-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#features"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-megdan-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#community"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-megdan-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Community
            </a>
            <a
              href="#testimonials"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-megdan-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <div className="mt-4 flex flex-col space-y-2 px-3">
              <Button variant="outline" className="w-full justify-center">
                Log in
              </Button>
              <Button className="w-full justify-center bg-megdan-primary hover:bg-megdan-secondary">
                Sign up
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
