import { getCookie } from 'cookies-next';
import Script from 'next/script';

function GoogleAnalytics() {
  const consent = getCookie('localConsent');
  return (
    <>
      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=GTM-P7Q45JF`}
      />
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
      })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GOOGLE}');`,
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
    </>
  );
}

export default GoogleAnalytics;
