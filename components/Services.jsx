import Link from 'next/link';

import ServiceBox from './ServiceBox';
import styles from '../styles/Services.module.scss';

import { servicesList } from '../servicesList.js';

function Services({ grid }) {
  return (
    <section className={`${styles.container} ${styles.reveal} ${grid}`}>
      <div className={styles.header}>
        <h2>Våra tjänster</h2>
        <p>
          Via vårt partnerbolag Westra Security kan vi erbjuda övervakning via
          larmcentral med väktarutryckning! Westra Security kan även påkalla
          blåljusutryckning om olyckan kan ockulärt verifieras annars skickas
          väktare ut för kontroll!
        </p>
      </div>
      <div className={styles.box_container}>
        {servicesList.map((service) => (
          <ServiceBox
            header={service.header}
            image={service.image}
            imgAlt={service.imgAlt}
            content={service.content}
            key={service.header}
            url={service.url}
          />
        ))}
      </div>
      <Link href='/tjanster'>
        <a className={styles.cta}>Om våra tjänster</a>
      </Link>
    </section>
  );
}

export default Services;
