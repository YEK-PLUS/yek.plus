/* eslint-disable react/jsx-props-no-spreading */
import projects from 'api/fetch/projects';
import { InferGetStaticPropsType } from 'next';
import Projects from '@/containers/projects/projects';

export const getStaticProps = async () => ({
  props: await projects.get(),
});

const Project = (projectList: InferGetStaticPropsType<typeof getStaticProps>) => (
  <div className="w-full">
    <Projects projects={projectList} />
  </div>
);

export default Project;
