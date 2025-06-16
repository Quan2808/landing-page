import useCountdownToRelease from "../hooks/useCountdownToRelease";

const HeroSection = () => {
  const timeLeft = useCountdownToRelease("2025-07-23T00:00:00");

  return (
    <section className="relative isolate overflow-hidden px-6 h-screen sm:px-16 md:pt-24 lg:px-24">
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

      {/* Content Container with Bottom Border */}
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8 border-b-4 border-white">
        <div className="relative isolate overflow-hidden px-6 pt-16 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          {/* Text Content */}
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
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
          {/* Video Content (YouTube Embed) */}
          <div className="relative mt-16 h-80 lg:mt-8 lg:flex-auto">
            <iframe
              className="absolute top-0 left-0 w-full max-w-[36rem] rounded-md bg-white/5 ring-1 ring-white/10 sm:w-[36rem] h-full"
              src="https://www.youtube.com/embed/YG2qaxd6YL4?autoplay=1&loop=1&mute=0&playsinline=1&playlist=YG2qaxd6YL4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Image Content */}
          {/* <div className="relative mt-16 h-80 lg:mt-8 lg:flex-auto">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-0 left-0 w-full max-w-[36rem] rounded-md bg-white/5 ring-1 ring-white/10 sm:w-[36rem] object-cover h-full"
            >
              <source src="https://youtu.be/YG2qaxd6YL4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
