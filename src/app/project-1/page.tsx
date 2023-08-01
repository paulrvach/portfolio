'use client';
import React, { useEffect, useRef } from 'react';
import typography from './topography.svg';
import FeaturesShowcase from '../components/FeatureShowcase';
import PlaneComponent from './PlaneComponent';
import { projectOneFeatures, projects } from '@/utils/projects';
import ProjectHeroSection from '../components/ProjectHeroSection';

type Props = {};

const ProjectOnePage = (props: Props) => {
  const description = "Welcome to your next smart investment. Discover location-based residential real estate opportunities, tailored to your unique goals and requirements, right from the comfort of your computer."
  

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  });
  return (
    <div className='overflow-x-hidden relative bg-black '>
      <div className='lg:mx-28 md:mx-24 xl:mx-64 px-6 flex flex-col '>
        <ProjectHeroSection
          title='Real-Estate '
          image='https://res.cloudinary.com/dxmqknhgj/image/upload/v1689627776/Asset_aqe1sx.png'
          text={description}
          icon={projects[0].icon}
        />
        <FeaturesShowcase features={projectOneFeatures} />
        <div className='bg-slate-200 h-screen'>

        </div>
      </div>
    </div>
  );
};

export default ProjectOnePage;
