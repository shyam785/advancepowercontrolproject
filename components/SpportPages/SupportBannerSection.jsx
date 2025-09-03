"use client";
import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";

const SupportBannerSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 to-white py-16 px-6 lg:px-20 font-work">
      <div className="container">
        <div className="max-w-5xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            We’re Here to Help
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Reach out to us anytime. Our support team is available to assist you
            with any queries regarding our products and services.
          </p>

          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Address */}
            <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col items-center h-full hover:shadow-lg transition">
              <MapPin className="w-7 h-7 text-blue-500 mb-2" />
              <h3 className="text-base font-semibold text-gray-800 mb-1">
                Our Address
              </h3>
              <p className="lg:text-lg sm:text-base md:text-lg text-gray-600 text-center">
                Ground Floor, Plot No.181,
                <br /> Vibrant Business Park, NH-48 <br />
                Opp UPL, G.I.D.C., Vapi-396195
              </p>
            </div>

            {/* Email */}
            <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col items-center h-full hover:shadow-lg transition">
              <Mail className="w-7 h-7 text-blue-500 mb-2" />
              <h3 className="text-base font-semibold text-gray-800 mb-1">
                Email Us
              </h3>
              <p className="lg:text-lg sm:text-base md:text-lg text-gray-600 text-center break-words">
                dainikgevariya@gmail.com
                <br />
                apc143@advancepowercontrols.com
              </p>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col items-center h-full hover:shadow-lg transition">
              <Phone className="w-7 h-7 text-blue-500 mb-2" />
              <h3 className="text-base font-semibold text-gray-800 mb-1">
                Call Us
              </h3>
              <p className="lg:text-lg sm:text-base md:text-lg text-gray-600 text-center">
                (0260) 2410739,2436026
                <br />
                +91 7069151677
              </p>
            </div>
          </div>

          {/* Google Map Embed */}
          <div className="w-full h-80 rounded-2xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.6772502685985!2d72.90966399999999!3d20.354947699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0cf68cc46250b%3A0xdb85af9d09180973!2sAdvance%20Power%20Controls!5e0!3m2!1sen!2sin!4v1756809910547!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportBannerSection;
