"use client";
import { MenuAnimation } from "./ping-lottie";
import { useDrawerContext } from "../context/drawerCtx";

type Props = {};

const DropDown = () => {
  const { openDrawer, setOpenDrawer } = useDrawerContext();
  const handleClick = () => {
    if (openDrawer) {
      setOpenDrawer(!openDrawer);
    } else {
      setOpenDrawer(!openDrawer);
    }
  };

  

  return (
    <div onClick={handleClick} className="z-20">
      <MenuAnimation isOpen={openDrawer} />
    </div>
  );
};

export { DropDown };
