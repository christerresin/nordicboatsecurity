import Link from 'next/link';

import styles from '../styles/ServiceBox.module.scss';

function ServiceBox({ header, image, imgAlt, content, url }) {
  return (
    <div className={styles.box_container}>
      <Link href={url}>
        <a className={styles.container}>
          <img className={styles.img} alt={imgAlt} src={image}></img>
          <h3>{header}</h3>
          <p>{content}</p>
        </a>
      </Link>
    </div>
  );
}

export default ServiceBox;
