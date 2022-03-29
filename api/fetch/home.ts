import strapi from 'api/strapi';
import { HomeProps } from './home.types';

const get = () => strapi.get('/home?populate=*') as Promise<HomeProps>;
const remove = () => strapi.delete('/home');
const home = {
  get,
  remove,
};
export default home;
