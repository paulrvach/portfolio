import { type ComponentProps } from "react";
import {
  Card as RadixCard,
  Flex,
  Text,
  Box,
  Heading,
  Link,
} from "@radix-ui/themes";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

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
    <RadixCard {...props} variant="ghost">
      <Flex direction={"column"} gap={"2"}>
        <Box>
          <Text>{contribution}</Text>
          <Heading weight="bold" as="h3" size={"5"}>
            {title}
          </Heading>
        </Box>
        <Box>
          <Text as="div" size="2" color="gray">
            {description}
          </Text>
          <Link
            href={href}
            size="2"
            weight="bold"
            underline="auto"
            className="select-none"
          >
            Read More <ArrowTopRightIcon className="inline w-3 h-3" />
          </Link>
        </Box>
      </Flex>
    </RadixCard>
  );
};

export { ProjectCard };
