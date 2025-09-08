import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const products = [
  {
    title: "Jumbo Display",
    description:
      "High visibility jumbo display for industries. Large digits for clear readability from a distance.",
    usage:
      "Used in factories for production line monitoring, assembly line counting, and large screen displays.",
    image: "/Product/img1.png",
    imageHover: "/Product/p-1.jpg",
  },
  {
    title: "Photo Electric Controller",
    description:
      "Precision control for photoelectric sensors. Adjustable detection range and easy integration.",
    usage:
      "Used in packaging machines, conveyor belt detection, and automation systems.",
    image: "/Product/img2.png",
    imageHover: "/Product/p-2.jpg",
  },
  {
    title: "Process Indicator Jumbo Display",
    description:
      "Real-time process monitoring with large digits for visibility in industrial environments.",
    usage:
      "Used in chemical plants, oil refineries, and process monitoring control rooms.",
    image: "/Product/img3.png",
    imageHover: "/Product/p-3.jpg",
  },
  {
    title: "Load Cell Indicator Controller",
    description:
      "High-accuracy load measurement. Supports multiple load cell types with digital interface.",
    usage:
      "Used in weighing machines, industrial scales, and material handling systems.",
    image: "/Product/img4.png",
    imageHover: "/Product/p-4.jpg",
  },
  {
    title: "Signal Isolator",
    description:
      "Prevents ground loops and ensures signal accuracy. Compact and DIN-rail mountable.",
    usage:
      "Used in process control panels and instrumentation systems to protect sensors.",
    image: "/Product/img5.png",
    imageHover: "/Product/p-5.jpg",
  },
  {
    title: "Loop Power Transmitter",
    description:
      "Converts process signals for 4-20 mA loops. Precise current transmission and easy installation.",
    usage:
      "Used in industrial automation to transmit signals over long distances without loss.",
    image: "/Product/img6.png",
    imageHover: "/Product/p-6.jpg",
  },
  {
    title: "Programmable Counter",
    description:
      "Digital counter with adjustable presets. Supports multiple counting modes for automation.",
    usage:
      "Used in assembly lines, bottling plants, and machine monitoring systems.",
    image: "/Product/img7.png",
    imageHover: "/Product/p-7.jpg",
  },
  {
    title: "Jumbo Counter Digit-6",
    description:
      "Large 6-digit digital counter display. Clear visibility from a distance for industrial use.",
    usage: "Used in factories for production counting and shift monitoring.",
    image: "/Product/img8.png",
    imageHover: "/Product/p-8.jpg",
  },
  {
    title: "Sequential Timer Up To 16 Channel",
    description:
      "Multi-channel programmable sequential timer. Reliable timing for automation processes.",
    usage: "Used in industrial automation to sequence machine operations.",
    image: "/Product/img9.png",
    imageHover: "/Product/p-9.jpg",
  },
  {
    title: "SSR & Heat Sink",
    description:
      "Solid-state relay with integrated heat sink. Efficient thermal management and high-speed switching.",
    usage:
      "Used in industrial heating systems, motor control, and power switching.",
    image: "/Product/img10.png",
    imageHover: "/Product/p-10.jpg",
  },
  {
    title: "Photoelectric Sensors",
    description:
      "Non-contact object detection. Adjustable sensing distance for automation systems.",
    usage:
      "Used in packaging, conveyor lines, and object detection automation.",
    image: "/Product/img11.png",
    imageHover: "/Product/p-11.jpg",
  },
  {
    title: "Ultrasonic Sensors",
    description:
      "Measures distance using ultrasonic waves. Reliable in dusty or reflective environments.",
    usage: "Used in tank level monitoring, robotics, and automated vehicles.",
    image: "/Product/img12.png",
    imageHover: "/Product/p-12.jpg",
  },
  {
    title: "Rotary Encoders",
    description:
      "Converts rotational motion into electrical signals. High precision for position and speed measurement.",
    usage: "Used in motors, conveyor systems, and industrial robotics.",
    image: "/Product/img13.png",
    imageHover: "/Product/p-13.jpg",
  },
  {
    title: "Positioning Systems",
    description:
      "Controls precise linear or rotational movement. Integrates easily with automation systems.",
    usage: "Used in CNC machines, robotic arms, and packaging machines.",
    image: "/Product/img14.png",
    imageHover: "/Product/p-14.jpg",
  },
  {
    title: "Annunciator Panels",
    description:
      "Visual and audible alert system for critical processes. Configurable indicators for safety.",
    usage:
      "Used in control rooms, chemical plants, and industrial alarm systems.",
    image: "/Product/img15.png",
    imageHover: "/Product/p-15.jpg",
  },
  {
    title: "Alarm Annunciator",
    description:
      "Alerts operators in industrial plants. Multiple alarm channels with reliable response.",
    usage: "Used in safety systems, process monitoring, and power plants.",
    image: "/Product/img16.png",
    imageHover: "/Product/p-16.jpg",
  },
  {
    title: "PID Controller",
    description:
      "Digital controller for temperature, pressure, or flow. Ensures precise and stable process control.",
    usage: "Used in furnaces, boilers, chemical processing, and HVAC systems.",
    image: "/Product/img17.png",
    imageHover: "/Product/p-17.jpg",
  },
  {
    title: "Stabilizer / CVT / Control Transformer",
    description:
      "Provides stable voltage output for sensitive equipment. Protects machinery from fluctuations.",
    usage:
      "Used in industrial motors, transformers, and sensitive electrical equipment.",
    image: "/Product/img18.png",
    imageHover: "/Product/p-18.jpg",
  },
  {
    title: "SMPS",
    description:
      "Regulated DC power supply for industrial devices. High efficiency and low heat dissipation.",
    usage: "Used in automation panels, control systems, and robotics.",
    image: "/Product/img19.png",
    imageHover: "/Product/p-19.jpg",
  },
  {
    title: "Thyristor Unit",
    description:
      "A reliable power control solution for heaters and industrial loads. Provides accurate phase angle and burst firing control.",
    usage:
      "Used in electric furnaces, industrial heaters, and welding equipment.",
    image: "/Product/img20.png",
    imageHover: "/Product/p-20.jpg",
  },
  {
    title: "FLP Instruments",
    description:
      "Flameproof instruments for hazardous areas. High reliability under extreme conditions.",
    usage: "Used in oil & gas, chemical, and explosive environments.",
    image: "/Product/img21.png",
    imageHover: "/Product/p-21.jpg",
  },
  {
    title: "I/P Transducer",
    description:
      "Converts current signal (4-20 mA) to pneumatic output. Precise control for valves and actuators.",
    usage: "Used in process control valves and pneumatic actuator systems.",
    image: "/Product/img22.png",
    imageHover: "/Product/p-22.jpg",
  },
  {
    title: "Electro-Pneumatic Positioners",
    description:
      "Controls valve positions using electrical signals. Improves accuracy of fluid systems.",
    usage:
      "Used in industrial valves, fluid control systems, and process automation.",
    image: "/Product/img23.png",
    imageHover: "/Product/p-23.jpg",
  },
  {
    title: "Valve Positioners",
    description:
      "Precise control of industrial valves. Durable and reliable for fluid handling applications.",
    usage:
      "Used in oil & gas, water treatment, and chemical processing industries.",
    image: "/Product/img24.png",
    imageHover: "/Product/p-24.jpg",
  },
  {
    title: "Level Sensor",
    description:
      "Monitors liquid levels in tanks and vessels. Provides real-time readings for automation.",
    usage:
      "Used in storage tanks, chemical processing, and water treatment plants.",
    image: "/Product/img25.png",
    imageHover: "/Product/p-25.jpg",
  },
  {
    title: "Temperature Sensors",
    description:
      "Measures temperature in industrial processes. Accurate readings with easy integration.",
    usage:
      "Used in furnaces, boilers, refrigeration units, and industrial ovens.",
    image: "/Product/img26.png",
    imageHover: "/Product/p-26.jpg",
  },
  {
    title: "Cylinder Sensor",
    description:
      "Detects cylinder positions in automation systems. Non-contact and high precision.",
    usage: "Used in pneumatic and hydraulic systems for position detection.",
    image: "/Product/img27.png",
    imageHover: "/Product/p-27.jpg",
  },
];

