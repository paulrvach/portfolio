'use client';
import NavBar from './sections/NavBar';
import HeroSection from './sections/HeroSection';
import Image from 'next/image';
import BgGradient from '../../public/SW overlay 22.jpg';
import Blobs from './components/Blobs';
import ProjectSection from './sections/ProjectSection';

export default function Home() {
  return (
    <div className='overflow-x-hidden relative '>
      <div className='absolute h-full w-full -z-50 bg-black'/>
      <Image src={BgGradient} alt='bg' className='absolute -z-10 -top-64' />

      {/* <div className='absolute'>
        <Blobs />
      </div> */}
      <NavBar />
      <div className='space-y-48 mx-8'>
        <HeroSection />
        <ProjectSection />
        {/* <img className='rounded-full h-28' src='https://images.squarespace-cdn.com/content/v1/6063b60446be51581489dd79/1617237644511-LFP82N395WZCC1U5RDPR/finalcomp.gif'/> */}
      </div>
    </div>
  );
}
