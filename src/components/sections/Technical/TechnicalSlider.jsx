import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { useState } from "react";
import useIntersectionObserver from "@hooks/useIntersectionObserver.js";

const technicalLogos = [
  {
    id: 1,
    alt: "Character Creator 4",
    src: "https://www.reallusion.com/about/includes/image/press_resource_product/cc/character-creator-1000x1000_colorlogo_word.png",
    fallbackSrc: "https://via.placeholder.com/150x48/6366f1/white?text=CC4",
    description: "Modeling and texturing",
    category: "3D Modeling",
  },
  {
    id: 2,
    alt: "Maya 3D",
    src: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Autodesk_Maya_logo.svg",
    fallbackSrc: "https://via.placeholder.com/150x48/059669/white?text=Maya",
    description: "Modeling and texturing",
    category: "3D Modeling",
  },
  {
    id: 3,
    alt: "Cinema 4D",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Cinema_4D_Logo.svg/2560px-Cinema_4D_Logo.svg.png",
    fallbackSrc: "https://via.placeholder.com/150x48/dc2626/white?text=C4D",
    description: "Modeling and texturing",
    category: "3D Modeling",
  },
  {
    id: 4,
    alt: "Arnold",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Arnold-logo.svg/2560px-Arnold-logo.svg.png",
    fallbackSrc: "https://via.placeholder.com/150x48/ea580c/white?text=Arnold",
    description: "Render",
    category: "Rendering",
  },
  {
    id: 5,
    alt: "iClone 8",
    src: "https://www.reallusion.com/about/includes/image/press_resource_product/ic/iclone8_1000x1000_whitebg_colorlogo_word_version.png",
    fallbackSrc: "https://via.placeholder.com/150x48/7c3aed/white?text=iClone",
    description: "Animation",
    category: "Animation",
  },
  {
    id: 6,
    alt: "Adobe After Effects",
    src: "https://1000logos.net/wp-content/uploads/2020/07/After-Effects-Logo.png",
    fallbackSrc: "https://via.placeholder.com/150x48/9333ea/white?text=AE",
    description: "Animation",
    category: "Animation",
  },
  {
    id: 7,
    alt: "Adobe Premiere Pro",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/1200px-Adobe_Premiere_Pro_CC_icon.svg.png",
    fallbackSrc:
      "https://via.placeholder.com/150x48/0891b2/white?text=Premiere",
    description: "Post-production",
    category: "Video Editing",
  },
];

// Category color mapping
const categoryColors = {
  "3D Modeling": "from-blue-500/10 to-cyan-500/10 border-blue-300/30",
  Rendering: "from-orange-500/10 to-red-500/10 border-orange-300/30",
  Animation: "from-purple-500/10 to-pink-500/10 border-purple-300/30",
  "Video Editing": "from-teal-500/10 to-green-500/10 border-teal-300/30",
};

export default function TechnicalSlider() {
  const [sectionRef, isVisible] = useIntersectionObserver(0.4);
  const [imageErrors, setImageErrors] = useState(new Set());
  const [isPaused, setIsPaused] = useState(false);

  const handleImageError = (logoId, event) => {
    const newErrors = new Set(imageErrors);
    newErrors.add(logoId);
    setImageErrors(newErrors);

    // Find fallback source and update image
    const logo = technicalLogos.find((l) => l.id === logoId);
    if (logo?.fallbackSrc) {
      event.target.src = logo.fallbackSrc;
    }
  };

  const getStaggerDelay = (index) => {
    const baseDelay = (index % technicalLogos.length) * 100;
    return Math.min(baseDelay, 800); // Cap at 800ms
  };

  return (
    <section ref={sectionRef} className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Kỹ thuật sử dụng
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Các công cụ và phần mềm chuyên nghiệp hỗ trợ quy trình làm việc cho
            dự án
          </p>
        </div>

        {/* Controls */}
        {/* <div
          className={`flex justify-center mb-8 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200/50 hover:border-blue-300/50"
            aria-label={isPaused ? "Resume slideshow" : "Pause slideshow"}
          >
            <div
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                isPaused ? "bg-red-500" : "bg-green-500"
              }`}
            ></div>
            <span className="text-sm font-medium text-gray-700">
              {isPaused ? "Paused" : "Auto-scroll"}
            </span>
          </button>
        </div> */}

        {/* Logo carousel */}
        <div className="relative">
          <Swiper
            modules={[Autoplay]}
            slidesPerView="auto"
            spaceBetween={32}
            loop={true}
            speed={3000}
            autoplay={
              isPaused
                ? false
                : {
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                    reverseDirection: false,
                  }
            }
            grabCursor={true}
            allowTouchMove={true}
            className="py-8"
            breakpoints={{
              320: { spaceBetween: 20 },
              640: { spaceBetween: 24 },
              768: { spaceBetween: 32 },
              1024: { spaceBetween: 40 },
            }}
          >
            {[...technicalLogos, ...technicalLogos, ...technicalLogos].map(
              (logo, index) => (
                <SwiperSlide
                  key={`${logo.id}-${Math.floor(
                    index / technicalLogos.length
                  )}`}
                  className="!w-auto flex justify-center items-center"
                >
                  <div
                    className={`group relative bg-gradient-to-br ${
                      categoryColors[logo.category] ||
                      "from-gray-100/80 to-white/80 border-gray-200/50"
                    } backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl border hover:border-opacity-60 hover:-translate-y-2 hover:rotate-1 transform-gpu transition-all duration-1000 ease-out`}
                    style={{
                      transitionDelay: isVisible
                        ? `${getStaggerDelay(index)}ms`
                        : "0ms",
                      opacity: isVisible ? 1 : 0,
                      transform: `translateY(${
                        isVisible ? "0" : "20px"
                      }) scale(${isVisible ? "1" : "0.9"})`,
                    }}
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      {/* Category Badge */}
                      <div className="absolute -top-2 -right-2 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-medium text-gray-600 shadow-sm border border-gray-200/50">
                        {logo.category}
                      </div>

                      {/* Logo Container */}
                      <div className="relative w-40 h-16 flex items-center justify-center">
                        <img
                          alt={logo.alt}
                          src={logo.src}
                          className="max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-110 filter group-hover:brightness-110"
                          onError={(e) => handleImageError(logo.id, e)}
                          loading="lazy"
                        />
                      </div>

                      {/* Content */}
                      <div className="space-y-2">
                        <h3 className="font-semibold text-gray-900 text-base leading-tight">
                          {logo.alt}
                        </h3>
                        <p className="text-sm text-gray-600 max-w-[160px] leading-relaxed">
                          {logo.description}
                        </p>
                      </div>
                    </div>

                    {/* Enhanced Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/0 group-hover:from-white/10 group-hover:via-white/5 group-hover:to-transparent rounded-2xl transition-all duration-500"></div>

                    {/* Subtle shine effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse rounded-2xl transition-opacity duration-300"></div>
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>

        {/* Progress indicator */}
        <div
          className={`flex justify-center mt-8 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="flex space-x-2">
            {technicalLogos.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-gray-300 animate-pulse"
                style={{
                  animationDelay: `${index * 0.5}s`,
                  animationDuration: "2s",
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200/20 rounded-full blur-xl"></div>
    </section>
  );
}
