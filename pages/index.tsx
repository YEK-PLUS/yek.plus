/* eslint-disable react/jsx-props-no-spreading */
import Location from '@/containers/home/location';
import Logo from '@/containers/home/logo';
import Bio from '@/containers/home/bio';
import home from 'api/fetch/home';
import { InferGetStaticPropsType } from 'next';

export const getStaticProps = async () => ({
  props: await home.get(),
  revalidate: 5 * 60,
});

const Home = (props: InferGetStaticPropsType<typeof getStaticProps>) => (
  <div className="grid sm:grid-cols-4 gap-4 sm:gap-10">
    <Location className="sm:col-span-4" {...props} />
    <Logo className="sm:col-span-1" {...props} />
    <Bio className="sm:col-span-3" {...props} />
  </div>
);

export default Home;
