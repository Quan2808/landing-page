import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { Heart, Star } from "lucide-react";
import CharacterSelector from "./CharacterSelector";
import CharacterContent from "./CharacterContent";
import useCharacterCarousel from "@hooks/useCharacterCarousel.js";
import useIntersectionObserver from "@hooks/useIntersectionObserver.js";

// Cu Tuan
import cuTuan1 from "@images/characters/Cu-Tuan/cu-tuan-1.webp";
import cuTuan2 from "@images/characters/Cu-Tuan/cu-tuan-2.webp";
import cuTuan3 from "@images/characters/Cu-Tuan/cu-tuan-3.webp";
import cuTuan4 from "@images/characters/Cu-Tuan/cu-tuan-4.webp";

// Hai Liem
import haiLiem1 from "@images/characters/Hai-Liem/hai-liem-1.webp";
import haiLiem2 from "@images/characters/Hai-Liem/hai-liem-2.webp";
import haiLiem3 from "@images/characters/Hai-Liem/hai-liem-3.webp";
import haiLiem4 from "@images/characters/Hai-Liem/hai-liem-4.webp";

// Anh Tu
import anhTu1 from "@images/characters/Anh-Tu/anh-tu-1.webp";
import anhTu2 from "@images/characters/Anh-Tu/anh-tu-2.webp";
import anhTu3 from "@images/characters/Anh-Tu/anh-tu-3.webp";
import anhTu4 from "@images/characters/Anh-Tu/anh-tu-4.webp";

// Anh Sang
import anhSang1 from "@images/characters/Anh-Sang/anh-sang-1.webp";
import anhSang2 from "@images/characters/Anh-Sang/anh-sang-2.webp";
import anhSang3 from "@images/characters/Anh-Sang/anh-sang-3.webp";
import anhSang4 from "@images/characters/Anh-Sang/anh-sang-4.webp";

// Anh Lan (for Anh Luân)
import anhLan1 from "@images/characters/Anh-Lan/anh-lan-1.webp";
import anhLan2 from "@images/characters/Anh-Lan/anh-lan-2.webp";
import anhLan3 from "@images/characters/Anh-Lan/anh-lan-3.webp";
import anhLan4 from "@images/characters/Anh-Lan/anh-lan-4.webp";

// Linh Nguy (for Anh Hoang)
import linhNguy1 from "@images/characters/Linh-Nguy/linh-nguy-1.webp";
import linhNguy2 from "@images/characters/Linh-Nguy/linh-nguy-2.webp";
import linhNguy3 from "@images/characters/Linh-Nguy/linh-nguy-3.webp";
import linhNguy4 from "@images/characters/Linh-Nguy/linh-nguy-4.webp";

// Mock intersection observer hook
// const useIntersectionObserver = (threshold) => {
//   const [isVisible, setIsVisible] = React.useState(false);
//   const ref = React.useRef(null);

//   React.useEffect(() => {
//     const timer = setTimeout(() => setIsVisible(true), 100);
//     return () => clearTimeout(timer);
//   }, []);

//   return [ref, isVisible];
// };

