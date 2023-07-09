import React from 'react';
import Logo from '../components/Logo';

type Props = {};

const NavBar = (props: Props) => {
  return (
    <nav className='w-screen h-[88px] flex justify-center items-center space-x-12 z-50'>
      <a
        href='#'
        className='text-center text-white text-[18px] font-semibold leading-7'
      >
        About
      </a>
      <a
        href='#'
        className='text-center text-white text-[18px] font-semibold leading-7'
      >
        Contact
      </a>
      <Logo size='76'/>

      <a
        href='#projects'
        className='text-center text-white text-[18px] font-semibold cursor-pointer leading-7'
      >
        Projects
      </a>
      <a
        href='#'
        className='text-center text-white text-[18px] font-semibold leading-7'
      >
        Media
      </a>
    </nav>
  );
};

export default NavBar;
