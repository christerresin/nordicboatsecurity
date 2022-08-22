import Head from 'next/head';
import Bottom from '../components/Bottom';
import ContactBox from '../components/ContactBox';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Top from '../components/Top';
import styles from '../styles/Home.module.scss';

import { contactList } from '../contactList';

export default function kontakt() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nordic Boat Security</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Top
        title='HÖR AV DIG TILL OSS'
        text={
          'Du är alltid välkommen att kontakta oss för rådgivning eller med frågor om våra produkter och tjänster. Vi är redo att göra ditt båtliv tryggare!'
        }
      />
      {contactList.map((contact, index) => (
        <ContactBox key={index} grid={'grid' + (7 + index)} contact={contact} />
      ))}
      <Bottom grid='grid11' />
      <Footer grid='grid12' />
    </div>
  );
}
