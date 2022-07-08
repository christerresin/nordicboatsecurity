import Head from 'next/head';
import Image from 'next/image';
import Bottom from '../components/Bottom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Products from '../components/Products';
import References from '../components/References';
import Services from '../components/Services';
import Top from '../components/Top';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nordic Boat Security</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Hero />
      <Top />
      <Products />
      <Services />
      <References />
      <Bottom />
      <main className={styles.main}></main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
