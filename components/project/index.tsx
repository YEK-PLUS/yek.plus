/* eslint-disable @next/next/no-img-element */
import assetGenerator from 'helpers/assetGenerator';
import { IProjectList } from 'types/Project';
import Links from './links';
import Stacks from './stacks';

const Project = ({
  attributes: {
    title, thumbnail, links, description, stacks, mainStack,
  },
}: IProjectList['data'][0]) => (
  <div className="border border-light-red/50 dark:text-white">
    {thumbnail?.data?.attributes.url ? (
      <img
        src={assetGenerator({ url: thumbnail.data.attributes.url })}
        alt={title}
        className="w-full"
      />
    ) : null}
    <div className="w-full px-2">
      <div className="w-full flex items-center">
        {mainStack?.data ? (
          <img
            alt={mainStack.data.attributes.name}
            src={assetGenerator({
              url: mainStack.data.attributes.icon.data.attributes.url,
            })}
            className="h-4"
          />
        ) : null}
        <span className="ml-2 text-xl font-bold">{title}</span>
        <div className="w-min ml-auto">
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
