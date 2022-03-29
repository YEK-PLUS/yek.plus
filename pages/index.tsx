import Location from '@/containers/home/location';
import Logo from '@/containers/home/logo';
import Bio from '@/containers/home/bio';
import home from 'api/fetch/home';
import { InferGetStaticPropsType } from 'next';

export const getStaticProps = async () => {
  const { data } = await home.get();
  return {
    props: data,
  };
};

const Home = ({
  attributes: {
    Name, NickName, locations, miniLogo, logo, bio, links,
  },
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <div className="grid sm:grid-cols-4 gap-4 sm:gap-10">
    <Location
      className="sm:col-span-4"
      Name={Name}
      NickName={NickName}
      locations={locations}
      miniLogo={miniLogo.data.attributes.url}
    />
    <Logo className="sm:col-span-1" logo={logo.data.attributes.url} links={links} />
    <Bio className="sm:col-span-3" bio={bio} />
  </div>
);

export default Home;
