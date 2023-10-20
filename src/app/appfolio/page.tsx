"use client";
import { useEffect, Suspense, useState } from "react";
import CultureSection from "./culture-sections";
import ExperienceSection from "../lindy/experience-section";
import IntroSection from "./intro-section";
import { useThemeContext } from "../context/store";
import MeSection from "../lindy/me-sections";
import LogoScene from "./Appfolio-logo";
import { CursorArrowIcon } from "@radix-ui/react-icons";

const AppfolioApplication = () => {
  const [clicked, setClicked] = useState(true);
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <div className="w-full flex justify-between overflow-hidden">
      <div className="">
        <div id="intro-section" className="flex h-screen w-full">
          <IntroSection />
          <div className="relative w-full" onClick={() => setClicked(false)}>
            <LogoScene />
            {clicked ? (
              <div className="absolute w-full  animate-pulse top-[70%] left-1/2 ">
                <CursorArrowIcon className="w-6 h-6 inline" />
                Click and Drag{" "}
              </div>
            ) : null}
          </div>
        </div>
        <div id="experience-section" className="flex  w-full z-20">
          <ExperienceSection />
        </div>
        <div id="culture-section" className="flex  w-full">
          <CultureSection />
        </div>
        <div id="me-section" className="flex h-screen w-full">
          <MeSection />
        </div>
      </div>
    </div>
  );
};

export default AppfolioApplication;
