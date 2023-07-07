import React, { useEffect } from 'react';

type Props = {
  url: string;
};

const ProjectPage = ({ url }: Props) => {
  
  return <iframe src={url} className='h-full w-full'>ProjectPage</iframe>;
};

export default ProjectPage;
