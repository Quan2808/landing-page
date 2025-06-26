import { useState, useEffect, useRef } from "react";

const useCharacterCarousel = (characters) => {
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const characterContentRef = useRef(null);
  const currentCharacter = characters[currentCharacterIndex];

  // Auto slide functionality for images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === currentCharacter.images.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [currentCharacter.images.length]);

  // Reset image index when character changes
  useEffect(() => {
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
      setTimeout(() => scrollToCharacterContent(), 100);
    }, 300);
  };

  const goToCharacter = (index) => {
    if (isTransitioning || index === currentCharacterIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentCharacterIndex(index);
      setIsTransitioning(false);
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

  return {
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
  };
};

export default useCharacterCarousel;