const characters = [
  {
    id: 1,
    images: [
      { src: cuTuan1, alt: "Cu Tứn - Portrait 1" },
      { src: cuTuan2, alt: "Cu Tứn - Portrait 2" },
      { src: cuTuan3, alt: "Cu Tứn - Portrait 3" },
      { src: cuTuan4, alt: "Cu Tứn - Portrait 4" },
    ],
    name: "Cu Tứn",
    stageName: "Grandson of a Veteran",
    description:
      "Spirited 12-year-old in the supply team, delivering ammunition with courage and patriotism, honoring his veteran grandfather.",
    achievements: [
      {
        icon: Star,
        title: "Heroic Service",
        description:
          "Delivered critical ammunition under intense battlefield conditions.",
      },
      {
        icon: Heart,
        title: "National Inspiration",
        description:
          "Blends youthful innocence with patriotism, earning admiration.",
      },
    ],
    bgColor: "from-blue-500 to-purple-600",
    textColor: "text-blue-600",
    badgeColor: "bg-blue-100 text-blue-800",
  },
  {
    id: 2,
    images: [
      { src: haiLiem1, alt: "Hai Liêm - Portrait 1" },
      { src: haiLiem2, alt: "Hai Liêm - Portrait 2" },
      { src: haiLiem3, alt: "Hai Liêm - Portrait 3" },
      { src: haiLiem4, alt: "Hai Liêm - Portrait 4" },
    ],
    name: "Hai Liêm",
    stageName: "Platoon Leader",
    description:
      "Composed leader mentoring Cù Tứn, balancing discipline with care on the battlefield.",
    achievements: [
      {
        icon: Star,
        title: "Strategic Command",
        description: "Orchestrates platoon operations and sustains morale.",
      },
      {
        icon: Heart,
        title: "Compassionate Leadership",
        description: "Fosters loyalty and hope, guiding Cù Tứn.",
      },
    ],
    bgColor: "from-green-500 to-teal-600",
    textColor: "text-green-600",
    badgeColor: "bg-green-100 text-green-800",
  },
  {
    id: 3,
    images: [
      { src: anhTu1, alt: "Anh Tư - Portrait 1" },
      { src: anhTu2, alt: "Anh Tư - Portrait 2" },
      { src: anhTu3, alt: "Anh Tư - Portrait 3" },
      { src: anhTu4, alt: "Anh Tư - Portrait 4" },
    ],
    name: "Anh Tư",
    stageName: "Platoon Leader II",
    description:
      "Charismatic leader of Platoon II, using humor and resolve to command effectively.",
    achievements: [
      {
        icon: Star,
        title: "Tactical Coordination",
        description: "Leads Platoon II in seamless combat support.",
      },
      {
        icon: Heart,
        title: "Inspirational Presence",
        description: "Infuses warmth yet commands with focus.",
      },
    ],
    bgColor: "from-orange-500 to-red-600",
    textColor: "text-orange-600",
    badgeColor: "bg-orange-100 text-orange-800",
  },
  {
    id: 4,
    images: [
      { src: anhSang1, alt: "Anh Sang - Portrait 1" },
      { src: anhSang2, alt: "Anh Sang - Portrait 2" },
      { src: anhSang3, alt: "Anh Sang - Portrait 3" },
      { src: anhSang4, alt: "Anh Sang - Portrait 4" },
    ],
    name: "Anh Sang",
    stageName: "Messenger",
    description:
      "Swift messenger relaying critical information with agility and composure.",
    achievements: [
      {
        icon: Star,
        title: "Critical Communication",
        description: "Delivers timely intelligence for strategic decisions.",
      },
      {
        icon: Heart,
        title: "Steadfast Resolve",
        description: "Maintains calm in harrowing situations.",
      },
    ],
    bgColor: "from-yellow-500 to-orange-600",
    textColor: "text-yellow-600",
    badgeColor: "bg-yellow-100 text-yellow-800",
  },
  {
    id: 5,
    images: [
      { src: anhLan1, alt: "Anh Luân - Portrait 1" },
      { src: anhLan2, alt: "Anh Luân - Portrait 2" },
      { src: anhLan3, alt: "Anh Luân - Portrait 3" },
      { src: anhLan4, alt: "Anh Luân - Portrait 4" },
    ],
    name: "Anh Luân",
    stageName: "Platoon Soldier",
    description:
      "Valiant soldier in Hai Liêm’s platoon, loyal and bonded with Cù Tứn.",
    achievements: [
      {
        icon: Star,
        title: "Frontline Valor",
        description: "Engages in combat, holding the line.",
      },
      {
        icon: Heart,
        title: "Loyal Comrade",
        description: "Protects teammates with bravery and compassion.",
      },
    ],
    bgColor: "from-teal-500 to-cyan-600",
    textColor: "text-teal-600",
    badgeColor: "bg-teal-100 text-teal-800",
  },
  {
    id: 6,
    images: [
      { src: linhNguy1, alt: "Anh Hoang - Portrait 1" },
      { src: linhNguy2, alt: "Anh Hoang - Portrait 2" },
      { src: linhNguy3, alt: "Anh Hoang - Portrait 3" },
      { src: linhNguy4, alt: "Anh Hoang - Portrait 4" },
    ],
    name: "Anh Hoang",
    stageName: "Enemy Commander",
    description:
      "Cold, calculating enemy commander at Quang Tri Citadel, embodying war’s brutality.",
    achievements: [
      {
        icon: Star,
        title: "Formidable Adversary",
        description: "Leads aggressive assaults on allied strongholds.",
      },
      {
        icon: Heart,
        title: "Symbol of Conflict",
        description: "Represents war’s ruthless nature with precision.",
      },
    ],
    bgColor: "from-pink-500 to-rose-600",
    textColor: "text-pink-600",
    badgeColor: "bg-pink-100 text-pink-800",
  },
];

function CharacterCarousel() {
  const [sectionRef, isVisible] = useIntersectionObserver(0.3);
  const {
    currentCharacter,
    currentCharacterIndex,
    currentImageIndex,
    isTransitioning,
    characterContentRef,
    nextCharacter,
    prevCharacter,
    goToCharacter,
    nextImage,
    prevImage,
    goToImage,
  } = useCharacterCarousel(characters);

  return (
    <section
      className="relative isolate overflow-hidden px-6 py-20"
      id="characters"
      ref={sectionRef}
    >
      {/* Character Navigation */}
      <div className="container mx-auto px-4 max-w-7xl mb-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Character Gallery
          </h1>
          <p className="text-lg text-gray-600">
            Discover the stories behind the personalities
          </p>
        </div>
        {/* Character Selector */}
        <CharacterSelector
          isVisible={isVisible}
          characters={characters}
          currentCharacterIndex={currentCharacterIndex}
          isTransitioning={isTransitioning}
          nextCharacter={nextCharacter}
          prevCharacter={prevCharacter}
          goToCharacter={goToCharacter}
        />
      </div>

      {/* Character Content */}
      <CharacterContent
        ref={characterContentRef}
        sectionRef={sectionRef}
        isVisible={isVisible}
        isTransitioning={isTransitioning}
        currentCharacter={currentCharacter}
        currentImageIndex={currentImageIndex}
        nextImage={nextImage}
        prevImage={prevImage}
        goToImage={goToImage}
      />

      {/* Progress Indicator */}
      <div className="container mx-auto px-4 max-w-7xl mt-12">
        <div className="flex justify-center">
          <div className="flex space-x-2">
            {characters.map((_, index) => (
              <div
                key={index}
                className={`h-1 transition-all duration-300 rounded-full ${
                  index === currentCharacterIndex
                    ? `w-8 bg-gradient-to-r ${currentCharacter.bgColor}`
                    : "w-4 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CharacterCarousel;
