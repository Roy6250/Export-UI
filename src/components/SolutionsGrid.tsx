import techGrid from "@/assets/tech-grid.jpg";
import dataCenter from "@/assets/data-center.jpg";
import analyticsTablet from "@/assets/analytics-tablet.jpg";
import smartCity from "@/assets/smart-city.jpg";
import handi from "@/assets/handi.jpeg"
import agri from "@/assets/6290944_orig.jpg"
const SolutionsGrid = () => {
  const solutions = [
   {
      image: agri,
      title: "Agricultural Products",
      description: "High-quality and sustainable farm produce"
    },
    {
      image: handi,
      title: "Handicrafts",
      description: "Unique handmade items crafted with skill"
    },

    // {
    //   image: analyticsTablet,
    //   title: "Business Intelligence",
    //   description: "Smart analytics for informed decisions"
    // },
    // {
    //   image: smartCity,
    //   title: "Digital Innovation",
    //   description: "Cutting-edge digital transformation"
    // }
  ];

  return (
    <section className="py-20 bg-section">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img 
                  src={solution.image} 
                  alt={solution.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="font-semibold text-heading-primary mb-2">{solution.title}</h3>
              <p className="text-secondary-custom text-sm">{solution.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
         <button className="text-white px-8 py-3 rounded-lg transition-colors"
        style={{ backgroundColor: "#0f8fb9" }}
        onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#0c7aa3")}
        onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#0f8fb9")}
>
  View More
</button>

        </div>
      </div>
    </section>
  );
};

export default SolutionsGrid;