import styles from '../styles/Usp.module.scss';

function Usp({ grid }) {
  return (
    <section className={`${styles.container} ${grid}`}>
      <div className={styles.content_container}>
        <div className={styles.usp}>
          <h2>ETT KOMPLETT SYSTEM ANPASSAT EFTER JUST DIN BÅT</h2>
          <div className={`${styles.divider} ${styles.red}`}></div>
          <p>
            Nordic Boat Security är exklusiv återförsäljare i Norden för
            amerikanska Global Ocean Security Technologies, GOST. I över 15 år
            har GOST varit ledande inom satellitspårning, videoövervakning samt
            övervakningssensorer i marin miljö och därigenom bland annat fått
            den amerikanska kustbevakningens erkännande!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Usp;
