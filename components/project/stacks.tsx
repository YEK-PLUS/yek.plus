/* eslint-disable @next/next/no-img-element */
import assetGenerator from 'helpers/assetGenerator';
import Link from 'next/link';
import { IProject } from 'types/Project';

const Stacks = ({
  stacks,
}: {
  stacks: IProject['data'][0]['attributes']['stacks'];
}) => (
  <div className="grid grid-flow-col gap-2">
    {stacks.data.map((stack) => (
      <div key={`stack-${stack.id}`} className="relative">
        <Link passHref href={stack.attributes.link}>
          <a target="_blank" href={stack.attributes.link} rel="noreferrer">
            <img
              alt={stack.attributes.name}
              src={assetGenerator({
                url: stack.attributes.icon.data.attributes.url,
              })}
              className="h-4"
            />
          </a>
        </Link>
      </div>
    ))}
  </div>
);
export default Stacks;
