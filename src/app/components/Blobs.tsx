import React from 'react';

type Props = {};

const Blobs = (props: Props) => {
  return (
    <div className=' w-screen h-screen flex justify-center items-center  bg-gradient '>
      <div className='relative h-2 w-8 '>
        <div className='animate-blob absolute opacity-70 w-72 h-72 -top-28 -right-4 bg-blue-400 rounded-full mix-blend-hard-light'></div>
        <div className='animate-blob animation-delay-2000 absolute opacity-70 w-72 h-72 top-0 -left-4 bg-red-400 rounded-full mix-blend-hard-light'></div>
        <div className='animate-blob animation-delay-4000 absolute opacity-70 w-72 h-72 -bottom-28 left-2 bg-yellow-400 rounded-full mix-blend-hard-light'></div>
      </div>
    </div>
  );
};

export default Blobs;
