import React, { useLayoutEffect, useRef, createRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { projects } from '../../utils/projects';
import ProjectCard from '../components/ProjectCard';
import {
  QuestionMarkCircledIcon,
  ArrowTopLeftIcon,
} from '@radix-ui/react-icons';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

type SectionProps = {};

const ProjectSection = ({}: SectionProps) => {
  const refs = useRef(projects.map(() => React.createRef<HTMLLIElement>())); // Create an array of refs for HTMLLIElement

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.project-card', {
      y: '+=500',
      stagger: 0.1,
      ease: 'power4',
      scrollTrigger: {
        trigger: '.about',
        start: 'top top',
        end: '+=600',
        scrub: true,
        pin: true,
      },
    });
    gsap.from('.text-3xl', {
      x: '-=300',
      stagger: 0.8,
      scrollTrigger: {
        trigger: '.about',
        start: 'top top',
        end: '+=400',
        scrub: true,
        pin: true,
      },
    });
  });

  return (
    <div id='projects'>
      <h1 className='text-3xl font-semibold mb-4 px-4 text-slate-600 bg-transparent'>
        Featured Projects
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <QuestionMarkCircledIcon className='inline-block w-3 h-3 mb-5' />
            </TooltipTrigger>
            <TooltipContent>
              <p>
                <ArrowTopLeftIcon className='inline-block w-3 h-3' /> Click card
                for more details
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </h1>
      <ul className='flex flex-wrap justify-between'>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.active}
            project={project}
            layerRef={refs.current[index]}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProjectSection;
