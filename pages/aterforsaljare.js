import Head from 'next/head';
import Bottom from '../components/Bottom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeaderGrid from '../components/HeaderGrid';
import Map from '../components/Map';
import RetailersList from '../components/RetailersList';
import Top from '../components/Top';
import styles from '../styles/Home.module.scss';
import { markersList } from '../markersList';

export default function aterforsaljare() {
  console.log(markersList);
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
        title='Här finns vi'
        text={'Hitta en av våra återförsäljare nära dig'}
      />
      <HeaderGrid grid='grid1' />
      <Map grid='grid2' />
      <RetailersList grid='grid3' retailersList={markersList} />
      <Bottom grid='grid4' />
      <Footer grid='grid5' />
    </div>
  );
}
