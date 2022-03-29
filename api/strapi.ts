import axios from 'axios';

const { STRAPI_ENDPOINT, STRAPI_TOKEN } = process.env;

const strapi = axios.create({
  baseURL: STRAPI_ENDPOINT,
  headers: {
    authorization: `Bearer ${STRAPI_TOKEN}`,
    'content-type': 'application/json',
  },
});
strapi.interceptors.response.use(({ data }) => data);

export default strapi;
