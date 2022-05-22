/* eslint-disable react/jsx-props-no-spreading */
import { IProject } from 'types/Project';
import Project from 'components/project';

const Projects = ({
  projects,
  category,
}: {
  projects: IProject<true>;
  category: string;
}) => (
  <div className="w-full flex flex-wrap">
    <div className="w-full sm:w-1/2 h-min grid gap-2 p-1">
      {projects.data
        .filter(
          (project) => project.attributes.mainStack?.data.attributes.name === category
            || project.attributes.stacks?.data
              .map((stack) => stack.attributes.name)
              .includes(category)
            || category === 'All',
        )
        .filter((props, index) => index % 2 === 0)
        .map((project) => (
          <Project key={project.id} {...project} />
        ))}
    </div>
    <div className="w-full sm:w-1/2 h-min grid gap-2 p-1">
      {projects.data
        .filter(
          (project) => project.attributes.mainStack?.data.attributes.name === category
            || project.attributes.stacks?.data
              .map((stack) => stack.attributes.name)
              .includes(category)
            || category === 'All',
        )
        .filter((props, index) => index % 2 === 1)
        .map((project) => (
          <Project key={project.id} {...project} />
        ))}
    </div>
  </div>
);
export default Projects;
