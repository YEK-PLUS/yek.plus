/* eslint-disable react/jsx-props-no-spreading */
import projects from 'api/fetch/projects';
import { InferGetStaticPropsType } from 'next';
import Projects from '@/containers/projects/projects';
import Categories from '@/containers/projects/categories';
import { useState } from 'react';
import Breadcrumb from '@/containers/common/breadcrumb';
import constant from 'api/fetch/constant';

export const getStaticProps = async () => ({
  props: {
    projectList: await projects.get(),
    stackList: await projects.stacks.get(),
    constantProps: await constant.get(),
  },
  revalidate: 5 * 60,
});

const Project = ({
  projectList,
  constantProps,
  stackList,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [category, setCategory] = useState('All');
  const changeCategory = (cat: string) => setCategory(cat);
  return (
    <div className="grid grid-flow-row gap-4 sm:gap-6">
      <Breadcrumb
        items={[
          {
            link: '/',
            name: 'Home',
          },
          {
            link: '/projects',
            name: 'Projects',
          },
        ]}
        constantProps={constantProps}
      />
      <p className="text-2xl font-bold text-center dark:text-white">
        Project List
      </p>
      <Categories category={category} stackList={stackList} onToggle={changeCategory} />
      <Projects projects={projectList} category={category} />
    </div>
  );
};

export default Project;
