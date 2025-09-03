"use client";
import React from "react";

const BannerSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 via-gray-800  text-white text-center px-6 py-20 overflow-hidden">
      <div className="container mx-auto relative z-10">
        {/* Title */}
        <h1 className="lg:text-5xl text-3xl font-extrabold mb-4">
          Powering Progress with
        </h1>

        {/* Highlighted text */}
        <h2 className="lg:text-6xl text-4xl font-extrabold text-red-500 mb-6">
          Reliable Control Solutions
        </h2>

        {/* Description */}
        <p className="lg:text-lg sm:text-base md:text-lg max-w-3xl mx-auto text-gray-300">
          At Advance Power Controls, our story is built on innovation and trust.
          From advanced power control equipment to custom-engineered solutions,
          we empower industries with safe, efficient, and reliable energy
          systems.
        </p>
      </div>

      {/* Decorative SVG Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-28"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,224L48,202.7C96,181,192,139,288,144C384,149,480,203,576,229.3C672,256,768,256,864,245.3C960,235,1056,213,1152,197.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default BannerSection;
