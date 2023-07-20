import React, { Dispatch, useState } from 'react';
import { projects } from '../../utils/projects';
import ProjectCard from '../components/ProjectCard';
import Spotlight from '../components/Spotlight';

type Props = {
  image: string;
  setImage: Dispatch<string>;
};

const ProjectSection = ({ setImage }: Props) => {
  const onHoverHandler = (value: string) => {
    setImage(value);
  };

  return (
    <div id='projects'>
      <h1 className='text-6xl font-semibold mb-8'>Projects</h1>
      <ul className='h-screen w-8/12'>
        {projects.map((project) => (
          <li key={project.active}>
            <p className='p-0 m-0'>
              ﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋
            </p>
            <a href={`/${project.active}`}>
              <p
                onMouseOver={() => onHoverHandler(project.img)}
                key={project.active}
                className='text-3xl px-4 pb-2 text-primary transition duration-300 fade-out-50 hover:border-primary cursor-pointer'
              >
                {project.title}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectSection;
