const strapi = 'http://localhost:1337';
const assetGenerator = ({ url }: { url: string }) => strapi + url;
export default assetGenerator;
