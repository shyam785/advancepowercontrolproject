import React from "react";
import { Lightbulb, Target, Compass, Eye, Rocket } from "lucide-react";

const items = [
  {
    title: "Our Dna",
    desc: "Constant Learning • Quality • Focus",
    icon: <Lightbulb className="w-8 h-8 text-[#FF6B00]" />, // Orange highlight
  },
  {
    title: "Core Ideology",
    desc: "We will always work with full focus to provide solutions to existing problems of industry to make their life simple. We will achieve this using our existing knowledge and keep upgrading ourselves through constant learning.",
    icon: <Target className="w-8 h-8 text-[#0A2342]" />, // Dark Blue highlight
  },
  {
    title: "Our Bhag",
    desc: "To be India’s most dynamic automation company to solve industries' unsolved problems having a turnover of Rs. 500 Cr.",
    icon: <Rocket className="w-8 h-8 text-[#FF6B00]" />,
  },
  {
    title: "Our Vision",
    desc: "To provide automation solutions and consultancy to industries nationally having a turnover of Rs. 50 Cr.",
    icon: <Eye className="w-8 h-8 text-[#0A2342]" />,
  },
  {
    title: "Our Mission",
    desc: "To achieve excellence in manufacturing industries by delivering the right automation solutions.",
    icon: <Compass className="w-8 h-8 text-[#FF6B00]" />,
  },
];

const OurMission = () => {
  return (
    <>
      <div className="py-16 px-6 bg-[#F5F7FA]">
        <div className="container">
          {/* Section Heading */}
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A2342]">
              What Drives <span className="text-[#FF6B00]">Us</span>
            </h2>
            <span className="w-20 h-1 bg-[#800080] rounded-full mx-auto block mt-2"></span>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-[#F5F7FA] text-[#1C1C1C] rounded-2xl shadow-md p-6 flex flex-col items-start hover:shadow-xl transition"
              >
                {/* Icon */}
                <div className="p-6 rounded-full bg-white shadow">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 mt-3 text-[#0A2342]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurMission;
