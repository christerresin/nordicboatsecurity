import styles from '../styles/GostNews.module.scss';

function GostNews({ grid }) {
  return (
    <section className={`${styles.container} ${grid}`}>
      <div className={styles.usp}>
        <div className={styles.text}>
          <h2>Våra produkter fortsätter att vinna priser!</h2>
          <h4>
            Gost® wins fifth NMEA product of excellence award in remote vessel
            monitoring category.
          </h4>
          <p>
            The Product of Excellence Awards are voted on by professional marine
            electronics installing NMEA dealers, qualified NMEA technicians and
            fellow marine electronics manufacturers.
          </p>
          <p>
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

export default GostNews;
