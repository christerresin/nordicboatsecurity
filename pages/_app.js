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
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    );
  }
}

export default MyApp;
