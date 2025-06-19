import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TeamsSection from "./components/TeamsSection";
import IntroduceSection from "./components/IntroduceSection";
import useSectionNavigation from "./hooks/useSectionNavigation";
import TechnicalSection from "./components/TechnicalSection";

function App() {
  const { NavigationButtons } = useSectionNavigation([
    "hero",
    "TechnicalSection",
    "introduce",
    "teams",
  ]);

  return (
    <div className="relative">
      <Header />
      {/* Sections */}

      <div id="hero" className="min-h-screen">
        <HeroSection />
      </div>

      <div id="TechnicalSection" className="min-h-screen">
        <TechnicalSection></TechnicalSection>
      </div>

      <div id="introduce" className="min-h-screen">
        {/* <TechnicalSection></TechnicalSection> */}
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
