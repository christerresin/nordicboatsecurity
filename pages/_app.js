import Script from 'next/script';
import Layout from '../components/layout';
import { getCookie } from 'cookies-next';
import '../styles/globals.css';

function MyApp({ Component, pageProps, ...appProps }) {
  const consent = getCookie('localConsent');
  if (appProps.router.pathname === '/cookiepolicy') {
    return <Component {...pageProps} />;
  } else {
    return (
      <>
        <Script
          strategy='afterInteractive'
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE}`}
        />

        {consent === true && (
          <Script
            id='consupd'
            strategy='afterInteractive'
            dangerouslySetInnerHTML={{
              __html: `
              gtag('consent', 'update', {
                'ad_storage': 'granted',
                'analytics_storage': 'granted'
              });
            `,
            }}
          />
        )}

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    );
  }
}

export default MyApp;
