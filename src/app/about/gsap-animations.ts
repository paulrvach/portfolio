import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const textOnComplete: GSAPCallback = (
  element: HTMLDivElement[],
  y: number,
  trigger = "top",
  end = "+=350"
) => {
  return gsap.to(element, {
    y: y,
    scrollTrigger: {
      trigger: trigger,
      start: "top",
      end: end,
      scrub: true,
    },
  });
};
