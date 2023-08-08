'use client';
import React, { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FeatureCard from './FeatureCard';
import { type Feature } from '@/utils/projects';

type Props = {
  features: Feature[];
};

const FeaturesShowcase = ({ features }: Props) => {
  const featureTitle = useRef<HTMLDivElement | null>(null);
  let currentSlide = 0;
  const handlePreviousClick = () => {
    if (currentSlide > 0) {
      // Ensure you don't go below the first slide
      currentSlide = currentSlide - 1;
      const element = document.getElementById(`slide${currentSlide}`);
      element?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest', // or 'center' if you prefer
        inline: 'start',
      });
      console.log(currentSlide);
    }
  };

  const handleNextClick = () => {
    if (currentSlide < features.length - 1) {
      // Ensure you don't go past the last slide
      currentSlide = currentSlide + 1;
      const element = document.getElementById(`slide${currentSlide}`);
      element?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest', // or 'center' if you prefer
        inline: 'start',
      });
      console.log(currentSlide);
    }
  };

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (featureTitle.current) {
      gsap.fromTo(
        featureTitle.current,
        { autoAlpha: 0, y: 50 },
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
      <div className='flex justify-between' ref={featureTitle}>
        <h2 className='text-4xl font-bold text-justify pb-4'>Features</h2>
        <div className=' z-20'>
          <a
            onClick={handlePreviousClick}
            className='btn bg-transparent border-slate-600 text-slate-600 btn-circle scale-50 border-2 font-bold hover:text-slate-50 hover:bg-slate-600 hover:border-slate-50'
          >
            ❮
          </a>
          <a
            onClick={handleNextClick}
            className='btn bg-transparent border-slate-600 text-slate-600 btn-circle scale-50 border-2 font-bold hover:text-slate-50 hover:bg-slate-600 hover:border-slate-50'
          >
            ❯
          </a>
        </div>
      </div>
      <ul className='carousel relative  w-full  '>
        {features.map((feature, index) => (
          <div
            key={index}
            id={`slide${index}`}
            className=' carousel-item w-full md:w-1/2 lg:w-1/3 mb-4 '
          >
            <FeatureCard feature={feature} />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default FeaturesShowcase;
