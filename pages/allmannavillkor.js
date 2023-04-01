import Head from 'next/head';
import Bottom from '../components/Bottom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Top from '../components/Top';
import HeaderGrid from '../components/HeaderGrid';

import styles from '../styles/Home.module.scss';
import VillkorSection from '../components/VillkorSection';

export default function allmannavillkor() {
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
        <title>Nordic Boat Security - Allmänna villkor</title>
      </Head>
      <Header />
      <Top title='Allmänna villkor' text={''} />
      <HeaderGrid grid='grid1' />

      <VillkorSection grid='grid2' />
      <Bottom grid='grid13' />
      <Footer grid='grid14' />
    </div>
  );
}
