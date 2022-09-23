import Head from 'next/head';
import Bottom from '../components/Bottom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Top from '../components/Top';
import CookieInfo from '../components/CookieInfo';

import styles from '../styles/Home.module.scss';
import CookieInfoList from '../components/CookieInfoList';

const cookieInformation = [
  {
    grid: 'grid7',
    header: 'Vad är Cookies?',
    content:
      'Cookies är textfiler som placeras på din dator för att samla in standardinformation internetlogg och information om besökarnas beteende. När du besöker våra webbplatser kan vi samla in information från dig automatiskt via cookies eller liknande teknik.',
  },
  {
    grid: 'grid8',
    header: 'Hur använder vi cookies?',
    content:
      'Nordic Boat Security använder cookies för att förbättra din upplevelse på vår webbplats samt förstå hur du använder vår hemsida.',
  },
];

export default function cookiepolicy() {
  return (
    <div className={styles.container}>
      <Head>
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          name='description'
          content='Med marknadens mest avancerade larmsystem är vårt mål är att trygghetssäkra din vardag, oavsett
      var du är eller vad du gör. Båtlivet skall ge frihet, inte osäkerhet.'
        />
        <title>Nordic Boat Security - Cookiepolicy</title>
      </Head>
      <Header />
      <Top
        title='Cookiepolicy'
        text={
          'Denna cookiepolicy kommer att förklara hur vår organisation använder cookies när du använder vår webbplats.'
        }
      />
      {cookieInformation.map((info, index) => (
        <CookieInfo
          key={index}
          grid={info.grid}
          header={info.header}
          content={info.content}
        />
      ))}
      <CookieInfoList grid='grid9' />
      <Bottom grid='grid11' />
      <Footer grid='grid12' />
    </div>
  );
}
