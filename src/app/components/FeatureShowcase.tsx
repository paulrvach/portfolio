'use client';
import React, { useLayoutEffect, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FeatureCard from './FeatureCard';
import { type Feature } from '@/utils/projects';

type Props = {
  features: Feature[];
};

const FeaturesShowcase = ({ features }: Props) => {
  const featureTitle = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);


    if (featureTitle.current) {
      gsap.fromTo(
        featureTitle.current,
        { autoAlpha: 0, y: 50, },
        {
          autoAlpha: 1,
          y: 0,
          
          scrollTrigger: {
            trigger: featureTitle.current,
            start: 'top 80%',
            end: '+=100',
            scrub: true,
          },
          stagger: 1,
        }
      );
    }
  });

  return (
    <div id='features' className=' '>
      <h2 className='text-5xl' ref={featureTitle}>Features</h2>
      <ul className='carousel '>
        {features.map((feature, index) => (
          <FeatureCard feature={feature} key={index} index={index} />
        ))}
      </ul>
    </div>
  );
};

export default FeaturesShowcase;
