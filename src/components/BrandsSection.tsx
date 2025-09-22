import SALVUS from "@/assets/17052955243640.png"
import RODD from "@/assets/APEDA_logo.png";
import GYD from "@/assets/Indian_Institute_of_Foreign_Trade_logo.png";
import PLATFORM from "@/assets/png-transparent-government-of-india-ministry-of-micro-small-and-medium-enterprises-small-business-industry-india-text-logo-monochrome-thumbnail.png"
import ALAYA from "@/assets/1200x600wa.png";
import Image from "next/image";

const BrandsSection = () => {
  const brandImages = [
    { src: SALVUS, alt: "SALVUS" },
    { src: RODD, alt: "RODD" },
    { src: GYD, alt: "GYD" },
    { src: PLATFORM, alt: "PLATFORM" },
    { src: ALAYA, alt: "ALAYA" }
  ];

  return (
    <section className="py-16 bg-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-heading-primary mb-8">
            BRANDS THAT TRUST US
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          {brandImages.map((brand, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={brand.src}
                alt={brand.alt}
                className="h-20 object-contain"
                style={{ backgroundColor: "transparent" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
