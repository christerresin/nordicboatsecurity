import Head from 'next/head';

import Bottom from '../components/Bottom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Products from '../components/Products';
import References from '../components/References';
import Services from '../components/Services';
import Usp from '../components/Usp';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nordic Boat Security</title>
      </Head>
      <Header />
      <Hero />
      <Usp grid='grid9' />
      <Products grid='grid11' />
      <Services grid='grid14' />
      <References grid='grid16' />
      <Bottom grid='grid18' />
      <main className={styles.main}></main>

      <Footer grid='grid19' />
    </div>
  );
}
