'use client';
import React, { useEffect, useState } from 'react';
import ProjectSection from './sections/ProjectSection';
import dynamic from 'next/dynamic';
const HeroSectionDynamix = dynamic(
  () => import('./sections/HeroSectionDynamix'),
  { ssr: false }
);

export default function Home() {
  const [image, setImage] = useState(
    'https://images.squarespace-cdn.com/content/v1/6063b60446be51581489dd79/1617237644511-LFP82N395WZCC1U5RDPR/finalcomp.gif'
  );
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <div className='overflow-x-hidden relative '>
      <div className='absolute h-full w-full -z-50 bg-black ' />
      <div className='space-y-24 '>
        <HeroSectionDynamix image={image} />
        <ProjectSection />
      </div>
    </div>
  );
}
