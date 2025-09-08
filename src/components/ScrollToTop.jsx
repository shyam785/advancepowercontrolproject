"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed bottom-6 left-6 z-50 p-3 rounded-full bg-purple  shadow-lg transition-opacity duration-300 ease-in-out transform hover:scale-110 ${
          showArrow
            ? "opacity-100 animate-bounce"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <ArrowUp className="w-5 h-5 text-black" />
      </button>
    </>
  );
}
