import React from "react";
import { Header, SectionNavigation } from "@components/common";
import {
  HeroSection,
  TeamsSection,
  IntroduceSection,
  TechnicalSection,
} from "@components/sections";

function App() {
  const { NavigationButtons } = SectionNavigation([
    "hero",
    "introduce",
    "teams",
    "Technical",
  ]);

  return (
    <div className="relative">
      <Header />
      {/* Sections */}

      <div id="hero" className="min-h-screen">
        <HeroSection />
      </div>

      <div id="introduce" className="min-h-screen">
        {/* <TechnicalSection></TechnicalSection> */}
        <IntroduceSection />
      </div>

      <div id="teams" className="min-h-screen">
        <TeamsSection />
      </div>

      <div id="Technical" className="min-h-screen">
        <TechnicalSection></TechnicalSection>
      </div>

      {/* Navigation buttons */}
      <NavigationButtons />
    </div>
  );
}

export default App;
