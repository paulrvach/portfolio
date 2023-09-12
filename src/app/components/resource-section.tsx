import { HTMLAttributes } from "react";
import { Grid } from "@radix-ui/themes";
import { SocialCard } from "ui";

const ResourceSection = ({
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>): JSX.Element => {
  return (
    <div className="grid grid-cols-3 grid-rows-6 grid-flow-row gap-3 w-1/2" {...props}>
      <SocialCard
        btnText="follow"
        fallback="G"
        src="https://static-00.iconduck.com/assets.00/github-icon-2048x1988-jzvzcf2t.png"
        title="Github"
        colSpan={"2"}
        rowSpan={"3"}
      />
      <SocialCard
        btnText="follow"
        fallback="G"
        src="https://static-00.iconduck.com/assets.00/github-icon-2048x1988-jzvzcf2t.png"
        title="Github"
        colSpan={"1"}
        rowSpan={"1"}
      />
      <SocialCard
        btnText="follow"
        fallback="G"
        src="https://static-00.iconduck.com/assets.00/github-icon-2048x1988-jzvzcf2t.png"
        title="Github"
        colSpan={"1"}
        rowSpan={"1"}
      />
    </div>
  );
};

export { ResourceSection };
