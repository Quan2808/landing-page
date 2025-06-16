import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-07-23T00:00:00");
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative isolate overflow-hidden px-6 h-screen sm:px-16 md:pt-24 lg:px-24 ">
      {/* Background Image */}
      <img
        alt="Hero Background"
        src="https://pianofingers.vn/wp-content/uploads/2024/04/Sheet-piano-Thie%CC%82n-Ly%CC%81-O%CC%9Bi-Jack-2.jpeg"
        className="absolute inset-0 w-full h-full object-cover transform scale-105 transition-transform duration-10000 ease-in-out"
        aria-hidden="true"
      />
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gray-900/70"></div>
      {/* Fade-out effect at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none"></div>

      {/* Centered Text Content */}
      <div className="relative flex h-full items-center justify-center">
        <div className="mx-auto max-w-md text-center lg:max-w-lg">
          <h2 className="text-5xl font-semibold tracking-tight text-balance text-white">
            DREAM DRAFT
          </h2>
          <p className="mt-6 text-2xl/8 text-pretty text-gray-300">
            Đề tài: Màu Của Hòa Bình
          </p>
          <p className="mt-6 text-2xl/8 text-pretty text-gray-300">
            {timeLeft ? (
              <>
                COMING SOON IN:{" "}
                <span className="font-mono">
                  {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
                  {timeLeft.seconds}s
                </span>
              </>
            ) : (
              "WE'RE LIVE!"
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
