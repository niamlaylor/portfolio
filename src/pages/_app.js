import Layout from '@/components/Layout';
import Script from 'next/script';
import '@/styles/globals.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

library.add(fas);

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Script
        id={"google-tag1"}
        strategy={"lazyOnload"} 
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script 
        strategy={"lazyOnload"}
        id={"google-tag2"}
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
          page_path: window.location.pathname,
          });
        `}
      </Script>
      <Component {...pageProps} />
    </Layout>
  );
};
