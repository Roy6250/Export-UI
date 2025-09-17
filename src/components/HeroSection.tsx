import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="Technology particle background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold text-light-custom mb-8 leading-tight">
            Driving progressive
            <br />
            <span className="block">delivering exceptional value</span>
            <br />
            <span className="block">through our innovative</span>
            <br />
            <span className="block">products</span>
          </h1>
          
          <div className="mt-12">
            <button className="bg-white/20 backdrop-blur-sm text-light-custom px-8 py-3 rounded-lg border border-white/30 hover:bg-white/30 transition-all">
              Get in touch →
            </button>
          </div>
        </div>
      </div>
      
      {/* Lucify Vertical Text */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 -rotate-90 origin-center">
        <span className="text-4xl font-bold text-light-custom tracking-wider">
          Lucify
        </span>
      </div>
    </section>
  );
};

export default HeroSection;