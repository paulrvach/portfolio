import { ComponentProps } from "react";
import { Card, Avatar, Box, Flex, Heading, Button } from "@radix-ui/themes";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../utils/utils";

const card = cva("", {
  variants: {
    colSpan: {
      "1": "col-span-1",
      "2": "col-span-2",
      "3": "col-span-3",
      "4": "col-span-4",
    },
    rowSpan: {
      "1": "row-span-1",
      "2": "row-span-2",
      "3": "row-span-3",
      "4": "row-span-4",
    },
  },
  defaultVariants: {
    colSpan: "1",
    rowSpan: "1",
  },
});

interface SocialCardProps
  extends ComponentProps<typeof Card>,
    VariantProps<typeof card> {
  src: string;
  fallback?: string;
  title: string;
  btnText: string | JSX.Element;
  href?: string;
  btnVariant?: "classic" | "solid" | "soft" | "surface" | "outline" | "ghost";
}

const SocialCard = ({
  src,
  fallback,
  colSpan,
  rowSpan,
  className,
  title,
  btnText,
  btnVariant,
  children,
  ...props
}: SocialCardProps) => {
  return (
    <Card className={cn(card({ colSpan, rowSpan }), className)} {...props}>
      <Flex
        gap={"2"}
        direction={colSpan === "1" ? "column" : "row"}
        justify={"between"}
        p={"2"}
        align={"start"}
        height={"100%"}
      >
        <Flex justify={"start"} align={"center"} gap={"2"}>
          <Avatar src={src} fallback={fallback ? fallback : ""} size={"2"}/>
          <Heading as="h4" size="3">
            {title}
          </Heading>
        </Flex>
        <Flex justify={"end"} width={"100%"}>
        <Button variant={btnVariant} size={"2"} className="w-min">
          {btnText}
        </Button>
      </Flex>
      </Flex>
      {children}
    </Card>
  );
};

export { SocialCard };
export type { SocialCardProps };
