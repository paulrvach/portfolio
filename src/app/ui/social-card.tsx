import { ComponentProps } from "react";
import {
  Card,
  Text,
  Flex,
  Heading,
  Button,
  buttonPropDefs,
} from "@radix-ui/themes";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../utils/utils";
import Link from "next/link";
import { type Url } from "url";

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
  icon?: JSX.Element;
  fallback?: string;
  title: string;
  btnText: string | JSX.Element;
  href: string;
  btnVariant?: "classic" | "solid" | "soft" | "surface" | "outline" | "ghost";
  subHeader?: string | JSX.Element;
  btnColor?: (typeof buttonPropDefs)["color"]["default"];
}

const SocialCard = ({
  icon,
  fallback,
  colSpan,
  rowSpan,
  className,
  btnColor,
  title,
  btnText,
  btnVariant,
  children,
  href,
  subHeader,
  ...props
}: SocialCardProps) => {
  return (
    <Card
      className={cn(card({ colSpan, rowSpan }), className)}
      variant="surface"
      {...props}
    >
      <Flex direction={"column"} gap={"4"}>
        <Flex
          gap={"2"}
          direction={colSpan === "1" ? "column" : "row"}
          justify={"between"}
          p={"2"}
          align={"start"}
          height={colSpan === "1" ? "100%" : "max-content"}
        >
          <Flex justify={"start"} align={"center"} gap={"3"} width={"100%"}>
            {icon}
            <Heading as="h4" size="3" className="flex flex-col">
              {title}{" "}
              <Text size={"1"} weight={"light"}>
                {subHeader}
              </Text>
            </Heading>
          </Flex>
          <Flex justify={"end"} width={"100%"}>
            <Link href={href}>
              {btnText && (
                <Button
                  variant={btnVariant}
                  size={"2"}
                  className="w-min"
                  color={btnColor}
                >
                  {btnText}
                </Button>
              )}
            </Link>
          </Flex>
        </Flex>
        {children}
      </Flex>
    </Card>
  );
};

export { SocialCard };
export type { SocialCardProps };
