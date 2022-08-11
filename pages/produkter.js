import Head from 'next/head';
import Bottom from '../components/Bottom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Top from '../components/Top';
import styles from '../styles/Home.module.scss';

export default function produkter() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nordic Boat Security</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Top
        title='Produkter'
        text={
          'Nordic Boat Security är exklusiv återförsäljare i Norden för amerikanska Global Ocean Security Technologies, GOST. I över 15 år har GOST varit ledande inom satellitspårning, videövervakning samt övervakningssensorer i marin miljö och därigenom bland annat fått den amerikanska kustbevakningens erkännande!'
        }
      />
      <Bottom grid='grid11' />
      <Footer grid='grid12' />
    </div>
  );
}
