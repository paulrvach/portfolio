"use client";
import React, { Suspense, useEffect, useState } from "react";
import { ProjectCard } from "./ui";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <div className="overflow-x-hidden flex flex-col justify-center items-center bg-slate-200 max-w-[65ch]">
      <ProjectCard
        contribution="Software Engineer"
        description="Animated Component Library"
        title="paperplane-ui"
        href=""
      />
      <ProjectCard
        contribution="Software Engineer"
        description="Animated Component Library"
        title="paperplane-ui"
        href=""
      />
      <ProjectCard
        contribution="Software Engineer"
        description="Animated Component Library"
        title="paperplane-ui"
        href=""
      />
    </div>
  );
}
