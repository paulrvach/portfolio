'use client';
import React, { useLayoutEffect, useRef } from 'react';
import KineticType from '../components/KineticType';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
type Props = {
  image: string;
};


const HeroSectionDynamix = ({ image }: Props) => {
  const video = useRef(null);
  const text = useRef(null);
  const star = useRef(null);

  const stars = ['⋆', '⋆', '⋆', '⋆', '⋆', '⋆', '⋆', '⋆', '⋆'];

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: 'top',
        markers: true,
        end: '+=250px',
        scrub: true,
      },
    });

    timeline.from(video.current, {
      clipPath: 'inset(150px 100px)',
      top: '23%',
      left: '43%',
    })
    
  });

  return (
    <>
      <div className=' h-screen w-full p-8 gap-4 rounded-3xl flex flex-col justify-center items-start '>
        <div ref={text} className='h-fit w-full'>
          <KineticType text={'✹DESIGN'} i={0} />
          <KineticType text={'ENGINEER⁕'} i={1} />
          <KineticType text={'✺CREATE'} i={2} />
        </div>
        {/* <GradientBackground /> */}
      </div>
      <div
        ref={star}
        style={{ position: 'absolute', top: '8%', left: '1%', zIndex: -1 }}
        data-scroll
        data-scroll-speed='0.8'
      >
        {stars.map((star, index) => (
          <p key={index} className='text-4xl '>
            {star}
          </p>
        ))}
      </div>
      <div
        ref={video}
        data-scroll
        data-scroll-speed='0.1'
        style={{ position: 'absolute', top: '30%', left: '40%', zIndex: -1 }}
      >
        <img alt='Paul Vachon' src={image} />
      </div>
    </>
  );
};

export default HeroSectionDynamix
