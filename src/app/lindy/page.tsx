"use client";
import { useEffect, Suspense } from "react";
import CultureSection from "./culture-section";
import ExperienceSection from "./experience-section";
import IntroSection from "./intro-section";
import { useThemeContext } from "../context/store";

import LindyLogo from "./lindy-logo";

const LindyApplication = () => {
  const { setAccentColor } = useThemeContext();

  useEffect(() => {
    setAccentColor("blue");

    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, [setAccentColor]);

  return (
    <div className="w-full flex justify-between ">
      <div className="">
        <div id="intro-section" className="flex h-screen w-full">
          <IntroSection />
          {/* <LindyLogo /> */}
        </div>
        <div id="experience-section" className="flex  w-full z-20">
          <ExperienceSection />
        </div>
        <div id="culture-section" className="flex h-screen w-full">
          <CultureSection />
        </div>
      </div>
    </div>
  );
};

export default LindyApplication;
