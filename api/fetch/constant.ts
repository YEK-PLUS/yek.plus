import strapi from 'api/strapi';
import qs from 'qs';
import { IConstant } from '../../types/Constant';

const query = {
  populate: '*',
};

const get = () => strapi.get(
  `/constant?${qs.stringify(query, { encodeValuesOnly: true })}`,
) as Promise<IConstant>;
const remove = () => strapi.delete('/constant');
const constant = {
  get,
  remove,
};
export default constant;
