import { Button } from "@/components/ui/button";
import Logo from "@/assets/tradeology_icon-removebg-preview.png"; // Changed to transparent version
import Image from "next/image";
const LucifyHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo + Text */}
          <div className="flex items-center space-x-3">
            <Image src={Logo} alt="Tradeology Logo" className="h-10 w-auto" />
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0070e0] via-[#00a68d] to-[#71e000]">
              Tradeology
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-primary-custom hover:text-primary transition-colors">Home</a>
            <a href="#" className="text-secondary-custom hover:text-primary transition-colors">Services</a>
            <a href="#" className="text-secondary-custom hover:text-primary transition-colors">About</a>
            <a href="#" className="text-secondary-custom hover:text-primary transition-colors">Contact</a>
          </nav>
          
          {/* CTA Button */}
          <Button
            variant="default"
            className="relative px-8 py-3 rounded-lg border border-white/30 bg-white/10 backdrop-blur-sm overflow-hidden"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0070e0] via-[#00a68d] to-[#71e000] font-semibold">
              Get Started →
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default LucifyHeader;