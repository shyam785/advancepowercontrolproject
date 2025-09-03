"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import BannerSecProduct from "./BannerSecProduct";
import ProductsPage from "./ProductPage";

const ProductMain = () => {
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
        <BannerSecProduct />
      </div>
      <div data-aos="fade-up">
        <ProductsPage />
      </div>
    </section>
  );
};

export default ProductMain;
