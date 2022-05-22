/* eslint-disable @next/next/no-img-element */
import assetGenerator from 'helpers/assetGenerator';
import { IProject } from 'types/Project';
import Links from './links';
import Stacks from './stacks';

const Project = ({
  attributes: {
    title, thumbnail, links, description, stacks, mainStack,
  },
}: IProject['data']) => (
  <div className="border border-light-red/50 dark:text-white">
    {thumbnail?.data?.attributes.url ? (
      <img
        src={assetGenerator({ url: thumbnail.data.attributes.url })}
        alt={title}
        className="w-full"
      />
    ) : null}
    <div className="w-full p-2 pt-0 flex flex-col space-y-2">
      <div className="w-full">
        {mainStack?.data ? (
          <img
            alt={mainStack.data.attributes.name}
            src={assetGenerator({
              url: mainStack.data.attributes.icon.data.attributes.url,
            })}
            className="h-4 float-left mt-2 mr-2"
          />
        ) : null}
        <div className="float-right mt-2">
          <Links links={links} />
        </div>
        <span className="text-xl font-bold">{title}</span>
      </div>
      <div className="w-full">
        <span>{description}</span>
      </div>
      <div className="w-full flex">
        <Stacks stacks={stacks} />
      </div>
    </div>
  </div>
);

export default Project;
