"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const pathname = usePathname();

  const links = [
    { href: "/product", label: "Product" },
    { href: "/our-story", label: "Our Story" },
    { href: "/support", label: "Connect" },
  ];

  return (
    <>
      <footer className="w-full bg-white text-black font-Work">
        <div className="container">
          <div className="mx-auto px-6 pt-12 pb-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
            {/* Left - Company Info */}
            <div className="flex flex-col items-start">
              <Link
                href="/"
                className="text-xl font-extrabold mb-3 text-[#800080] hover:opacity-80 transition"
              >
                ADVANCE POWER CONTROLS
              </Link>
              <p className="text-sm leading-relaxed max-w-xs">
                We are committed to delivering innovative and reliable
                industrial power control solutions, ensuring quality, trust, and
                long-term partnerships with our clients.
              </p>
            </div>

            {/* Middle - Company Links */}
            <div className="flex flex-col items-start">
              <h2 className="text-lg font-bold mb-3">Company</h2>
              <ul className="space-y-2 text-sm">
                {links.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`${
                        pathname === href
                          ? "text-[#800080] font-semibold"
                          : "text-black hover:text-[#800080]"
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right - Stay Connected */}
            <div className="flex flex-col items-start">
              <h2 className="text-xl font-bold mb-4 text-[#800080]">
                Stay Connected
              </h2>

              {/* Address */}
              <div className="mb-4">
                <p className="text-sm font-semibold text-gray-800 mb-1">
                  Address
                </p>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#800080] mt-1" />
                  <p className="text-sm text-gray-700 leading-snug">
                    Ground Floor, Plot No.181, <br />
                    Vibrant Business Park, NH-48, <br />
                    Opp UPL, G.I.D.C., Vapi-396195
                  </p>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="mb-4">
                <p className="text-sm font-semibold text-gray-800 mb-1">
                  Phone
                </p>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#800080]" />
                    <p className="text-sm text-gray-700">+91 7069151677</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#800080]" />
                    <p className="text-sm text-gray-700">
                      (0260) 2410739, 2436026
                    </p>
                  </div>
                </div>
              </div>

              {/* Emails */}
              <div>
                <p className="text-sm font-semibold text-gray-800 mb-1">
                  Email
                </p>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#800080]" />
                    <p className="text-sm text-gray-700">
                      dainikgevariya@gmail.com
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#800080]" />
                    <p className="text-sm text-gray-700">
                      apc143@advancepowercontrols.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="border-t border-gray-300 mt-6">
            <p className="text-center text-sm py-4">
              © {new Date().getFullYear()}{" "}
              <span className="font-bold text-[#800080]">
                Advance Power Controls
              </span>
              . All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
