"use client";
import { projects } from "../utils/data";
import { ProjectCard } from "ui";
import { Flex } from "@radix-ui/themes";

const ProjectSection = () => {
  return (
    <Flex direction={"column"} gap={"6"} className="w-1/2">
      {projects.map((project) => (
        <ProjectCard
          contribution={project.contribution}
          description={project.description}
          title={project.title}
          href={project.href}
          key={project.href}
        />
      ))}
    </Flex>
  );
};

export { ProjectSection };
