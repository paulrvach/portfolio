import { HTMLAttributes } from "react";
import { GithubCard } from "./github-card";
import { SocialCard, PingingAnimation } from "@/src/app/ui";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";

const ResourceSection = ({
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>): JSX.Element => {
  return (
    <div
      className="grid grid-cols-2 xl:grid-cols-3 grid-rows-6 grid-flow-row gap-3 w-full xl:w-1/2 "
      {...props}
    >
      <SocialCard
        btnText=""
        href=""
        colSpan={"2"}
        title=""
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/dxmqknhgj/image/upload/v1694580504/Untitled_video_-_Made_with_Clipchamp_1_kq87qt.gif)",
          backgroundSize: "50%",
          // backgroundPositionX: '-170px',
          backgroundPositionY: "-50px",
        }}
      />
      <SocialCard
        btnText="View"
        href=""
        btnVariant="soft"
        colSpan={"1"}
        icon={
          <Image
            src="https://res.cloudinary.com/dxmqknhgj/image/upload/v1692744161/ButtonIcon-gray_yae3pe.png"
            alt="dribbble"
            className="w-12 h-12 rounded-lg"
            width={512}
            height={512}
          />
        }
        title="paperplane-ui"
      />
        <SocialCard
          btnText=""
          href=""
          rowSpan={"2"}
          title=""
          style={{
            backgroundImage:
              "url(https://res.cloudinary.com/dxmqknhgj/image/upload/v1694584803/Screenshot_2023-09-12_225950_cvmkck.png)",
            backgroundSize: "350%",
            backgroundPositionX: "-250px",
            backgroundPositionY: "-12pnpm 0px",
          }}
        >
          <PingingAnimation />
        </SocialCard>
      <GithubCard />
      <SocialCard
        btnText="connect"
        btnColor="blue"
        title="LinkedIn"
        icon={<LinkedInLogoIcon className="w-12 h-12 text-[rgb(10,102,194)]" />}
        href="https://www.linkedin.com/in/paul-vachon/"
        subHeader={"paul-vachon"}
        colSpan={"1"}
        rowSpan={"1"}
        btnVariant="soft"
        style={{ backgroundColor: "rgb(47,101,238,5%)" }}
      />

      <SocialCard
        btnText="follow"
        title="Dribble"
        icon={
          <Image
            src="https://www.vectorico.com/wp-content/uploads/2018/02/Dribbble-Ball-Icon-300x300.png"
            alt="dribbble"
            className="w-12 h-12 rounded-lg"
            width={512}
            height={512}
          />
        }
        href="https://dribbble.com/paulrvach"
        colSpan={"1"}
        rowSpan={"1"}
        btnVariant="soft"
        btnColor="pink"
        style={{ backgroundColor: "rgb(236,73,137,5%)" }}
      />
    </div>
  );
};

export { ResourceSection };
