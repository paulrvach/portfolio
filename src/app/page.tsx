"use client";
import React, { Suspense, useEffect, useState } from "react";
import { Flex } from "@radix-ui/themes";
import { ProjectSection, ResourceSection } from "./components";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col  items-center">
      <div className="w-[65%] h-screen flex justify-around mt-16">
        <ProjectSection  />
        <ResourceSection />
      </div>
    </div>
  );
}
