import React from "react";

const HeroSection = () => {
  return (
    <div className="relative isolate overflow-hidden px-6 pt-16 sm:px-16 md:pt-24 lg:px-24 lg:pt-0">
      {/* Background Image */}
      <img
        alt=""
        src="https://pianofingers.vn/wp-content/uploads/2024/04/Sheet-piano-Thie%CC%82n-Ly%CC%81-O%CC%9Bi-Jack-2.jpeg"
        className="absolute inset-0 w-full h-full object-cover transform scale-105 transition-transform duration-10000 ease-in-out"
        aria-hidden="true"
      />
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gray-900/70"></div>
      {/* Fade-out effect at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none"></div>

      {/* Centered Text Content */}
      <div className="relative flex min-h-[80vh] items-center justify-center">
        <div className="mx-auto max-w-md text-center lg:max-w-lg">
          <h2 className="text-5xl font-semibold tracking-tight text-balance text-white">
            DREAM DRAFT
          </h2>
          <p className="mt-6 text-2xl/8 text-pretty text-gray-300">
            Đề tài: Màu Của Hòa Bình
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
