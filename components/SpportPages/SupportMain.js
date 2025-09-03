"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SupportBannerSection from "./SupportBannerSection";

const SupportMain = () => {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 1200,
      offset: 30,
    });
  }, []);
  return (
    <section className="pt-[50px]">
      <div data-aos="fade-up">
        <SupportBannerSection />
      </div>
    </section>
  );
};

export default SupportMain;
