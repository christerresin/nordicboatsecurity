import Head from 'next/head';
import Bottom from '../components/Bottom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeaderGrid from '../components/HeaderGrid';
import Map from '../components/Map';
import Top from '../components/Top';
import styles from '../styles/Home.module.scss';

export default function aterforsaljare() {
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
        <title>Nordic Boat Security - Återförsäljare</title>
      </Head>
      <Header />
      <Top
        title='Återförsäljare'
        text={
          'Vi arbetar för en tryggare och säkrare vardag för båtlivet. Här hittar du senaste nytt från oss och våra samarbetspartner.'
        }
      />
      <HeaderGrid grid='grid1' />
      <Map grid='grid2' />

      <Bottom grid='grid4' />
      <Footer grid='grid5' />
    </div>
  );
}