const ProductsPage = () => {
  const sectionRef = useRef(null);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll(".product-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, idx) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.remove("opacity-0", "translate-y-10");
              entry.target.classList.add("opacity-100", "translate-y-0");
            }, idx * 100);
          }
        });
      },
      { threshold: 0.2 }
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="products" className="py-20 bg-[#F5F7FA]" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6 text-center mb-12">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A2342] mb-4 relative inline-block">
          Our Products
          <span className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-20 h-1 bg-[#800080] rounded-full"></span>
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, idx) => (
          <div
            key={idx}
            className="product-card opacity-0 translate-y-10"
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            <div className="bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-700 ease-in-out hover:scale-105 h-full flex flex-col border-t-4 border-[#FF6B00] relative">
              {/* Image */}
              <div className="relative w-full h-48 flex items-center justify-center bg-[#F5F7FA]">
                <Image
                  src={hoveredIdx === idx ? product.imageHover : product.image}
                  alt={product.title}
                  fill
                  className="object-contain p-4 mix-blend-multiply transition-all duration-300"
                />
                {/* Usage info box at bottom */}
                {hoveredIdx === idx && (
                  <div className="absolute bottom-2 left-2 right-2 bg-white/40 text-black text-xs sm:text-sm p-2 rounded transition-opacity duration-300">
                    {product.usage}
                  </div>
                )}
              </div>

              {/* Text */}
              <div className="p-6 text-center flex-grow flex flex-col">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 text-[#0A2342]">
                  {product.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="h-1 bg-gradient-to-r from-[#FF6B00] to-[#0A2342]"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsPage;
