'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import typography from './topography.svg';
import FeaturesShowcase from './FeatureShowcase';
import PlaneComponent from './PlaneComponent';

type Props = {};

const ProjectOnePage = (props: Props) => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  });
  return (
    <div className='overflow-x-hidden relative '>
      <div className='absolute h-full w-screen -z-50 bg-black'>
        <Image src={typography} alt='bg-svg' className='opacity-10' />
        <Image src={typography} alt='bg-svg' className='opacity-10' />
        <Image src={typography} alt='bg-svg' className='opacity-10' />
      </div>
      <div className='hero min-h-screen '>
        <div className='hero-content flex-col lg:flex-row'>
          <div className='max-w-md' data-scroll data-scroll-speed='0.2'>
            <div className='flex items-center justify-start gap-4'>
              <Image
                src='https://res.cloudinary.com/dxmqknhgj/image/upload/v1689644966/asset_logo_blt7pz.svg'
                alt='asset-logo'
                className=''
                height={46}
                width={46}
              />
              <h1 className='text-7xl font-bold'>Asset</h1>
            </div>
            <p className='py-6'>
              Welcome to your next smart investment. Discover location-based
              residential real estate opportunities, tailored to your unique
              goals and requirements, right from the comfort of your computer.
            </p>
            
            
          </div>
          <div>
            <PlaneComponent />
          </div>
        </div>
      </div>
      <FeaturesShowcase />
    </div>
  );
};

export default ProjectOnePage;
