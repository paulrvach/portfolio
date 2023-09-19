import { useEffect, useLayoutEffect, useRef } from "react";
import { MaskedText } from "ui";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { textOnComplete } from "./gsap-animations";

const About = () => {
  const hello = ["Hello!", "I'm Paul"];
  const who = [
    "I'm a 24 year old.",
    "Software engineer",
    "Based out of Los Angeles, CA",
  ];
  const about = [
    "I'm all about",
    "Creative engineering &",
    "Practical design.",
  ];

  const professionally = [
    "Professionally,",
    "I work on teams that like to think outside of the box,",
    "Building meaningful products in new and exciting spaces.",
  ];
  const personally = [
    "Personally,",
    "When I'm not working,",
    "I'm in the creative flow,",
    "making electronic music in Ableton &",
    "crafting 3D visuals in Blender and Unreal Engine",
    "for my musician friends who are on tour.",
  ];

  const excel = [
    "I excel at bringing organization and systemization to chaotic environments and always take the initiative to build genuine connections with those around me.",
  ];

  const parentRef = useRef<HTMLDivElement>(null);
  const helloRef = useRef<HTMLDivElement[]>([]);
  const whoRef = useRef<HTMLDivElement[]>([]);
  const aboutRef = useRef<HTMLDivElement[]>([]);
  const professionallyRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(helloRef.current, {
        y: 100,
        stagger: 0.1,
        onComplete: () =>
          textOnComplete(helloRef.current, -50, parentRef.current),
      });

      gsap.from(whoRef.current, {
        y: -55,
        stagger: 0.1,
        scrollTrigger: {
          trigger: parentRef.current,
          start: "+=100",
          end: "+=350px",
          scrub: true,
        },
        onComplete: () =>
          textOnComplete(whoRef.current, -70, helloRef.current, "+=150"),
      });
      gsap.from(aboutRef.current, {
        y: -170,
        stagger: 0.1,
        scrollTrigger: {
          trigger: whoRef.current,
          start: "+=400px",
          end: "+=350px",
          scrub: true,
        },
        onComplete: () =>
          textOnComplete(aboutRef.current, -70, whoRef.current, "+=150"),
      });
      gsap.from(professionallyRef.current, {
        y: -170,
        stagger: 0.1,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "+=1150",
          end: "+=550px",
          scrub: true,
          markers: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="w-full flex items-start gap-2 justify-center flex-col"
      ref={parentRef}
    >
      <div className="h-screen w-full" />
      <div className="h-screen w-full " />
      <div className="h-screen w-full " />
      <div className="fixed top-1/2 transform -translate-y-1/2 ">
        {hello.map((text, index) => (
          <MaskedText
            size="8"
            text={text}
            key={text}
            ref={(ele) => helloRef.current.push(ele as never)}
          />
        ))}
      </div>
      <div className="fixed top-1/2 transform -translate-y-1/2 ">
        {who.map((text, index) => (
          <MaskedText
            size="8"
            text={text}
            key={text}
            ref={(ele) => whoRef.current.push(ele as never)}
          />
        ))}
      </div>
      <div className="fixed top-1/2 transform -translate-y-1/2 ">
        {about.map((text, index) => (
          <MaskedText
            size="8"
            text={text}
            key={text}
            ref={(ele) => aboutRef.current.push(ele as never)}
          />
        ))}
      </div>
      <div className="fixed top-1/2 transform -translate-y-1/2 ">
        {professionally.map((text, index) => (
          <MaskedText
            size="8"
            text={text}
            key={text}
            ref={(ele) => professionallyRef.current.push(ele as never)}
          />
        ))}
      </div>
    </div>
  );
};

// Using forwardRef to forward the ref to the underlying div element

export default About;
