import React, { SetStateAction } from 'react';

import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';
import Image from 'next/image';
import KafkaNimbus from '../sections/KafkaNimbus'

type Props = {
  title: string;
  active: string;
  key: string;
  index: number;
  id: string;
  handleClick: React.Dispatch<SetStateAction<string>>;
  icon: string;
  url: string;
};

const ProjectCard = ({
  title,
  active,
  handleClick,
  index,
  id,
  icon,
  url,
}: Props) => {
  let activeComponent = <KafkaNimbus />

  // `switch (active) {
  //   case 'project-1':

  // }`
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className={` relative ${
        active === id ? 'lg:flex-[4.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
      } flex items-end justify-start min-w-[70px] h-[90vh] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer bg-slate-600 bg-opacity-10 backdrop-blur-md rounded-xl overflow-hidden  before:border-inherit before:h-96 p-2 before:absolute before:-left-40 before:-top-40 before:w-96   before:opacity-20 before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] before:bg-white before:rounded-full after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] border`}
      onClick={() => handleClick(id)}
    >
      
      <div
        className={` opacity-30 absolute inset-0 -z-10 blur-xl`}
      />
      {active === id && activeComponent}

      {active !== id && (
        <div className='lg:rotate-[270deg]'>
          <h3 className='flex absolute align-middle items-center px-7 mt-4 gap-4 text-3xl whitespace-nowrap '>
            <Image src={icon} alt='icon' width={63} height={63} />
            {title}
          </h3>
        </div>
      )}
    </motion.div>
  );
};

export default ProjectCard;
