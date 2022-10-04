import '../styles/globals.css';

function MyApp({ Component, pageProps, ...appProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
