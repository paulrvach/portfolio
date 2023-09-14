import { Logo, DropDown } from "ui";
type Props = {};

const NavBar = (props: Props) => {
  return (
    <div className="h-14 items-center justify-center backdrop-blur-xl w-full fixed top-0 z-10">
      <div className="flex justify-between mx-8 md:mx-32 2xl:mx-80 h-full pt-3">
        <Logo height="64" width="64" />
        <DropDown />
      </div>
    </div>
  );
};

export { NavBar };
