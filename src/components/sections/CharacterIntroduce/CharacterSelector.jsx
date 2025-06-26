import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const CharacterSelector = ({
  characters,
  currentCharacterIndex,
  isTransitioning,
  nextCharacter,
  prevCharacter,
  goToCharacter,
}) => {
  return (
    <div className="relative w-full max-w-4xl mx-auto mb-8">
      {/* Navigation arrows */}
      <button
        onClick={prevCharacter}
        disabled={isTransitioning}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 disabled:opacity-50 hover:bg-white"
      >
        <ChevronLeftIcon className="w-6 h-6 text-gray-700" />
      </button>

      <button
        onClick={nextCharacter}
        disabled={isTransitioning}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 disabled:opacity-50 hover:bg-white"
      >
        <ChevronRightIcon className="w-6 h-6 text-gray-700" />
      </button>

      {/* Character slides container */}
      <div className="overflow-hidden px-12 p-12">
        <div
          className={`flex justify-center items-center space-x-4 transition-all duration-700 ease-out ${
            isTransitioning ? "transform scale-95 opacity-80" : ""
          }`}
        >
          {Array.from({ length: 5 }, (_, i) => {
            let actualIndex;
            if (i === 0) {
              actualIndex =
                (currentCharacterIndex - 2 + characters.length) %
                characters.length;
            } else if (i === 1) {
              actualIndex =
                (currentCharacterIndex - 1 + characters.length) %
                characters.length;
            } else if (i === 2) {
              actualIndex = currentCharacterIndex;
            } else if (i === 3) {
              actualIndex = (currentCharacterIndex + 1) % characters.length;
            } else {
              actualIndex = (currentCharacterIndex + 2) % characters.length;
            }

            const character = characters[actualIndex];
            const isActive = i === 2;
            const distance = Math.abs(i - 2);

            return (
              <div
                key={`${character.id}-${i}`}
                className={`flex-shrink-0 transition-all duration-700 ease-out ${
                  isTransitioning ? "animate-pulse" : ""
                }`}
                style={{
                  opacity: distance === 0 ? 1 : distance === 1 ? 0.7 : 0.4,
                  transform: `scale(${
                    distance === 0 ? 1.1 : distance === 1 ? 0.9 : 0.8
                  }) ${
                    isTransitioning
                      ? i < 2
                        ? "translateX(-20px)"
                        : i > 2
                        ? "translateX(20px)"
                        : "translateY(-10px)"
                      : "translateX(0) translateY(0)"
                  }`,
                  width:
                    distance === 0
                      ? "200px"
                      : distance === 1
                      ? "160px"
                      : "120px",
                  transitionDelay: `${i * 50}ms`,
                }}
              >
                <button
                  onClick={() => goToCharacter(actualIndex)}
                  disabled={isTransitioning}
                  className={`group relative w-full x-out transform hover:-translate-y-2 disabled:opacity-50 ${
                    isActive ? "z-10" : "hover:z-10"
                  } ${isTransitioning ? "pointer-events-none" : ""}`}
                >
                  <div
                    className={`relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300`}
                  >
                    <div className="aspect-[3/4] overflow-hidden">
                      <img
                        src={
                          character.images && character.images.length > 0
                            ? character.images[0].src
                            : "/api/placeholder/200/267"
                        }
                        alt={
                          character.images && character.images.length > 0
                            ? character.images[0].alt
                            : character.name
                        }
                        className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ${
                          isTransitioning ? "scale-105 brightness-110" : ""
                        }`}
                      />
                    </div>

                    {isTransitioning && (
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_0.7s_ease-out] opacity-60"></div>
                    )}

                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
                        isActive
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100"
                      }`}
                    ></div>

                    <div
                      className={`absolute bottom-0 left-0 right-0 p-3 text-white transition-transform duration-300 ${
                        isActive
                          ? "translate-y-0"
                          : "translate-y-full group-hover:translate-y-0"
                      }`}
                    >
                      <h3 className="font-semibold text-base leading-tight">
                        {character.name}
                      </h3>
                      {character.stageName && (
                        <p className="text-xs text-gray-200 mt-1">
                          {character.stageName}
                        </p>
                      )}
                    </div>

                    {isActive && (
                      <div className="absolute top-3 right-3 w-3 h-3 rounded-full shadow-lg animate-pulse"></div>
                    )}
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>

      {/* <div className="flex justify-center space-x-2 mt-6">
        {characters.map((_, index) => (
          <button
            key={index}
            onClick={() => goToCharacter(index)}
            disabled={isTransitioning}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentCharacterIndex
                ? `${characters[currentCharacterIndex].textColor.replace(
                    "text-",
                    "bg-"
                  )} scale-125`
                : "bg-gray-300 hover:bg-gray-400"
            } disabled:opacity-50`}
          />
        ))}
      </div> */}
    </div>
  );
};

export default CharacterSelector;
