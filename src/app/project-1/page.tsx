'use client';
import React, { useEffect, useRef } from 'react';
import typography from './topography.svg';
import FeaturesShowcase from '../components/FeatureShowcase';
import PlaneComponent from './PlaneComponent';
import { projectOneFeatures, projects } from '@/utils/projects';
import ProjectHeroSection from '../components/ProjectHeroSection';
import ProjectOneBlog from './ProjectOneBlog';

type Props = {};

const ProjectOnePage = (props: Props) => {
  const description =
    'Welcome to your next smart investment. Discover location-based residential real estate opportunities, tailored to your unique goals and requirements, right from the comfort of your computer.';

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  });
  return (
    <div className='overflow-x-hidden relative bg-slate-50 '>
      <div className='lg:mx-28 md:mx-24 xl:mx-64 px-6 flex flex-col items-center text-slate-600'>
        <ProjectHeroSection
          title='Location based residential real-estate investment finder'
          image='https://res.cloudinary.com/dxmqknhgj/image/upload/v1689627776/Asset_aqe1sx.png'
          text={description}
          icon={projects[0].icon}
          date='April 2023'
          responsibilities={[
            'Backend',
            'Database',
            'CRM',
            'Frontend',
            'Routing',
          ]}
          role='Full Stack Software Engineer'
          team={[
            'Paul Vachon, Software Engineer',
            'Caleb Hanson, Licensed Real-Estate Broker',
          ]}
          repo='https://github.com/paulrvach/Residential-Investment-Finder'
          website='https://kafka-nimbus.vercel.app/'
        />
        <FeaturesShowcase features={projectOneFeatures} />
        <ProjectOneBlog />
      </div>
    </div>
  );
};

export default ProjectOnePage;
