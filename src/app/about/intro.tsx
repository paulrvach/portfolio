"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Button, Text } from "@radix-ui/themes";
import gsap from "gsap";
import { AnimationWrapper } from "ui";

const Intro = () => {
  const nameRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement[]>([]);
  const aboutMe = ["🄰", "B", "O", "Ü", "T", " ", "ᛖ", "ℰ"];
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(nameRef.current, {
        y: 200,
        duration: 1,
      });

      gsap.from(aboutRef.current, {
        y: 200,
        stagger: 0.2,
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className="realtive flex items-center w-full h-screen">
      <div className="relative w-full h-2/3  rounded-xl text-center border-4">
        <div className="flex flex-col items-center justify-center w-full h-full p-8">
          <AnimationWrapper ref={nameRef}>
            <Text size={"5"} weight={"light"}>
              Paul Vachon
            </Text>
          </AnimationWrapper>
          <div className="flex flex-row">
            {aboutMe.map((letter, index) => (
              <AnimationWrapper
                ref={(ele) => {
                  aboutRef.current?.push(ele as never);
                }}
                key={letter}
              >
                <span className="text-[64px] lg:text-[126px]">{letter}</span>
              </AnimationWrapper>
            ))}</div>
          <Button variant="soft">software engineer</Button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
