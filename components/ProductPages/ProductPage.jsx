import React, { useEffect, useRef } from "react";
import Image from "next/image";

// Full product data
const products = [
  {
    title: "JUMBO DISPLAY",
    description:
      "High visibility jumbo display for industries. Large digits for clear readability from a distance.",
    image: "/Product/img1.png",
  },
  {
    title: "PHOTO ELECTRIC CONTROLLER",
    description:
      "Precision control for photoelectric sensors. Adjustable detection range and easy integration.",
    image: "/Product/img2.png",
  },
  {
    title: "PROCESS INDICATOR JUMBO DISPLAY",
    description:
      "Real-time process monitoring with large digits for visibility in industrial environments.",
    image: "/Product/img3.png",
  },
  {
    title: "LOAD CELL INDICATOR CONTROLLER",
    description:
      "High-accuracy load measurement. Supports multiple load cell types with digital interface.",
    image: "/Product/img4.png",
  },
  {
    title: "SIGNAL ISOLATOR",
    description:
      "Prevents ground loops and ensures signal accuracy. Compact and DIN-rail mountable.",
    image: "/Product/img5.png",
  },
  {
    title: "LOOP POWER TRANSMITTER",
    description:
      "Converts process signals for 4-20 mA loops. Precise current transmission and easy installation.",
    image: "/Product/img6.png",
  },
  {
    title: "PROGRAMMABLE COUNTER",
    description:
      "Digital counter with adjustable presets. Supports multiple counting modes for automation.",
    image: "/Product/img7.png",
  },
  {
    title: "JUMBO COUNTER DIGIT -6",
    description:
      "Large 6-digit digital counter display. Clear visibility from a distance for industrial use.",
    image: "/Product/img8.png",
  },
  {
    title: "SEQUENTIAL TIMER UP TO 16 CHANNEL",
    description:
      "Multi-channel programmable sequential timer. Reliable timing for automation processes.",
    image: "/Product/img9.png",
  },
  {
    title: "SSR & HEAT SINK",
    description:
      "Solid-state relay with integrated heat sink. Efficient thermal management and high-speed switching.",
    image: "/Product/img10.png",
  },
  {
    title: "PHOTOELECTRIC SENSORS",
    description:
      "Non-contact object detection. Adjustable sensing distance for automation systems.",
    image: "/Product/img11.png",
  },
  {
    title: "ULTRASONIC SENSORS",
    description:
      "Measures distance using ultrasonic waves. Reliable in dusty or reflective environments.",
    image: "/Product/img12.png",
  },
  {
    title: "ROTARY ENCODERS",
    description:
      "Converts rotational motion into electrical signals. High precision for position and speed measurement.",
    image: "/Product/img13.png",
  },
  {
    title: "POSITIONING SYSTEMS",
    description:
      "Controls precise linear or rotational movement. Integrates easily with automation systems.",
    image: "/Product/img14.png",
  },
  {
    title: "ANNUNCIATOR PANELS",
    description:
      "Visual and audible alert system for critical processes. Configurable indicators for safety.",
    image: "/Product/img15.png",
  },
  {
    title: "ALARM ANNUNCIATOR",
    description:
      "Alerts operators in industrial plants. Multiple alarm channels with reliable response.",
    image: "/Product/img16.png",
  },
  {
    title: "PID CONTROLLER",
    description:
      "Digital controller for temperature, pressure, or flow. Ensures precise and stable process control.",
    image: "/Product/img17.png",
  },
  {
    title: "STABILIZER / CVT / CONTROL TRANSFORMER",
    description:
      "Provides stable voltage output for sensitive equipment. Protects machinery from fluctuations.",
    image: "/Product/img18.png",
  },
  {
    title: "SMPS",
    description:
      "Regulated DC power supply for industrial devices. High efficiency and low heat dissipation.",
    image: "/Product/img19.png",
  },
  {
    title: "THYRISTOR UNIT",
    description:
      "A reliable power control solution for heaters and industrial loads. Provides accurate phase angle and burst firing control, ensuring energy efficiency, low heat dissipation, and extended equipment life.",
    image: "/Product/img20.png",
  },
  {
    title: "FLP INSTRUMENTS",
    description:
      "Flameproof instruments for hazardous areas. High reliability under extreme conditions.",
    image: "/Product/img21.png",
  },
  {
    title: "I/P TRANSDUCER",
    description:
      "Converts current signal (4-20 mA) to pneumatic output. Precise control for valves and actuators.",
    image: "/Product/img22.png",
  },
  {
    title: "ELECTRO-PNEUMATIC POSITIONERS",
    description:
      "Controls valve positions using electrical signals. Improves accuracy of fluid systems.",
    image: "/Product/img23.png",
  },
  {
    title: "VALVE POSITIONERS",
    description:
      "Precise control of industrial valves. Durable and reliable for fluid handling applications.",
    image: "/Product/img24.png",
  },
  {
    title: "LEVEL SENSOR",
    description:
      "Monitors liquid levels in tanks and vessels. Provides real-time readings for automation.",
    image: "/Product/img25.png",
  },
  {
    title: "TEMPERATURE SENSORS",
    description:
      "Measures temperature in industrial processes. Accurate readings with easy integration.",
    image: "/Product/img26.png",
  },
  {
    title: "CYLINDER SENSOR",
    description:
      "Detects cylinder positions in automation systems. Non-contact and high precision.",
    image: "/Product/img27.png",
  },
];

const ProductsPage = () => {
  const sectionRef = useRef(null);

  // Scroll animation for cards
  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll(".product-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, idx) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.remove("opacity-0", "translate-y-10");
              entry.target.classList.add("opacity-100", "translate-y-0");
            }, idx * 150);
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="products" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6 text-center mb-12">
        <h1 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Our Products
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, idx) => (
          <div key={idx} className="product-card opacity-0 translate-y-10">
            <div className="bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-700 ease-in-out hover:scale-105 h-full flex flex-col">
              {/* Fixed-size image container */}
              <div className="relative w-full h-48 flex items-center justify-center bg-gray-50">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain p-4"
                />
              </div>

              {/* Card text */}
              <div className="p-6 text-center flex-grow flex flex-col">
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-600 flex-grow">{product.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsPage;
