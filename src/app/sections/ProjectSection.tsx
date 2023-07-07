import React, { useState } from 'react';
import { projects } from '../../utils/projects';
import ProjectCard from '../components/ProjectCard';
import Spotlight from '../components/Spotlight';

type Props = {};

const ProjectSection = (props: Props) => {
  const [active, setActive] = useState('project-2');
  return (
    <div>
      <h1 className='text-6xl font-semibold 0'>Projects</h1>
      <Spotlight className='flex lg:flex-row flex-col min-h-[70vh] gap-5 mt-4'>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.active}
            id={project.active}
            index={index}
            title={project.title}
            active={active}
            handleClick={setActive}
            icon={project.icon}
            bgGradient={project.bgGradient}
            url={project.url}
          />
        ))}
      </Spotlight>
    </div>
  );
};

export default ProjectSection;
