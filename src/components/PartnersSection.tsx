const PartnersSection = () => {
  const partners = [
    "Incredible",
    "RACHAAM", 
    "NICOSIA",
    "HANDHILLS",
    "Assan One"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-heading-primary mb-8">
            Our Partners
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="text-center">
              <div className="bg-section rounded-lg p-6 h-20 flex items-center justify-center hover:bg-gray-100 transition-colors">
                <span className="text-lg font-medium text-secondary-custom">
                  {partner}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;