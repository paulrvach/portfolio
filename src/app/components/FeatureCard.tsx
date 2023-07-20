import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type Feature = {
  title: string;
  description: string;
  emoji: string;
  img: string;
};

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => {
  const featureRef = useRef<HTMLDivElement | null>(null);
  let isEven = index % 2 == 0 ? true : false;
  useEffect(() => {
    if (featureRef.current) {
      gsap.fromTo(
        featureRef.current,
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          scrollTrigger: {
            trigger: featureRef.current,
            start: 'top 80%',
            end: '+=100',
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <div
      ref={featureRef}
      className='w-full  p-4 '
      data-scroll
      data-scroll-speed='0.2'
    >
      <div className='flex flex-col md:flex-row items-center justify-around'>
        {isEven ? (
          <>
            <img
              height={200}
              src={feature.img}
              alt={feature.title}
              className='w-2/4'
            />
            <div className='w-2/4 p-6 '>
              <h2 className='text-2xl font-bold mb-4'>
                <span className='px-2'>{feature.emoji}</span>
                {feature.title}
              </h2>
              <p className='text-gray-600'>{feature.description}</p>
            </div>
          </>
        ) : (
          <>
            <div className='w-2/4 p-6 text-right' >
              <h2 className='text-2xl font-bold mb-4'>
                <span className='px-2'>{feature.emoji}</span>
                {feature.title}
              </h2>
              <p className='text-gray-600'>{feature.description}</p>
            </div>
            <img
              height={200}
              className='w-2/4'
              src={feature.img}
              alt={feature.title}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default FeatureCard;
