"use client";
import {
  type HTMLAttributes,
  type RefObject,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react";
import type { Tech } from "../about/tech";
import { Avatar } from "@radix-ui/themes";
import gsap from "gsap";

interface ImageModalProps extends HTMLAttributes<HTMLDivElement> {
  selected: number | null;
  images: Tech[];
  parentDiv: RefObject<HTMLDivElement>;
}

function ImageModal({
  images,
  selected,
  parentDiv,
  ...props
}: ImageModalProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const timeline = useRef<GSAPAnimation>(gsap.timeline({ paused: true }));

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      timeline.current = gsap.from(containerRef.current, {
        scale: 0,
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    selected === null ? timeline.current.reverse() : timeline.current.play();
  }, [selected]);

  useEffect(() => {
    const moveContainerX = gsap.quickTo(containerRef.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    const moveContainerY = gsap.quickTo(containerRef.current, "y", {
      duration: 0.8,
      ease: "power3",
    });

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      if (parentDiv.current) {
        const containerRect = parentDiv.current.getBoundingClientRect();

        moveContainerX(clientX - containerRect.left / 2.5);
        moveContainerY(clientY - containerRect.top);
      }
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div
      className="h-16 w-16 absolute overflow-hidden flex items-center justify-center z-20 select-none pointer-events-none"
      ref={containerRef}
      {...props}
    >
      <div
        className="h-full w-full absolute transition-all duration-500"
        style={{ top: selected ? selected * -100 + "%" : "" }}
      >
        {images.map((image, index) => {
          const { src, name, fallback } = image;
          return (
            <div
              key={name}
              className="h-full w-full flex items-center justify-center"
            >
              <Avatar
                src={src}
                fallback={fallback}
                radius="medium"
                size={"4"}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export { ImageModal };
export type { ImageModalProps };
