import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="relative bg-[#F5F7FA] text-[#1C1C1C] py-20">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Image */}
          <div className="lg:w-5/12 w-full relative">
            <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-[#800080]">
              <Image
                src="/Home/img3.jpg"
                alt="About Us"
                width={500}
                height={500}
                className="object-cover w-full h-full"
                onContextMenu={(e) => e.preventDefault()}
                draggable={false}
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:w-7/12 w-full">
            <div className="relative flex flex-col items-center">
              <h2 className="font-bold mb-2 text-[#0A2342] text-[clamp(24px,4vw,48px)]">
                About <span className="text-[#FF6B00]">Us</span>
              </h2>
              <span className="w-20 h-1 bg-[#800080] rounded-full"></span>
            </div>

            <h3 className="font-semibold mb-4 mt-4 text-[#1C1C1C] text-[clamp(18px,2.5vw,28px)]">
              Strength. Precision. Performance
            </h3>

            <p className="text-justify text-[#1C1C1C]/80 mb-6 text-[clamp(14px,2vw,18px)]">
              We deliver reliable power control and industrial equipment
              designed to keep heavy industries running smoothly. From
              monitoring to control, our products bring durability and precision
              to every operation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 w-full">
              <div className="bg-white shadow-md rounded-xl p-6 border-l-4 border-[#800080]">
                <h3 className="text-[#0A2342] mb-2 font-semibold text-[clamp(16px,2.2vw,22px)]">
                  20+ Years
                </h3>
                <p className="text-[#1C1C1C]/70 text-[clamp(12px,1.8vw,16px)]">
                  Trusted partner for industrial equipment and large-scale
                  solutions
                </p>
              </div>

              <div className="bg-white shadow-md rounded-xl p-6 border-l-4 border-[#800080]">
                <h3 className="text-[#0A2342] mb-2 font-semibold text-[clamp(16px,2.2vw,22px)]">
                  1000+ Clients
                </h3>
                <p className="text-[#1C1C1C]/70 text-[clamp(12px,1.8vw,16px)]">
                  Trusted by leading industries across India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
