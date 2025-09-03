"use client";
import React from "react";
import { Lightbulb, Target, Compass, Eye, Rocket } from "lucide-react";

const items = [
  {
    title: "OUR DNA",
    desc: "Constant Learning • Quality • Focus",
    icon: <Lightbulb className="w-8 h-8 text-blue-500" />,
    color: "bg-blue-50",
  },
  {
    title: "CORE IDEOLOGY",
    desc: "We will always work with full focus to provide solutions to existing problems of industry to make their life simple. We will achieve this using our existing knowledge and keep upgrading ourselves through constant learning.",
    icon: <Target className="w-8 h-8 text-red-500" />,
    color: "bg-red-50",
  },
  {
    title: "OUR BHAG",
    desc: "To be India’s most dynamic automation company to solve industries' unsolved problems having a turnover of Rs. 500 Cr.",
    icon: <Rocket className="w-8 h-8 text-green-500" />,
    color: "bg-green-50",
  },
  {
    title: "OUR VISION",
    desc: "To provide automation solutions and consultancy to industries nationally having a turnover of Rs. 50 Cr.",
    icon: <Eye className="w-8 h-8 text-indigo-500" />,
    color: "bg-indigo-50",
  },
  {
    title: "OUR MISSION",
    desc: "To achieve excellence in manufacturing industries by delivering the right automation solutions.",
    icon: <Compass className="w-8 h-8 text-orange-500" />,
    color: "bg-orange-50",
  },
];

const OurMission = () => {
  return (
    <div className="py-16 px-6 bg-white">
      <div className="container">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="lg:text-4xl md:text-4xl sm:text-3xl font-bold text-black">
            What Drives Us
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className={`${item.color} rounded-2xl shadow-md p-6 flex flex-col items-start hover:shadow-xl transition`}
            >
              <div className="p-6 rounded-full bg-white shadow">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
              <p className="mt-2 lg:text-lg sm:text-base md:text-lg">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurMission;
