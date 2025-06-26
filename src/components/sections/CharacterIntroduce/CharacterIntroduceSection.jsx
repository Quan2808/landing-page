import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { Heart, Star } from "lucide-react";
import useIntersectionObserver from "@hooks/useIntersectionObserver.js";
import CharacterSelector from "./CharacterSelector";
import CharacterContent from "./CharacterContent";

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
      {
        src: "https://lh3.googleusercontent.com/-jyh-V0vyUvM/Ye7I_NmTMnI/AAAAAAAAAyo/PzYDxXKCSIQp9ABSe8qdmTbyVZUi_W-KwCNcBGAsYHQ/s0/jack5.png",
        alt: "Cu Tứn - Portrait 1",
      },
      {
        src: "https://lh3.googleusercontent.com/-jbWkpbQmmFE/Ye7I-x9iZcI/AAAAAAAAAyk/96V_aAkhvAgLBAf9eSG6yASfutCML1hrACNcBGAsYHQ/s0/jack3.png",
        alt: "Cu Tứn - Portrait 2",
      },
      {
        src: "https://lh3.googleusercontent.com/-40iPf1W2LD4/Ye7JAsyQk0I/AAAAAAAAAyw/1UjXEeWOKMAv7sxdB0Y1XsHq9mSHYfERQCNcBGAsYHQ/s0/jack7.png",
        alt: "Cu Tứn - Portrait 3",
      },
      {
        src: "https://i.pinimg.com/736x/30/9f/83/309f8362d31d6d1a0314ae002b7f5ee9.jpg",
        alt: "Cu Tứn - Portrait 4",
      },
    ],
    name: "Cu Tứn",
    stageName: "Grandson of a Veteran",
    description:
      "A spirited 12-year-old in the supply team, Cù Tứn embodies courage beyond his years. As the grandson of a war veteran, he fearlessly navigates perilous battlefields to deliver ammunition, symbolizing unwavering bravery, patriotism, and gratitude to past generations.",
    achievements: [
      {
        icon: Star,
        title: "Heroic Service",
        description:
          "Valiantly delivered critical ammunition to soldiers amidst intense battlefield conditions.",
      },
      {
        icon: Heart,
        title: "National Inspiration",
        description:
          "Blends youthful innocence with fervent patriotism, earning admiration for his courage and devotion to the soldiers.",
      },
    ],
    bgColor: "from-blue-500 to-purple-600",
    textColor: "text-blue-600",
    badgeColor: "bg-blue-100 text-blue-800",
  },
  {
    id: 2,
    images: [
      {
        src: "https://images2.thanhnien.vn/528068263637045248/2025/1/19/thien-an-5-1737289482220376463340.jpg",
        alt: "Hai Liêm - Portrait 1",
      },
      {
        src: "https://hopamchuan.com/node/get_artist_image/thien_an",
        alt: "Hai Liêm - Portrait 2",
      },
      {
        src: "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/3/11/hot-girl-thien-an-2-1646961974863425050594.png",
        alt: "Hai Liêm - Portrait 3",
      },
      {
        src: "https://kenh14cdn.com/203336854389633024/2022/3/10/photo-1-1646877159734625292429-1646886618621490287081.jpeg",
        alt: "Hai Liêm - Portrait 4",
      },
    ],
    name: "Hai Liêm",
    stageName: "Platoon Leader",
    description:
      "A composed and seasoned platoon leader, Hai Liêm inspires his unit with steadfast leadership. Beneath his disciplined exterior lies a deep care for his comrades, particularly young Cù Tứn, whom he mentors with hope and trust on the fierce battlefield.",
    achievements: [
      {
        icon: Star,
        title: "Strategic Command",
        description:
          "Orchestrates platoon operations, formulates defense strategies, and sustains unit morale under pressure.",
      },
      {
        icon: Heart,
        title: "Compassionate Leadership",
        description:
          "Balances strict discipline with genuine care, fostering loyalty and hope, especially in guiding Cù Tứn.",
      },
    ],
    bgColor: "from-green-500 to-teal-600",
    textColor: "text-green-600",
    badgeColor: "bg-green-100 text-green-800",
  },
  {
    id: 3,
    images: [
      {
        src: "https://images2.thanhnien.vn/528068263637045248/2025/1/19/thien-an-5-1737289482220376463340.jpg",
        alt: "Anh Tư - Portrait 1",
      },
      {
        src: "https://hopamchuan.com/node/get_artist_image/thien_an",
        alt: "Anh Tư - Portrait 2",
      },
      {
        src: "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/3/11/hot-girl-thien-an-2-1646961974863425050594.png",
        alt: "Anh Tư - Portrait 3",
      },
      {
        src: "https://kenh14cdn.com/203336854389633024/2022/3/10/photo-1-1646877159734625292429-1646886618621490287081.jpeg",
        alt: "Anh Tư - Portrait 4",
      },
    ],
    name: "Anh Tư",
    stageName: "Platoon Leader II",
    description:
      "Anh Tư, the charismatic leader of Platoon II, uplifts his unit with humor and camaraderie. On the battlefield, he transforms into a resolute commander, prioritizing mission success while standing shoulder-to-shoulder with his team.",
    achievements: [
      {
        icon: Star,
        title: "Tactical Coordination",
        description:
          "Leads Platoon II in seamless combat support, coordinating effectively with Hai Liêm’s unit.",
      },
      {
        icon: Heart,
        title: "Inspirational Presence",
        description:
          "Infuses the battlefield with humor and warmth, yet commands with unwavering focus during combat.",
      },
    ],
    bgColor: "from-orange-500 to-red-600",
    textColor: "text-orange-600",
    badgeColor: "bg-orange-100 text-orange-800",
  },
  {
    id: 4,
    images: [
      {
        src: "https://images2.thanhnien.vn/528068263637045248/2025/1/19/thien-an-5-1737289482220376463340.jpg",
        alt: "Anh Sang - Portrait 1",
      },
      {
        src: "https://hopamchuan.com/node/get_artist_image/thien_an",
        alt: "Anh Sang - Portrait 2",
      },
      {
        src: "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/3/11/hot-girl-thien-an-2-1646961974863425050594.png",
        alt: "Anh Sang - Portrait 3",
      },
      {
        src: "https://kenh14cdn.com/203336854389633024/2022/3/10/photo-1-1646877159734625292429-1646886618621490287081.jpeg",
        alt: "Anh Sang - Portrait 4",
      },
    ],
    name: "Anh Sang",
    stageName: "Messenger",
    description:
      "Anh Sang serves as a vital messenger, swiftly relaying critical information between the front lines and command. His agility, sharp instincts, and composure under pressure make him an indispensable link in wartime operations.",
    achievements: [
      {
        icon: Star,
        title: "Critical Communication",
        description:
          "Delivers timely intelligence on enemy movements, enabling strategic decisions by commanders.",
      },
      {
        icon: Heart,
        title: "Steadfast Resolve",
        description:
          "Exhibits quick thinking and bravery, maintaining calm in the most harrowing situations.",
      },
    ],
    bgColor: "from-yellow-500 to-orange-600",
    textColor: "text-yellow-600",
    badgeColor: "bg-yellow-100 text-yellow-800",
  },
  {
    id: 5,
    images: [
      {
        src: "https://images2.thanhnien.vn/528068263637045248/2025/1/19/thien-an-5-1737289482220376463340.jpg",
        alt: "Anh Luân - Portrait 1",
      },
      {
        src: "https://hopamchuan.com/node/get_artist_image/thien_an",
        alt: "Anh Luân - Portrait 2",
      },
      {
        src: "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/3/11/hot-girl-thien-an-2-1646961974863425050594.png",
        alt: "Anh Luân - Portrait 3",
      },
      {
        src: "https://kenh14cdn.com/203336854389633024/2022/3/10/photo-1-1646877159734625292429-1646886618621490287081.jpeg",
        alt: "Anh Luân - Portrait 4",
      },
    ],
    name: "Anh Luân",
    stageName: "Platoon Soldier",
    description:
      "A young, valiant soldier in Hai Liêm’s platoon, Anh Luân fights with passion and loyalty. His bond with Cù Tứn, forged through timely ammunition deliveries in perilous moments, reflects his deep camaraderie and dedication.",
    achievements: [
      {
        icon: Star,
        title: "Frontline Valor",
        description:
          "Engages directly in combat, coordinating seamlessly with fellow soldiers to hold the line.",
      },
      {
        icon: Heart,
        title: "Loyal Comrade",
        description:
          "Embodies bravery and compassion, fiercely protecting his teammates in any circumstance.",
      },
    ],
    bgColor: "from-teal-500 to-cyan-600",
    textColor: "text-teal-600",
    badgeColor: "bg-teal-100 text-teal-800",
  },
  {
    id: 6,
    images: [
      {
        src: "https://images2.thanhnien.vn/528068263637045248/2025/1/19/thien-an-5-1737289482220376463340.jpg",
        alt: "Anh Hoang - Portrait 1",
      },
      {
        src: "https://hopamchuan.com/node/get_artist_image/thien_an",
        alt: "Anh Hoang - Portrait 2",
      },
      {
        src: "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/3/11/hot-girl-thien-an-2-1646961974863425050594.png",
        alt: "Anh Hoang - Portrait 3",
      },
      {
        src: "https://kenh14cdn.com/203336854389633024/2022/3/10/photo-1-1646877159734625292429-1646886618621490287081.jpeg",
        alt: "Anh Hoang - Portrait 4",
      },
    ],
    name: "Anh Hoang",
    stageName: "Enemy Commander",
    description:
      "Anh Hoang represents the formidable opposing forces at Quang Tri Citadel. Cold, calculating, and unrelenting, his presence intensifies the conflict, embodying the harsh realities and brutality of war.",
    achievements: [
      {
        icon: Star,
        title: "Formidable Adversary",
        description:
          "Leads aggressive assaults on allied strongholds, posing a relentless threat to our forces.",
      },
      {
        icon: Heart,
        title: "Symbol of Conflict",
        description:
          "Incarnates the ruthless and unyielding nature of war, marked by cold precision and ferocity.",
      },
    ],
    bgColor: "from-pink-500 to-rose-600",
    textColor: "text-pink-600",
    badgeColor: "bg-pink-100 text-pink-800",
  },
];

