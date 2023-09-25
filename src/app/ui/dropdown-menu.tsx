"use client";
import { MenuAnimation } from "./ping-lottie";
import { useDrawerContext } from "../context/drawerCtx";


const DropDown = () => {
  const { openDrawer, setOpenDrawer } = useDrawerContext();
  const handleClick = () => {
    if (openDrawer) {
      setOpenDrawer(false);
    } else {
      setOpenDrawer(true);
    }
  };

  

  return (
    <div onClick={handleClick} className="z-20 cursor-pointer">
      <MenuAnimation isOpen={openDrawer} />
    </div>
  );
};

export { DropDown };
