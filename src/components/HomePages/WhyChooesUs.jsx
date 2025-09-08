import React from "react";
import { ShieldCheck, Zap, Users, Award } from "lucide-react"; // icons

const WhyChooseUs = () => {
  const features = [
    {
      title: "Trusted Reliability",
      desc: "Our devices are engineered for long-lasting performance, ensuring reliability in mission-critical industrial environments.",
      icon: <ShieldCheck className="w-10 h-10 text-[#FF6B00]" />,
    },
    {
      title: "Cutting-Edge Technology",
      desc: "We integrate modern innovations like smart sensors, automation, and precision control to keep you ahead in the industry.",
      icon: <Zap className="w-10 h-10 text-[#FF6B00]" />,
    },
    {
      title: "Customer-Centric Approach",
      desc: "We provide dedicated support and tailor our solutions to meet your exact industrial requirements.",
      icon: <Users className="w-10 h-10 text-[#FF6B00]" />,
    },
    {
      title: "Proven Excellence",
      desc: "Backed by years of expertise and a wide customer base, our products are recognized for quality and precision.",
      icon: <Award className="w-10 h-10 text-[#FF6B00]" />,
    },
  ];

  return (
    <>
      <section className="relative bg-[#F5F7FA] text-[#1C1C1C] py-20">
        <div className="container mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-14 flex flex-col items-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 text-[#0A2342]">
              Why Choose <span className="text-[#FF6B00]">Us?</span>
            </h2>
            <span className="w-20 h-1 bg-[#800080] rounded-full"></span>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition duration-300"
              >
                <div className="flex justify-center mb-6">{feature.icon}</div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 text-[#0A2342]">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
