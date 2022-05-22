/* eslint-disable @next/next/no-img-element */
import assetGenerator from 'helpers/assetGenerator';
import { IContribute } from 'types/Contribute';
import Links from './links';
import Stacks from './stacks';

const Project = ({
  attributes: {
    title, links, description, stacks, mainStack,
  },
}: IContribute['data']) => (
  <div className="border border-light-red/50 dark:text-white">
    <div className="w-full px-2">
      <div className="w-full flex items-start">
        {mainStack?.data ? (
          <img
            alt={mainStack.data.attributes.name}
            src={assetGenerator({
              url: mainStack.data.attributes.icon.data.attributes.url,
            })}
            className="h-4 mt-2"
          />
        ) : null}
        <span className="ml-2 text-xl font-bold">{title}</span>
        <div className="w-min ml-auto mt-2">
          <Links links={links} />
        </div>
      </div>
      <div className="w-full">
        <span>{description}</span>
      </div>
      <div className="w-full flex py-2">
        <Stacks stacks={stacks} />
      </div>
    </div>
  </div>
);

export default Project;
