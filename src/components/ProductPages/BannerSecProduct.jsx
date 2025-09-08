// import React from "react";
// import Image from "next/image";

// const BannerSecProduct = () => {
//   return (
//     <>
//       <section className="relative bg-[#0A2342] text-[#F5F7FA]">
//         <div className="container">
//           <div className="mx-auto flex flex-col lg:flex-row items-center py-20 px-6">
//             {/* Left Content */}
//             <div className="lg:w-6/12 w-full py-12 lg:order-1 order-2">
//               <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
//                 Industrial Devices <br />
//                 <span className="text-[#FF6B00]">Built for Performance</span>
//               </h1>
//               <p className="pt-4 text-base sm:text-lg lg:text-lg text-justify text-[#F5F7FA]/80">
//                 Explore our range of products including{" "}
//                 <span className="text-[#FF6B00] font-semibold">
//                   Jumbo Displays, Photo Electric Controllers, Flow Indicators,
//                   Sequential Timers
//                 </span>{" "}
//                 and more. Each solution is crafted to deliver reliability,
//                 efficiency, and precision for heavy industries.
//               </p>
//             </div>

//             {/* Right Image */}
//             <div className="lg:w-6/12 w-full flex justify-center items-center rounded-lg lg:order-2 order-1 relative">
//               <div className="relative">
//                 {/* Decorative Gradient Border */}
//                 <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-[#800080] via-[#F5F7FA] to-[#800080] opacity-75 blur-lg"></div>
//                 <Image
//                   src="/Home/img1.jpg"
//                   alt="Industrial Devices"
//                   width={600}
//                   height={600}
//                   className="relative rounded-2xl shadow-xl object-cover"
//                   onContextMenu={(e) => e.preventDefault()}
//                   draggable={false}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default BannerSecProduct;

import React from "react";
import Image from "next/image";

const BannerSecProduct = () => {
  return (
    <section className="relative bg-[#0A2342] text-[#F5F7FA]">
      <div className="container">
        <div className="mx-auto flex flex-col lg:flex-row items-center py-20 px-6 gap-8">
          {/* Left Content */}
          <div className="flex-1 py-12 lg:order-1 order-2">
            <h1 className="font-extrabold leading-tight mb-6 text-[clamp(24px,4vw,48px)]">
              Industrial Devices <br />
              <span className="text-[#FF6B00]">Built for Performance</span>
            </h1>

            <p className="pt-4 text-justify text-[#F5F7FA]/80 text-[clamp(14px,2vw,18px)]">
              Explore our range of products including{" "}
              <span className="text-[#FF6B00] font-semibold">
                Jumbo Displays, Photo Electric Controllers, Flow Indicators,
                Sequential Timers
              </span>{" "}
              and more. Each solution is crafted to deliver reliability,
              efficiency, and precision for heavy industries.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center items-center rounded-lg lg:order-2 order-1 relative">
            <div className="relative">
              {/* Decorative Gradient Border */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-[#800080] via-[#F5F7FA] to-[#800080] opacity-75 blur-lg"></div>
              <Image
                src="/Home/img1.jpg"
                alt="Industrial Devices"
                width={600}
                height={600}
                className="relative rounded-2xl shadow-xl object-cover max-w-full h-auto"
                onContextMenu={(e) => e.preventDefault()}
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSecProduct;
