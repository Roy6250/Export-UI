const FocusSection = () => {
  const features = [
    // {
    //   title: "Your Global Trade Partner",
    //   description: "We simplify export-import operations, enabling businesses to focus on growth while we manage their trade efficiently."
    // },
    {
      title: "Expert Team",
      description: "Our professionals, trained at the Indian Institute of Foreign Trade (IIFT), bring deep market knowledge and expertise to every transaction."
    },
    {
      title: "Verified Supplier Network",
      description: "We collaborate only with trusted, pre-verified suppliers, ensuring high-quality and compliant products."
    },
    {
      title: "Quality & Compliance",
      description: "All shipments are pre-inspected, with Organic and Halal certifications where applicable, minimizing customs rejections."
    },
    // {
    //   title: "Reliable Logistics",
    //   description: "Partnered with top-rated carriers, we maintain over 95% on-time delivery, with backup options to handle delays."
    // },
    // {
    //   title: "Transparent Documentation",
    //   description: "We provide error-free invoices, Certificates of Origin, and phytosanitary documents upfront, with no hidden charges."
    // },
    // {
    //   title: "Seamless Communication",
    //   description: "Dedicated account managers ensure responses within 24 hours, fluent in English and available across time zones."
    // },
    {
      title: "Customer-Centric Support",
      description: "Single-point contacts and flexible trade terms foster long-term partnerships and 100% customer satisfaction."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 style={{ color: "#043d4a" }} className="text-4xl font-bold mb-8">
              FOCUS ON YOUR MISSION,
              <br />
              LET US HANDLE YOUR TRADE.
            </h2>
            <p style={{ color: "#043d4a" }} className="leading-relaxed mb-8">
              Tradeology is a results-driven export-import house built on credibility, compliance, and long-term partnership. 
              Our team combines deep trade expertise, verified supplier networks, and rigorous quality systems to make global trade simple, safe, and profitable for our buyers and partners.
            </p>
          </div>
          
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="border-l-4 pl-6" style={{ borderColor: "#0f8fb9" }}>
                <h3 style={{ color: "#043d4a" }} className="text-xl font-semibold mb-3">
                  {feature.title}
                </h3>
                <p style={{ color: "#043d4a" }} className="leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FocusSection;
