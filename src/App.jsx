import React from "react";
import HeroSection from "./components/HeroSection";
import TeamsSection from "./components/TeamsSection";
import IntroduceSection from "./components/IntroduceSection";
import useSectionNavigation from "./hooks/useSectionNavigation";

function App() {
  const { NavigationButtons } = useSectionNavigation([
    "hero",
    "introduce",
    "teams",
  ]);

  return (
    <div className="relative">
      {/* Sections */}
      <div id="hero" className="min-h-screen">
        <HeroSection />
      </div>

      <div id="introduce" className="min-h-screen">
        <IntroduceSection />
      </div>

      <div id="teams" className="min-h-screen">
        <TeamsSection />
      </div>

      {/* Navigation buttons */}
      <NavigationButtons />
    </div>
  );
}

export default App;
