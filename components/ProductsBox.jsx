import Link from 'next/link';

import styles from '../styles/ProductsBox.module.scss';

function ProductsBox({ header, image, imgAlt, content }) {
  return (
    <div className={styles.box_container}>
      <div className={styles.container}>
        <img className={styles.img} alt={imgAlt} src={image}></img>
        <h3>{header}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default ProductsBox;
