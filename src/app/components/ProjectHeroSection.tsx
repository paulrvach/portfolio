import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Spotlight, { SpotlightCard } from './Spotlight';

type Props = {
  image: string;
  icon: string;
  text: string;
  title: string;
};

const ProjectHeroSection = ({ image, icon, text, title }: Props) => {
  return (
    <div
      data-scroll
      data-scroll-speed='0.2'
      className='xl:grid xl:grid-flow-col flex flex-col-reverse gap-4 items-center  h-[60vh] xl:h-fit xl:pt-[84px] mb-48'
    >
      <div className='xl:w-10/12'>
        <div className='flex items-center justify-start gap-4 whitespace-nowrap'>
          <Image
            src={icon}
            alt='asset-logo'
            className=''
            height={46}
            width={46}
          />
          <h1 className='text-5xl font-bold'>{title}</h1>
        </div>
        <p className='py-6'>{text}</p>

        <div className='flex gap-4'>
          <Button variant={'secondary'}>Website</Button>
          <Button variant={'ghost'} className='flex gap-2 justify-center '>
            Learn More
            <ArrowRightIcon className='h-4 w-4' />
          </Button>
        </div>
      </div>
      <Spotlight>
        <div className='overflow-hidden  xl:h-[85vh] h-[25vh] rounded-xl '>
          <div className='  relative mix-blend-plus-lighter  bg-blur rounded-3xl  p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-slate-400 before:rounded-full before:opacity-20 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-sky-500 after:rounded-full after:opacity-50 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-50 after:z-30 after:blur-[100px] ' />
          <img
            src={image}
            alt={title}
            className=' object-cover xl:h-full z-10 '
          />
        </div>
      </Spotlight>
    </div>
  );
};

export default ProjectHeroSection;
