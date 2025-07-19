import React from "react";
import { Header, Footer, SectionNavigation } from "@components/common";
import {
  HeroSection,
  TeamsSection,
  IntroduceSection,
  TechnicalSection,
  CharacterIntroduceSection,
  BrandIntroductionSection,
} from "@components/sections";

function App() {
  const { NavigationButtons } = SectionNavigation([
    "hero",
    "BrandIntroduction",
    "introduce",
    "characterIntroduce",
    "teams",
    "Technical",
  ]);

  return (
    <div className="relative scroll-smooth md:scroll-auto scrollbar-hide">
      <Header />
      {/* Sections */}

      <div id="hero" className="min-h-screen">
        <HeroSection />
      </div>

      <div id="BrandIntroduction" className="min-h-screen">
        <BrandIntroductionSection></BrandIntroductionSection>
      </div>

      <div id="introduce" className="min-h-screen">
        <IntroduceSection />
      </div>

      <div id="characterIntroduce" className="min-h-screen">
        <CharacterIntroduceSection />
      </div>

      <div id="teams" className="min-h-screen">
        <TeamsSection />
      </div>

      <div id="Technical" className="min-h-screen">
        <TechnicalSection></TechnicalSection>
      </div>

      {/* Navigation buttons */}
      {/* <NavigationButtons /> */}

      <Footer></Footer>
    </div>
  );
}

export default App;
