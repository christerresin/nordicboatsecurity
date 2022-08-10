import Head from 'next/head';

import Bottom from '../components/Bottom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Produkter from '../components/Products';
import References from '../components/References';
import Services from '../components/Services';
import Usp from '../components/Usp';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nordic Boat Security</title>
        <link rel='icon' href='/favicon.webp' />
      </Head>
      <Header />
      <Hero />
      <Usp />
      <Produkter />
      <Services />
      <References />
      <Bottom />
      <main className={styles.main}></main>

      <Footer />
    </div>
  );
}
