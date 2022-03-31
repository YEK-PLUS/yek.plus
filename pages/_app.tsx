/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import LogRocketHook from 'hooks/logrocket';

const MyApp = ({ Component, pageProps }: AppProps) => {
  LogRocketHook();
  return (
    <div className="w-full h-screen mx-auto flex justify-center items-center bg-gray-100 dark:bg-fancy-gray">
      <div className="w-full max-w-screen-md bg-white/5 p-4 sm:p-10 mx-4">
        <Component {...pageProps} />
      </div>
    </div>
  );
};

export default MyApp;
