"use client";
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import { useDrawerContext } from "../context/drawerCtx";
import gsap from "gsap";
import { Text } from "@radix-ui/themes";
import { cn } from "../utils/utils";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { ContactForm } from "../components";

const Drawer = () => {
  const [isMenuLayout, setIsMenuLayout] = useState(true);
  const [selected, setSelected] = useState<number | null>(null);
  const { openDrawer, setOpenDrawer } = useDrawerContext();
  const ref = useRef<HTMLDivElement>(null);
  const backScreenRef = useRef<HTMLDivElement>(null);
  const timeline = useRef<GSAPTimeline | null>(null);
  const menuItems = [
    { name: "Home", description: "Go to home page.", index: 1, href: "/" },
    {
      name: "About",
      description: "More info on me.",
      index: 2,
      href: "/about",
    },
    {
      name: "Contact",
      description: "Send me an email.",
      index: 3,
      href: "/contact",
    },
    { name: "Resume", description: "Hire me.", index: 4, href: "/" },
  ];

  useLayoutEffect(() => {
    timeline.current = gsap
      .timeline({ paused: true })
      .set(backScreenRef.current, { opacity: 0 });

    timeline.current.from(backScreenRef.current, {
      x: "100%",
      duration: 0.01,
      onComplete: () => {
        timeline.current?.to(backScreenRef.current, {
          opacity: 1,
          duration: 0.1,
        });
      },
    });
    timeline.current.from(ref.current, {
      x: 800,
      duration: 0.5, // Adjust the duration as needed
    });
  }, []);

  useEffect(() => {
    if (timeline.current) {
      openDrawer ? timeline.current.play() : timeline.current.reverse();
    }
  }, [openDrawer]);

  const handleHover = (number: typeof selected) => {
    setSelected(number);
  };
  const handleLeave = () => {
    setSelected(null);
  };

  return (
    <>
      <div
        className="fixed top-0 right-0 h-screen w-full lg:w-1/3 bg-[rgb(24,24,22)] dark:bg-white z-20 flex   items-center"
        ref={ref}
      >
        <div className="flex flex-col gap-8 text-white dark:text-[rgb(24,24,22)] select-none text-6xl w-full ">
          {isMenuLayout ? (
            menuItems.map((item) => (
              <MenuItem
                setOpenDrawer={setOpenDrawer}
                handleHover={handleHover}
                handleLeave={handleLeave}
                item={item}
                selected={selected}
                key={item.name}
                setIsMenuLayout={setIsMenuLayout}
              />
            ))
          ) : (
            <ContactInput setIsMenuLayout={setIsMenuLayout} />
          )}
        </div>
      </div>

      <div
        className="w-screen h-screen fixed bg-black/50 z-10 select-none top-0"
        ref={backScreenRef}
        onClick={() => setOpenDrawer(false)}
      />
    </>
  );
};

interface MenuItemProps {
  item: { name: string; description: string; index: number; href: string };
  selected: number | null;
  setOpenDrawer: Dispatch<SetStateAction<boolean>>;
  handleHover: (number: number | null) => void;
  handleLeave: () => void;
  setIsMenuLayout: Dispatch<SetStateAction<boolean>>;
}

function MenuItem({
  item,
  selected,
  setOpenDrawer,
  handleHover,
  handleLeave,
  setIsMenuLayout,
}: MenuItemProps) {
  const route = useRouter();

  const handleClick = (name: string) => {
    if (name !== "Contact") {
      setOpenDrawer(false);
      route.push(item.href);
    } else {
      setIsMenuLayout(false);
    }
  };

  return (
    <div className="relative " onClick={() => handleClick(item.name)}>
      <Text
        onMouseEnter={() => handleHover(item.index)}
        onMouseLeave={handleLeave}
        className=" pl-8"
      >
        <div
          className={cn(
            "transition-all duration-500 absolute w-full h-full bg-amber-400 dark:text-white text-[rgb(24,24,22)] pl-8"
          )}
          style={{
            clipPath:
              selected === item.index ? "inset(0 0 0)" : "inset(50% 0 50%)",
          }}
        >
          {item.name}
        </div>
        {item.name}
      </Text>
    </div>
  );
}

interface ContactInputProps {
  setIsMenuLayout: Dispatch<SetStateAction<boolean>>;
}

function ContactInput({ setIsMenuLayout }: ContactInputProps) {
  return (
    <div className="flex flex-col">
      
      <ArrowLeftIcon
        className="w-12 h-12  ml-9 z-30"
        onClick={() => {
          console.log("click")
          setIsMenuLayout(true)}}
      />
      <ContactForm />
    </div>
  );
}

export { Drawer };
