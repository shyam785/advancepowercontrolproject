"use client";
import React from "react";

const Footer = () => {
  return (
    <footer
      className="py-4 lg:pt-10 pt-7 w-full bg-whiskeycolor font-Work"
    >
      <div className="container">
        {/* Logo & Main Sections Wrapper */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 text-black mb-8">
          {/* Link Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:w-3/4">
            {/* Products */}
            <div>
              <div className="text-xl font-semibold mb-4">Products</div>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/Products/one-way-interview"
                    className="text-gray-600 transition-colors duration-300 hover:text-red"
                  >
                    One way interviewing
                  </a>
                </li>
                <li>
                  <a
                    href="/Products/two-way-interview"
                    className="text-gray-600 transition-colors duration-300 hover:text-red"
                  >
                    Two way interviewing
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <div className="text-xl font-semibold mb-4">Services</div>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/services/development"
                    className="text-gray-600 transition-colors duration-300 hover:text-red"
                  >
                    Development
                  </a>
                </li>
                <li>
                  <a
                    href="/services/it-staffing"
                    className="text-gray-600 transition-colors duration-300 hover:text-red"
                  >
                    IT Staffing
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <div className="text-xl font-semibold mb-4">Quick Links</div>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/tools/resume-builder"
                    className="text-gray-600 transition-colors duration-300 hover:text-red"
                  >
                    Resume Builder
                  </a>
                </li>
                <li>
                  <a
                    href="/tools/mock-interview"
                    className="text-gray-600 transition-colors duration-300 hover:text-red"
                  >
                    Mock Interviews
                  </a>
                </li>
                <li>
                  <a
                    href="/tools/become-a-panelist"
                    className="text-gray-600 transition-colors duration-300 hover:text-red"
                  >
                    Become Panelist
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
