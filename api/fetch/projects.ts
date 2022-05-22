import strapi from 'api/strapi';
import qs from 'qs';
import { IContribute } from 'types/Contribute';
import { IDefinitelyTyped } from 'types/DefinitelyTyped';
import { IStack } from 'types/Stack';
import { IProject } from '../../types/Project';

const query = {
  populate: ['stacks.icon', 'mainStack.icon', 'thumbnail', 'links'],
};

const get = () => strapi.get(
  `/projects?${qs.stringify(query, { encodeValuesOnly: true })}`,
) as Promise<IProject<true>>;
const getStacks = () => strapi.get(
  `/stacks?${qs.stringify(
    {
      populate: '*',
    },
    { encodeValuesOnly: true },
  )}`,
) as Promise<IStack<true>>;
const getDefinitelyTyped = () => strapi.get(
  `/definitely-types?${qs.stringify(
    {
      populate: '*',
    },
    { encodeValuesOnly: true },
  )}`,
) as Promise<IDefinitelyTyped<true>>;

const getContributes = () => strapi.get(
  `/contributes?${qs.stringify(
    query,
    { encodeValuesOnly: true },
  )}`,
) as Promise<IContribute<true>>;

const remove = () => strapi.delete('/projects');
const project = {
  get,
  remove,
  stacks: {
    get: getStacks,
  },
  definitelyTyped: {
    get: getDefinitelyTyped,
  },
  contribute: {
    get: getContributes,
  },
};
export default project;
