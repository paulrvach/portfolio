'use client';
import React from 'react';
import { getRandomColorFromGradient } from '@/utils/tailwindFunctions';
type Props = {
  className?: string;
  layerRef: React.RefObject<HTMLDivElement>;
  topPos: string;
  leftPos: string;
};

const Flower = ({ className, layerRef, topPos, leftPos }: Props) => {
  const color = getRandomColorFromGradient()
  return (
    <div
      className={`${className} ` }
      ref={layerRef}
      style={{ top: topPos, left: leftPos }}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='200'
        height='200'
        fill='none'
        viewBox='0 0 200 200'
        version='1.1'
        // xlink='http://www.w3.org/1999/xlink'
        // xmlns:svgjs='http://svgjs.dev/svgjs'
      >
        <path
          fill={`rgb(${color.r}, ${color.g}, ${color.b})`}
          // fill='rgb(50, 50, 50)'
          fill-rule='evenodd'
          d='M100 200c55.228 0 100-44.772 100-100S155.228 0 100 0 0 44.772 0 100s44.772 100 100 100Zm0-56.25c24.162 0 43.75-19.588 43.75-43.75S124.162 56.25 100 56.25 56.25 75.838 56.25 100s19.588 43.75 43.75 43.75Z'
          clip-rule='evenodd'
        ></path>
        <defs>
          
        </defs>
      </svg>
    </div>
  );
};

// linear-gradient(to right, rgb(199, 210, 254), rgb(254, 202, 202), rgb(254, 249, 195))
export default Flower;
