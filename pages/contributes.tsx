/* eslint-disable react/jsx-props-no-spreading */
import { InferGetStaticPropsType } from 'next';
import Breadcrumb from '@/containers/common/breadcrumb';
import constant from 'api/fetch/constant';
import NavBar from '@/containers/common/navbar';
import projects from 'api/fetch/projects';
import Projects from '@/containers/projects/projects';
import { useState } from 'react';
import Categories from '@/containers/projects/categories';

export const getStaticProps = async () => ({
  props: {
    constantProps: await constant.get(),
    contributeList: await projects.contribute.get(),
    stackList: await projects.stacks.get(),
  },
  revalidate: 5 * 60,
});

const Project = ({
  constantProps,
  contributeList,
  stackList,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [category, setCategory] = useState('All');
  const changeCategory = (cat: string) => setCategory(cat);
  return (
    <div className="grid grid-flow-row gap-4 sm:gap-6">
      <NavBar>
        <Breadcrumb
          items={[
            {
              link: '/',
              name: 'Home',
            },
            {
              link: '/contributes',
              name: 'Contrubutes',
            },
          ]}
          constantProps={constantProps}
        />
      </NavBar>
      <Categories
        category={category}
        stackList={stackList}
        onToggle={changeCategory}
      />
      <Projects projects={contributeList} category={category} />
    </div>
  );
};

export default Project;
