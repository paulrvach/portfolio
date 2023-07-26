'use client';
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import FeaturesShowcase from '../components/FeatureShowcase';
import { projectThreeFeatures } from '@/utils/projects';
import Image from 'next/image';

type Props = {};

const ProjectThree = (props: Props) => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  });
  return (
    <div className='overflow-x-hidden relative bg-black'>
      <div className=' md:mx-24'>
        <div
          data-scroll
          data-scroll-speed='0.2'
          className='hero-content flex-col lg:flex-row gap-6 h-screen '
        >
          <div className='scale-[0.8]'>
            <Image 
            src='https://res.cloudinary.com/dxmqknhgj/image/upload/v1689643516/Jarvis_tz3jkx.png'
            alt='JARVIS'
            width={1440}
            height={1024}
            className='rounded-xl'
            />

          </div>
          <div className='max-w-md'>
            <div className='flex items-center justify-start gap-4 '>
              <Image
                src='https://res.cloudinary.com/dxmqknhgj/image/upload/v1689299890/mic_c13g9q.png'
                alt='asset-logo'
                className=''
                height={46}
                width={46}
              />
              <h1 className='text-5xl font-bold'>Ai Voice Converstion App</h1>
            </div>
            <p className='py-6'>
              The AI Voice Conversation App, also known as Campa, is an
              innovative conversational application utilizing advanced AI and
              microservices. The application leverages AWS Polly, AWS
              Transcribe, and S3 to store user audio files, convert speech to
              text, and facilitate text-to-speech conversation, thereby
              augmenting the conversational experience. It&apos;s enhanced with a
              visually appealing, accessible UI designed with React, Tailwind
              CSS, and the DaisyUI component library, adhering to ARIA
              accessibility guidelines.
            </p>

            <div className='flex gap-4'>
              <Button variant={'secondary'}>Website</Button>
              <Button variant={'ghost'} className='flex gap-2 justify-center '>
                Learn More
                <ArrowRightIcon className='h-4 w-4' />
              </Button>
            </div>
          </div>
        </div>
        <h2 className='text-5xl ml-16'>Features</h2>
        <FeaturesShowcase features={projectThreeFeatures} />
      </div>
    </div>
  );
};

export default ProjectThree;
