import React from "react";

const BannerSection = () => {
  return (
    <>
      <section className="relative bg-[#0A2342] text-center px-6 py-20 overflow-hidden">
        <div className="container mx-auto relative z-10">
          {/* Title */}
          <h1 className="lg:text-5xl text-3xl font-extrabold mb-4 text-[#F5F7FA]">
            Powering Progress with
          </h1>

          {/* Highlighted text */}
          <h2 className="lg:text-6xl text-4xl font-extrabold text-[#FF6B00] mb-6">
            Reliable Control Solutions
          </h2>

          {/* Description */}
          <p className="lg:text-lg sm:text-base md:text-lg max-w-3xl mx-auto text-[#F5F7FA]">
            At Advance Power Controls, our story is built on innovation and
            trust. From advanced power control equipment to custom-engineered
            solutions, we empower industries with safe, efficient, and reliable
            energy systems.
          </p>
        </div>
      </section>
    </>
  );
};

export default BannerSection;
