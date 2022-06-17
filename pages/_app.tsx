/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import LogRocketHook from 'hooks/logrocket';
import Script from 'next/script';

const { NEXT_PUBLIC_GUA } = process.env;

const MyApp = ({ Component, pageProps }: AppProps) => {
  LogRocketHook();
  return (
    <div className="w-full min-h-full mx-auto flex justify-center bg-gray-100 dark:bg-fancy-gray p-4 py-4">
      <div className="w-full max-w-screen-md h-min bg-white/5 p-4 sm:p-10">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${NEXT_PUBLIC_GUA}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${NEXT_PUBLIC_GUA}');
        `}
        </Script>
        <Component {...pageProps} />
      </div>
    </div>
  );
};

export default MyApp;
