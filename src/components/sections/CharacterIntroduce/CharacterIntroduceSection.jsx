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

const characters = [
  {
    id: 1,
    images: [
      { src: cuTuan4, alt: "Cu Tứn - Portrait 1" },
      { src: cuTuan1, alt: "Cu Tứn - Portrait 4" },
      { src: cuTuan3, alt: "Cu Tứn - Portrait 3" },
      { src: cuTuan2, alt: "Cu Tứn - Portrait 2" },
    ],
    name: "Cu Tuấn",
    stageName: "Cháu nội của một cựu chiến binh",
    description:
      "Một cậu bé 12 tuổi thuộc đội tiếp tế, là cháu nội của cựu chiến binh. Dù nhỏ tuổi, cậu gan dạ, nhanh nhẹn, thường băng qua khói lửa tiếp đạn cho chiến sĩ. Cậu là biểu tượng của niềm tin, lòng dũng cảm và sự biết ơn thế hệ cha ông.",
    achievements: [
      {
        icon: Star,
        title: "Nhiệm vụ",
        description:
          "Làm nhiệm vụ tiếp tế đạn dược cho các chiến sĩ giữa chiến trường khốc liệt.",
      },
      {
        icon: Heart,
        title: "Tính cách",
        description:
          "Can đảm, lanh lợi, yêu nước nồng nàn, giàu tinh thần trách nhiệm. rất tôn trọng và ngưỡng mộ các chiến sĩ. Có sự pha trộn giữa sự ngây thơ trẻ con và lòng yêu nước mạnh mẽ.",
      },
    ],
    bgColor: "from-blue-500 to-purple-600",
    textColor: "text-blue-600",
    badgeColor: "bg-blue-100 text-blue-800",
  },
  {
    id: 2,
    images: [
      { src: haiLiem3, alt: "Hai Liêm - Portrait 1" },
      { src: haiLiem4, alt: "Hai Liêm - Portrait 4" },
      { src: haiLiem1, alt: "Hai Liêm - Portrait 3" },
      { src: haiLiem2, alt: "Hai Liêm - Portrait 2" },
    ],
    name: "Hai Liêm",
    stageName: "Trung đội trưởng",
    description:
      "Hai Liêm, trung đội trưởng điềm đạm và dày dạn kinh nghiệm, luôn giữ vững tinh thần đơn vị. Sau vẻ nghiêm nghị là sự quan tâm sâu sắc, đặc biệt dành cho Cu Tuấn – mầm xanh ông âm thầm đặt nhiều kỳ vọng giữa chiến trường khốc liệt.",
    achievements: [
      {
        icon: Star,
        title: "Nhiệm vụ",
        description:
          "Chỉ huy trung đội, điều phối lực lượng, đưa ra chiến lược phòng thủ và giữ vững tinh thần chiến đấu.",
      },
      {
        icon: Heart,
        title: "Tính cách",
        description:
          "Trách nhiệm cao, đôi lúc nghiêm nghị nhưng rất bao dung và quan tâm đến chiến sĩ dưới quyền, đặc biệt là Cu Tuấn.",
      },
    ],
    bgColor: "from-green-500 to-teal-600",
    textColor: "text-green-600",
    badgeColor: "bg-green-100 text-green-800",
  },
  {
    id: 3,
    images: [
      { src: anhTu4, alt: "Anh Tư - Portrait 1" },
      { src: anhTu1, alt: "Anh Tư - Portrait 4" },
      { src: anhTu2, alt: "Anh Tư - Portrait 2" },
      { src: anhTu3, alt: "Anh Tư - Portrait 3" },
    ],
    name: "Anh Tư",
    stageName: "Trung đội trưởng đội 2",
    description:
      "Trung đội trưởng đơn vị 2, anh Tư thân thiện, hài hước, mang lại tiếng cười giữa chiến trường. Khi vào trận, anh trở nên nghiêm túc, quyết đoán và luôn sát cánh cùng đồng đội, đặt nhiệm vụ lên hàng đầu.",
    achievements: [
      {
        icon: Star,
        title: "Nhiệm vụ",
        description:
          "Chỉ huy đơn vị phối hợp hỗ trợ chiến đấu; kết nối và phối hợp với trung đội của Hai Liêm.",
      },
      {
        icon: Heart,
        title: "Tính cách",
        description:
          "Hài hước, thân thiện, hay trêu đùa tạo không khí vui vẻ giữa chiến trường, nhưng nghiêm túc khi chiến đấu.",
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
    stageName: "Chiến sĩ đưa tin",
    description:
      "Là chiến sĩ đưa tin có nhiệm vụ kết nối thông tin giữa tiền tuyến và chỉ huy. Với sự nhanh nhạy, tỉnh táo và bản lĩnh, anh là mắt xích quan trọng giúp duy trì sự liên lạc và phối hợp tác chiến hiệu quả. Sự xuất hiện của anh luôn gắn liền với tốc độ, chính xác và tinh thần cảnh giác cao độ.",
    achievements: [
      {
        icon: Star,
        title: "Nhiệm vụ",
        description:
          "Truyền đạt tin tức từ tiền tuyến, cung cấp thông tin về kế hoạch tấn công của địch cho chỉ huy.",
      },
      {
        icon: Heart,
        title: "Tính cách",
        description:
          "Nhanh trí, dũng cảm, điềm tĩnh, luôn bình tĩnh trước những tình huống căng thẳng.",
      },
    ],
    bgColor: "from-yellow-500 to-orange-600",
    textColor: "text-yellow-600",
    badgeColor: "bg-yellow-100 text-yellow-800",
  },
  {
    id: 5,
    images: [
      { src: anhLan4, alt: "Anh Luân - Portrait 4" },
      { src: anhLan2, alt: "Anh Luân - Portrait 2" },
      { src: anhLan3, alt: "Anh Luân - Portrait 3" },
      { src: anhLan1, alt: "Anh Luân - Portrait 1" },
    ],
    name: "Anh Luân",
    stageName: "Chiến sĩ thuộc trung đội của Hai Liêm",
    description:
      "là một chiến sĩ trẻ của trung đội, gan dạ và giàu tình cảm, trực tiếp tham gia chiến đấu nơi tiền tuyến, có tinh thần đồng đội sâu sắc và từng được cu Tuấn kịp thời tiếp đạn trong lúc nguy cấp, từ đó hình thành mối gắn bó đặc biệt giữa hai người",
    achievements: [
      {
        icon: Star,
        title: "Nhiệm vụ",
        description:
          "Tham gia trực tiếp chiến đấu, phối hợp tác chiến cùng các chiến sĩ khác.",
      },
      {
        icon: Heart,
        title: "Tính cách",
        description:
          "Quả cảm, sống tình nghĩa, giàu lòng nhân ái, sẵn sàng bảo vệ đồng đội trong mọi hoàn cảnh.",
      },
    ],
    bgColor: "from-teal-500 to-cyan-600",
    textColor: "text-teal-600",
    badgeColor: "bg-teal-100 text-teal-800",
  },
  {
    id: 6,
    images: [
      { src: linhNguy4, alt: "Anh Hoang - Portrait 4" },
      { src: linhNguy1, alt: "Anh Hoang - Portrait 1" },
      { src: linhNguy2, alt: "Anh Hoang - Portrait 2" },
      { src: linhNguy3, alt: "Anh Hoang - Portrait 3" },
    ],
    name: "Anh Hoang",
    stageName: "Quân địch",
    description:
      "Là đại diện cho lực lượng đối lập trong cuộc chiến. Nhân vật này mang hình ảnh nguy hiểm, lạnh lùng và khó lường, xuất hiện trong những tình huống căng thẳng, góp phần đẩy cao xung đột và thể hiện rõ sự tàn khốc, gay cấn của chiến tranh.",
    achievements: [
      {
        icon: Star,
        title: "Nhiệm vụ",
        description:
          "Tấn công cứ điểm của ta trong trận càn lớn, là mối đe dọa trực tiếp đến các chiến sĩ của ta.",
      },
      {
        icon: Heart,
        title: "Tính cách",
        description:
          "Lạnh lùng, tàn bạo, không nhân nhượng; là biểu tượng của sự ác liệt, phi nhân trong chiến tranh.",
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
        <div
          className={`text-center mb-8"  transition-all duration-1000 ease-in-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Giới thiệu nhân vật
          </h1>
          <p className="text-lg text-gray-600">
            Khám phá những câu chuyện đằng sau những nhân vật
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
