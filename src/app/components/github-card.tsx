"use client";
import { useEffect, useState } from "react";
import { SocialCard } from "ui";
import { Flex, Tooltip } from "@radix-ui/themes";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/utils";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const squareVariants = cva(
  "h-5 w-5 rounded-md select-none hover:border-2 hover:border-primary",
  {
    variants: {
      variant: {
        "0": "bg-primary-foreground",
        "1": "bg-emerald-950",
        "2": "bg-emerald-800",
        "3": "bg-emerald-700",
        "4": "bg-emerald-500",
        "5": "bg-emerald-400",
        "6": "bg-emerald-300",
      },
    },
  }
);

interface SquareProps extends VariantProps<typeof squareVariants> {
  date: string;
  className?: string;
  contributions: number;
}

function Square({ contributions, variant, date }: SquareProps): JSX.Element {
  return (
    <Tooltip
      content={`${contributions} Contributions on ${date}`}
      className="w-full h-full"
    >
      <div className={cn(squareVariants({ variant }))} />
    </Tooltip>
  );
}

type ContributionDays = {
  contributionCount: number;
  date: string;
};

type ContributionsCollection = {
  contributionCalendar: {
    totalContributions: number;
    weeks: {
      contributionDays: Array<ContributionDays>;
    }[];
  };
};

function GithubCard() {
  const array = new Array(78).fill(
    <div className="w-5 h-5 animate-pulse bg-slate-900 select-none rounded-md hover:border-primary" />
  );
  const [contributions, setContributions] = useState<
    (typeof Square)[] | typeof array
  >(array);

  const fetchData = async () => {
    try {
      const data = await fetch("/api/github");
      const response = await data.json();
      return response.data.user.contributionsCollection.contributionCalendar;
    } catch (error) {
      return error;
    }
  };

  // useEffect(() => {
  //   fetchData()
  //     .then((data) => {
  //       const len = data.weeks.length;
  //       return data.weeks
  //         .slice(len - 14, len)
  //         .reduce(
  //           (
  //             accumulator: ContributionsCollection["contributionCalendar"]["weeks"],
  //             currentValue: { contributionDays: ContributionDays[] } 
  //           ) => [...accumulator, ...currentValue.contributionDays],
  //           []
  //         );
  //     })
  //     .then((result) => {
  //       return result.map((obj: ContributionDays) => {
  //         const amount =
  //           obj.contributionCount >= 6 ? "6" : obj.contributionCount.toString();
  //         return (
  //           <Square
  //             contributions={obj.contributionCount}
  //             date={obj.date}
  //             variant={amount as never}
  //             key={obj.date}
  //           />
  //         );
  //       });
  //     })
  //     .then((nodesArray: (typeof Square)[]) => {
  //       console.log(nodesArray);
  //       setContributions(
  //         nodesArray.slice(nodesArray.length - 78, nodesArray.length)
  //       );
  //     });
  // }, []);

  return (
    <SocialCard
      btnText="View"
      btnColor='green'
      btnVariant="soft"
      subHeader="@paulrvach"
      fallback="G"
      icon={<GitHubLogoIcon className="w-12 h-12" />}
      title="Github"
      colSpan={"2"}
      rowSpan={"2"}
      href="https://github.com/paulrvach"
      style={{backgroundColor: "rgba(1,4,9,5%)"}}
    >
      <Flex wrap={"wrap"} gap={"2"} justify={"center"} className="">
        {contributions ? contributions : null}
      </Flex>
    </SocialCard>
  );
}

export { GithubCard };
