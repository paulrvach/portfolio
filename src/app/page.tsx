'use client';
import NavBar from './components/NavBar';
import HeroSectionDynamix from './sections/HeroSectionDynamix';
import ProjectSection from './sections/ProjectSection';
import ContactSection from './sections/ContactSection';
import Image from 'next/image';
import BgGradient from '../../public/SW overlay 22.jpg';
import GradientBackground from './components/P5GraidentBg';

export default function Home() {
  return (
    <>
      {/* <GradientBackground /> */}
      <div className='overflow-x-hidden relative '>
        <div className='absolute h-full w-full -z-50 bg-black' />
        {/* <Image src={BgGradient} alt='bg' className='absolute -z-10 -top-64' /> */}
        <NavBar />
        <div className='space-y-24 mx-8'>
          <HeroSectionDynamix />
          <ProjectSection />
          <ContactSection />
          {/* <img className='rounded-full h-28' src='https://images.squarespace-cdn.com/content/v1/6063b60446be51581489dd79/1617237644511-LFP82N395WZCC1U5RDPR/finalcomp.gif'/> */}
        </div>
      </div>
    </>
  );
}
