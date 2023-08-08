'use client';
import React, { useEffect } from 'react';
import FeaturesShowcase from '../components/FeatureShowcase';
import { projectThreeFeatures, projects } from '@/utils/projects';
import ProjectHeroSection from '../components/ProjectHeroSection';

type Props = {};

const ProjectThree = (props: Props) => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  });

  const description =
    'The AI Voice Conversation App, also known as Campa, is an innovative conversational application utilizing advanced AI and microservices. The application leverages AWS Polly, AWS Transcribe, and S3 to store user audio files, convert speech to text, and facilitate text-to-speech conversation, thereby augmenting the conversational experience. It&apos;s enhanced with a visually appealing, accessible UI designed with React, Tailwind CSS, and the DaisyUI component library, adhering to ARIA accessibility guidelines.';
  return (
    <div className='overflow-x-hidden relative bg-black '>
      <div className='lg:mx-28 md:mx-24 xl:mx-64 px-6 flex flex-col'>
        <ProjectHeroSection
          title='AI Voice Conversion App'
          image='https://res.cloudinary.com/dxmqknhgj/image/upload/v1690853228/Desktop_-_5_nb6rxq.png '
          text={description}
          icon={projects[2].icon}
          date='April 2023 - May 2023'
          responsibilities={['Product Designer', 'Front-end Engineer', 'UI/UX']}
          role='Software Engineer'
          team={['Ariel Lin, Systems Engineer', 'Cat Kim, Back-end Engineer', 'Aaron Chen, QA Engineer/Teste', 'Mushfiq Khandaker, Back-end Engineer']}
          repo='https://github.com/CAMPA-4/campa'
          website=''
        />
        <FeaturesShowcase features={projectThreeFeatures} />
      </div>
    </div>
  );
};

export default ProjectThree;
