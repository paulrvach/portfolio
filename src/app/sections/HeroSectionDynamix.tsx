'use client';
import React, { useLayoutEffect, useRef } from 'react';
import KineticType from '../components/KineticType';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  DM_Sans,
  Eczar,
  Roboto_Mono,
  Rubik,
  Space_Mono,
  Luxurious_Roman,
} from 'next/font/google';
import { stagger } from 'framer-motion';

const mainText = DM_Sans({ subsets: ['latin'], weight: '400' });
const spaceMono = Eczar({ subsets: ['latin'], weight: '600' });
const roboto = Roboto_Mono({ subsets: ['latin'], weight: '600' });
const rubik = Rubik({ subsets: ['latin'], weight: '600' });
const inconsolata = Space_Mono({ subsets: ['latin'], weight: '700' });
const luxuriousRoman = Luxurious_Roman({ subsets: ['latin'], weight: '400' });

type Props = {
  image: string;
};

const HeroSectionDynamix = ({ image }: Props) => {
  const spansRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // use scoped selectors
      gsap.from('.anim', { y: 100, stagger: 0.2 });
      // or refs
    }, spansRef);

    return () => ctx.revert();
  });

  return (
    <>
      <div
        className=' h-[85vh] w-full p-8 gap-4 rounded-3xl flex flex-col justify-center items-center -mt-10'
        ref={spansRef}
      >
        <h1
          className={`${mainText.className}   text-xl sm:text-2xl md:text-3xl overflow-hidden lg:text-4xl xl:text-5xl font-normal text-justify w-full sm:w-3/4 md:w-2/3 leading-normal sm:leading-[2rem] md:leading-[3rem] lg:leading-[4rem] mt-10 sm:mt-10 md:mt-20 lg:mt-32 cursor-pointer`}
        >
          <div className='overflow-hidden inline-block -mb-2'>
            <div
              className={`${rubik.className} anim text-pastelOrange hover:text-pastelYellow transition-colors duration-500`}
            >
              Welcome
            </div>
          </div>{' '}
          to my portfolio. I&apos;m{' '}
          <div className='overflow-hidden inline-block -mb-2'>
            <div className={` anim ${luxuriousRoman.className} `}>Paul</div>
          </div>
          , and this is where I share my passion about{' '}
          <div className='overflow-hidden inline-block -mb-2'>
            <div
              className={`anim ${roboto.className} text-pastelPink hover:text-pastelPurple transition-colors duration-500`}
            >
              programming
            </div>
          </div>{' '}
          and{' '}
          <div className='overflow-hidden inline-block -mb-2'>
            <div
              className={` anim ${spaceMono.className} text-pastelBlue hover:text-pastelGreen transition-colors duration-500`}
            >
              design
            </div>
          </div>
          . I believe in a{' '}
          <div className='overflow-hidden inline-block -mb-2'>
            <div
              className={` anim ${inconsolata.className} text-pastelGreen hover:text-pastelYellow transition-colors duration-500`}
            >
              practical
            </div>
          </div>{' '}
          approach, so here I document my latest explorations.
        </h1>
      </div>
      <div className='h-fit w-fit flex border-y-2'>
        <KineticType text={'✹DESIGN        ⁕ENGINEER      ✺CREATE'} i={0} />
      </div>
    </>
  );
};

export default HeroSectionDynamix;
