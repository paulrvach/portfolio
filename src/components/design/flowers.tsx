'use client';
import React, { useRef, useEffect, useState, createRef } from 'react';
import Flower from './flower';
import Square from './square';
import { randomizePosition } from '../../utils/tailwindFunctions';
import Spotlight from '@/app/components/Spotlight';
import gsap from 'gsap';

function offsetToCenter(e: MouseEvent): { offsetX: number; offsetY: number } {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  const offsetX = e.clientX - centerX;
  const offsetY = e.clientY - centerY;

  return { offsetX, offsetY };
}

type FlowersProps = {
  size: string;
  offset: number;
  blur?: 'blur-md' | 'blur-lg' | 'blur-sm'
};

const Flowers = ({ size, offset, blur }: FlowersProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const flowerRefs = useRef<Array<React.RefObject<HTMLDivElement>>>([]);
  const [svgs, setSvgs] = useState<React.JSX.Element[]>([]);

  useEffect(() => {
    if (containerRef.current) {
      const FollowBox = containerRef.current;

      gsap.set(FollowBox, {
        scale: 1,
      });

      const handleMouseMove = (e: MouseEvent) => {
        const { offsetX, offsetY } = offsetToCenter(e);

        flowerRefs.current.forEach((flowerRef) => {
          gsap.to(flowerRef.current, {
            duration: 0.35,
            x: offsetX / offset,
            y: offsetY / offset,
            // rotate: offsetY / 10,
            // skewX: offsetX / 10,
            ease: 'none',
            overwrite: 'auto',
            stagger: 0.035,
          });
        });
      };

      window.addEventListener('mousemove', handleMouseMove);

      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [containerRef.current]);

  useEffect(() => {
    const output: React.JSX.Element[] = [];
    for (let i = 0; i < 25; i++) {
      const position = randomizePosition();
      const flowerRef = React.createRef<HTMLDivElement>();
      flowerRefs.current.push(flowerRef);

      const newEle = (
        <Flower
          layerRef={flowerRef}
          key={i}
          topPos={`${position.top}px`}
          leftPos={`${position.left}px`}
          className={`absolute ${size} star`}
        />
      );
      output.push(newEle);
    }
    setSvgs(output);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`${blur} bg-opacity-5 p-2 -top-56  h-full `}
      style={{
        width: '100%',
        // overflow: 'hidden',
        position: 'absolute',
      }}
    >
      {svgs}
    </div>
  );
};

export default Flowers;
