import React from 'react';
import Spotlight, { SpotlightCard } from '../components/Spotlight';
import Logo from '../components/Logo';

type Props = {};

const HeroSection = (props: Props) => {
  return (
    
      <Spotlight>
        <SpotlightCard className=''>
          <div className='w-full h-full px-[42px] py-[62px] bg-zinc-400 bg-opacity-5 rounded-3xl border backdrop-blur-lg flex-col justify-between items-start inline-flex'>
            <div className='h-[236px] flex-col justify-start items-start  flex'>
              <div className='flex flex-row items-center'>
                <Logo size='90'/>
                <div>
                <h1 className='text-6xl font-semibold'>Paul Vachon</h1>
                <div className='flex gap-2'>
                  <div className='text-white text-lg leading-relaxed'>
                    Software Engineer.
                  </div>
                  <div className='text-white text-lg leading-relaxed'>
                    Designer.
                  </div>
                  <div className='text-white text-lg leading-relaxed'>
                    Creator.
                  </div>
                </div>
                </div>
              </div>
            </div>
            <div className='h-[194px] flex-col justify-center items-end gap-4 flex flex-end w-full '>
              <div className='text-white text-lg font-semibold leading-10 cursor-pointer'>
                Projects
              </div>
              <div className='text-white text-lg font-semibold leading-10 cursor-pointer'>
                Media
              </div>
              <div className='text-white text-lg font-semibold leading-10 cursor-pointer'>
                Contact
              </div>
            </div>
          </div>
        </SpotlightCard>
      </Spotlight>
    
  );
};

export default HeroSection;
