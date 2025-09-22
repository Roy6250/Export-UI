import teamOffice from "@/assets/team-office.jpg";
import techHands from "@/assets/tech-hands.jpg";
import Image from "next/image";
const ServicesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* First Service Block */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <Image 
              src={teamOffice} 
              alt="Team working in modern office" 
              className="w-full h-80 object-cover rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-heading-primary mb-6">
              Committed to Delivering
              <br />
              Excellent Products
            </h2>
            <p className="text-secondary-custom leading-relaxed mb-6">
              We are dedicated to creating innovative solutions that transform businesses 
              through cutting-edge technology and exceptional user experiences. Our team 
              of experts works tirelessly to deliver products that exceed expectations 
              and drive meaningful results for our clients.
            </p>
            <p className="text-secondary-custom leading-relaxed">
              With a focus on quality, reliability, and innovation, we ensure every 
              project meets the highest standards of excellence and delivers lasting value.
            </p>
            <div className="mt-8">
              <button className="text-primary font-medium hover:underline">
                Join Now →
              </button>
            </div>
          </div>
        </div>
        
        {/* Second Service Block */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold text-heading-primary mb-4">
              COMPREHENSIVE SOLUTIONS TAILORED
              <br />
              TO YOUR NEEDS
            </h3>
            <p className="text-secondary-custom leading-relaxed">
              Our comprehensive approach ensures that every aspect of your digital 
              transformation is carefully planned and executed with precision. We 
              understand that each business has unique challenges and requirements.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <Image 
              src={techHands} 
              alt="Technology and innovation" 
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;