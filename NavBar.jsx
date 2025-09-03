"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-2xl transition-all duration-300">
      <div className="container flex justify-between items-center font-Work min-h-[64px]">
        {/* Logo */}
        <div className="py-3 flex items-center">
          <Link href="/" className="cursor-pointer">
            <h1 className="text-2xl font-extrabold tracking-wide text-purple transition-colors">
              Advance Power Controls
            </h1>
          </Link>
        </div>

        <ul className="hidden lg:flex items-center gap-6 text-base font-semibold whitespace-nowrap">
          {[
            { href: "/product", label: "Product" },
            { href: "/our-story", label: "Our Story" },
            { href: "/support", label: "Connect" },
          ].map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`group relative inline-block font-extrabold text-lg transition duration-150 ease-in-out ${
                  isActive(item.href) ? "text-purple" : "text-black"
                }`}
              >
                <span>{item.label}</span>
                <span
                  className={`absolute left-0 -bottom-1 w-full h-0.5 bg-purple transition-transform duration-300 origin-left
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
              className="w-7 h-7 text-black"
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
      {menuOpen && (
        <div className="lg:hidden fixed top-0 left-0 h-screen w-full bg-white z-50 overflow-y-auto px-4 py-6">
          <div className="flex justify-between items-center mb-6 px-2">
            <Link href="/" onClick={closeMenu}>
              <Image
                src="/HomePages/Navbar/MainLogoNew.png"
                alt="Logo"
                width={0}
                height={0}
                onContextMenu={(e) => e.preventDefault()} // disable right-click
                draggable={false}
                sizes="100vw"
                className="h-10 w-auto object-contain"
                priority
              />
            </Link>
            <button onClick={closeMenu}>
              <svg
                className="w-7 h-7 text-black"
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

          {/* Other Nav Links */}
          <div className="text-center flex flex-col items-center">
            {[
              { href: "/product", label: "Product" },
              { href: "/ourstory", label: "Our Story" },
              { href: "/connect", label: "Connect" },
            ].map((item, index, array) => (
              <React.Fragment key={item.href}>
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className={`block w-full py-3 font-extrabold text-lg ${
                    isActive(item.href) ? "text-red" : "text-black"
                  }`}
                >
                  {item.label}
                </Link>
                {index < array.length - 1 && (
                  <hr className="border-t border-gray-300 w-full mx-auto" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
