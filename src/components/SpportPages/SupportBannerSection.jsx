import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";

const SupportBannerSection = () => {
  return (
    <>
      <section className="relative bg-[#F5F7FA] py-20 px-6 lg:px-20 font-work">
        <div className="container">
          <div className="max-w-6xl mx-auto text-center">
            {/* Heading */}
            <div className="relative inline-block mb-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A2342] mb-4 relative inline-block ">
                We’re Here to <span className="text-[#FF6B00]">Help</span>
              </h2>
              <span className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-20 h-1 bg-[#800080] rounded-full"></span>
            </div>
            <p className="text-lg text-[#1C1C1C]/80 mb-14 max-w-2xl mx-auto">
              Reach out to us anytime. Our support team is available to assist
              you with any queries regarding our products and services.
            </p>

            {/* Contact Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Address */}
              <div className="bg-[#F5F7FA] rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#0A2342]/10 text-[#0A2342] mb-4">
                  <MapPin className="w-7 h-7" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 text-[#0A2342]">
                  Our Address
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Ground Floor,Plot No.181,
                  <br />
                  Vibrant Business Park,NH-48,
                  <br />
                  Opp UPL,G.I.D.C.,Vapi-396195
                </p>
              </div>

              {/* Email */}
              <div className="bg-[#F5F7FA] rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#FF6B00]/10 text-[#FF6B00] mb-4">
                  <Mail className="w-7 h-7" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 text-[#0A2342]">
                  Email Us
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  dainikgevariya@gmail.com,
                  <br />
                  apc143@advancepowercontrols.com
                </p>
              </div>

              {/* Phone */}
              <div className="bg-[#F5F7FA] rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#0A2342]/10 text-[#0A2342] mb-4">
                  <Phone className="w-7 h-7" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 text-[#0A2342]">
                  Call Us
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  +91 7069151677
                  <br />
                  (0260) 2410739, 2436026
                </p>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="w-full h-96 rounded-2xl overflow-hidden shadow-xl hover:scale-[1.02] transition-transform duration-500">
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
    </>
  );
};

export default SupportBannerSection;
