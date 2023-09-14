import { type ComponentProps } from "react";
import {
  Card as RadixCard,
  Flex,
  Text,
  Box,
  Heading,
  Link as RadixLink,
} from "@radix-ui/themes";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

interface ProjectCardProps extends ComponentProps<typeof RadixCard> {
  contribution: string;
  title: string;
  description: string;
  href: string;
}

const ProjectCard = ({
  contribution,
  title,
  href,
  description,
  ...props
}: ProjectCardProps): JSX.Element => {
  return (
    <Link href={href}>
    <RadixCard
      {...props}
      variant="ghost"
      className="hover:bg-primary-foreground w-full select-none"
    >
      <Flex direction={"column"} gap={"2"}>
        <Box>
          <Text size="2">{contribution}</Text>
          <Heading weight="bold" as="h3" size={"3"}>
            {title}
          </Heading>
        </Box>
        <Box>
          <Text as="div" size="2" color="gray">
            {description}
          </Text>
          <RadixLink
            href={href}
            size="2"
            weight="bold"
            underline="auto"
            className="group"
          >
            Read More <ArrowTopRightIcon className="inline-block w-4 h-4 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
          </RadixLink>
        </Box>
      </Flex>
    </RadixCard>
    </Link>
  );
};

export { ProjectCard };
export type { ProjectCardProps };
