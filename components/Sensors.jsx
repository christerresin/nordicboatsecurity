import styles from '../styles/Sensors.module.scss';
import { sensorsList } from '../sensorsList';
import ProductBox from './ProductBox';

function Sensors({ grid }) {
  return (
    <>
      <div className={`${styles.container} ${grid}`}>
        <h2>Sensorer</h2>
        <div className={`${styles.divider} ${styles.red}`}></div>
        <div className={styles.sensors_container}>
          {sensorsList.map((sensor) => (
            <ProductBox key={sensor.header} product={sensor} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Sensors;
