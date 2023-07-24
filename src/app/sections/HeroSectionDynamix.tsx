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
import Logo from '../components/Logo';

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
  const video = useRef(null);

  const stars = ['⋆', '⋆', '⋆', '⋆', '⋆', '⋆', '⋆', '⋆', '⋆'];

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: 'top',
        markers: true,
        end: '+=50px',
        scrub: true,
      },
    });

    timeline.from(video.current, {
      clipPath: 'inset(150px 100px)',
      top: '23%',
      left: '43%',
    });
  });

  return (
    <>
      <div className=' h-[65vh] w-full p-8 gap-4 rounded-3xl flex flex-col justify-center items-center '>
        <h1
          className={`${mainText.className} text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal text-justify w-full sm:w-3/4 md:w-2/3 leading-normal sm:leading-[2rem] md:leading-[3rem] lg:leading-[4rem] mt-10 sm:mt-20 md:mt-32 lg:mt-48 cursor-pointer`}
        >
          <span
            className={`${rubik.className} text-pastelOrange hover:text-pastelYellow transition-colors duration-500`}
          >
            Welcome
          </span>{' '}
          to my portfolio. I&apos;m
          <span
            className={`${luxuriousRoman.className} `}
          >
            {' '}Paul
          </span>
          , and this is where I share my passion about{' '}
          <span
            className={`${roboto.className} text-pastelPink hover:text-pastelPurple transition-colors duration-500`}
          >
            programming
          </span>{' '}
          and{' '}
          <span
            className={`${spaceMono.className} text-pastelBlue hover:text-pastelGreen transition-colors duration-500`}
          >
            design
          </span>
          . I believe in a{' '}
          <span
            className={`${inconsolata.className} text-pastelGreen hover:text-pastelYellow transition-colors duration-500`}
          >
            practical
          </span>{' '}
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
