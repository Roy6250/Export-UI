const BrandsSection = () => {
  const brands = [
    "SALVUS",
    "RODD",
    "gyd",
    "PLATFORM",
    "ALAYA"
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
          {brands.map((brand, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-lg p-6 h-20 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                <span className="text-lg font-semibold text-secondary-custom">
                  {brand}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;