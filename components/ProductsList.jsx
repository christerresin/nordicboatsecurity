import styles from '../styles/ProductsList.module.scss';
import ProductBox from './ProductBox';

function ProductsList({ grid, header, productsList, id, icon }) {
  return (
    <>
      <div id={id} className={`${styles.container} ${grid}`}>
        <h2>{header}</h2>
        <div className={`${styles.divider} ${styles.red}`}></div>
        <div className={styles.boxes_container}>
          {productsList.map((product) => (
            <ProductBox key={product.header} product={product} icon={icon} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductsList;
