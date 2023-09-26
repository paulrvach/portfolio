import Image from "next/image";
import { Text } from "@radix-ui/themes";
import {
  GitHubLogoIcon,
  KeyboardIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
type Props = {};

const Identity = (props: Props) => {
  return (
    <div className="w-full h-96 grid grid-cols-5 grid-rows-2 grid-flow-col gap-2">
      <div className="col-span-1 row-span-2 rounded-xl bg-amber-400 overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dxmqknhgj/image/upload/v1691169386/DD4580EF-6A04-4FAF-B11A-8C32B62075FA_qidgxh.jpg"
          alt="me"
          height={2000}
          width={2503}
          className="object-cover h-full w-full"
        />
      </div>
      <div className="col-span-2 row-span-2 rounded-xl bg-primary text-secondary p-5">
        <div className="flex flex-col justify-between w-full h-full">
          <h2 className="flex flex-wrap text-[64px] leading-none ">
            FRONTEND & DESIGN ENGINEER
          </h2>
          <div className="flex flex-row w-full items-center justify-between">
            <div className="flex flex-col">
              <Text size={"4"} weight={"light"}>
                Design-Driven Developer
              </Text>
              <Text size={"4"} weight={"light"}>
                Crafting User Experiences
              </Text>
            </div>
            <KeyboardIcon className="w-10 h-10" />
          </div>
        </div>
      </div>
      <div className="col-span-2 row-span-1 rounded-xl bg-amber-400">
        <div className="flex flex-col items-start p-5 justify-between h-full">
          <div className="flex flex-row w-full justify-between">
            <Text size={"4"}>Free and Open Source Repos.</Text>
            <GitHubLogoIcon className="w-12 h-12" />
          </div>
          <Link href="https://github.com/paulrvach" className="hover:underline cursor-pointer text-5xl">
            GITHUB
          </Link>
        </div>
      </div>
      <div className="col-span-1 row-span-1 rounded-xl bg-amber-400">
        <div className="flex flex-col items-start p-5 justify-between h-full">
          <div className="flex flex-row w-full justify-between">
            <Text size={"4"}>Check out my latest designs.</Text>
          </div>
          <Link href="https://dribbble.com/paulrvach" className="hover:underline cursor-pointer text-3xl">
            DRIBBBLE
          </Link>
        </div>
      </div>
      <div className="col-span-1 row-span-1 rounded-xl bg-secondary">
        <div className="flex flex-col items-start p-5 justify-between h-full">
          <div className="flex flex-row w-full justify-between">
            <Text size={"4"}>Let&apos;s connect.</Text>
            <LinkedInLogoIcon className="w-12 h-12" />
          </div>
          <Link href="https://www.linkedin.com/in/paul-vachon/" className="hover:underline cursor-pointer text-3xl">
            LINKEDIN
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Identity;
