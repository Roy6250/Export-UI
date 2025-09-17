import aboutTeam from "@/assets/about-team.jpg";
import aboutInnovation from "@/assets/about-innovation.jpg";
import aboutStrategy from "@/assets/about-strategy.jpg";
import aboutGlobal from "@/assets/about-global.jpg";

const AboutSection = () => {
  const aboutItems = [
    {
      id: 1,
      title: "Our Team",
      image: aboutTeam,
      className: "col-span-2 row-span-2 relative"
    },
    {
      id: 2, 
      title: "Innovation",
      image: aboutInnovation,
      className: "col-span-2 row-span-1 relative"
    },
    {
      id: 3,
      title: "Strategy", 
      image: aboutStrategy,
      className: "col-span-2 row-span-1 relative"
    },
    {
      id: 4,
      title: "Global Reach",
      image: aboutGlobal,
      className: "col-span-2 row-span-2 relative"
    }
  ];

  return (
    <section className="py-20 bg-section">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h3 className="text-lg font-medium text-primary mb-4">About Us</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-heading-primary leading-tight">
            TRANSFORMING BUSINESSES WITH
            <br />
            PASSION AND EXPERTISE
          </h2>
        </div>

        {/* Asymmetric Grid Layout */}
        <div className="grid grid-cols-4 grid-rows-3 gap-4 h-[600px]">
          {/* Our Team - Large card top left */}
          <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden group">
            <img 
              src={aboutItems[0].image}
              alt={aboutItems[0].title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <h3 className="text-white text-2xl font-semibold">{aboutItems[0].title}</h3>
            </div>
          </div>

          {/* Global Reach - Large card top right */}
          <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden group">
            <img 
              src={aboutItems[3].image}
              alt={aboutItems[3].title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <h3 className="text-white text-xl font-semibold">{aboutItems[3].title}</h3>
            </div>
          </div>

          {/* Innovation - Medium card bottom left */}
          <div className="col-span-2 row-span-1 relative rounded-2xl overflow-hidden group">
            <img 
              src={aboutItems[1].image}
              alt={aboutItems[1].title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            <div className="absolute bottom-4 left-6">
              <h3 className="text-white text-lg font-semibold">{aboutItems[1].title}</h3>
            </div>
          </div>

          {/* Strategy - Medium card bottom right */}
          <div className="col-span-2 row-span-1 relative rounded-2xl overflow-hidden group">
            <img 
              src={aboutItems[2].image}
              alt={aboutItems[2].title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            <div className="absolute bottom-4 left-6">
              <h3 className="text-white text-lg font-semibold">{aboutItems[2].title}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;