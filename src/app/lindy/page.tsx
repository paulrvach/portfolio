"use client";
import { useEffect } from "react";
import CultureSection from "./culture-section";
import ExperienceSection from "./experience-section";
import IntroSection from "./intro-section";
import { useThemeContext } from "../context/store";

const LindyApplication = () => {
  const { setAccentColor } = useThemeContext()

  useEffect(() => {
    setAccentColor('teal');

    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, [setAccentColor]);

  return (
    <div className="">
      <div id="intro-section" className="flex h-screen w-full">
        <IntroSection />
      </div>
      <div id="experience-section" className="flex h-screen w-full">
        <ExperienceSection />
      </div>
      <div id="culture-section" className="flex h-screen w-full">
        <CultureSection />
      </div>
    </div>
  );
};

export default LindyApplication;