function CharacterCarousel() {
  const [sectionRef, isVisible] = useIntersectionObserver(0.3);
  const [currentCharacterIndex, setCurrentCharacterIndex] = React.useState(0);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [isTransitioning, setIsTransitioning] = React.useState(false);

  // Create ref for CharacterContent section
  const characterContentRef = React.useRef(null);

  const currentCharacter = characters[currentCharacterIndex];

  // Auto slide functionality for images
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === currentCharacter.images.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [currentCharacter.images.length]);

  // Reset image index when character changes
  React.useEffect(() => {
    setCurrentImageIndex(0);
  }, [currentCharacterIndex]);

  // Smooth scroll to CharacterContent
  const scrollToCharacterContent = () => {
    if (characterContentRef.current) {
      characterContentRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    }
  };

  const nextCharacter = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentCharacterIndex((prev) =>
        prev === characters.length - 1 ? 0 : prev + 1
      );
      setIsTransitioning(false);
      // Scroll to content after transition
      setTimeout(() => scrollToCharacterContent(), 100);
    }, 300);
  };

  const prevCharacter = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentCharacterIndex((prev) =>
        prev === 0 ? characters.length - 1 : prev - 1
      );
      setIsTransitioning(false);
      // Scroll to content after transition
      setTimeout(() => scrollToCharacterContent(), 100);
    }, 300);
  };

  const goToCharacter = (index) => {
    if (isTransitioning || index === currentCharacterIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentCharacterIndex(index);
      setIsTransitioning(false);
      // Scroll to content after transition
      setTimeout(() => scrollToCharacterContent(), 100);
    }, 300);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === currentCharacter.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? currentCharacter.images.length - 1 : prev - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className="relative py-20 " id="characters" ref={sectionRef}>
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
          characters={characters}
          currentCharacterIndex={currentCharacterIndex}
          isTransitioning={isTransitioning}
          nextCharacter={nextCharacter}
          prevCharacter={prevCharacter}
          goToCharacter={goToCharacter}
        />
      </div>

      {/* Pass ref to CharacterContent */}
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
