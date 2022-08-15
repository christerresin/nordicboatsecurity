import styles from '../styles/GostServiceBox.module.scss';

const service = {
  image: 'gps_800.jpg',
  imgAlt: 'gps tracking',
  header: 'Övervakning i realtid',
  left_content:
    'Med webbapplikationen GOST Spectre får du full kontroll över din båt, sensorerna i larmsystemet skickar kontinuerligt information som du när som helst kan ta del av från din dator, smartphone eller surfplatta. Via Spectre kan du bland annat fjärrstyra larmets till- och frånkoppling, sätta upp ett geofence-område som larmar om båten åker ut från eller in i (exempelvis förbudszoner) samt spåra båtens position i realtid.',
  right_content: [
    'Satellitspårning i realtid',
    'Geo-fence varningssystem',
    'Fjärrstyrd till- och frånkoppling',
    'Global täckning',
    'Positionshistorik',
    'Bygg & spåra flera flottor av fartyg',
    'Åtkomst från vilken dator eller mobil enhet som helst',
  ],
};

function GostServiceBox({ grid }) {
  return (
    <section
      id='gost_services'
      className={`${styles.container} ${styles.reveal} ${grid}`}
    >
      <div className={styles.box_container}>
        <img
          className={styles.img}
          alt={service.imgAlt}
          src={service.image}
        ></img>
        <h3>{service.header}</h3>
        <div className={styles.content_container}>
          <div className={styles.left}>{service.left_content}</div>
          <ul className={styles.right}>
            {service.right_content.map((usp, index) => (
              <li key={index}>{usp}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default GostServiceBox;
