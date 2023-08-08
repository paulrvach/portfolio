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

  const responsibilities= ['UX/UI', 'System Design', 'Prototyping', 'Frontend Interface', 'SCRUM Leader', 'Deployment']
  const role = 'Full Stack Software Engineer'
  const team = ['Ijoo Yoon, QA Engineer/Tester', 'Jackson Dahl, Cloud Engineer', 'Ariel Lin, Backend Software Engineer', 'Andrew Kim, Frontend Software Engineer']

  return (
    <div className='overflow-x-hidden relative bg-slate-50 text-slate-700'>
      <div className='lg:mx-28 md:mx-24 xl:mx-64 px-6 flex flex-col'>
        <ProjectHeroSection
          title='Kafka Nimbus'
          date='March 2023 - Current'
          image='https://res.cloudinary.com/dxmqknhgj/image/upload/v1690845748/Frame_41_iyqlhg.png'
          text={description}
          icon={projects[1].icon}
          responsibilities={responsibilities}
          role={role}
          team={team}
          repo='https://github.com/oslabs-beta/Kafka-Nimbus'
          website='https://kafka-nimbus.vercel.app/'
        />
        <FeaturesShowcase features={projectTwoFeatures} />
        <div className='xl:px-48'>
        <KafkaNimbus />
        </div>
      </div>
    </div>
  );
};

export default Project2;
