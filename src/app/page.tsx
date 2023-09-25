'use client';
import React, { useEffect, useState, Suspense } from 'react';
import { ProjectSection, ResourceSection, HeroSection } from './components';
import { type NotionProperties } from './layout';

const fetchFromNotion = async () => {
  const res = await fetch('/api/notion');
  const data = await res.json();
  return data;
};

export default function Home({}: {}) {
  const [notionData, setNotionData] = useState<NotionProperties[] | null>(null);
  const loading = (
    <div className='flex flex-col gap-8 w-full xl:w-1/2 h-full '>
      <div className='w-full h-8 bg-slate-700/50 animate-pulse rounded-lg' />
      <div className='w-full h-8 bg-slate-700/50 animate-pulse rounded-lg' />
      <div className='w-full h-8 bg-slate-700/50 animate-pulse rounded-lg' />
      <div className='w-full h-8 bg-slate-700/50 animate-pulse rounded-lg' />
      <div className='w-full h-8 bg-slate-700/50 animate-pulse rounded-lg' />
      <div className='w-full h-8 bg-slate-700/50 animate-pulse rounded-lg' />
    </div>
  );
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const data = await fetchFromNotion();
      setNotionData(data);
    })();
  }, []);

  return (
    <div>
      <HeroSection />
      <div className=' flex flex-col gap-16 xl:flex-row mt-16 '>
        {notionData ? <ProjectSection params={notionData} /> : loading}
        <ResourceSection />
      </div>
    </div>
  );
}
