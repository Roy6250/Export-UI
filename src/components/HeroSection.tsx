import { motion } from "framer-motion";
import heroBackground from "@/assets/hero_logo.png";

const HeroSection = () => {
  return (
    <section className="bg-white relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.img 
          src={heroBackground} 
          alt="Technology particle background" 
          className="w-full h-full object-cover"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 hero-gradient "></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            className="text-6xl md:text-7xl font-bold text-light-custom mb-8 leading-tight"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          >
            Driving progressive
            <br />
            <span className="block">delivering exceptional value</span>
            <br />
            <span className="block">through our innovative</span>
            <br />
            <span className="block">products</span>
          </motion.h1>
          
          <motion.div 
            className="mt-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <button className="bg-white/20  backdrop-blur-sm text-light-custom px-8 py-3 rounded-lg border border-white/30 hover:bg-white/30 transition-all">
              Get in touch →
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* Lucify Vertical Text */}
      {/* <motion.div 
        className="absolute right-8 top-1/2 transform -translate-y-1/2 -rotate-90 origin-center"
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <span className="text-4xl font-bold text-light-custom tracking-wider">
          Tradeology
        </span>
      </motion.div> */}
    </section>
  );
};

export default HeroSection;
