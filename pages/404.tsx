import type { NextPage } from 'next';

const NotFound: NextPage = () => (
  <div className="flex flex-wrap items-center border border-light-red/50 dark:text-white px-2 sm:gap-10">
    <span>404 Not found</span>
  </div>
);

export default NotFound;
