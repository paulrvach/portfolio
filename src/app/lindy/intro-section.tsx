import { useLayoutEffect, useRef } from "react";
import { Code, Text } from "@radix-ui/themes";
import Image from "next/image";
import { AnimationWrapper, Logo } from "ui";
import gsap from "gsap";
type Props = {};

const IntroSection = (props: Props) => {
  const refs = useRef<HTMLDivElement[]>([]);

  const introArray = [
    <Text key="hi" size={"8"}>
      Hello{" "}
      <Image
        className="inline"
        alt="lindy-logo"
        height={45}
        width={109}
        src="https://uploads-ssl.webflow.com/63e15df811f9df22b231e58f/641c7600bed5ae328afd205a_logo-website.svg"
      />
      !
    </Text>,
    <Text key="fit" size={"8"} className="flex gap-2">
      My name is 
      <Code className="flex">
        <Logo height="35" width="35" color="#9aede4" />
        Paul
      </Code>
      ,
    </Text>,
    <Text key="fit" size={"8"}>
      I'm a full stack software engineer.
    </Text>,
    <Text key="fit" size={"8"}>
      And this is why I think im the right fit for
    </Text>,
    <Code key="role" size={"8"}>
      Jr. Software Engineer, Full Stack
    </Code>,
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(refs.current, {
        y: 100,
        stagger: 0.2,
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-center gap-8">
      {introArray.map((intro, index) => (
        <AnimationWrapper
          key={`introSlide${index}`}
          ref={(ele) => {
            refs.current.push(ele as never);
          }}
        >
          {intro}
        </AnimationWrapper>
      ))}
    </div>
  );
};

export default IntroSection;
