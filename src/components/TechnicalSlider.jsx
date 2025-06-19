import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const technicalLogos = [
  {
    alt: "Character Creator 4",
    src: "./src/assets/images/technicals/character-creator-4.svg",
    description: "Modeling and texturing",
  },
  {
    alt: "Maya 3D",
    src: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Autodesk_Maya_logo.svg",
    description: "Modeling and texturing",
  },
  {
    alt: "Cinema 4D",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Cinema_4D_Logo.svg/2560px-Cinema_4D_Logo.svg.png",
    description: "Modeling and texturing",
  },
  {
    alt: "Arnold",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Arnold-logo.svg/2560px-Arnold-logo.svg.png",
    description: "Render",
  },
  {
    alt: "iClone 8",
    src: "https://www.reallusion.com/about/includes/image/press_resource_product/ic/iclone8_1000x258_whitebg_linelogo_word.png",
    description: "Animation",
  },
  {
    alt: "Adobe After Effects",
    src: "https://1000logos.net/wp-content/uploads/2020/07/After-Effects-Logo.png",
    description: "Animation",
  },
  {
    alt: "Adobe Premiere Pro",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/1200px-Adobe_Premiere_Pro_CC_icon.svg.png",
    description: "Post-production",
  },
];

const TechnicalSlider = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo carousel */}
        <div className="relative">
          <Swiper
            modules={[Autoplay]}
            slidesPerView="auto"
            spaceBetween={40}
            loop={true}
            speed={4000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            grabCursor={true}
            allowTouchMove={true}
            className="py-8"
          >
            {technicalLogos
              .concat(technicalLogos, technicalLogos)
              .map((logo, index) => (
                <SwiperSlide
                  key={index}
                  className="!w-auto flex justify-center items-center"
                >
                  <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 hover:border-blue-300/50 hover:-translate-y-1">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="relative">
                        <img
                          alt={logo.alt}
                          src={logo.src}
                          width="158"
                          height="48"
                          className="h-12 object-contain transition-transform duration-300 group-hover:scale-110"
                          onError={(e) => {
                            e.target.style.display = "none";
                            e.target.nextSibling.style.display = "flex";
                          }}
                        />
                        <div className="hidden w-32 h-12 bg-gradient-to-r from-gray-300 to-gray-400 rounded-lg items-center justify-center text-gray-600 font-semibold text-sm">
                          {logo.alt}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-circe-bold font-semibold text-gray-900 text-lg">
                          {logo.alt}
                        </h3>
                        <p className="font-circe-bold text-sm text-gray-600 max-w-[200px]">
                          {logo.description}
                        </p>
                      </div>
                    </div>

                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/5 group-hover:to-indigo-500/5 rounded-2xl transition-all duration-300"></div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSlider;
