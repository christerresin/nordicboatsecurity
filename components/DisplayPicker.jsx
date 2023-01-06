import Map from '../components/Map';
import styles from '../styles/DisplayPicker.module.scss';

function DisplayPicker({ grid }) {
  return (
    <section className={`${styles.container} ${grid}`}>
      <div className={styles.options}>
        <h4>Karta - Lista</h4>
      </div>
    </section>
  );
}

export default DisplayPicker;
