import React, { SetStateAction } from 'react';

import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';
import Image from 'next/image';
import googleICo from '../../../public/google-maps.png';

type Props = {
  title: string;
  active: string;
  key: string;
  index: number;
  id: string;
  handleClick: SetStateAction<string>;
  icon: string;
  background: string
};

const ProjectCard = ({
  title,
  active,
  handleClick,
  index,
  key,
  id,
  icon,
  background
}: Props) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className={` relative ${
        active === id ? 'lg:flex-[4.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
      } flex items-end justify-start min-w-[170px] h-[90vh] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer bg-slate-600 bg-opacity-10 backdrop-blur-md rounded-xl overflow-hidden`}
      onClick={() => handleClick(id)}
    >
        <Image alt='bg-image' src={background} fill={true} className='absolute h-full opacity-50'/>
      {active !== id && (
        <div className='lg:rotate-[270deg] '>
          <h3 className='flex absolute align-middle items-center px-7 mt-4 gap-4 text-3xl whitespace-nowrap  font-semibold '>
            <Image src={icon} alt='icon' width={63} height={63} />
            {title}
          </h3>
          </div>
      )}
    </motion.div>
  );
};

export default ProjectCard;
