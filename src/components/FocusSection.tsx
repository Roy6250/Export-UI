const FocusSection = () => {
  const features = [
    {
      title: "Process Automation",
      description: "Streamline your workflows with intelligent automation solutions that reduce manual effort and increase efficiency."
    },
    {
      title: "Cloud Migration", 
      description: "Seamlessly transition your infrastructure to the cloud with our expert guidance and proven methodologies."
    },
    {
      title: "Digital Strategy",
      description: "Develop comprehensive digital strategies that align with your business goals and drive sustainable growth."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold text-heading-primary mb-8">
              FOCUS ON YOUR MISSION,
              <br />
              LET US HANDLE YOUR TECH.
            </h2>
            <p className="text-secondary-custom leading-relaxed mb-8">
              While you concentrate on growing your business and serving your customers, 
              we take care of all the technical complexities. Our team of experts ensures 
              your technology infrastructure is robust, scalable, and future-ready.
            </p>
          </div>
          
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold text-heading-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-secondary-custom leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FocusSection;