"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const pathname = usePathname();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  // Detect scroll direction (hide navbar when scrolling down)
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      if (window.scrollY > lastScrollY) {
        // scrolling down
        setShowNav(false);
      } else {
        // scrolling up
        setShowNav(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
          showNav ? "translate-y-0" : "-translate-y-full"
        } ${scrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-white"}`}
      >
        <div className="container flex justify-between items-center font-Work min-h-[64px] px-4 lg:px-8">
          {/* Logo */}
          <div className="py-3 flex items-center">
            <Link href="/" className="cursor-pointer">
              <h1 className="text-2xl font-extrabold tracking-wide text-[#800080] transition-colors">
                Advance Power Controls
              </h1>
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8 text-base font-semibold whitespace-nowrap">
            {[
              { href: "/product", label: "Product" },
              { href: "/our-story", label: "Our Story" },
              { href: "/support", label: "Connect" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`group relative inline-block font-bold text-lg transition-colors duration-200 ${
                    isActive(item.href) ? "text-[#800080]" : "text-gray-800"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute left-0 -bottom-1 w-full h-0.5 text-[#800080] transition-transform duration-300 origin-left
                    ${
                      isActive(item.href)
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  ></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={toggleMenu}>
              <svg
                className="w-7 h-7 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed top-0 left-0 h-screen w-full bg-white z-40 transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center mb-6 px-4 py-4 shadow">
            <div className="py-3 flex items-center">
              <Link href="/" onClick={closeMenu} className="cursor-pointer">
                <h1 className="text-xl sm:text-2xl font-extrabold tracking-wide text-[#800080] transition-colors">
                  Advance Power Controls
                </h1>
              </Link>
            </div>

            <button onClick={closeMenu}>
              <svg
                className="w-7 h-7 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-col items-center mt-6 space-y-6">
            {[
              { href: "/product", label: "Product" },
              { href: "/our-story", label: "Our Story" },
              { href: "/support", label: "Connect" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={`text-lg font-bold ${
                  isActive(item.href) ? "text-[#800080]" : "text-gray-800"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
