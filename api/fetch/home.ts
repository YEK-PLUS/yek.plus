import strapi from 'api/strapi';
import qs from 'qs';
import { IHome } from '../../types/Home';

const query = {
  populate: ['Locations.flag', 'MiniLogo', 'Logo', 'Links'],
};

const get = () => strapi.get(
  `/home?${qs.stringify(query, { encodeValuesOnly: true })}`,
) as Promise<IHome>;
const remove = () => strapi.delete('/home');
const home = {
  get,
  remove,
};
export default home;
