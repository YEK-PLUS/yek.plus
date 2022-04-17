import strapi from 'api/strapi';
import qs from 'qs';
import { IProject } from '../../types/Project';

const query = {
  populate: ['stacks.icon', 'mainStack.icon', 'thumbnail', 'links'],
};

const get = () => strapi.get(
  `/projects?${qs.stringify(query, { encodeValuesOnly: true })}`,
) as Promise<IProject>;
const remove = () => strapi.delete('/projects');
const project = {
  get,
  remove,
};
export default project;
