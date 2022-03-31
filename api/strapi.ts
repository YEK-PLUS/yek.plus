import axios from 'axios';

const { NEXT_PUBLIC_STRAPI_ENDPOINT, STRAPI_TOKEN } = process.env;

const strapi = axios.create({
  baseURL: NEXT_PUBLIC_STRAPI_ENDPOINT,
  headers: {
    authorization: `Bearer ${STRAPI_TOKEN}`,
    'content-type': 'application/json',
  },
});
strapi.interceptors.response.use(({ data }) => data);

export default strapi;
