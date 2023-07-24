'use client';
import React, { useLayoutEffect, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FeatureCard from './FeatureCard';
import { type Feature } from '@/utils/projects';

type Props = {
  features: Feature[]
}

const FeaturesShowcase = ({ features }: Props) => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  });

  return (
      <div id='features' className='flex  flex-col w-full mb-48'>
        {features.map((feature, index) => (
          <FeatureCard feature={feature} key={index} index={index}/>
        ))}
      </div>
  );
};

export default FeaturesShowcase;
