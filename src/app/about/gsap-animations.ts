import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const textOnComplete = (
  element: HTMLDivElement[],
  y: number,
  trigger: HTMLDivElement | string | HTMLDivElement[] = "top",
  end = "+=350"
): GSAPCallback => {
  return () => {
    gsap.to(element, {
      y: y,
      scrollTrigger: {
        trigger: trigger,
        start: "top",
        end: end,
        scrub: true,
      },
    });
  };
};
