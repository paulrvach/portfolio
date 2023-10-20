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
      Hi {" "}
      <Image
        className="inline"
        alt="lindy-logo"
        height={45}
        width={109}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/AppFolio%2C_Inc._Wordmark%2C_2021.svg/2560px-AppFolio%2C_Inc._Wordmark%2C_2021.svg.png"
      />
      !
    </Text>,
    <Text key="fit" size={"8"} className="flex gap-2">
      My name is
      <div className="flex ">
        <Logo height="35" width="35" color="#08428d" />
        Paul,
      </div>
    </Text>,
    <Text key="fit" size={"8"}>
      {"I'm a full stack software engineer."}
    </Text>,
    <Text key="fit" size={"8"}>
      And this is why I think im the right fit for 
    </Text>,
    <Text key="role" size={"8"}>
      Software Engineer II - Investment Management role.
    </Text>,
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
