'use client';
import React from 'react';
import Spotlight from '../components/Spotlight';
import KineticType from '../components/KineticType';
type Props = {};

const HeroSectionDynamix = (props: Props) => {
  return (
    <Spotlight>
      <div className={`relative h-[400px] bg-blur rounded-3xl p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-slate-400 before:rounded-full before:opacity-20 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden `}>
        <div className='h-full w-full p-8 bg-zinc-400 bg-opacity-5 rounded-3xl border mix-blend-screen backdrop-blur-lg flex-col justify-center items-center '>
          <KineticType text={'SOFTWARE ENGINEER'} i={0} />
          <KineticType text={'CREATIVE DESIGN'} i={1} />
          <KineticType text={'CONTENT CREATOR'} i={2} />
        </div>
      </div>
    </Spotlight>
  );
};

export default HeroSectionDynamix;
