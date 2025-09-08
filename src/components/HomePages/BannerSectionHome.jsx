import React from "react";
import Image from "next/image";

const BannerSectionHome = () => {
  return (
    <section className="relative bg-[#0A2342] text-[#F5F7FA]">
      <div className="container">
        <div className="mx-auto flex flex-col lg:flex-row items-center py-20 px-6 gap-8">
          {/* Left Content */}
          <div className="flex-1 py-12 lg:order-1 order-2 text-center lg:text-left">
            <h1 className="font-extrabold text-[clamp(28px,4vw,48px)] leading-tight mb-6">
              <span className="block text-[#FF6B00] ">Powering Innovation</span>
              <span className="block">Industrial Automation</span>
            </h1>

            <p className="pt-2 text-[clamp(14px,2vw,18px)] text-justify lg:text-left lg:text-[#F5F7FA]/80 text-[#F5F7FA]/70">
              Explore our advanced range of industrial devices designed to
              enhance reliability, precision, and performance. From jumbo
              displays to thyristor units, we deliver smart solutions for small
              and heavy industries.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center items-center rounded-lg lg:order-2 order-1">
            <Image
              src="/Home/img2.jpg"
              alt="Industrial Devices"
              width={600}
              height={600}
              className="rounded-xl shadow-lg object-cover border-4 border-[#800080] max-w-full h-auto"
              onContextMenu={(e) => e.preventDefault()}
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSectionHome;
