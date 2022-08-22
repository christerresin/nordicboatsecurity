import styles from '../styles/ProductsList.module.scss';
import ProductBox from './ProductBox';

import { sensorsList } from '../sensorsList';

function SensorsList({ grid, header }) {
  return (
    <>
      <div className={`${styles.container} ${grid}`}>
        <h2>{header}</h2>
        <div className={`${styles.divider} ${styles.red}`}></div>
        <div className={styles.boxes_container}>
          {sensorsList.map((sensor) => (
            <ProductBox key={sensor.header} product={sensor} />
          ))}
        </div>
      </div>
    </>
  );
}

export default SensorsList;
