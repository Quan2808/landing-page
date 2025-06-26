import { useState, useEffect } from "react";

const useSectionNavigation = (sectionIds = []) => {
  const [currentSection, setCurrentSection] = useState(0);

  const scrollToSection = (sectionIndex) => {
    const sectionId = sectionIds[sectionIndex];
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  const nextSection = () => {
    const next =
      currentSection < sectionIds.length - 1 ? currentSection + 1 : 0;
    setCurrentSection(next);
    scrollToSection(next);
  };

  const prevSection = () => {
    const prev =
      currentSection > 0 ? currentSection - 1 : sectionIds.length - 1;
    setCurrentSection(prev);
    scrollToSection(prev);
  };

  const goToSection = (index) => {
    setCurrentSection(index);
    scrollToSection(index);
  };

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const sectionElements = sectionIds.map((id) =>
        document.getElementById(id)
      );

      sectionElements.forEach((element, index) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          const sectionCenter = rect.top + rect.height / 2;
          const screenCenter = windowHeight / 2;

          if (Math.abs(sectionCenter - screenCenter) < windowHeight / 3) {
            setCurrentSection(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds]);

  return { currentSection, nextSection, prevSection, goToSection };
};

export default useSectionNavigation;
