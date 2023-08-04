import React, { useLayoutEffect, useRef } from 'react';
import ContactForm from '../components/ContactForm';
import Logo from '../components/Logo';
import Link from 'next/link';
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
type Props = {};

const ContactSection = (props: Props) => {
  const name = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const nameRef = name.current;
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(nameRef, {
      x: '-=400',
      ease: 'power4',
      scrollTrigger: {
        trigger: nameRef,
        start: 'top center', // Adjust as per your need
        end: '+=600', // Adjust as per your need
        scrub: true, // Smooth animation
      },
    });

    gsap.from('.social', {
      x: '+=200',
      opacity: 0,
      stagger: 0.3,
      duration: 0.6,
      scrollTrigger: {
        trigger: '.profile-image',
        start: 'top center', // Adjust as per your need
        end: '+=350', // Adjust as per your need
        scrub: true,
      },
    });
  });
  return (
    <div
      id='contact'
      className='relative md:flex justify-around items-start h-full w-screen py-24 xl:px-24'
      style={{ height: '100vh' }}
    >
      <div className='relative flex flex-col  h-full items-start justify-between rounded-xl  z-10  w-full px-6 pb-8 lg:px-8 '>
        <h2 className='text-4xl text-slate-600' ref={name}>
          <Logo size='44' /> paul vachon
        </h2>
        <div className='relative flex flex-col  xl:w-2/3 h-2/3 justify-center items-center'>
          <div className='rounded-lg h-full w-full overflow-hidden social'>
            <img
              src='https://res.cloudinary.com/dxmqknhgj/image/upload/v1691169386/DD4580EF-6A04-4FAF-B11A-8C32B62075FA_qidgxh.jpg'
              className='object-cover profile-image'
            />
          </div>
          <p className='text-slate-600 p-2  text-justify social'>
            {
              "I'm always fascinated by new ideas, innovations, and the pursuit of creativity. Whether you're learning something that excites you or working on a groundbreaking project, I would love to hear about it and possibly collaborate. If you're interested in partnering for opportunities or simply want to share what you're passionate about, don't hesitate to reach out!"
            }
          </p>
        </div>

        <div>
          <div className='flex flex-row gap-4 text-slate-600 '>
            <Link href='https://github.com/paulrvach' className='social'>
              <div className=' text-lg flex items-center bg-white p-2 rounded-lg shadow-md hover:shadow-xl gap-4 hover:text-primary transition-all duration-200'>
                <GitHubLogoIcon className='w-4 h-4' />
              </div>
            </Link>
            <Link href='https://www.linkedin.com/in/paul-vachon/' className='social'>
              <div className=' text-lg flex items-center bg-white p-2 rounded-lg shadow-md hover:shadow-xl gap-4 hover:text-primary transition-all duration-200'>
                <LinkedInLogoIcon className='w-4 h-4' />
              </div>
            </Link>
            <Link href='paulrvach@gmail.com' className='social'>
              <div className=' text-lg flex items-center bg-white p-2 rounded-lg shadow-md hover:shadow-xl gap-4 hover:text-primary transition-all duration-200'>
                <EnvelopeClosedIcon className='w-4 h-4' />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className='w-full h-full'>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactSection;
