import React from "react";
import useIntersectionObserver from "@hooks/useIntersectionObserver.js";

const useCharacterCarousel = (characters) => {
  // State management
  const [sectionRef, isVisible] = useIntersectionObserver(0.3);
  const [currentCharacterIndex, setCurrentCharacterIndex] = React.useState(0);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [isTransitioning, setIsTransitioning] = React.useState(false);

  // Ref for scrolling to character content
  const characterContentRef = React.useRef(null);

  // Current character based on index
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
        block: "start",
        inline: "nearest",
      });
    }
  };

  // Navigation functions for characters
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

  // Navigation functions for images
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
    sectionRef,
    isVisible,
    characterContentRef,
    currentCharacter,
    currentCharacterIndex,
    currentImageIndex,
    isTransitioning,
    nextCharacter,
    prevCharacter,
    goToCharacter,
    nextImage,
    prevImage,
    goToImage,
  };
};
