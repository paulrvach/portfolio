'use client';
import React, { Suspense, useEffect, useState } from 'react';
import ProjectSection from './sections/ProjectSection';
import ContactSection from './sections/ContactSection';
import dynamic from 'next/dynamic';
import { Toaster } from '@/components/ui/toaster';
import Flowers from '@/components/design/flowers';
import HeroSectionDynamix from './sections/HeroSectionDynamix';
const KineticType = dynamic(() => import('./components/KineticType'), {
  ssr: false,
});

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <div className='overflow-x-hidden relative '>
      <div className='absolute h-full w-full -z-50 bg-[#f6f6f6] ' />
      <div className='space-y-24'>
        <div className='relative'>
          <div className='h-full w-full absolute' data-scroll data-scroll-speed='0.3'>
            <Flowers size='scale-[0.1]' offset={10}/>
            <Flowers size='scale-[0.06]' offset={50} />
            <Flowers size='scale-[0.04]' offset={100} blur='blur-sm'/>
          </div>
          <HeroSectionDynamix />
        </div>
        <ProjectSection />
        <div className='h-fit w-fit flex mix-blend-darken'>
          <KineticType text={'✹DESIGN        ⁕ENGINEER      ✺CREATE'} i={0} />
        </div>
          <ContactSection />
        <Toaster />
      </div>
    </div>
  );
}
