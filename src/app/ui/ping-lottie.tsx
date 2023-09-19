"use client";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import Lottie, { useLottie } from "lottie-react";
import pingAnimation from "./animation_lmhbkf67.json";
import menuAnimation from "./animation_lmicqbk8.json";
import { Tooltip } from "@radix-ui/themes";

type Props = {
  isOpen: boolean;
};

const PingingAnimation = () => {
  return (
    <Lottie
      animationData={pingAnimation}
      loop={true}
      className="cursor-pointer"
    />
  );
};

function MenuAnimation({ isOpen }: Props) {
  const options = {
    animationData: menuAnimation,
    loop: false,
    autoplay: false,
  };

  const style = {
    height: "64px",
    width: "64px",
    scale: "800%",
  };

  const { View, playSegments } = useLottie(options, style);

  useEffect(() => {
    if (!isOpen) {
      playSegments([60, 100], true);
    } else {
      playSegments([10, 50], true);
    }
  }, [isOpen, playSegments]);

  return <>{View}</>;
}

export { PingingAnimation, MenuAnimation };
