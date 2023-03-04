import Link from 'next/link';

import ProductsBox from './ProductsBox';
import styles from '../styles/ProductsBoxes.module.scss';

import { productsList } from '../productsList.js';

function ProductsBoxes({ grid }) {
  return (
    <section className={`${styles.container} ${styles.reveal} ${grid}`}>
      <div className={styles.header}></div>
      <div className={styles.box_container}>
        {productsList.map((product) => (
          <ProductsBox
            header={product.header}
            image={product.image}
            imgAlt={product.imgAlt}
            content={product.content}
            key={product.header}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductsBoxes;
