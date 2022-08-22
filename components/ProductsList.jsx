import styles from '../styles/ProductsList.module.scss';
import ProductBox from './ProductBox';

import { videosList } from '../videosList';

function ProductsList({ grid, header }) {
  return (
    <>
      <div id='video' className={`${styles.container} ${grid}`}>
        <h2>{header}</h2>
        <div className={`${styles.divider} ${styles.red}`}></div>
        <div className={styles.boxes_container}>
          {videosList.map((product) => (
            <ProductBox key={product.header} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductsList;
