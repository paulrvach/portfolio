'use client';
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { DM_Sans } from 'next/font/google';

export const mainText = DM_Sans({ subsets: ['latin'], weight: ['400', '700'] });

type Props = {};

const HeroSectionDynamix = ({}: Props) => {
  const spansRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // use scoped selectors
      gsap.from('.anim', { y: 100, stagger: 0.5 });
      // or refs
    }, spansRef);

    return () => ctx.revert();
  });

  return (
    <>
      <div className=' h-[75vh]  w-full p-8 gap-4 rounded-3xl flex flex-col justify-center items-center text-slate-700'>
      <div
        className='absolute inset-x-0 top-[-10rem] -z-40 transform-gpu  blur-3xl sm:top-[-20rem]'
        aria-hidden='true'
      >
        <div
          className='relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[90deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]'
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div
        className='absolute inset-x-0 top-[-10rem] -z-40 transform-gpu  blur-3xl sm:top-[-20rem]'
        aria-hidden='true'
      >
        <div
          className='relative right-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none translate-x-1/2  bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]'
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
        <div
          style={{ clipPath: 'inset(-100% 0 0% 0%)' }}
          className='sm:w-3/4 md:w-2/3  sm:leading-[2rem] md:leading-[3rem]  lg:leading-[4rem] mt-10 sm:mt-10 md:mt-20 lg:mt-32 cursor-pointer'
          ref={spansRef}
        >
          <h1
            className={`${mainText.className} anim  text-xl sm:text-2xl md:text-3xl  lg:text-4xl xl:text-8xl font-bold text-center w-full `}
          >
            {"Hi, I'm "}{' '}
            <span
              className={`${mainText.className} saturate-200 group relative bg-clip-text text-transparent font-bold bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100`}
            >
              Paul
            </span>
          </h1>
        </div>
        <h3
          className={`${mainText.className}  anim  sm:text-md md:text-lg overflow-hidden lg:text-xl xl:text-2xl flex flex-row items-center justify-center leading-normal `}
        >
          📍 Los Angeles, CA 
        </h3>
        <p className={`${mainText.className} anim text-center max-w-md text-lg `}>
          👨🏽‍💻 Full Stack Software engineer with a passion for ⚙️ Engineering and 🎨 Design 
        </p>
      </div>
    </>
  );
};

export default HeroSectionDynamix;
