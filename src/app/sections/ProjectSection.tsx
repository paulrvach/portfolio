import React, { Dispatch, useState } from 'react';
import { projects } from '../../utils/projects';
import ProjectCard from '../components/ProjectCard';
import { QuestionMarkCircledIcon, ArrowTopLeftIcon } from '@radix-ui/react-icons';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

type SectionProps = {};

const ProjectSection = ({}: SectionProps) => {
  return (
    <div id='projects'>
      <h1 className='text-3xl font-semibold mb-4 px-4'>
        Featured Projects
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <QuestionMarkCircledIcon className='inline-block w-3 h-3 mb-5' />
            </TooltipTrigger>
            <TooltipContent>
              <p><ArrowTopLeftIcon className='inline-block w-3 h-3'/> Click card for more details</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </h1>
      <ul className='flex flex-wrap justify-between'>
        {projects.map((project) => (
          <ProjectCard key={project.active} project={project} />
        ))}
      </ul>
    </div>
  );
};

export default ProjectSection;
