import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

type Feature = {
  title: string;
  description: string;
  tags: string[];
  img: string;
};

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => {
  const featureRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (featureRef.current) {
      gsap.fromTo(
        featureRef.current,
        { autoAlpha: 0, y: 50, },
        {
          autoAlpha: 1,
          y: 0,
          
          scrollTrigger: {
            trigger: featureRef.current,
            start: 'top 80%',
            end: '+=100',
            scrub: true,
          },
          stagger: 1,
        }
      );
    }
  }, []);

  return (
    
      <Card ref={featureRef} className='border-0 carousel-item  w-full md:w-1/2 lg:w-1/3 mb-4 px-2'>
        <CardHeader className='p-2 '>
          <div className=' lg:h-64 overflow-hidden rounded-md  transition duration-100 hover:-translate-y-2'>
            <img
              src={feature.img}
              alt={feature.img}
              className=' object-cover  '
            />
          </div>
          <CardFooter className='p-0  pb-2'>
            <ul className='flex flex-wrap gap-2 '>
              {feature.tags.map((badge) => (
                <li key={badge}>
                  <Badge variant='secondary' >{badge}</Badge>
                </li>
              ))}
            </ul>
          </CardFooter>
          <CardTitle className='text-lg'>{feature.title}</CardTitle>
          <CardDescription className='text-xs'>
            {feature.description}
          </CardDescription>
        </CardHeader>
      </Card>
  );
};

export default FeatureCard;
