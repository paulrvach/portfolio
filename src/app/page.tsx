"use client";
import React, { Suspense, useEffect, useState } from "react";
import { ThemeSelector } from "./components/theme-selector";
import { ProjectSection, ResourceSection, HeroSection } from "./components";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <div className="">
      <HeroSection />
      <div className=" flex flex-col gap-16 xl:flex-row mt-16 ">
        <ProjectSection />
        <ResourceSection />
      </div>
      <ThemeSelector />
    </div>
  );
}
