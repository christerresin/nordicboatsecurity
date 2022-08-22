import Head from 'next/head';
import Bottom from '../components/Bottom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import NewsUsp from '../components/NewsUsp';
import Top from '../components/Top';
import styles from '../styles/Home.module.scss';

export default function nyheter() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nordic Boat Security</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Top title='Nyheter' text={''} />
      <NewsUsp grid='grid7' />
      <Bottom grid='grid11' />
      <Footer grid='grid12' />
    </div>
  );
}
