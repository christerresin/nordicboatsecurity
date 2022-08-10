import styles from '../styles/GostUsp.module.scss';

function GostUsp({ grid }) {
  return (
    <section className={`${styles.container} ${grid}`}>
      <div className={styles.usp}>
        <h2>Global Ocean Security Technologies, GOST</h2>
        <div className={`${styles.divider} ${styles.red}`}></div>
        <p>
          Nordic Boat Security är exklusiv återförsäljare i Norden för
          amerikanska Global Ocean Security Technologies, GOST. I över 15 år har
          GOST varit ledande inom satellitspårning, videövervakning samt
          övervakningssensorer i marin miljö och därigenom bland annat fått den
          amerikanska kustbevakningens erkännande!
        </p>
      </div>
    </section>
  );
}

export default GostUsp;
