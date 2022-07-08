import Head from 'next/head';
import Header from '../components/Header';
import Top from '../components/Top';
import styles from '../styles/Home.module.scss';

export default function services() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nordic Boat Security</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Top />
    </div>
  );
}
