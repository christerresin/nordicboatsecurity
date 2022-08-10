import styles from '../styles/GostServiceBox.module.scss';

const service = {
  image: 'gps_800.jpg',
  imgAlt: 'gps tracking',
  header: 'Övervakning i realtid över din båt',
  left_content:
    'Vet alltid att din båt är säker med vårt prisbelönta satellitspårningssystem. GOST spårar din båt från vilken enhet som helst med absolut precision som ger sinnesfrid genom position och varningar i realtid.',
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
