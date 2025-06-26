import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const CharacterContent = React.forwardRef(
  (
    {
      sectionRef,
      isVisible,
      isTransitioning,
      currentCharacter,
      currentImageIndex,
      nextImage,
      prevImage,
      goToImage,
    },
    ref
  ) => {
    return (
      <div ref={ref} className="container mx-auto px-4 max-w-7xl">
        <div
          className={`transition-all duration-500 ease-out transform ${
            isTransitioning
              ? "opacity-0 translate-y-8"
              : "opacity-100 translate-y-0"
          }`}
        >
          <div className="flex flex-wrap items-center justify-center gap-y-16 lg:gap-y-0">
            <div className="w-full lg:w-6/12 xl:w-5/12">
              <div
                className={`inline-flex items-center px-4 py-2 ${currentCharacter.badgeColor} rounded-full text-sm font-medium`}
              >
                <span
                  className={`w-2 h-2 bg-gradient-to-r ${currentCharacter.bgColor} rounded-full mr-2`}
                ></span>
                Character Introduction
              </div>

              <div className="space-y-3">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  {currentCharacter.name}
                </h2>
                <p
                  className={`text-xl ${currentCharacter.textColor} font-semibold pb-10`}
                >
                  {currentCharacter.stageName}
                </p>
              </div>

              <div
                className={`text-center transition-all duration-1000 ease-out transform ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                }`}
              >
                <div className="relative group">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${currentCharacter.bgColor} opacity-20 rounded-3xl transform rotate-3`}
                  ></div>
                  <div className="relative bg-white rounded-3xl p-4 shadow-2xl overflow-hidden">
                    <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
                      {currentCharacter.images.map((image, index) => (
                        <div
                          key={index}
                          className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                            index === currentImageIndex
                              ? "opacity-100 translate-x-0 scale-100"
                              : index < currentImageIndex
                              ? "opacity-0 -translate-x-full scale-95"
                              : "opacity-0 translate-x-full scale-95"
                          }`}
                        >
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover rounded-2xl"
                          />
                        </div>
                      ))}

                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                      >
                        <ChevronLeftIcon className="w-6 h-6 text-gray-700" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                      >
                        <ChevronRightIcon className="w-6 h-6 text-gray-700" />
                      </button>

                      <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {currentImageIndex + 1} /{" "}
                        {currentCharacter.images.length}
                      </div>
                    </div>

                    <div className="flex justify-center mt-6 space-x-2">
                      {currentCharacter.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToImage(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentImageIndex
                              ? `bg-gradient-to-r ${currentCharacter.bgColor} scale-125`
                              : "bg-gray-300 hover:bg-gray-400"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-6/12 xl:w-5/12 lg:pl-12">
              <div
                className={`space-y-8 transition-all duration-1000 ease-out transform ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-10"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <p className="text-lg text-gray-600 leading-relaxed">
                  {currentCharacter.description}
                </p>

                <div className="space-y-6 mt-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Key Achievements
                  </h3>
                  <div
                    className={`space-y-8 transition-all duration-1000 ease-out transform ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: "300ms" }}
                  >
                    {currentCharacter.achievements.map((achievement, index) => (
                      <div
                        key={index}
                        className={`group relative flex gap-4 p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-100 hover:border-indigo-200 hover:bg-white/80 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg ${
                          isVisible
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 translate-x-8"
                        }`}
                        style={{ transitionDelay: `${400 + index * 100}ms` }}
                      >
                        <div className="flex-shrink-0">
                          <div
                            className={`flex items-center justify-center w-12 h-12 bg-gradient-to-br ${currentCharacter.bgColor} rounded-xl shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}
                          >
                            <achievement.icon className="w-6 h-6 text-white" />
                          </div>
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3
                            className={`text-lg font-bold text-gray-900 mb-2 group-hover:${currentCharacter.textColor} transition-colors duration-300`}
                          >
                            {achievement.title}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

CharacterContent.displayName = "CharacterContent";

export default CharacterContent;
