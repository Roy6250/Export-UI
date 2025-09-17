import { Button } from "@/components/ui/button";

const LucifyHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-heading-primary">
            Lucify
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-primary-custom hover:text-primary transition-colors">Home</a>
            <a href="#" className="text-secondary-custom hover:text-primary transition-colors">Services</a>
            <a href="#" className="text-secondary-custom hover:text-primary transition-colors">About</a>
            <a href="#" className="text-secondary-custom hover:text-primary transition-colors">Contact</a>
          </nav>
          
          {/* CTA Button */}
          <Button variant="default" className="bg-primary hover:bg-primary/90">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default LucifyHeader;