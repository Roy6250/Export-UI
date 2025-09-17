const StatsSection = () => {
  const stats = [
    {
      percentage: "100%",
      title: "Client Satisfaction",
      description: "Our clients trust us to deliver exceptional results every time"
    },
    {
      percentage: "~70%",
      title: "Efficiency Increase",
      description: "Average improvement in operational efficiency for our clients"
    },
    {
      percentage: ">90%",
      title: "Project Success Rate",
      description: "Projects delivered on time and within budget consistently"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-heading-primary mb-4">
            INNOVATIVE SOLUTIONS FOR
            <br />
            BUSINESSES
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-6xl font-bold text-primary mb-4">
                {stat.percentage}
              </div>
              <h3 className="text-xl font-semibold text-heading-primary mb-3">
                {stat.title}
              </h3>
              <p className="text-secondary-custom leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;