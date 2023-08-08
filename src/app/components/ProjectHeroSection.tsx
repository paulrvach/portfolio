import React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { GlobeIcon, GitHubLogoIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Spotlight from './Spotlight';
import Link from 'next/link';

type Props = {
  image: string;
  icon: string;
  text: string;
  title: string;
  date: string;
  responsibilities: string[];
  role: string;
  team: string[];
  repo: string;
  website: string;
};

const ProjectHeroSection = ({
  image,
  icon,
  text,
  title,
  date,
  responsibilities,
  role,
  team,
  repo,
  website,
}: Props) => {
  return (
    <div
      data-scroll
      data-scroll-speed='0.2'
      className=' flex flex-col-reverse gap-4 items-center my-24'
    >
      <div className='w-full'>
        <div className='flex flex-col  justify-start gap-4 whitespace-nowrap'>
          <Image
            src={icon}
            alt='asset-logo'
            className=''
            height={46}
            width={46}
          />
          <h1 className='text-5xl font-bold'>{title}</h1>
          <strong className='pb-4'>{date}</strong>
        </div>
        <div className='flex flex-col gap-4 lg:grid lg:grid-flow-col '>
          <div className='flex flex-col justify-between max-w-2xl'>
            <p className='w-full'>{text}</p>
            <div className='flex flex-row gap-4 text-slate-600 py-4'>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href={repo} className=' text-lg flex items-center bg-white p-2 rounded-lg shadow-md hover:shadow-xl gap-4 hover:text-primary transition-all duration-200'>
                      <GitHubLogoIcon className='w-6 h-6' />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{repo}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href={website} className=' text-lg flex items-center bg-white p-2 rounded-lg shadow-md hover:shadow-xl gap-4 hover:text-primary transition-all duration-200'>
                      <GlobeIcon className='w-6 h-6' />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{website}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
          <div className='flex flex-col gap-6'>
            <div>
              <strong className='text-justify tracking-wider'>ROLE</strong>
              <p>{role}</p>
            </div>
            <div>
              <strong className='text-justify tracking-wider'>
                RESPONSABILITIES
              </strong>
              {responsibilities.map((response) => (
                <p className='pt-2' key={response}>
                  {response}
                </p>
              ))}
            </div>
          </div>
          <div>
            <strong className='text-justify tracking-wider'>TEAM</strong>
            {team.map((teamates) => (
              <p className='pt-2' key={teamates}>
                {teamates}
              </p>
            ))}
          </div>
        </div>
      </div>
      <Spotlight className='w-full'>
        <div className='overflow-hidden w-full  h-[25vh] rounded-xl shadow-lg bg-slate-400'>
          <div className='  relative mix-blend-plus-lighter  w-full bg-blur rounded-3xl  p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-slate-400 before:rounded-full before:opacity-20 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-sky-500 after:rounded-full after:opacity-50 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-50 after:z-30 after:blur-[100px] ' />
          <img src={image} alt={title} className=' object-cover  z-10 w-full' />
        </div>
      </Spotlight>
    </div>
  );
};

export default ProjectHeroSection;
