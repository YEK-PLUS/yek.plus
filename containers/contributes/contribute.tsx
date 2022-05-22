import Project from '@/components/contributes/project';
import { IContribute } from 'types/Contribute';

const Contribute = ({
  contributes,
}: {
  contributes: IContribute<true>;
}) => (
  <div className="flex flex-col space-y-4 dark:text-white">
    {contributes.data.map((project) => (
      <Project
        key={project.attributes.title}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...project}
      />
    ))}
  </div>
);
export default Contribute;
