"use client";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import Lottie, { useLottie } from "lottie-react";
import pingAnimation from "./animation_lmhbkf67.json";
import menuAnimation from "./animation_lmicqbk8.json";

type Props = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
};

const PingingAnimation = (props: Props) => {
  return <Lottie animationData={pingAnimation} loop={true} />;
};

function MenuAnimation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const options = {
    animationData: menuAnimation,
    loop: false,
    autoplay: false,
  };

  const style = {
    height: "56px",
    width: "56px",
    scale: "800%",
    stroke: "hsl(43.15,100%,65.1%)",
    strokeWidth: "5px",
  };

  const { View, playSegments } = useLottie(options, style);

  const handleClick = () => {
    if (isOpen) {
      playSegments([60, 100], true);
      setIsOpen(!isOpen);
    } else {
      playSegments([10, 50], true);
      setIsOpen(!isOpen);
    }
  };


  return <div onClick={handleClick}>{View}</div>;
}

export { PingingAnimation, MenuAnimation };
