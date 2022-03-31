const NEXT_PUBLIC_STRAPI_ENDPOINT = process.env.NEXT_PUBLIC_STRAPI_ENDPOINT!;
const strapi = new URL(NEXT_PUBLIC_STRAPI_ENDPOINT).origin;

const assetGenerator = ({ url }: { url: string }) => strapi + url;
export default assetGenerator;
