import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang='sv'>
      <Head>
        <link rel='icon' href='/favicon.webp' />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script
          strategy='afterInteractive'
          src={`https://www.googletagmanager.com/gtag/js?id=GTM-P7Q45JF`}
        />
      </body>
    </Html>
  );
}
