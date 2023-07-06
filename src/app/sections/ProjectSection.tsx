import React, { useState } from 'react';
import { projects } from '../../utils/projects';
import ProjectCard from '../components/ProjectCard';

type Props = {};

const ProjectSection = (props: Props) => {
  const [active, setActive] = useState('project-2');
  return (
    <div>
      <h1 className='text-6xl font-semibold'>Projects</h1>
      <div className='flex lg:flex-row flex-col min-h-[70vh] gap-5 mt-4'>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.active}
            id={project.active}
            index={index}
            title={project.title}
            active={active}
            handleClick={setActive}
            icon={project.icon}
            background={project.background}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
