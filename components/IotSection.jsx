import styles from '../styles/TextSection.module.scss';

function IotSection({ grid, content }) {
  return (
    <section className={`${styles.container} ${grid}`}>
      <div className={styles.content_container}>
        <div className={styles.usp}>
          <h2>IoT-abonnemang</h2>

          <div className={`${styles.divider} ${styles.red}`}></div>
          <p>Köp eget IoT-abonnemang: </p>
          <p>
            <a
              target='_blank'
              href='https://www.telenor.se/handla/mobilabonnemang/internet-of-things/'
              rel='noopener noreferrer'
            >
              https://www.telenor.se/handla/mobilabonnemang/internet-of-things/
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default IotSection;
