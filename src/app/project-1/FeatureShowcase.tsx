'use client';
import React, { useLayoutEffect, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

type Feature = {
  title: string;
  description: string;
  emoji: string;
  img: string; 
};


const features:Feature[] = [
  {
    title: 'Real-Estate Cash-Flow Analysis',
    description:
      'Leverage the power of data analytics with our real-estate cash-flow analysis feature. This innovative tool uses intricate algorithms to process comprehensive real-estate data, enabling investors to make informed decisions about potential location-based residential properties.',
    emoji: '🏘️',
    img: 'https://res.cloudinary.com/dxmqknhgj/image/upload/v1689698522/asssetMockup_n2tztl.png',
  },
  {
    title: 'Location-based Residential Real-Estate Investment Finder',
    description:
      "Experience the convergence of geolocation and real-estate data like never before. By integrating Google Maps and Google Places API with Zillow Real-Estate data, our React application enables robust, location-focused search capabilities for real estate investments. It's where geospatial technology meets real-estate investment strategy.",
    emoji: '📍',
    img: ''
  },
  {
    title: 'React Router-Enhanced Navigation',
    description:
      "Revolutionize your user experience with our single-page application architecture, underpinned by React Router. It ensures seamless transitions between sections, reducing latency and enhancing overall performance. It's not just about speed; it's about optimizing the application's efficiency.",
    emoji: '🗺️',
    img: ''
  },
  {
    title: 'Session-Based Tokens for Favouriting and Saving',
    description:
      "Embrace the advantage of session-based tokens in preserving your investment research. This technology empowers you to favorite and save potential investments, ensuring your research doesn't get lost in the digital shuffle. It's your personalized gateway to potential investment opportunities.",
    emoji: '💻',
    img: ''
  },
];
const FeaturesShowcase: React.FC = () => {
  const featureRefs = useRef([]);
  const imageRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  });

  useEffect(() => {
    featureRefs.current.forEach((feature, index) => {
      gsap.fromTo(
        feature,
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          scrollTrigger: {
            trigger: feature,
            start: 'top 80%',
            end: '+=100',
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <div className='flex flex-row items-center  w-full'>
      <div className='flex flex-wrap flex-col w-full '>
        {features.map((feature, index) => (
          <div
            key={index}
            ref={(el) => (featureRefs.current[index] = el)}
            className='w-full  p-4 '
            data-scroll
            data-scroll-speed='0.2'
          >
            <div className='flex flex-col md:flex-row items-center justify-around'>
              <Image
                height={200}
                width={500}
                src={feature.img}
                alt={feature.title}
              />
              <div className='w-2/4 p-6'>
                <h2 className='text-2xl font-bold mb-4'>
                  <span className='px-2'>{feature?.emoji}</span>
                  {feature.title}
                </h2>
                <p className='text-gray-600'>{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesShowcase;
