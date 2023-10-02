import {
  useLayoutEffect,
  type HTMLAttributes,
  useRef,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { Text } from "@radix-ui/themes";
import { cn } from "../utils/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useInView } from "react-intersection-observer";

interface ExperienceSectionProps extends HTMLAttributes<HTMLDivElement> {
  heading: string;
  description: string;
  video: string;
  setCurrentVideo: Dispatch<SetStateAction<string>>;
}
const ExperienceSlide = ({
  heading,
  description,
  className,
  video,
  setCurrentVideo,
  ...props
}: ExperienceSectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [ref, inView] = useInView({ threshold: 0.8 });

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(containerRef.current, {
        opacity: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "-=300",
          end: "top",
          scrub: true,
          onEnter: () => {
            setCurrentVideo(video);
          },
        },
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    inView && setCurrentVideo(video);
  }, [inView, video, setCurrentVideo]);

  return (
    <div
      className={cn(
        "flex flex-col h-screen w-full gap-4 justify-center",
        className
      )}
      ref={containerRef}
      {...props}
    >
      <Text size={"3"} ref={ref}>
        {heading}:
      </Text>
      <Text size={"8"}>{description}</Text>
    </div>
  );
};

ExperienceSlide.displayName = "ExperienceSlide";

export default ExperienceSlide;
