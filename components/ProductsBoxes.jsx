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
          <>
            <Link href={product.url}>
              <a>
                <ProductsBox
                  header={product.header}
                  image={product.image}
                  imgAlt={product.imgAlt}
                  content={product.content}
                  key={product.header}
                  logo1={product.logo[0]}
                  logo2={product.logo[1]}
                />
              </a>
            </Link>
          </>
        ))}
      </div>
    </section>
  );
}

export default ProductsBoxes;
