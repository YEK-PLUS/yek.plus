/* eslint-disable react/jsx-props-no-spreading */
import { InferGetStaticPropsType } from 'next';
import Breadcrumb from '@/containers/common/breadcrumb';
import constant from 'api/fetch/constant';
import NavBar from '@/containers/common/navbar';
import DefinitelyTyped from '@/containers/contributes/definitelyTyped';
import project from 'api/fetch/projects';
import Contribute from '@/containers/contributes/contribute';

export const getStaticProps = async () => ({
  props: {
    constantProps: await constant.get(),
    definitelyTypeds: await project.definitelyTyped.get(),
    contributes: await project.contribute.get(),
  },
  revalidate: 5 * 60,
});

const Project = ({
  constantProps,
  definitelyTypeds,
  contributes,
}: InferGetStaticPropsType<typeof getStaticProps>) => (
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
    <div className="flex divide-x">
      <div className="w-1/2 pr-2">
        <p className="text-lg font-bold text-center dark:text-white">
          Contrubutes
        </p>
        <Contribute contributes={contributes} />
      </div>
      <div className="w-1/2 pl-2">
        <p className="text-lg font-bold text-center dark:text-white">
          Definitely Typed
        </p>
        <DefinitelyTyped definitelyTypeds={definitelyTypeds} />
      </div>
    </div>
  </div>
);

export default Project;
