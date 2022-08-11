import Head from 'next/head';
import Bottom from '../components/Bottom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Top from '../components/Top';
import styles from '../styles/Home.module.scss';

export default function omoss() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nordic Boat Security</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Top
        title='Om oss'
        text={
          'Du är alltid välkommen att kontakta oss för rådgivning eller med frågor om våra produkter och tjänster. Vi är redo att göra ditt båtliv tryggare!'
        }
      />
      <Bottom grid='grid11' />
      <Footer grid='grid12' />
    </div>
  );
}
