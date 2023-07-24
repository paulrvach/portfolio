'use client';
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { projects } from '../../utils/projects';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowTopRightIcon } from '@radix-ui/react-icons';

type CardProps = {
  project: (typeof projects)[0];
};

const ProjectCard = ({ project }: CardProps) => {
  const [demo, setDemo] = useState(false);

  const onHoverHander = () => {
    setDemo(true);
  };

  const onLeaveHandler = () => {
    setDemo(false);
  };

  const onClickHandler = () => {};

  return (
    <li className='w-full md:w-1/2 lg:w-1/4 mb-4 px-2 '>
      <a
        href={`/${project.active}`}
        onMouseOver={onHoverHander}
        onMouseLeave={onLeaveHandler}
      >
        <Card className='border-0 '>
          <CardHeader className='p-2 '>
            <div className='relative'>
              <img
                src={project.img}
                alt={project.active}
                className='rounded-md transition duration-100 hover:-translate-y-2'
              />
              {demo ? (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className='absolute bottom-3 transition-all duration-100 right-1'>
                      <Button variant={'secondary'} onClick={onClickHandler}>
                        <ArrowTopRightIcon className='w-4 h-4' />
                        Demo
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{project.demo}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ) : null}
            </div>
            <CardFooter className='p-0 gap-2 pb-2'>
              {project.tech.map((badge) => (
                <Badge variant='default' key={badge}>
                  {badge}
                </Badge>
              ))}
            </CardFooter>
            <CardTitle className='text-lg'>{project.title}</CardTitle>
            <CardDescription className='text-xs'>
              {project.description}
            </CardDescription>
          </CardHeader>
        </Card>
      </a>
    </li>
  );
};

export default ProjectCard;
