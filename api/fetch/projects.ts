import strapi from 'api/strapi';
import qs from 'qs';
import { IStackList } from 'types/Stack';
import { IProjectList } from '../../types/Project';

const query = {
  populate: ['stacks.icon', 'mainStack.icon', 'thumbnail', 'links'],
};

const get = () => strapi.get(
  `/projects?${qs.stringify(query, { encodeValuesOnly: true })}`,
) as Promise<IProjectList>;
const getStacks = () => strapi.get(
  `/stacks?${qs.stringify({
    populate: '*',
  }, { encodeValuesOnly: true })}`,
) as Promise<IStackList>;

const remove = () => strapi.delete('/projects');
const project = {
  get,
  remove,
  stacks: {
    get: getStacks,
  },
};
export default project;
