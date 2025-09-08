"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import BannerSectionHome from "./BannerSectionHome";
import WhyChooseUs from "./WhyChooesUs";
import AboutUs from "./AboutUs";
import ScrollToTop from "../ScrollToTop";

const MainHome = () => {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 1200,
      offset: 30,
    });
  }, []);
  return (
    <section className="pt-[60px]">
      <div data-aos="fade-up">
        <BannerSectionHome />
      </div>
      <div data-aos="fade-up">
        <WhyChooseUs />
      </div>
      <div data-aos="fade-up">
        <AboutUs />
      </div>
      <ScrollToTop />
    </section>
  );
};

export default MainHome;
