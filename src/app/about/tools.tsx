"use client";
import { Avatar, Button, Heading, Text } from "@radix-ui/themes";
import { technologies } from "./tech";
import { useState, useRef } from "react";
import { MenuItem, ImageModal } from "ui";
import localFont from "next/font/local";
import { Lato } from "next/font/google";
import { ArrowRightIcon } from "@radix-ui/react-icons";


const lato = Lato({ subsets: ["latin"], weight: ["400", "700", "900"] });

export const sfPro = localFont({
  src: [
    {
      path: "../../../public/SF-Pro-Text-Regular.otf",
      weight: "400",
    },
  ],
});

type Props = {};

const Tools = (props: Props) => {
  const [selected, setSelected] = useState<number | null>(null);
  const containerDiv = useRef<HTMLDivElement>(null);

  const handleHover = (number: typeof selected) => {
    setSelected(number);
  };
  const handleLeave = () => {
    setSelected(null);
  };

  return (
    <div className="w-full h-screen mt-24">
      <div className="w-full grid grid-flow-col grid-cols-2">
        <Heading as="h2" className="col-span-1 px-4 py-2" weight={"light"} size={"7"}>
          Contributions
        </Heading>
        <Heading as="h2" className="col-span-1 px-4 py-2" weight={"light"} size={"7"}>
          Technologies
        </Heading>
      </div>
      <div className="w-full h-4/5 grid-flow-col gap-2 grid grid-cols-2 grid-rows-4">
        <div
          className="col-span-1 row-span-2 rounded-2xl overflow-hidden bg-cover bg-backdropFilter-blur"
          style={{
            backgroundImage:
              'url("https://res.cloudinary.com/dxmqknhgj/image/upload/v1695244022/background_djecy3.png")',
          }}
        >
          <div className="w-full h-full p-5 overflow-hidden text-secondary">
            <div className="h-full flex flex-col justify-between">
              <div className="h-full flex w-full justify-center flex-col items-center text-slate-700">
                <Avatar
                  src="https://res.cloudinary.com/dxmqknhgj/image/upload/v1692744161/ButtonIcon-gray_yae3pe.png"
                  fallback="pp-ui"
                  radius="none"
                />
                <Heading
                  className={`${sfPro.className} backdrop-blur-lg`}
                  size={"7"}
                >
                  paperplane-ui
                </Heading>
                <Text>creator & maintainer</Text>
              </div>
              <div className="flex w-full items-end justify-end pr-2">
                <Button variant="ghost" size={"3"}>
                  go to website <ArrowRightIcon className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-span-1 row-span-2 rounded-2xl overflow-hidden bg-cover bg-backdropFilter-blur"
          style={{
            backgroundImage:
              'url("https://res.cloudinary.com/dxmqknhgj/image/upload/v1695251796/Frame_42_mgjmv3.png")',
          }}
        >
          <div className="w-full h-full p-5 overflow-hidden text-secondary">
            <div className="h-full flex flex-col justify-between">
              <div className="h-full flex w-full justify-center flex-col items-center text-black">
                <Avatar
                  src="https://res.cloudinary.com/dxmqknhgj/image/upload/v1688926766/kafka-nimbus-logo_lwqint.png"
                  fallback="kafka"
                  radius="none"
                />
                <Heading
                  className={`${lato.className} backdrop-blur-lg`}
                  size={"7"}
                >
                  Kafka Nimbus
                </Heading>
                <Text>maintainer</Text>
              </div>
              <div className="flex w-full items-end justify-end pr-2">
                <Button variant="ghost" size={"3"}>
                  go to website <ArrowRightIcon className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="col-span-1 row-span-4  rounded-2xl overflow-scroll"
          ref={containerDiv}
        >
          <ImageModal
            selected={selected}
            images={technologies}
            parentDiv={containerDiv}
          />
          <div className="p-5 ">
            {technologies.map((tech, index) => (
              <MenuItem
                description={tech.description}
                onMouseOver={() => handleHover(index)}
                onMouseLeave={handleLeave}
                index={index}
                name={tech.name}
                selected={selected}
                key={tech.name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
