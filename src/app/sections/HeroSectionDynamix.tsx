'use client';
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { Lato } from 'next/font/google';
import localFont from 'next/font/local'

const mainText = localFont({src: '../../../public/SF-Pro-Text-Regular.otf'})

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
      <div className=' relative h-[75vh]  w-full p-8 gap-4 rounded-3xl flex flex-col justify-center items-center text-slate-700 '>
        <div
          className='absolute inset-x-0 top-[-10rem] -z-40 transform-gpu  blur-3xl sm:top-[-20rem]'
          aria-hidden='true'
        >
          <div
            className='relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[90deg] bg-gradient-to-r from-green-300 via-blue-500 to-purple-600  opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]'
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div
          className='absolute inset-x-0 top-[-10rem] -z-40 transform-gpu  blur-3xl sm:top-[-20rem] '
          aria-hidden='true'
        >
          <div
            className='relative right-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none translate-x-1/2   bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]'
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        <div
          style={{ clipPath: 'inset(-100% 0 0% 0%)' }}
          className='z-50  sm:w-3/4 md:w-2/3  sm:leading-[2rem] md:leading-[3rem]  lg:leading-[4rem] mt-10 sm:mt-10 md:mt-20 lg:mt-32 cursor-pointer '
          ref={spansRef}
        >
          <h1
            className={`${mainText.className} anim  text-6xl  xl:text-8xl font-bold text-center w-full bg-clip-text text-transparent bg-gradient-to-t from-gray-900 to-gray-600 `}
          >
            {"Hi, I'm Paul"}
          </h1>
        </div>
        <h3
          className={`${mainText.className}  anim  sm:text-md md:text-lg overflow-hidden lg:text-xl xl:text-2xl flex flex-row items-center justify-center leading-normal z-50`}
        >
          📍 Los Angeles, CA
        </h3>
        <p
          className={`${mainText.className} anim text-center max-w-md text-lg z-50`}
        >
          👨🏽‍💻 Full Stack Software engineer with a passion for ⚙️ Engineering and
          🎨 Design
        </p>

        <div className='absolute backdrop-blur-sm h-1/2 w-1/3 opacity-55 bottom-24 rounded-3xl' />
      </div>
    </>
  );
};

export default HeroSectionDynamix;
