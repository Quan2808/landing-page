import React from "react";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
  StarIcon,
  TrophyIcon,
} from "@heroicons/react/20/solid";
import { Music } from "lucide-react";

// import { MusicalNoteIcon } from "@heroicons/24/outline";

// Mock intersection observer hook
const useIntersectionObserver = (threshold) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return [ref, isVisible];
};

const character = {
  src: "https://lh3.googleusercontent.com/-jyh-V0vyUvM/Ye7I_NmTMnI/AAAAAAAAAyo/PzYDxXKCSIQp9ABSe8qdmTbyVZUi_W-KwCNcBGAsYHQ/s0/jack5.png",
  name: "Trịnh Trần Phương Tứn",
  stageName: "Jack - J97",
  description:
    'Better known by his stage name Jack – J97 (or simply Jack), is a Vietnamese singer, songwriter, rapper, and actor. He gained significant popularity after the release of his song "Hồng nhan" in early 2019. He was previously part of the hip-hop group G5R.',
  achievements: [
    {
      icon: TrophyIcon,
      title: "Award Winner",
      description:
        "Multiple awards including three from the Green Wave Awards and four from the Zing Music Awards",
    },
    {
      icon: StarIcon,
      title: "Asian Recognition",
      description:
        'First Vietnamese artist to win an Asian Television Award for Best Music Video Act with "Hoa hải đường"',
    },
    {
      icon: Music,
      title: "Music Career",
      description:
        "Talented singer, songwriter, rapper, and actor with millions of fans across Asia",
    },
  ],
};

function CharacterIntroduce() {
  const [sectionRef, isVisible] = useIntersectionObserver(0.3);

  return (
    <section className="relative py-20 " id="about" ref={sectionRef}>
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Content Row */}
        <div className="flex flex-wrap items-center justify-center gap-y-16 lg:gap-y-0">
          <div className="w-full lg:w-6/12 xl:w-5/12">
            {/* Section Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Character Introduction
            </div>

            {/* Main Heading */}
            <div className="space-y-3">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                {character.name}
              </h2>
              <p className="text-xl text-blue-600 font-semibold pb-10">
                {character.stageName}
              </p>
            </div>

            {/* Image Column */}
            <div
              className={`text-center transition-all duration-1000 ease-out transform ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-blue-100 rounded-3xl transform rotate-3"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                  <img
                    src={character.src}
                    alt="Character"
                    className="mx-auto max-w-full h-auto rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="w-full lg:w-6/12 xl:w-5/12 lg:pl-12">
            <div
              className={`space-y-8 transition-all duration-1000 ease-out transform ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              {/* Description */}
              <p className="text-lg text-gray-600 leading-relaxed">
                {character.description}
              </p>

              {/* Achievements Grid */}
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
                  {character.achievements.map((achievement, index) => (
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
                        <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                          <achievement.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-700 transition-colors duration-300">
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
    </section>
  );
}

export default CharacterIntroduce;
