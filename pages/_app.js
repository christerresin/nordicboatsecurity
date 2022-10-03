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
          id='gtag'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}

          gtag('consent', 'default', {
            'ad_storage': 'denied',
            'analytics_storage': 'denied'
          });
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-P7Q45JF');`,
          }}
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
