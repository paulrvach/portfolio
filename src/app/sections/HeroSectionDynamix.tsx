'use client'
import React from 'react';
import Spotlight, { SpotlightCard } from '../components/Spotlight';
import KineticType from '../components/KineticType';
type Props = {};

const HeroSectionDynamix = (props: Props) => {
  return (
    <Spotlight >
      <SpotlightCard className='h-[345px]'>
        <div className='h-full w-full p-8 bg-zinc-400 bg-opacity-5 rounded-3xl border backdrop-blur-lg flex-col justify-between items-start inline-flex'>
        <KineticType />
        </div>
      </SpotlightCard>
    </Spotlight>
  );
};

export default HeroSectionDynamix;
