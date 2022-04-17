/* eslint-disable react/jsx-props-no-spreading */
import { IProject } from 'types/Project';
import Project from 'components/project';

const Projects = ({ projects }: { projects: IProject }) => (
  <div className="w-full flex flex-wrap">
    <span className="w-full text-2xl font-bold text-center dark:text-white pb-2">
      Project List
    </span>
    <div className="w-full sm:w-1/2 h-min grid gap-2 p-1">
      {projects.data
        .filter((props, index) => index % 2 === 0)
        .map((project) => (
          <Project key={project.id} {...project} />
        ))}
    </div>
    <div className="w-full sm:w-1/2 h-min grid gap-2 p-1">
      {projects.data
        .filter((props, index) => index % 2 === 1)
        .map((project) => (
          <Project key={project.id} {...project} />
        ))}
    </div>
  </div>
);
export default Projects;
