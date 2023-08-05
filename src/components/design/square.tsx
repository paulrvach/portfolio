import React from 'react';
import { getRandomColorFromGradient } from '@/utils/tailwindFunctions';

type Props = {
  className?: string;
  layerRef: React.RefObject<HTMLDivElement>;
  topPos: string;
  leftPos: string;
};

const Square = ({ className, layerRef, topPos, leftPos }: Props) => {
  const color = getRandomColorFromGradient()
  return (
    <div
      className={className}
      ref={layerRef}
      style={{ top: topPos, left: leftPos }}
    >
      
          <svg
            xmlns='http://www.w3.org/2000/svg'
            id='Capa_1'
            x='0'
            y='0'
            version='1.1'
            viewBox='0 0 497.502 497.502'
            width='200'
            height='200'
          >
            <path
            fill={`rgb(${color.r}, ${color.g}, ${color.b})`}
              d='M433.498.009H65.071A64.21 64.21 0 0 0 63.996 0C28.649.005 0 28.663.004 64.009v368.427c.117 35.887 29.18 64.95 65.067 65.067h368.427c35.469-.695 63.891-29.591 64-65.067V64.009c0-35.346-28.654-64-64-64z'
            ></path>
            <defs>
              
            </defs>
          </svg>
    </div>
       
  );
};

export default Square;