import React from 'react';
import Logo from './Logo';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Separator } from '@/components/ui/separator';

import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';

type Props = {};

const NavBar = (props: Props) => {
  return (
    <nav className='w-full px-8 h-[88px] flex justify-between items-center space-x-12 z-50'>
      <div className='flex items-center gap-1 text-lg align-middle'>
        <Logo size='28' />
        <p className='pb-1'>paul vachon</p>
      </div>
      <NavigationMenu className='gap-2'>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className='bg-transparent'>
              Resources
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className='grid gap-3  p-4 md:w-[400px] lg:w-[400px] lg:grid-cols-[.75fr_1fr] '>
                <li>
                  <h5 className='font-semibold text-lg mb-2'>Resume</h5>
                  <NavigationMenuLink href='https://drive.google.com/file/d/1WiDGT2MnAJOunqNgt45fHqwsnnSz6HcG/view?usp=drive_link'>
                    <Image
                      alt='Resume'
                      height={200}
                      width={200}
                      className='rounded-md h-auto w-auto hover:border'
                      src='https://res.cloudinary.com/dxmqknhgj/image/upload/v1689353392/Screenshot_2023-07-14_at_12.49.38_PM_albe2o.png'
                    />
                  </NavigationMenuLink>
                </li>
                <li className='grid row-span-2 md:ml-4'>
                  <h5 className='font-semibold text-lg '>Sections</h5>

                  <a
                    className='cursor-pointer hover:text-white'
                    href='#projects'
                  >
                    Projects
                  </a>

                  <a
                    className='cursor-pointer hover:text-white'
                    href='#contact'
                  >
                    Contact
                  </a>

                  <a className='cursor-pointer hover:text-white' href='#media'>
                    Media
                  </a>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
        <a href='https://www.linkedin.com/in/paul-vachon' target="_blank">
          <GitHubLogoIcon className='h-5 w-5 cursor-pointer' />
        </a>
        <a href='https://github.com/paulrvach' target="_blank">
          <LinkedInLogoIcon className='h-5 w-5 cursor-pointer' />
        </a>
      </NavigationMenu>
    </nav>
  );
};

export default NavBar;
