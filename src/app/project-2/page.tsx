'use client';
import React, { useEffect } from 'react';
import FeaturesShowcase from '../components/FeatureShowcase';
import { projectTwoFeatures, projects } from '@/utils/projects';
import ProjectHeroSection from '../components/ProjectHeroSection';
import KafkaNimbus from '../sections/KafkaNimbus';

type Props = {};

const Project2 = (props: Props) => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  });

  const description =
    'Kafka Nimbus is an intuitive web application designed to simplify the configuration, deployment, monitoring, and management of Kafka on the cloud. This robust platform abstracts the complexities of Kafka operations, presenting a real-time dashboard for health and performance monitoring. Kafka Nimbus ensures that big data operations are accessible, efficient, and proactive, catering to businesses of all sizes.';

  return (
    <div className='overflow-x-hidden relative bg-black '>
      <div className='lg:mx-28 md:mx-24 xl:mx-64 px-6 flex flex-col'>
        <ProjectHeroSection
          title='Kafka Nimbus'
          image='https://res.cloudinary.com/dxmqknhgj/image/upload/v1690845748/Frame_41_iyqlhg.png'
          text={description}
          icon={projects[1].icon}
        />
        <FeaturesShowcase features={projectTwoFeatures} />
        <KafkaNimbus />
      </div>
    </div>
  );
};

export default Project2;
