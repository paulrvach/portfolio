"use client";
import { ProjectCard } from "@/src/app/ui";
import { Flex } from "@radix-ui/themes";
import { type NotionProperties } from "../layout";

const ProjectSection = ({ params }: { params: NotionProperties[] | null}) => {
  return (
    <Flex direction={"column"} gap={"6"} className={`w-full xl:w-1/2 `}>
      {params?.map((project) => (
        <ProjectCard
          contribution={project.contribution}
          description={project.description}
          title={project.name}
          href={`/${project.id}`}
          key={project.name}
        />
      ))}
    </Flex>
  );
};

export { ProjectSection };
