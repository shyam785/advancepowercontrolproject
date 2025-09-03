"use client";
import React, { useEffect, useRef } from "react";

const BannerSecProduct = () => {
  const headingRef = useRef(null);
  const paraRef = useRef(null);

  useEffect(() => {
    const heading = headingRef.current;
    const para = paraRef.current;

    heading.classList.add("opacity-0", "translate-y-6");
    para.classList.add("opacity-0", "translate-y-6");

    setTimeout(() => {
      heading.classList.remove("opacity-0", "translate-y-6");
      heading.classList.add("opacity-100", "transition-all", "duration-1000");
    }, 300);

    setTimeout(() => {
      para.classList.remove("opacity-0", "translate-y-6");
      para.classList.add("opacity-100", "transition-all", "duration-1000");
    }, 800);
  }, []);

  return (
    <section className="relative overflow-hidden  bg-gradient-to-r from-gray-900 via-gray-800  text-red py-32 px-6 text-center">
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 right-20 w-48 h-48 bg-white/10 rounded-full animate-ping"></div>
      <div className="absolute bottom-10 left-1/3 w-40 h-40 bg-white/5 rounded-full animate-pulse"></div>

      <div className="relative z-10 container">
        <div className="max-w-4xl mx-auto">
          <h1
            ref={headingRef}
            className="lg:text-5xl md:text-4xl sm:text-3xl font-bold mb-4 opacity-0"
          >
            Our Industrial Devices
          </h1>
          <p
            ref={paraRef}
            className="lg:text-lg sm:text-base md:text-lg text-white opacity-0"
          >
            Explore our range of products including Jumbo Displays, Photo
            Electric Controllers, Flow Indicators, Sequential Timers, and more.
          </p>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-gradient-x mix-blend-overlay pointer-events-none"></div>
    </section>
  );
};

export default BannerSecProduct;
