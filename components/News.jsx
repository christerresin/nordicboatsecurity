import styles from '../styles/News.module.scss';

function News({ grid }) {
  return (
    <section className={`${styles.container} ${grid}`}>
      <div className={styles.usp}>
        <div className={styles.text}>
          <h2>Våra produkter fortsätter vinna priser!</h2>
          <h4 className={styles.bold}>
            Gost® wins fifth NMEA product of excellence award in remote vessel
            monitoring category.
          </h4>
          <p className={styles.italic}>
            The Product of Excellence Awards are voted on by professional marine
            electronics installing NMEA dealers, qualified NMEA technicians and
            fellow marine electronics manufacturers.
          </p>
          <p className={styles.italic}>
            The Apparition is an all-in-one security, tracking and monitoring
            system. It is designed to protect the vessel whether an owner is
            aboard or afar, provide complete situational awareness, and send
            alerts of all events from the boat.
          </p>
        </div>
        <div className={styles.image_container}>
          <img className={styles.image} src='/nmea_logo.jpg'></img>
        </div>
      </div>
    </section>
  );
}

export default News;
