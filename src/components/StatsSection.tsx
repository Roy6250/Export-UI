import { BadgeCheck, Truck, FileCheck, MessageCircle, Handshake } from "lucide-react";

const StatsSection = () => {
  const deepColor = "#0f8fb9"; // deep color from gradient
  const textColor ="#043d4a"

  const stats = [
    {
      icon: <BadgeCheck className="w-12 h-12 mx-auto mb-4" color={deepColor} strokeWidth={2} />,
      title: "Consistent Quality & Compliance",
      description: "100% pre-inspected, certified shipments — Zero customs rejection",
    },
    {
      icon: <Truck className="w-12 h-12 mx-auto mb-4" color={deepColor} strokeWidth={2} />,
      title: "Reliable Logistics & On-Time Delivery",
      description: "95%+ on-time shipments with backup carrier options",
    },
    {
      icon: <FileCheck className="w-12 h-12 mx-auto mb-4" color={deepColor} strokeWidth={2} />,
      title: "Transparent Documentation",
      description: "100% error-free paperwork, no hidden costs",
    },
    {
      icon: <MessageCircle className="w-12 h-12 mx-auto mb-4" color={deepColor} strokeWidth={2} />,
      title: "Clear Communication",
      description: "24-hour response time, English-fluent team",
    },
    {
      icon: <Handshake className="w-12 h-12 mx-auto mb-4" color={deepColor} strokeWidth={2} />,
      title: "Dedicated Support & Partnership",
      description: "Strong collaboration to ensure long-term success",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4" style={{ color: textColor }}>
            INNOVATIVE SOLUTIONS FOR
            <br />
            BUSINESSES
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 justify-items-center">
          {stats.map((stat, index) => (
            <div key={index} className="text-center max-w-xs">
              {stat.icon}
              <h3 className="text-xl font-semibold mb-3" style={{ color: textColor }}>
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
