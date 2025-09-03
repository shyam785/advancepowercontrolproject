"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import BannerSection from "./BannerSection";
import OurMission from "./OurMission";

const OurStoryaMain = () => {
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
        <BannerSection />
      </div>
      <div data-aos="fade-up">
        <OurMission />
      </div>
    </section>
  );
};

export default OurStoryaMain;
