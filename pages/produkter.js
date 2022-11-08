import Head from 'next/head';
import Bottom from '../components/Bottom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeaderGrid from '../components/HeaderGrid';
import ProductsList from '../components/ProductsList';
import SensorsList from '../components/SensorsList';
import Top from '../components/Top';
import styles from '../styles/Home.module.scss';

export default function produkter() {
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
        <title>Nordic Boat Security - Produkter</title>
      </Head>
      <Header />
      <Top
        title='Produkter'
        text={
          'Nordic Boat Security är exklusiv återförsäljare i Norden för amerikanska Global Ocean Security Technologies, GOST. I över 15 år har GOST varit ledande inom satellitspårning, videövervakning samt övervakningssensorer i marin miljö och därigenom bland annat fått den amerikanska kustbevakningens erkännande!'
        }
      />
      <HeaderGrid grid='grid1' />
      <SensorsList header='Sensorer' grid='grid2' />
      <ProductsList header='Video' grid='grid3' />
      <Bottom grid='grid4' />
      <Footer grid='grid5' />
    </div>
  );
}
