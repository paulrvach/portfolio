'use client';
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import FeaturesShowcase from '../components/FeatureShowcase';
import { projectTwoFeatures } from '@/utils/projects';

type Props = {};

const Project2 = (props: Props) => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  });

  return (
    <div className='overflow-x-hidden relative bg-black'>
      <div className=' mx-24'>
      <div
        data-scroll
        data-scroll-speed='0.2'
        className='hero-content flex-col lg:flex-row gap-6 h-screen '
      >
        <div className='scale-[0.8]'>
          <video
            width='100%'
            height='100%'
            autoPlay
            playsInline
            loop
            className='mb-6 rounded-lg'
          >
            <source src='https://res.cloudinary.com/dpqdqryvo/video/upload/v1685814776/test-demo-kafka_szbixp.mov' />
          </video>
        </div>
        <div className='max-w-md'>
          <div className='flex items-center justify-start gap-4 whitespace-nowrap'>
            <Image
              src='https://res.cloudinary.com/dxmqknhgj/image/upload/v1688926766/kafka-nimbus-logo_lwqint.png'
              alt='asset-logo'
              className=''
              height={46}
              width={46}
            />
            <h1 className='text-5xl font-bold'>Kafka Nimbus</h1>
          </div>
          <p className='py-6'>
            Kafka Nimbus is an intuitive web application designed to simplify
            the configuration, deployment, monitoring, and management of Kafka
            on the cloud. This robust platform abstracts the complexities of
            Kafka operations, presenting a real-time dashboard for health and
            performance monitoring. Kafka Nimbus ensures that big data
            operations are accessible, efficient, and proactive, catering to
            businesses of all sizes.
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
      <FeaturesShowcase features={projectTwoFeatures} />
      </div>
    </div>
  );
};

export default Project2;
