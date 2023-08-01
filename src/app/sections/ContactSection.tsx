import React from 'react';
import ContactForm from '../components/ContactForm';
import Image from 'next/image';
import Link from 'next/link';
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons';

type Props = {};

const ContactSection = (props: Props) => {

  return (
    <div
      id='contact'
      className='relative md:flex justify-around items-start w-screen py-24'
    >
      <div className='flex flex-col items-center w-full px-6 pb-8 lg:px-8 z-10'>
        <Image
          src='https://res.cloudinary.com/dxmqknhgj/image/upload/v1690858066/DD4580EF-6A04-4FAF-B11A-8C32B62075FA_copy_cj4mbx.jpg'
          alt='me'
          height={150}
          width={150}
          className=''
          style={{ clipPath: 'circle(45% at 50% 50%)' }}
        />
        <h2 className='text-3xl font-bold  text-primary sm:text-4xl px-4 mb-8'>
          Get in touch
        </h2>
        <div className='flex flex-col gap-4 '>
          <Link href='https://github.com/paulrvach'>
            <div className='text-lg flex items-center gap-4 hover:text-white transition-colors duration-200'>
              <GitHubLogoIcon className='w-8 h-8' />
              https://github.com/paulrvach
            </div>
          </Link>
          <Link href='https://www.linkedin.com/in/paul-vachon/'>
            <div className='text-lg flex items-center gap-4 hover:text-white transition-colors duration-200'>
              <LinkedInLogoIcon className='w-8 h-8' />
              https://www.linkedin.com/in/paul-vachon/
            </div>
          </Link>
          <Link href='paulrvach@gmail.com'>
            <div className='text-lg flex items-center gap-4 hover:text-white transition-colors duration-200'>
              <EnvelopeClosedIcon className='w-8 h-8' />
              paulrvach@gmail.com
            </div>
          </Link>
        </div>
      </div>
      <div className='w-full'>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactSection;
