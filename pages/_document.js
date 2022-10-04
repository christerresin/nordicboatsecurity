import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='sv'>
      <Head>
        <link rel='icon' href='/favicon.webp' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
