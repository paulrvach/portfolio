'use client';
import React, { Suspense, useEffect, useState } from 'react';

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <div className='overflow-x-hidden relative '>
    
    </div>
  );
}
