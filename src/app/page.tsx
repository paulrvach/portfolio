'use client';
import React, { Suspense, useEffect, useState } from 'react';
import ProjectSection from './sections/ProjectSection';
import ContactSection from './sections/ContactSection';
import dynamic from 'next/dynamic';
import Spotlight, { SpotlightCard } from './components/Spotlight';
import { Toaster } from "@/components/ui/toaster"

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
      <div className='space-y-24  '>
        <Spotlight >
          <div data-scroll data-scroll-speed='0.2' className='relative mix-blend-plus-lighter bg-blur p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-indigo-400 before:rounded-full before:opacity-80 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full after:opacity-10 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px]  overflow-hidden'>
            <HeroSectionDynamix image={image} />
          </div>
        </Spotlight>
        <ProjectSection />
        <div data-scroll data-scroll-speed='0.2'>
        <ContactSection />
        </div>
        <Toaster />
      </div>
    </div>
  );
}
