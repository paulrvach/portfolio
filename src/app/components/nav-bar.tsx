'use client'
import { Logo, DropDown } from "ui";
type Props = {};

const NavBar = (props: Props) => {
  return (
    <div className="h-18 backdrop-blur-xl fixed top-0 z-30  pt-3 w-full overflow-hidden" >
      <div className="flex justify-between  mx-8 md:mx-32 2xl:mx-40">
        <Logo height="64" width="64" />
        <DropDown />
      </div>
    </div>
  );
};

export { NavBar };
