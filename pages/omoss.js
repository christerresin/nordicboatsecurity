import Head from 'next/head';
import About from '../components/About';
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
          'Vi erbjuder marknadsledande, modulära säkerhets- och övervakningslösningar som passar just din båt och dina behov. Vill du veta mer redan nu?'
        }
      />
      <About grid='grid7' />
      <Bottom grid='grid9' />
      <Footer grid='grid10' />
    </div>
  );
}
