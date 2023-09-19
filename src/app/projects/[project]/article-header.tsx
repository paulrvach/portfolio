"use client";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { Heading, Text } from "@radix-ui/themes";
import { Article } from "../../components";
import Image from "next/image";
import type { FromatedResponse } from "./page";

interface Props extends FromatedResponse {
  icon: { external: { url: string } };
  last_edited_time: Date;
}

function ArticleSectionVariants({
  icon,
  contribution,
  team,
  summary,
  responsabilities,
  name,
  last_edited_time,
}: Props): JSX.Element {
  const dataArray = [
    { team: team },
    { responsabilities: responsabilities },
    { contribution: contribution },
  ];
  const titleRef = useRef(null);
  const iconRef = useRef(null);
  const descriptionRefs = useRef<HTMLDivElement[] | null[]>([]);
  const animInRefs = useRef<HTMLDivElement[] | null[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        x: "-=200",
      });
      gsap.from(iconRef.current, {
        y: "+=200",
        opacity: 0,
        delay: 0.3,
      });

      gsap.from(
        descriptionRefs.current.map((ref) => ref),
        {
          stagger: 0.1,
          y: "+=50",
          opacity: 0,
          delay: 0.3,
        }
      );
      gsap.from(
        animInRefs.current.map((ref) => ref),
        {
          stagger: 0.1,
          x: "-=50",
          opacity: 0,
        }
      );
    });

    return () => ctx.revert();
  });
  return (
    <Article className="">
      <Article.Header date="August 31, 2023" ref={titleRef} title={name}>
        <div className="relative select-none" ref={iconRef}>
          <div className="overflow-hidden">
            <Image
              height={400}
              width={400}
              alt="img"
              src={icon.external.url}
              style={{ height: "64px", width: "64px" }}
              className="select-none "
            />
          </div>
          <Image
            height={400}
            width={400}
            alt="img"
            ref={iconRef}
            src={icon.external.url}
            style={{ height: "64px", width: "64px" }}
            className="select-none absolute blur-2xl mix-blend-soft-light -translate-y-[64px] -z-10"
          />
        </div>
      </Article.Header>
      <Article.Description
        className="w-full"
        description={summary}
        ref={(el): void => {
          animInRefs.current[0] = el;
        }}
      >
        {dataArray.map((topic) => {
          const title = Object.keys(topic)[0];
          const value = Object.values(topic)[0];
          const isArray = Array.isArray(value);
          return (
            <div key={title}>
              <Heading as="h3" className="pb-2" size="4">
                {title.toUpperCase()}
              </Heading>
              <div
                className="flex flex-col gap-1"
                ref={(el): void => {
                  descriptionRefs.current[0] = el;
                }}
              >
                {isArray ? (
                  value.map((item) => (
                    <Text size="2" key={item}>
                      {item}
                    </Text>
                  ))
                ) : (
                  <Text size={"2"}>{value}</Text>
                )}
              </div>
            </div>
          );
        })}
      </Article.Description>
    </Article>
  );
}

export default ArticleSectionVariants;
