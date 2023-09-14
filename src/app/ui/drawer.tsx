"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import { useDrawerContext } from "../context/drawerCtx";
import gsap from "gsap";

type Props = {};

const Drawer = () => {
  const { openDrawer } = useDrawerContext();
  const ref = useRef<HTMLDivElement>(null);
  const timeline = useRef<GSAPTimeline | null>(null);

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });

    timeline.current.from(ref.current, {
      x: 800,
      duration: 0.5, // Adjust the duration as needed
    });
  }, []);

  useEffect(() => {
    if (timeline.current) {
      openDrawer ? timeline.current.reverse() : timeline.current.play();
    }
  }, [openDrawer]);

  return (
    <div className="fixed right-0 h-screen w-[800px]  bg-white z-10 " ref={ref}></div>
  );
};

export { Drawer };
